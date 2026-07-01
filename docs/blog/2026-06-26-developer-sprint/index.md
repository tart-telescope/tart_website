---
slug: tart-dev-2026
title: Highlights from the 2026 TART Developer Sprint, June 2026
date: 2026-06-26T08:00
authors: [tcam]
tags: [workshop]
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 5
---


# Highlights from the 2026 TART Developer Sprint

We are thrilled to announce the successful conclusion of the **2026 TART Developer Sprint**, which took place in beautiful Cape Town between June 22 and June 26, 2026. The Transient Array Radio Telescope (TART) project—an open-source initiative designed to make radio interferometry accessible and affordable—underwent a week of intense collaboration, architectural breakthroughs, and massive performance improvements.

Over five productive days, core developers tackled major challenges in data streaming, high-fidelity telescope simulation, and automated calibration. Here is an in-depth look at the remarkable outcomes and milestones achieved during this sprint.

<!-- truncate -->

---

### Kremetart & Panoptikon

A key focus during the sprint involved advancing front-end visibility and real-time management tools for the telescope. Development efforts progressed significantly on **Kremetart & Panoptikon**, which can be found at [github.com/landmanbester/kremetart](https://www.google.com/search?q=https://github.com/landmanbester/kremetart). These utilities play a critical role in expanding user and developer interaction with TART data streams and array infrastructure.

### Next-Generation TART UDP Data Stream Format Design

One of the most architecturally profound outcomes of the sprint was the formalization and implementation of the new **TART UDP Data Stream Format Design**. This redesign completely modernizes the telescope's signal processing architecture with a focus on modularity and high throughput:

* **Dual Python/Rust Pipeline Modules:** Every single stage of the signal pipeline—including the sender, DSP downconvert, channelizer, correlator, and visibility saver—now features a dual-language implementation. A Python reference implementation is used for easy validation, while a parallel Rust implementation handles high-throughput operations.
* **UDP-Based Inter-Module Transport:** The new transport mechanism utilizes fixed-size datagrams optimized to fit safely under the Maximum Transmission Unit (MTU) size. By leveraging clearly documented "magic-number" packet formats, developers can seamlessly perform drop-in replacements of individual pipeline modules between languages without interrupting data transmission.
* **Tappable Pipeline Stages:** The pipeline has been engineered to be fully transparent and non-disruptive. Raw 1-bit data (pre-DSP), post-DSP 2-bit data, and complex visibilities can each be saved directly to disk (using Zarr, Parquet, or raw binary formats) at any stage of the pipeline without breaking or degrading the live data stream.
* **Configurable Telescope Parameters:** Centralized settings for telescope arrays are now driven entirely by a single `pipeline.toml` configuration file. This single file seamlessly handles configurable telescope parameters, such as antenna counts ranging from 24 to 32, frequency channels from 1 to 32, and integration times stretching from 1ms to 1000ms. The entire ecosystem is fully containerized, orchestrated, and tested using Docker Compose.

### Redeveloped TART Catalogue: A 1,000,000x Speedup

In one of the most staggering optimization feats of the week, the TART source catalogue server underwent a complete rewrite. The redeveloped **TART Catalogue** achieves a massive, roughly 1,000,000x speedup compared to its previous iteration.

* **New Matching Server:** A high-speed matching server handles rapid coordinate lookups for visible satellites, GNSS constellations, and celestial objects.
* **Multi-Language Clients:** The system comes equipped with dedicated Rust and Python clients to make integrating local SGP4 orbit propagation fast and effortless for all developers.

You can check out the source code and review the REST API capabilities at [github.com/tart-telescope/catalogue](https://github.com/tart-telescope/catalogue).

### TARTball: High-Fidelity Telescope Simulation

To lower the barrier to entry for researchers and software developers who may not have immediate physical access to an array, the team introduced **TARTball**. Drawing inspiration from existing tools like Crystalball, TARTball functions as a robust simulator tailored specifically to the TART architecture. It reads standard sky models and automatically generates realistic Measurement Sets (MS), allowing developers to test imaging pipelines and downstream software offline. Explore the repository at [github.com/tart-telescope/tartball](https://github.com/tart-telescope/tartball).

### TART Beam Models Framework Established

Accurate imaging depends heavily on an explicit understanding of an antenna's directional sensitivity. During the Cape Town sprint, the fundamental framework for **TART Beam Models** was successfully established. This architecture provides the necessary analytical and structural foundation to incorporate advanced primary beam models into ongoing calibration and imaging cycles. The repository is live and accepting contributions at [github.com/tart-telescope/beams](https://github.com/tart-telescope/beams).

### Automated Position Calibration

Determining the exact physical coordinates of individual antennas within an interferometric array is essential to prevent phase errors. The team successfully completed the comprehensive technical write-up for **TART Position Calibration** techniques. Even better, new software was developed to perform this calibration automatically. This automation removes tedious manual workflows and makes deploying a new TART station faster and more precise than ever. The source code and documentation can be reviewed at [github.com/tmolteno/tart-position-cal](https://github.com/tmolteno/tart-position-cal).

---

### Looking Ahead

The 2026 Cape Town Developer Sprint marks a massive leap forward for open-source radio astronomy. By blending the extreme performance of Rust with the accessibility of Python reference models, slashing catalog lookups by six orders of magnitude, and automating antenna position calibrations, the TART ecosystem is ready for its next generation of global deployments.

A massive thank you to all the developers who dedicated their time, energy, and expertise to making this sprint a monumental success!

*Interested in contributing? Whether you want to simulate arrays using TARTball, build lightning-fast pipeline taps, or deploy a telescope at your institution, visit our GitHub organizations and join the community!*

## Links

* [Map of Worldwide TART installations](https://map.elec.ac.nz)
* [TART website](https://tart-telescope.org)
* [TART GitHub](https://github.com/tart-telescope)
