---
sidebar_position: 5
---
# Imaging from visibilities

The script below will create a simple image from TART visibilities.  To my knowledge, this is the 
simplest way to make images from a radio telescope. No specialized packages are required.

There are five steps. Each is relatively simple on its own. 


## Pre-requisites

This script requires standard python packages: numpy, matplotlib, and requests
```python
import numpy as np
import matplotlib.pyplot as plt
import requests
import numpy.fft as fft
```

## Step 1: Download required data

Each TART has a [public api](/docs/basics/tart-api), from which the required data can be downloaded.
First we create a little helper function to get an api response in JSON form. We also check that the telescope
is in the correct mode for collecting visibility data...

JSON data is just text. So you can have a look at the data in your browser for each API call. The little helper function below
will print out the URL so you can have a look at the data yourself.

* [Visibilities](https://api.elec.ac.nz/tart/mu-udm/api/v1/imaging/vis)
* [Antenna Positions](https://api.elec.ac.nz/tart/mu-udm/api/v1/imaging/antenna_positions)
* [Calibration Gains](https://api.elec.ac.nz/tart/mu-udm/api/v1/calibration/gain)

```python
API_SERVER = 'https://api.elec.ac.nz/tart/mu-udm'


def get_api(api):
    url = f"{API_SERVER}/api/v1/{api}"
    print(f"Try it yourself: {url}")
    response = requests.get(url)
    return response.json()

print(f"Downloading data from {API_SERVER}")
mode = get_api('mode/current')

if mode['mode'] != 'vis':
    print("ERROR: Telescope must be in visibility mode to allow imaging. Set via the web API")

```

Next we get the visibility data, calibration data (gains), and antenna positions from the TART telescope web interface
```python
gains = get_api('calibration/gain')
visibility_data = get_api('imaging/vis')
ant_pos = get_api('imaging/antenna_positions')
ant_pos = np.array(ant_pos)

print(f"Visibilities time: {visibility_data['timestamp']}")
```

## Step 2: Apply the calibration to the visibilities

Now we apply the [calibration](/docs/advanced/calibration) to the measured visibilities. This means multiplying each visibility by the 
complex gain (consisting of the magnitude gain and the phase offset). 

We also work out the baseline, and scale the baselines to be in units of the wavelength. 
```python
gains_complex = np.array(gains['gain']) * np.exp(1.0j*np.array(gains['phase_offset']))

wavelength = 2.99793e8 / 1.57542e9   # wavelength is speed of light / frequency

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

## Step 3. Grid the visibilities

We will find the image using the inverse Fourier Transform of the visibilities. Do do this we have to grid the visibilities in the u-v plane.
This means filling the u-v plane with the measured visibilites for each baseline.

$$
    I(l,m) = IFFT(V(u,v))))
$$


The resolution, $R$ in radians, from a baseline of length $b$, is given by the Rayleigh criterion:
$$
R = \frac{1.2 \lambda}{b},
$$
where $\lambda$ is the wavelength. As the image is going to be full-sky, know that the pixel resolution should be equal to $\frac{\pi}{N_{FFT}}$. This means that we get the expression
$$
\frac{1.2 \lambda}{uv_{max}} = \frac{\pi}{N_{FFT}}
$$
where $uv_{max}$ is the maximum u-v coordinate. Rearranging
$$
\frac{uv_{max}}{\lambda} = \frac{N_{FFT}}{1.2 \pi} 
$$
so we now know that the u-v plane should have a maximum u-v value (measured in wavelengths) of $\sim \frac{N_{FFT}}{4}$, and the center of the U-V plane whould 
be at 0,0. This means we can now scale the baselines to fit onto the plane.
```python
N_FFT = 256
uv_plane = np.zeros((N_FFT, N_FFT), dtype=np.complex64)

uv_max = N_FFT / (1.2 * np.pi)
middle = N_FFT // 2


def uv_index(u):
    ''' A little function to produce the index into the u-v array
        for a given value (u, measured in wavelengths)
    '''
    pixels = (u / uv_max)*(N_FFT/2)
    u_pix = middle + pixels
    return int(u_pix)


for v in visibility_data['data']:
    uu, vv, ww = v['bl']
    u_idx = uv_index(uu)
    v_idx = uv_index(vv)
    uv_plane[u_idx, v_idx] += v['cal']

    # Place the conjugate visibility at -uu, -vv
    u_idx = uv_index(-uu)
    v_idx = uv_index(-vv)
    uv_plane[u_idx, v_idx] += np.conj(v['cal'])


plt.figure(figsize=(4, 3), dpi=N_FFT/6)
plt.title("U-V plane image")

plt.imshow(np.abs(uv_plane), extent=[-uv_max, uv_max, -uv_max, uv_max])

plt.xlim(-uv_max, uv_max)
plt.ylim(-uv_max, uv_max)
plt.savefig('uv_plane.jpg')
plt.show()
```

## Step 4. Do the inverse fourier transform

Once the gridding is done, the image can be created with an inverse Fourier Transform.
```python
cal_ift = np.fft.fftshift(fft.ifft2(np.fft.ifftshift(uv_plane)))

# Take the absolute value to make an intensity image
img = np.abs(cal_ift)
# Scale it to multiples of the image standard deviation
img /= np.std(img)
```

# Step 5. Plot the image

```python
plt.figure(figsize=(4, 3), dpi=N_FFT/4)
plt.title("Inverse FFT image")

print("Dynamic Range: {}".format(np.max(img)))

plt.imshow(img, extent=[-1, 1, -1, 1])

plt.xlim(-1, 1)
plt.ylim(-1, 1)
cb = plt.colorbar()
plt.savefig('basic_image.jpg')
plt.show()
```
