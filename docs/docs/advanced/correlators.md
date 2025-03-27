---
sidebar_position: 2
---

# Correlators


The TART telescope motherboard contains a correlator. This is a piece of hardware that generates visibilities from the telescope date. This is done using an FPGA, which is programmed using the Verilog programming language.

Each radio has four digital outputs which are fed into the correlator. These outputs are I0, I1, Q0, Q1 and how these outputs should be interpreted depends on the configuration of the radios. There are two possibilties.

* These are simply the MSB and LSB of I and Q respectively.
* These are serialized data. I1 is the serial data, I2 is the serial clock, I3 is the frame sync pulse, and I4 is a global sync pulse which is sent out every 128 bits.


## Integration Time


## Resolution

## Github

The correlator code is [here](https://github.com/tart-telescope/signal_pipeline)
