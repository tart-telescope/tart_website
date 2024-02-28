<script setup>
import Header from '../components/AppHeader.vue';
import Guides from '../components/AppGuides.vue';
import Footer from '../components/AppFooter.vue';
</script>

<template>
  <router-view />

  <div class="container py-4 px-3">
    <Header />
    <h1>Transient Array Radio Telescope (TART)</h1>
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


<div id="carouselTART" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselTART" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselTART" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselTART" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <div class="ratio ratio-16x9">
      <img src="https://tart.elec.ac.nz/doc/assets/images/tart_array_assembly-ad8af2d7ec103f3738c7a57d9e2f35b7.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <p>Attendees at a TART workshop assembling the antenna array. This TART was installed at Rhodes University in South Africa.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div class="ratio ratio-16x9">
      <img :src="'../img/slideshow_1.jpg'" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <p>The original TART telecope at Signal Hill, Dunedin New Zealand.</p>
      </div>
    </div>
    <div class="carousel-item">
         <div class="ratio ratio-16x9">
            <video style="width: 100% height: 100%" class="d-block w-100" controls autoplay loop>
              <source
                :src="'https://tart.elec.ac.nz/old/strange_flyby.webm'"
                type="video/webm"
              />
            </video>
          </div>
      <div class="carousel-caption d-none d-md-block">
        <p>Unusual Low-earth-orbit satellite flyby transmitting in the GNSS bands, observed with a TART telescope.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselTART" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselTART" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!--        <div class="container-sm">
          <img
            class="mx-auto d-block mb-2 float-md-left mr-md-4 img-thumbnail""
            src="https://tart.elec.ac.nz/doc/assets/images/tart_array_assembly-ad8af2d7ec103f3738c7a57d9e2f35b7.jpg"
            style="max-width: 400px"
          />
          <p style="max-width: 400px">Attendees at a TART workshop assembling the antenna array. This TART was installed at Rhodes University in South Africa.</p>
        </div>

        <div class="container-sm">
          <div class="ratio ratio-4x3">
            <video class="w-100" controls width="400" style="max-width: 400px">
              <source
                :src="'https://tart.elec.ac.nz/old/strange_flyby.webm'"
                type="video/webm"
              />
            </video>
          </div>
          <p>Unusual Low-earth-orbit satellite flyby transmitting in the GNSS bands, observed with a TART telescope.</p>
        </div>-->
    </div>

    <hr />

    <Guides />

    <Footer />
  </div>
</template>
