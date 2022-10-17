---
sidebar_position: 1
---

# Getting data from TART

One doesn't need a login to capture data from the telescopes.

## Using the API directly

 The authentication is only need for API requests that modify the telescope properties (like uploading calibration gains and phases).THe API for the telescope is documented online (https://tart.elec.ac.nz/signal/doc/) and shows the restful API calls that can be made.
To get imaging data try the (https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis)
```
    wget -O test.json  https://tart.elec.ac.nz/signal/api/v1/imaging/vis
```
This will download the latest visibilties into a file called test.json

## Using the tart_tools package

You can install the tart_tools python package which will give you some command line tools to work with the TART telescope.

```pip3 install tart_tools```

## Creating a measurement set

You can install the tart2ms python package which will give you some command line tools to work with the measurement sets 

```pip3 install tart2ms```

tart2ms --ms obs.ms --api https://tart.elec.ac.nz/signal


