---
sidebar_position: 1
---

# Terminology 

Here is some TART terminology which we'll try and use consitently in the TART documentation.

* **single-integration** - a single set of visibility measurements consisting of one visibility per baseline.
* **shapshot** - a single set of visibility measurements made at over a short time interval. For the TART this might be a single-integration, or it could be a collection of single-integrations.
* **field** - In a measurement this seems to be a point in the sky which is the phase center of an shapshot? Is field just the name for the phase -center of a shapshot?
* **observation** - a group of snapshots with a common phase center (see rephasing). 
* **rephasing** - the process of creating a new phase center for a snapshot. This essentially steers the TART telescope so that the centre of the image is at a known location. See [tart2ms] for details on rephasing
* **epoch** - This word should be avoided. It usually means a time-span, but has many many uses, and is often fairly ambiguous.

## References

* [Measurement set definitions](https://casa.nrao.edu/Memos/229.html)
