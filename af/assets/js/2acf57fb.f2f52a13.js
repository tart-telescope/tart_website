"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[1951],{8453:(n,a,e)=>{e.d(a,{R:()=>o,x:()=>s});var t=e(6540);const i={},r=t.createContext(i);function o(n){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function s(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(r.Provider,{value:a},n.children)}},9722:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"advanced/image-from-raw","title":"Imaging from raw data","description":"This script below shows how to image from raw data.","source":"@site/docs/advanced/image-from-raw.md","sourceDirName":"advanced","slug":"/advanced/image-from-raw","permalink":"/doc/af/docs/advanced/image-from-raw","draft":false,"unlisted":false,"editUrl":"https://github.com/tart-telescope/tart_website/docs/advanced/image-from-raw.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"DiSkO Imaging Tools","permalink":"/doc/af/docs/advanced/disko"},"next":{"title":"TART - Installation","permalink":"/doc/af/docs/category/tart---installation"}}');var i=e(4848),r=e(8453);const o={sidebar_position:5},s="Imaging from raw data",p={},l=[];function m(n){const a={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"imaging-from-raw-data",children:"Imaging from raw data"})}),"\n",(0,i.jsx)(a.p,{children:"This script below shows how to image from raw data."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"#\n# Tim Molteno (2018-2025)\n# tim@elec.ac.nz\n#\n# About:\n#    Simple script demonstrate how to image from raw data\n#\n# Requires:\n#   - tart python package to be installed (sudo pip3 install tart)\n#   - raw data HDF file downloaded from the telescope web front end\n#\n#\n# Usage:\n#   python3 image_from_raw.py --file  ~/Downloads/data_2019-07-24_22_47_14.353231.hdf --api https://api.elec.ac.nz/tart/mu-udm\n\nimport argparse\n\nimport numpy as np\nimport numpy.fft as fft\n\nimport matplotlib.pyplot as plt\n\nfrom tart.operation import observation\nfrom tart.imaging import correlator\nfrom tart.util import constants\n\nfrom tart_tools import api_handler\n\n'''\n    Create an image from raw (hdf5) data downloaded from the TART telescope\n    \n    Step 1: Download raw data (\n        tart_set_mode --raw --pw <password>\n        tart_download_data --raw --n 1 --pw <password>\n        tart_set_mode --vis --pw <password>\n        \n    Step 2: Run this file\n        python3 image_from_raw.py --file ./data_2022-06-21_01_57_06.161084.hdf\n\n'''\nif __name__ == '__main__':\n    PARSER = argparse.ArgumentParser(description='Create an image from raw (hdf5) data downloaded from the TART telescope.')\n    PARSER.add_argument('--file', required=True, help=\"The raw data data file \")\n    PARSER.add_argument('--api', required=True, help=\"The api endpoint (e.g. https://api.elec.ac.nz/tart/mu-udm) \")\n\n    ARGS = PARSER.parse_args()\n    \n    #############################################################################################################\n    #\n    #                                    Step 0. Use the API to get information \n    #\n    #############################################################################################################\n    API_SERVER = ARGS.api\n    api = api_handler.APIhandler(API_SERVER)\n    \n    ant_pos = np.array(api.get('imaging/antenna_positions'))\n    \n    calibration_gains = api.get('calibration/gain')\n    gains = np.array(calibration_gains['gain'])\n    phases = np.array(calibration_gains['phase_offset'])\n\n\n    \n    #############################################################################################################\n    #\n    #                                    Step 1. Correlate the data \n    #\n    #############################################################################################################\n    # Load the Observation file\n    obs = observation.Observation_Load(ARGS.file)\n\n    corr = correlator.Correlator()\n    vis = corr.correlate(obs)\n    print(\"Timestamp: {}\".format(vis.timestamp))\n    print(\"Config: {}\".format(vis.config.Dict))\n    print(\"Baselines: {}\".format(vis.baselines))\n    print(\"visibilities: {}\".format(vis.v))\n    \n    baselines = np.asarray(vis.baselines)\n    v_arr = np.asarray(vis.v)\n\n\n    #############################################################################################################\n    #\n    #                                    Step 2. Apply the calibration gains and phases \n    #\n    #############################################################################################################\n    ## Multiply the visiblities by the complex gains\n    bl = baselines\n    vis_l = v_arr * gains[bl[:,0]] * gains[bl[:,1]] * np.exp(-1j*(phases[bl[:,0]]-phases[bl[:,1]]))\n\n\n    #############################################################################################################\n    #\n    #                                    Step 3. Perform the inverse FFT imaging.\n    #\n    #############################################################################################################\n    num_bin = 2**9  # Image resolution\n    nw=num_bin/4\n\n    bl_pos = ant_pos[baselines]\n    uu_a, vv_a, ww_a = (bl_pos[:,0] - bl_pos[:,1]).T/constants.L1_WAVELENGTH\n\n    # Grid the visibilities in the UV plane.\n    uu_edges = np.linspace(-nw, nw, num_bin+1)\n    vv_edges = np.linspace(-nw, nw, num_bin+1)\n\n    uv_plane = np.zeros((num_bin, num_bin), dtype=np.complex64)\n    uu_comb = np.concatenate((uu_a, -uu_a))\n    vv_comb = np.concatenate((vv_a, -vv_a))\n    all_v     = np.concatenate((vis_l, np.conjugate(vis_l)))\n    h_real,_,_ = np.histogram2d(vv_comb, uu_comb, weights = all_v.real, bins=[vv_edges, uu_edges])\n    h_imag,_,_ = np.histogram2d(vv_comb, uu_comb, weights = all_v.imag, bins=[vv_edges, uu_edges])\n    num_entries,_,_ = np.histogram2d(vv_comb, uu_comb, bins=[vv_edges, uu_edges])\n    uv_plane[:,:] = (h_real+(1j*h_imag))\n    pos = np.where(num_entries.__gt__(1))\n    uv_plane[pos] /= num_entries[pos]\n\n\n    cal_ift = np.fft.fftshift(fft.ifft2(np.fft.ifftshift(uv_plane)))\n\n    # Take the absolute value to make an intensity image\n    img = np.abs(cal_ift)\n    # Scale it to multiples of the image standard deviation\n    img /= np.std(img)\n\n\n    #############################################################################################################\n    #\n    #                                    Step 4. Plot the image.\n    #\n    #############################################################################################################\n    plt.figure(figsize=(8, 6), dpi=num_bin/6)\n    plt.title(\"Inverse FFT image\")\n\n    print(\"Dynamic Range: {}\".format(np.max(img)))\n\n    plt.imshow(img, extent=[-1, 1, -1, 1])\n\n    plt.xlim(-1, 1)\n    plt.ylim(-1, 1)\n    cb = plt.colorbar()\n    plt.savefig('raw_image.jpg')\n    plt.show()\n"})})]})}function d(n={}){const{wrapper:a}={...(0,r.R)(),...n.components};return a?(0,i.jsx)(a,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}}}]);