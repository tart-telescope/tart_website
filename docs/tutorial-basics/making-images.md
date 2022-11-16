---
sidebar_position: 3
---

# Making Images

Creating images in TART is requires three things

* Some [calibrated](/docs/tutorial-extras/calibration) TART data
* Some imaging software

## Using the TART web interface

The easiest way to make images is to use the web interface.

## Using WSClean

The wsclean package is a standard tool for creating images from measurement sets. If you have a measurement set (created by **tart2ms**), then the following command should make a FITS formatted image.

```
export OPENBLAS_NUM_THREADS=1; wsclean -weight briggs 0 -name test -pol RR -size 1000 1000 -scale 0.175 -niter 1000 -gain 0.1 -mgain 0.05 -padding 1.5 -auto-mask 7 test.ms
```
