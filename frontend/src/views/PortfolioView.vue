<template>
  <div class="skip-navbar">
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-xl-12">
        <h3>{{ project.title }}</h3>
        <div v-if="project.position === 'left'" class="row">
          <div class="col-xl-2 row mt-2">
            <div class="col-xl-5 mb-3" v-for="image in project.images" :key="image.id">
              <img :alt="image.alt" :src="image.src" height="100px" width="auto" class="rounded">
            </div>
          </div>
          <div class="col-xl-10">
            <p class="text-justify" v-html="formatDescription(project.description)"></p>
          </div>
        </div>
        <div v-else class="row">
          <div class="col-xl-10">
            <p class="text-justify" v-html="formatDescription(project.description)"></p>
          </div>
          <div class="col-xl-2 row mt-2">
            <div class="col-xl-5 mb-3" v-for="image in project.images" :key="image.id">
              <img :alt="image.alt" :src="image.src" height="100px" width="auto" class="rounded">
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
    formatDescription(description) {
      return description.replace(/\n/g, '<br>');
    }
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
