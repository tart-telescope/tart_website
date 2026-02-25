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

The TART operating software is based around docker. We recommend using the official docker distribution.

```
    sudo apt install curl docker.io docker-compose git
    sudo usermod -a -G tart docker
```

## Install the TART operating software.

The code [here](https://github.com/tart-telescope/sbc_code/), is usually installed via SSH remotely. However the following can be done if that is not an option.

```
    git clone git+https://github.com/tart-telescope/sbc_code
    cd sbc_code/software
    make install TART=~/code
```


## Local Mode (for testing)

After the sbc_code is installed on your raspberry pi. Then add in the configuration files as outlined in the sbc_code docs, and

```
    docker compose -f docker-compose-local.yml up
```    

This will launch a local-mode telescope:
* Connect to http://localhost:5000/docs to get and test the API docs. 
* Connect to http://localhost:80 to see the web interface.


## Cloud Installation

Once your TART is tested using local mode. Then the TART is ready to connect to the global TART network. This involves working with the TART team.


### TailScale

The TART single board computers are connected to a global network. This connection is managed using the tailscale VPN. It is installed on the SBC using:


```
    curl -fsSL https://tailscale.com/install.sh | sh
    sudo tailscale up
```

Then contact the TART team for connection to the TART network.




