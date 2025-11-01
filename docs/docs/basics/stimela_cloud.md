---
sidebar_position: 4
---

# Making Images using Stimela in the Cloud

This tutorial describes how to use cloud compute to make TART images. This tutorial does not require any specific software on your local computer, instead all the computation will be done in the AWS cloud. This will just require a browser, almost no network traffic and is relatively low cost. The estimated compute costs for running this tutorial are less than 0.25 CNY, (0.61 South African Rand) at current EC2 compute instance rates.

This is structured as a tutorial. I estimate that this will take a person with minimum background XXX hours.

## Pre-requisites

* Create a free AWS account. [This can be done here](aws.amazon.com). There is a getting started guide [here](https://aws.amazon.com/getting-started/?ref=docs_gateway).

# Step 1: Launch an EC2 instance

This step you will launch a free instance, and then copy some files to and from than instance. Use AI to do this from your local machine.

* Lanuch a free-tier instance (t3.micro) on AWS using the TART_Imaging instance type.
* Create a file on your local machine called ```hello_world.yaml``` containing your name.
* Copy ```hello_world.yaml``` to your AWS server. (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/linux-file-transfer-scp.html)
* Copy the file back to a different location on your computer.
* Stop (don't terminate) your instance.


# The stimela recipe

below is the basic stimela recipe that we will be following:

```
#!/usr/bin/env -S stimela run -l
# This basic TART Stimela 2.0 processing pipeline
opts:
    log:
        dir: logs/log-{config.run.datetime}
        name: log-{info.fqname}
        nest: 2
        symlink: log

_include:
    - (tartcargo):
        - tart2ms.yml
        - tart-download-data.yml
        - spotless.yml
        - disko-draw.yml

tart-image:
    info: TART imaging using stimela

    inputs:
        tart:
            dtype: str
            required: true
            info: "TART name (e.g. mu-udm)"

    outputs:
        ms:
            dtype: MS
            default:  '{current.tart}.ms'
        hdf:
            dtype: File
            default: '{current.tart}-vis.hdf'
        svg:
            dtype: File
            default: '{current.tart}.svg'

    assign:
        api: 'https://api.elec.ac.nz/tart/{recipe.tart}'

    steps:
        download-hdf:
            cab: tart-download-data
            skip: =EXISTS(recipe.hdf)
            params:
                api: =recipe.api
                vis: true
                file: =recipe.hdf

        create-ms:
            cab: tart2ms
            skip: =EXISTS(recipe.ms)
            params:
                hdf: =steps.download-hdf.file
                ms: =recipe.ms
                clobber: true
                single-field: true
                rephase: obs-midpoint

        spotless-image:
            cab: spotless
            params:
                ms: =recipe.ms
                HDF: ='{recipe.tart}-spotless.sphere'
                nvis: 10000
                multimodel: true
                healpix: true
                fov: 170deg
                res: 0.5deg

        spotless-draw:
            cab: disko-draw
            params:
                hdf: ='{recipe.tart}-spotless.sphere'
                show-sources: true
                scale-mad: true
                SVG: ='spotless-{recipe.svg}'

```


# Download TART images to your laptop

* Use scp to copy the SVG image from the TART to your local laptop.

# Final Step: Terminate your EC2 instance.

Term
