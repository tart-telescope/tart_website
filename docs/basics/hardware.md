# Components of a TART telescope

The TART-3 telescope (the next version) will have a new hardware architecture.

## Electronics

Developed in the https://github.com/tart-telescope/radio_module repository. The hardware consists of a single motherboard, with radio modules mounted on replacable cards.

### Radio Module

![TART-3 Radio Module](./tart3_radio_module.jpg)

These radio modules each contain four receivers, and are connected to active antennas using a SMA connector. 

### Motherboard

The motherboard has 6 slots for radio modules. and houses:
* The FPGA correlator
* The linux computer that provides a web API, connected to the internet, and runs the TART software.

Currently this is in development. Below is a photograph of the in development motherboard (May 2023 v3.0.0a1) with two radio boards. 

![TART-3 Motherboard](./motherboard3a1.jpg)

## Antenna Array

This array is designed to be low cost. There is considerable freedom for TART sites to experiment with different array layouts.

Here is a rendering of a potential 5 arm layout, optimized to provide effective imaging. The individual antennas are the small black cylinders. Each arm is 2.1m long. The UV coverage of the proposed array is shown as well. 
![TART-3 five arm rendering](./optimized_array.png)
![TART-3 five arm](./uv_coverage.png)

## Changes from TART-2

TART-2 consisted of 4 radio hubs with 6 recievers on each hub. These connected via Cat-6 UTP cable to a central basestation. TART-3 features

* Improved I/Q sampling - reducing a random phase offset on restart.
* Up to 2-bit I and Q samples can be digitized
* New Correlator FPGA - lower cost and higher performance.
* Easier Antenna Layout
* All radios are in a central location, lower costs.


## Costings

Costings are difficult to estimate as this is a new version of hardware and development is not complete. At the moment the hardware is being made available through the [workshop](/docs/install/workshop). The antenna array assembly is usually fabricated on-site from available materials. 

Some extimates are below not including and freight charges:
* Electronics and antennas: Electronics can be made available to groups working on hardware and correlators on request from the New Zealand hardware team (see below for a potential other avenue). 
* Case and Housing: Done on site: Allow ~EUR 100 (not including labour)
* Antenna array. Done on site, and costs will vary wideley as most of the costs are labour.  Can range for ~EUR 100 (using scrap and volunteer labour) to much more (see below).

### Getting TART hardware

TART hardware will soon be available for purches from the RATT group at Rhodes University (Contact Zizipo for further information.)
* Electronics including will be ~EUR 2000 preassembled and tested.
* A preassembled adjustable CNC machined antenna array mounting kit will be a similar price.
