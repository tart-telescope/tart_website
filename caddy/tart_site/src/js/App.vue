<script setup>
import Header from '../components/AppHeader.vue';
import Guides from '../components/AppGuides.vue';
import Footer from '../components/AppFooter.vue';
</script>

<template>
  <div class="container py-4 px-3">
    <Header />

    <h1>Transient Array Radio Telescope</h1>
    <div class="col px-0">
      <p class="fs-4">TART is a 24-element imaging radio telescope.</p>
      <p>
        The TART is a 24-element synthesis array radio-telescope. It observes
        the entire sky continuously and is optimized to detect transient events,
        including satellites, near-earth objects and high-energy cosmic rays.
      </p>
      <p>
        The telescope is also designed to serve as a platform for the
        development of new imaging algorithms.
      </p>

      <p>
        The TART telescope is an open source project. Development is
        <a href="https://github.com/tart-telescope">hosted on github</a>.
      </p>



      <div class="row">
        <div class="col">
        <img
          :src="'https://tart.elec.ac.nz/doc/assets/images/tart_array_assembly-ad8af2d7ec103f3738c7a57d9e2f35b7.jpg'"
          height="300"
        />
        <p>Attendees at a TART workshop assembling the antenna array. This TART was installed at Rhodes University in South Africa.</p>
        </div>

        <div class="col">
        <video controls height="300">
          <source
            :src="'https://tart.elec.ac.nz/old/strange_flyby.webm'"
            type="video/webm"
          />
        </video>
        <p>Unusual Low-earth-orbit satellite flyby transmitting in the GNSS bands, observed with a TART telescope.</p>
        </div>
      </div>

    </div>

    <hr />

    <Guides />

    <Footer />
  </div>
</template>
