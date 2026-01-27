---
sidebar_position: 2
---

# Getting data from TART

Each telescope can be queried for data using the telescope [API](/docs/basics/tart-api) ([API](/docs/basics/tart-api))

:::tip Authentication

One doesn't need a login to capture data from a TART telescope. All data is public.

:::

## Using the API directly

 The authentication is only need for [API](/docs/basics/tart-api) requests that modify the telescope properties (like uploading calibration gains and phases).The [API](/docs/basics/tart-api) for the telescope is documented online (https://api.elec.ac.nz/docs/) and shows the restful API calls that can be made.
```
    wget -O test.json  https://api.elec.ac.nz/tart/mu-udm/api/v1/imaging/vis
```
This will download the latest visibilties into a file called test.json

## Using the tart_tools package

You can install the [tart_tools](/docs/install/tart-tools) python package which will give you some command line tools to work with the TART telescope.

```pip3 install tart_tools```

## Creating a measurement set

You can install the tart2ms python package which will give you some command line tools to work with the measurement sets 

```pip3 install tart2ms```

Download a single snapshot

```tart2ms --ms obs.ms --api https://api.elec.ac.nz/tart/signal```

Download 1 minute worth of visibilities, and combine them into a single observation

```tart2ms --ms signal1.ms --vis vis_2023-11-13_07_28_34.576476.hdf --rephase obs-midpoint --single-field```

You can create an image using the [disko](/docs/advanced/disko) package

```disko --ms signal1.ms --SVG --fov 170deg --res 1deg --lasso --alpha 0.05 --healpix```

## From S3 bucket

Visibility and Raw data can also be downloaded from the S3 Cache (most recent 30days only).


### Install requirements
```pip3 install minio tqdm```

### Fetch via MinIO

Here is some python code to fetch directly. It is easier to use the tart_download_archive_data command from the  [tart_tools](/docs/install/tart-tools) python package

```python
import os
from tqdm import tqdm
from minio import Minio

MINIO_API_HOST = "s3.max.ac.nz"
BUCKET_NAME = "tart-hdf"

# prefix = 'rhodes/raw/2022/'
# prefix = 'rhodes/vis/2022/'
# prefix = 'signal/raw/2022/'
prefix = 'signal/vis/2022/'

output = 'downloads/'

limit_last_10 = -10     # Only fetch the last 10 entries files


if __name__ == "__main__":
    if not os.path.exists(output):
        os.mkdir(output)

    client = Minio(MINIO_API_HOST, secure=True)
    objects = client.list_objects(BUCKET_NAME, prefix=prefix, recursive=True)


    for item in tqdm(list(objects)[limit_last_10:]):
        fname_out = f'{output}{item.object_name}'
        client.fget_object(BUCKET_NAME, item.object_name, fname_out)
        print(fname_out)
```

Follow up by creating a measurement set from selected or all hdf files

```
tart2ms  --hdf downloads/*/vis/*/*/*/*.hdf --telescope_name 'kat-7'
```
