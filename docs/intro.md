---
sidebar_position: 1
---

import Carousel from '@site/src/components/Carousel';


# TART Intro

Let's discover **TART in less than 5 minutes**.

The Transient Array Radio Telescope (TART) is an aperture synthesis radio telescope, it uses 24 radio receivers to create images of the radio sky at 1.575 GHz. The antennas look at the whole sky at once. Data from these receivers are correlated by the TART basestation, and visibilities are generated in real time.  The TART operates in exactly the same way that large radio telescopes like the MeerKAT, SKA and VLA work, and provides an excellent platform for understanding, and develop new algorithms for radio astronomy. 

## The telescope web interface

Each TART telescope has a web interface. These are web applications that get data from the  [TART web API](./basics/tart-api) and create images and allow you to control the telescope. Here is the web interface for the [Dunedin New Zealand TART](https://tart.elec.ac.nz/signal/home).

## The components of a TART telescope

A TART consists of 24 radio receivers (mounted on radio modules), each with an antenna arranged in an array. These radio hubs are connected to the baststation. Further information on the [TART hardware](./basics/hardware) page.

All of the data from the telescope is processed on the basestation and made available via the [TART web API](./basics/tart-api).

## Using the tart tools

There are some command line tools available as part of the [tart_tools python package](https://github.com/tart-telescope/tart_modules). These command line tools let you do things like downloading data, creating images e.t.c.


## Creating Images

You can use command-line tools and more to create images from the TART telescope. These are described  [Making Images](./basics/making-images).


## Contacting the TART team

The primary contact for the TART team is Tim Molteno. His email is tim_at_elec_dot_ac_dot_nz.
