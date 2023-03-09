<template>
  <div class="skip-navbar">
    <h1>{{ cv.title }}</h1>
    <p>{{ cv.description }}</p>
  </div>
</template>

<script>

export default {
  name: 'CvView',
  data() {
    return {
      cv: {},
    }
  },
  methods: {
    getDataFr() {
      fetch('http://localhost:3000/cv/fr')
          .then(response => response.json())
          .then(data => this.cv = data)
    },
    getDataEn() {
      fetch('http://localhost:3000/cv/en')
          .then(response => response.json())
          .then(data => this.cv = data)
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
