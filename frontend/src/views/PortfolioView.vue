<template>
  <div class="skip-navbar">
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-12">
        <h1>{{ project.title }}</h1>
        <div v-if="project.position === 'left'" class="row">
          <div class="col-2 row">
            <div v-for="image in project.images" :key="image.id">
              <div class="col-12 m-2">
                <img :alt="image.alt" :src="image.url">
              </div>
            </div>
          </div>
          <div class="col-10">
            <p>{{ project.description }}</p>
          </div>
        </div>
        <div v-else class="row">
          <div class="col-10">
            <p>{{ project.description }}</p>
          </div>
          <div class="col-2 row">
            <div v-for="image in project.images" :key="image.id">
              <div class="col-12">
                <img :alt="image.alt" :src="image.url">
              </div>
            </div>
          </div>
        </div>
        <div class="space"></div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      projects: {}
    }
  },
  methods: {
    getDataFr() {
      fetch('http://localhost:3000/portfolio/fr')
          .then(response => response.json())
          .then(data => this.projects = data)
    },
    getDataEn() {
      fetch('http://localhost:3000/portfolio/en')
          .then(response => response.json())
          .then(data => this.projects = data)
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

.space {
  margin-bottom: 50px;
}
</style>
