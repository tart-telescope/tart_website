<script setup>
import GuideItem from './AppGuideItem.vue';
</script>

<script>
export default {
  data() {
    return {
      resources: [
        {
          url: 'https://tart.elec.ac.nz/doc/',
          title: 'TART documentation',
        },
        {
          url: 'https://tart.elec.ac.nz/signal/',
          title: 'Live telescope viewer',
        },
        {
          url: 'https://tart.elec.ac.nz/signal/doc/',
          title: 'Telescope API Documentation',
        },
        {
          url: 'https://tart.elec.ac.nz/catalog/doc/',
          title: 'Telescope Source Catalogue Documentation',
        },
        {
          url: 'https://elec.ac.nz/',
          title: 'Electronics Research Foundation',
        },
      ],
    };
  },
};
</script>

<template>
  <h2>Guides</h2>
  <p>
    Read more detailed instructions and documentation on using or contributing
    to Bootstrap.
  </p>

  <ul class="ps-0 list-style-none">
    <!-- TODO fix later -->
    <!-- eslint-disable-next-line vue/valid-v-for -->
    <GuideItem v-for="item in resources" :href="item.url" :text="item.title" />
  </ul>
</template>
