<template>
  <v-app>
    <div class="m-3">
      <NavBar style="z-index: 100;"/>
      <router-view/>
      <FooterBar/>
    </div>
  </v-app>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: 'App',
  components: {NavBar, FooterBar},

  data: () => ({}),
};
</script>

<style scoped>

</style>