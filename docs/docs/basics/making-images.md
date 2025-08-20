---
sidebar_position: 3
---

# Making Images

Creating images in TART is requires three things

* Some [calibrated](/docs/advanced/calibration) TART data
* Some imaging software

## Using the TART web interface

The easiest way to make images is to use the web interface. A public web interface is for each is available from the live map [here](https://map.elec.ac.nz).

## Using command line tools (recommended)

This requires the tart_tools, tart2ms and disko python packages ```pip install tart_tools tart2ms disko```,

Step 1: Download data to an HDF file
```
tart_download_data --n 1 --api https://api.elec.ac.nz/tart/mu-udm --vis --file tart_udm.hdf
```

Step 2: Turn the downloaded data into a measurement set using tart2ms
```
tart2ms --hdf tart_udm.hdf --ms tart_udm.ms --rephase "obs-midpoint" --single-field
```
Step 3: Create a disko image

```
disko --ms tart_udm.ms --healpix --fov 170deg --res 30arcmin --HDF tart_udm.h5 --lasso --alpha 0.003
disko_draw --SVG tart_udm.svg --show-sources --elevation 30 tart_udm.h5
```

The last step overlays the known sources only above elevation of 30 degrees, and generates an SVG file. You can convert this file to a JPEG photo using [inkscape](https://inkscape.org)

## Using [DiSkO](/docs/advanced/disko)

The [disko](/docs/advanced/disko) python package is a tools designed to work with all-sky radio telescopes. It was developed along with the TART project. DiSkO stands for Discrete Sky Operator imaging. You should have some data from the TART in measurement set format. DiSkO can be installed like any other Python package.

```
    disko --healpix --fov 155deg --res 1deg --ms test_data/test.ms --field 1 --SVG --alpha=0.01 --lasso --title 'tart_lasso'
```


## Using WSClean

The wsclean package is a standard tool for creating images from measurement sets. If you have a measurement set (created by **tart2ms**), then the following command should make a FITS formatted image.

```
export OPENBLAS_NUM_THREADS=1; wsclean -weight briggs 0 -name test -pol RR -size 1000 1000 -scale 0.175 -niter 1000 -gain 0.1 -mgain 0.05 -padding 1.5 -auto-mask 7 test.ms
```

## Making a movie

Here is a little script that will run on linux, and make a movie from the TART data. First let us download some data

```for i in {1..30}
do
  tart_download_data --n 1 --vis
  tart_calibration_data --n 1 --file obs_$i.json
  sleep 120
done
```
