---
sidebar_position: 2
---

# Single-board Computer

This is a Raspberry pi 3/4 or a Quartz64 computer with a standard 40-pin I/O connector. The basic installation steps are:
* Install base OS (no user interface needed)
* Create a user called tart
<code>sudo adduser tart</code>
* Enable the SPI interface (this is done using raspi_config on an rPi, and <code>modprobe spi_rockchip</code> on the Quartz64.

## Install some packages
The following packages are needed to continue with the install. Mostly this is docker.

<code>sudo apt install curl docker.io docker-compose git</code>
<code>sudo usermod -a -G tart docker</code>

## Install TailScale

The TART single board computers are connected to a global network
<code>curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up</code>

## Install the TART operating software.

This software contains the API server and the necessary code to communicate to the telescope electronics using the SPI interface.
<code>
git clone https://github.com/tart-telescope/sbc_code
cd sbc_code/software
docker-compose -f docker-compose-telescope.yml build
</code>



