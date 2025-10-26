---
sidebar_position: 4
---

# Making Images using Stimela in the Cloud

This tutorial describes how to use cloud compute to make TART images. This tutorial does not require any specific software on your local computer, instead all the computation will be done in the AWS cloud. This will just require a browser, and almost no network traffic.

The estimated compute costs for running this tutorial are less than 0.25 CNY, (0.61 South African Rand) at current EC2 compute instance rates.

## Pre-requisites

* Create a free AWS account. [This can be done here](aws.amazon.com). There is a getting started guide [here](https://aws.amazon.com/getting-started/?ref=docs_gateway).


# Step 1: Launch an EC2 instance

This step you will launch a free instance, and then copy some files to and from than instance. Use AI to do this from your local machine.

* Lanuch a free-tier instance (t3.micro) on AWS using the TART_Imaging instance type.
* Create a file on your local machine called ```hello_world.yaml``` containing your name.
* Copy ```hello_world.yaml``` to your AWS server. (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/linux-file-transfer-scp.html)
* Copy the file back to a different location on your computer.
* Stop (don't terminate) your instance.


# 

# Download TART images to your laptop

* Use scp to copy the SVG image from the TART to your local laptop.

# Final Step: Terminate your EC2 instance.

Term
