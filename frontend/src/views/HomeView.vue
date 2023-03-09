<template>
  <div class="skip-navbar">
    <h1>{{ home.title }}</h1>
    <p>{{ home.description }}</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      home: {},
    }
  },
  methods: {
    getDataFr() {
      fetch('http://localhost:3000/home/fr')
          .then(response => response.json())
          .then(data => this.home = data)
    },
    getDataEn() {
      fetch('http://localhost:3000/home/en')
          .then(response => response.json())
          .then(data => this.home = data)
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
  margin-top: 95px;
  margin-left: 30px;
}
</style>
