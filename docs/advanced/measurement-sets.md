---
sidebar_position: 3
---

# Measurement Sets

Share your data to other radio astronomers, and use CASA to process this data.

Measurement Sets are a widely used data format for radio astronomy data. The [tart2ms](https://github.com/tart-telescope/tart2ms) tools are used to create measurement sets from TART data.


## Tracking named objects

The tart2ms tool can track objects. We have several objects that can be specified. These are

| Object       | Description | 
|--------------|-------------|
| Sun          | The sun       |
| Moon         | The earth's moon    | 
| Sgr A*       | Saggitarius A*, the black hole at the centre of our galaxy |
| Fornax A     | NGC 1316 (also known as Fornax A) is a lenticular radio galaxy about 60 million light-years away. | 

```bash
# Retrieve the last 120 minutes of observations and rephase them to track the celestial object Fornax A
tart2ms --ms output.ms --archive-search -120:1:0 --rephase  "Fornax A" 
```

## Tracking Arbitrary Celestial Objects

We use the XXXX coordinate system to specify celestial coordinates... Ben to continue here... 

```bash
# Retrieve the last 120 minutes of observations and rephase them to track the celestial object located at co-ordinates...
tart2ms --ms output.ms --archive-search -120:1:0 --rephase  "XXXXXXXXXXX" 
```



You can generate these using the sample code below

```python
import astropy as ap
...
```
