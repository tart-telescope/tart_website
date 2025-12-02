# The TART API

One doesn't need a login to capture data from the telescopes. The authentication is only need for API requests that modify the telescope properties (like uploading calibration gains and phases). The API for the telescope is documented online (https://api.elec.ac.nz/docs/) and shows the restful API calls that can be made.

To get imaging data we will call the [imaging/vis](https://api.elec.ac.nz/docs/#/imaging/get_latest_vis_imaging_vis_get) endpoint.

```
wget -O test.json  https://api.elec.ac.nz/tart/mu-udm/api/v1/imaging/vis
```

This will request the ```imaing/vis``` API endpoint, and the returned data will contain the latest visibilties. These are then saved into a file called test.json

Try this in your browser by [clicking here](https://api.elec.ac.nz/tart/mu-udm/api/v1/imaging/vis)

## API documentation

API documentation is available here: https://api.elec.ac.nz/docs/


## The source catalogue

There is an online API for getting source positions in the GPS sky. It is documented at (https://tart.elec.ac.nz/catalog/docs/). 

Here is a [link to the current objects above signal hill](https://tart.elec.ac.nz/catalog/catalog?lat=-45.85&lon=170.54)

The github repository for the source catalogue is (https://github.com/tart-telscope/catalogue).
