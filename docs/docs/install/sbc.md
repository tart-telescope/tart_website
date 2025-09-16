---
sidebar_position: 3
---

# Single-board Computer

This is a Raspberry pi 3/4 Model B. The basic installation steps are:
* Install base 64-bit Raspberry pi OS (no user interface needed). Instructions are [here](https://www.raspberrypi.com/software/operating-systems/).
* Create a user called tart
<code>sudo adduser tart</code>
* Enable the SPI interface (this is done using raspi_config on an rPi, and <code>modprobe spi_rockchip</code> on the Quartz64.

## Set the hostname

Do this carefully. This will be used to connect the TART telescopes together. We typically use the following convention. 
```<cc>-<institution>```
Where ```<cc>``` is the two digit country code, and ```<institution>``` is an abbreviation of the host institution. For example ```bd-iub``` would be the Independent University of Bangladesh.

The hostname is set using the ```raspi-config``` utility. If wireless networking is going to be used, then this is the time to set this up.

## Install SPI support.

Also using the raspi-config utility.

## Install some packages
The following packages are needed to continue with the install. Mostly this is docker.

### Docker

The TART operating software is based around docker.

```
    sudo apt install curl docker.io docker-compose git
    sudo usermod -a -G tart docker
```

### TailScale

The TART single board computers are connected to a global network. This connection is managed using the tailscale VPN. It is installed on the SBC using:


```
    curl -fsSL https://tailscale.com/install.sh | sh
    sudo tailscale up
```

Then contact the TART team for connection to the TART network.


## Install the TART operating software.

The code [here](https://github.com/tart-telescope/sbc_code/), is usually installed via SSH remotely. However the following can be done if that is not an option.

```
    git clone git+https://github.com/tart-telescope/sbc_code
    cd sbc_code/software
    make install TART=~/code
```

## Connecting to your telescope locally

If you telescope has an IP address on your network (i.e., x.x.x.x) then you can connect directly to it via a web browser

```http://x.x.x.x:8000```

