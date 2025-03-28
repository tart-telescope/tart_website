---
sidebar_position: 1
---

# Calibration

Calibrating the TART telescope.

## Antenna position calibration

This step is very important. The physical locations of the antennas with respect to a phase center must be known to within 1cm. This is because the phase of each signal will change by 360 degrees per wavelength (19cm) of path length difference. Therefore a phase accuracy of 1 degree would correspond to a position accuracy of 19/360 = 0.5mm! A more realistic 5mm error will correspond to 10 degrees of phase error.

The process of measuring antenna positions is called the site survey.  The method for doing this is described here.

The process works by measuring the distance between pairs of antennas (pairwise distances), as well as the distance from the center point of the array to each antenna (radial distance).

These distances are recorded in a spreadsheet (a blank spreadsheet is available). Then a least-squared procedure is used to determine the antenna positions (up to a rotation which is resolved by knowing the orientation of one of the antennas)

## Using the tart_cal System

This is the original calibration.

## CASA callibration


