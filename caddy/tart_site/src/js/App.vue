<script setup>
import Header from '../components/AppHeader.vue';
import Guides from '../components/AppGuides.vue';
import Footer from '../components/AppFooter.vue';
</script>

<template>
  <div class="container py-4 px-3">
    <Header />
    <h1>Transient Array Radio Telescope (TART)</h1>
    <div class="col px-0">
      <p class="fs-4">TART is a 24-element imaging radio telescope.</p>
      <p>
        The TART is a 24-element synthesis array radio-telescope. It observes
        the entire sky continuously and is optimized to detect transient events,
        including satellites, near-earth objects and high-energy cosmic rays.
        The telescope is also designed to serve as a platform for the
        development of new imaging algorithms.
      </p>

      <p>
        The TART telescope is an open source project. Development is
        <a href="https://github.com/tart-telescope">hosted on github</a>.
      </p>

      <h3>News</h3>
      <ul>
      <li>See TART on display at the IAU General Assembly in Cape Town 2024</li>
      <li>Next TART workshop: Kenya 26nd August 2024</li>
      <li>Successful <a href="https://tart.elec.ac.nz/doc/blog/tart-install-udm">TART workshop in Mauritius</a> 22nd April 2024</li>
      </ul>
      
<div id="carouselTART" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselTART" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselTART" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselTART" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <div class="ratio ratio-16x9">
      <img :src="'../img/slideshow_1.jpg'" class="object-fit-contain d-block w-100" alt="...">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <p>The original TART telecope at Signal Hill, Dunedin New Zealand.</p>
      </div>
    </div> 
    <div class="carousel-item" data-bs-interval="2000">
      <div class="ratio ratio-16x9">
      <img src="https://tart.elec.ac.nz/doc/assets/images/assembled_tart_array_udm-ed4043d36b2f71735af7d3d54295af25.jpg" class="object-fit-contain d-block w-100" alt="...">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <p>The new spiral antenna array for the TART in Mauritius.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div class="ratio ratio-16x9">
      <img src="https://tart.elec.ac.nz/doc/assets/images/tart_array_assembly-ad8af2d7ec103f3738c7a57d9e2f35b7.jpg" class="object-fit-contain d-block w-100" alt="...">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <p>Attendees at a TART workshop assembling the antenna array. This TART was installed at Rhodes University in South Africa.</p>
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
  <button class="carousel-control-prev"
          type="button" data-bs-target="#carouselTART" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselTART" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

    <hr />

    <Guides />

    <Footer />
  </div>
</template>
