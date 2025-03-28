---
sidebar_position: 5
---
# Imaging from visibilities

The script below will create a simple image from TART visibilities. 

There are five steps. Each is relatively simple on its own. 


## Pre-requisites

This script requires standard python packages: numpy, matplotlib, and requests
```
import numpy as np
import matplotlib.pyplot as plt
import requests
import numpy.fft as fft
```

## Step 1: Download required data

Each TART has a [public api](/docs/basics/tart-api), from which the required data can be downloaded.
First we create a little helper function to get an api response in json form.


```
API_SERVER = 'https://api.elec.ac.nz/tart/mu-udm'


def get_api(api):
    response = requests.get(f"{API_SERVER}/api/v1/{api}")
    return response.json()

print(f"Downloading data from {API_SERVER}")
mode = get_api('mode/current')

if mode['mode'] != 'vis':
    print("ERROR: Telescope must be in visibility mode to allow imaging. Set via the web API")

```

Next we Get visibility data, and calibration data (gains) from the TART telescope web interface
```

gains = get_api('calibration/gain')
visibility_data = get_api('imaging/vis')
ant_pos = get_api('imaging/antenna_positions')
ant_pos = np.array(ant_pos)

print(f"Visibilities time: {visibility_data['timestamp']}")
```

## Step 1: Apply the calibration to the visibilities

```
gains_complex = np.array(gains['gain']) * np.exp(1.0j*np.array(gains['phase_offset']))

wavelength = 0.2

for v in visibility_data['data']:
    v_complex = v['re'] + v['im']*1.0j
    i = v['i']
    j = v['j']
    v_calib = v_complex * gains_complex[i] * np.conj(gains_complex[j])
    v['cal'] = v_calib

    # Work out the baselines
    bl = ant_pos[j] - ant_pos[i]
    v['bl'] = bl / wavelength
```

## Step 2. Grid the visibilities

Grid the visibilities in the UV plane.

    I(l,m) = IFFT(V*exp(2*pi*j(u*l + v*m)))


    Step1.  Choose pixel resolution (radians per pixel) to be full sky
            180 degrees in num_bin.

    Step2.  The uv distances are in meters. This can be changed to wavelenths, and
            then to radians (2.pi*u / wavelength). Maximum u,v values should then be
            corresponding to the highest resolution in the image. I.e. radians_per_pixel

    Example: 180 deg FOV a 128 pixel image. pix_res = pi / 128

    resolution (rad) = 1.2 lambda / bl_max  = pi / num_bin. ==> num_bin / pi = bl_max / 1.2 lambda

    max_uv(in lambdas) = num_bin / 1.2 np.pi

```
num_bin = 256
uv_plane = np.zeros((num_bin, num_bin), dtype=np.complex64)

u_scale = num_bin / (1.2 * np.pi)
middle = num_bin // 2


def uv_index(u):
    pixels = (u / u_scale)*(num_bin/2)
    u_pix = middle + pixels
    return int(u_pix)


for v in visibility_data['data']:
    uu, vv, ww = v['bl']
    u_idx = uv_index(uu)
    v_idx = uv_index(vv)
    uv_plane[u_idx, v_idx] += v['cal']

    u_idx = uv_index(-uu)
    v_idx = uv_index(-vv)
    uv_plane[u_idx, v_idx] += np.conj(v['cal'])


plt.figure(figsize=(4, 3), dpi=num_bin/6)
plt.title("U-V plane image")

plt.imshow(np.abs(uv_plane), extent=[-u_scale, u_scale, -u_scale, u_scale])

plt.xlim(-u_scale, u_scale)
plt.ylim(-u_scale, u_scale)
plt.savefig('uv_plane.jpg')
plt.show()
```

## Step 3. Do the inverse fourier transform

Once the gridding is done, the image can be created with an inverse Fourier Transform.

```

cal_ift = np.fft.fftshift(fft.ifft2(np.fft.ifftshift(uv_plane)))

# Take the absolute value to make an intensity image
img = np.abs(cal_ift)
# Scale it to multiples of the image standard deviation
img /= np.std(img)
```

# Step 4. Plot the image

```
plt.figure(figsize=(4, 3), dpi=num_bin/4)
plt.title("Inverse FFT image")

print("Dynamic Range: {}".format(np.max(img)))

plt.imshow(img, extent=[-1, 1, -1, 1])

plt.xlim(-1, 1)
plt.ylim(-1, 1)
cb = plt.colorbar()
plt.savefig('basic_image.jpg')
plt.show()
```
