---
sidebar_position: 1
---

# Calibration

Calibrating the TART telescope involves two steps. The first is to calibrate the antenna positions which happens only once (or if the antennas are moved). The second is to perform regularly and is the gain and phase calibration.

## Antenna position calibration

The process of measuring antenna positions is called the site survey.  This step is very important. The physical locations of the antennas with respect to a phase center must be known to within 1cm. This is because the phase of each signal will change by 360 degrees per wavelength (19cm) of path length difference. Therefore a phase accuracy of 1 degree would correspond to a position accuracy of 19/360 = 0.5mm! A more realistic 5mm error will correspond to 10 degrees of phase error.

### Global rotation calibration

This step involves sighting from the TART to a recognisable distant landmark that aligns with one of the antennas. The geographic angle of this antenna can be calculated from the geographic positions of both the TART and the landmark. This known angle of one of the antennas will be used to determine the orientation of the array.

### Relative position calibration

The positions of the antennas relative to the centre of the array can be calculated by measuring the distances between pairs of antennas

The method for doing this is:
 * measure the distance between pairs of antennas (pairwise distances), 
 * measure the distance from the center point of the array to each antenna (radial distance).
 * record the antennas in a spreadsheet -- a blank spreadsheet is available [here](https://github.com/tart-telescope/position_cal)
 * Use a least-squared procedure to work out the antenna positions (up to a rotation which is resolved by knowing the orientation of one of the antennas). A jupyter notebook is
   available to carry out this.

## Using the tart_cal System

This is the original TART gain and phase calibration. These calibrations are run every two hours on each known TART on a cluster based at the University of Otago. The resulting gains are uploaded to the TARTs to keep the telescope calibrated. This calibration is described in detail in the following reference [doi: 10.1109/ICEAA.2019.8879242](https://ieeexplore.ieee.org/document/8879242).

## CASA callibration

Ben hugo has written CASA-based calibration software. This can be used to calibrate an image based on the sky-model at the time and the visibilities alone.


