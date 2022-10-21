---
sidebar_position: 1
---

# TART Intro

Let's discover **TART in less than 5 minutes**. The TART is an aperture synthesis radio telescope, it uses 24 radio receivers to create images of the radio sky at 1.575 GHz.

## Getting Started with the TART API

Get started by **creating a new site**.

One doesn't need a login to capture data from the telescopes. The authentication is only need for API requests that modify the telescope properties (like uploading calibration gains and phases).THe API for the telescope is documented online (https://tart.elec.ac.nz/signal/doc/) and shows the restful API calls that can be made.
To get imaging data try the (https://tart.elec.ac.nz/signal/doc/#api-Imaging-get_latest_vis)
    wget -O test.json  https://tart.elec.ac.nz/signal/api/v1/imaging/vis
This will download the latest visibilties into a file called test.json

