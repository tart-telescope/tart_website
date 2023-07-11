---
sidebar_position: 2
---

# Single-board Computer

This is a Raspberry pi 3/4 or a Quartz64 computer with a standard 40-pin I/O connector. The basic installation steps are:
* Install base OS (no user interface needed)
* Install curl and docker
<code>sudo apt install curl docker.io git</code>

* Install TailScale
<code>curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up</code>
* Install the TART operating software.
<code>git clone https://github.com/tart-telescope/software </code>



