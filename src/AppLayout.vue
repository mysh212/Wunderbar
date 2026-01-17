<!-- AppLayout.vue -->
<template>
  <v-app>
    <page_loader :loading='loading' />
    <title_nav />
    <v-main>
      <sidenav name="experiments" />
      <v-container class="main-content">

        <slot></slot>
      </v-container>
    </v-main>
    <site_footer />
  </v-app>
</template>

<script>
import title_nav from '@/title.vue';
import sidenav from '@/sidenav.vue';
import site_footer from '@/footer.vue';
import page_loader from '@/loader.vue';

export default {
  components: {
    title_nav,
    sidenav,
    site_footer,
    page_loader
  }
};
</script>

<style scoped>
.main-content {
  padding: 20px;
  min-height: 70vh;
}
</style>
