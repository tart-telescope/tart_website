---
sidebar_position: 3
---

# Making Images

Creating images in TART is requires three things

* Some [calibrated](/docs/advanced/calibration) TART data
* Some imaging software

## Using the TART web interface

The easiest way to make images is to use the web interface. A public web interface is available [here](https://tart.elec.ac.nz/signal/home).

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
