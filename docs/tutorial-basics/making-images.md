---
sidebar_position: 3
---

# Making Images

Creating images in TART is requires three things

* Some [calibrated](/docs/tutorial-extras/calibration) TART data
* Some imaging software

## Using the TART web interface

The easiest way to make images is to use the web interface.

## Using DiSkO

The disko python package is a tools designed to work with all-sky radio telescopes. It was developed along with the TART project. DiSkO stands for Discrete Sky Operator imaging. You should have some data from the TART in measurement set format. DiSkO can be installed like any other Python package.

```
    disko --healpix --fov 155deg --res 1deg --ms test_data/test.ms --field 1 --SVG --alpha=0.01 --lasso --title 'tart_lasso'
```



## Using WSClean

The wsclean package is available for 
