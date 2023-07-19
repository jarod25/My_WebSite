<template>
  <div class="skip-navbar">
    <h1>{{ about.title }}</h1>
    <p>{{ about.description }}</p>
  </div>
</template>

<script>

export default {
  name: 'AboutMeView',
  data() {
    return {
      about: {}
    }
  },
  methods: {
    getDataFr() {
      fetch('http://localhost:3000/about/fr')
          .then(response => response.json())
          .then(data => this.about = data)
    },
    getDataEn() {
      fetch('http://localhost:3000/about/en')
          .then(response => response.json())
          .then(data => this.about = data)
    },
  },
  mounted() {
    if (this.$route.path.startsWith('/fr')) {
      this.getDataFr()
    } else {
      this.getDataEn()
    }
  }
}
</script>

<style>
.skip-navbar {
  padding: 8vh 30px;
}
</style>
