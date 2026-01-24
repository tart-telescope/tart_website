# Tart Tools

The tart-tools python package [tart_tools](https://github.com/tmolteno/tart_modules) provides a command line interface manage a TART telescope using the restful-api.

Here is the documentation for the `tart-tools` package, formatted in clean, organized Markdown.

---

# TART Tools Package Documentation

The `tart-tools` package (found in the [tmolteno/tart_modules](https://github.com/tmolteno/tart_modules) repository) provides a suite of command-line interface (CLI) utilities for interacting with the **Transient Array Radio Telescope (TART)**.

## Primary Scripts

### `tart_download_data`

Downloads raw visibility data from a TART telescope's API.

* **Purpose:** Fetches visibility data files (JSON or HDF5) from a specific telescope base station.
* **Key Features:**
* Fetches the latest  data files using the `--n` flag.
* Verifies data integrity using checksums.
* Supports custom API endpoints for different arrays (e.g., Dunedin or Mauritius).


```
usage: tart_download_data [-h] [--api API] [--pw PW] [--dir DIR] [--n N] [--raw] [--vis] [--file FILE]

Download data from the telescope

options:
  -h, --help   show this help message and exit
  --api API    Telescope API server URL. (default: https://tart.elec.ac.nz/signal)
  --pw PW      API password (default: password) 
  --dir DIR    local directory to download (default: .)
  --n N        Stop after downloading this many files. (default: -1)
  --raw        Download Raw Data in HDF format (default: False)
  --vis        Download Visibility Data in HDF format (default: False)
  --file FILE  Set the name of the output file (default: None)
```

Example:
```
tart_download_data --api https://api.elec.ac.nz/tart/mu-udm --vis --n 1
2026-01-24 11:36:37,362 - root - INFO - Downloading Data from https://api.elec.ac.nz/tart/mu-udm
2026-01-24 11:36:45,722 - root - INFO - Download_file(https://api.elec.ac.nz/tart/mu-udm/vis/vis_2026-01-23_22_36_35.539081.hdf, 4383520778a3e595674dc6789880510d7e43483bdf442e60d7b940f12302e344) -> ./vis_2026-01-23_22_36_35.539081.hdf

```
This will download the most recent visibility data file from the specified tart.

### `tart_get_archive_data`

Accesses historical data stored in the cloud.


* **Purpose:** Queries and downloads TART data from the AWS S3 public archive.
* **Key Features:**
* Efficiently handles batch downloads of historical observations.
* Interfaces with the `archive_handler` to manage S3 bucket interactions.


```
usage: tart_get_archive_data [-h] [--dir DIR] [--name NAME] [--target TARGET] [--n N] [--start START] [--duration DURATION]

Get data from the TART s3 bucket

options:
  -h, --help           show this help message and exit
  --dir DIR            Output directory (default: .)
  --name NAME          Output file name prefix - eg 'out_' would produce files 'out_1.hdf', out_2.hdf ... (default: None)
  --target TARGET      Telescope name in s3 bucket. (default: signal)
  --n N                Number of HDF vis files. (-1 means all) (default: -1)
  --start START        Start time (negative means offset from now). (default: -60)
  --duration DURATION  Number of minutes to sample for (default: 0)
```
The start parameter can either be an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date and time (with offset "2026-01-20T01:30:08+00:00")

Example: The following will download the last 60 minutes of data from the target mu-udm.

```
tart_get_archive_data --name my_data --target mu-udm --start -60 --duration 60

```


### `tart_upload_antenna_positions` / `tart_download_antenna_positions`

Manages the physical geometry metadata of the array.

* **Purpose:** Handles the  coordinates of each antenna.
* **Usage:** Used during initial setup or after maintenance.
* **Note:** `tart_upload_antenna_positions` includes a `--rotate` flag to align the coordinate system during calibration.


### `tart_download_gains` / `tart_calibration_data`

Handles antenna gain parameters.

```
usage: tart_download_gains [-h] [--api API] [--file FILE]

Save gains from api to local file

options:
  -h, --help   show this help message and exit
  --api API    Telescope API server URL. (eg: https://api.elec.ac.nz/tart/mu-udm)
  --file FILE  local file to dump gains (default: gains.json)
```

### `tart_set_mode`

A control utility for hardware and server states.

* **Purpose:** Changes the operational mode (e.g., idle, observing, or test modes).
* **Security:** Typically requires an authorized API JWT token.

### `tart_h5_to_json`

Data format conversion utility.

* **Purpose:** Converts HDF5 visibility files into JSON format.
* **Compatibility:** Ensures data is compatible with web visualizers or `tart2ms` (MeasurementSet) workflows.

---

## Technical Reference

### Common Command-Line Arguments

Most scripts in this package share a standard set of arguments:

| Argument | Description |
| --- | --- |
| `--api` | The URL of the telescope API (eg: https://api.elec.ac.nz/tart/my-tart). |
| `--user` | Username for authorized API requests. |
| `--password` | Password for authorized API requests. |
| `--n` | The number of files or data points to process. |

### Installation

The tools can be installed via `pip`. Once installed, they are available as system-wide commands.

```bash
pip install tart-tools

```

---
To help you get started, here is a practical workflow showing how to use these tools in sequence. This example demonstrates how to download raw data, calibrate it, and prepare it for imaging.

### Example Workflow: Data Acquisition to Calibration

This workflow assumes you are working with the Dunedin TART array.

#### 1. Download Recent Data

First, use `tart_download_data` to fetch the 5 most recent visibility observations.

```bash
tart_download_data --api https://api.elec.ac.nz/tart/mu-udm --vis --n 1


```

#### 2. Verify Antenna Positions

Before calibrating, ensure your local geometry matches the telescope's current configuration.

```bash
tart_download_antenna_positions --api https://api.elec.ac.nz/tart/mu-udm --output positions.json

```


---

### Understanding the TART Data Flow

The diagram below illustrates how these tools interact with the Telescope hardware, the API, and the data storage layers.

### Advanced Usage: Historical Analysis

If you want to perform a long-term study (e.g., looking at how gains change over a month), you would use the archive tool instead of the live API:

```bash
# Search for and download data from a specific date range in 2024
tart_get_archive_data --target mu-udm --start 2026-01-20T01:30:08+00:00 --duration 60


```

---

### Key Troubleshooting Tips

* **Authentication:** If you receive a `401 Unauthorized` error when using `tart_set_mode` or uploading positions, ensure you are passing your credentials: `--password <password>`.
