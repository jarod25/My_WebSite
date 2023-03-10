<template>
<div>
  <div class="bg">
    <h1 id="header">{{ home.header }}</h1>
  </div>
  <div class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="agency-cta d-flex align-items-center">
            <div class="col-10 ml-auto mr-auto col-size">
              <div class="txt text-center">
                <p>{{ home.description }}</p>
                <div class="row" v-if="$route.path.startsWith('/fr')">
                  <div class="col-6">
                    <a href="/fr/cv" class="btn btn-primary">Mon CV</a>
                  </div>
                  <div class="col-6">
                    <a href="/fr/portfolio" class="btn btn-primary">Mes projets réalisés</a>
                  </div>
                </div>
                <div class="row" v-else>
                  <div class="col-6">
                    <a href="/en/cv" class="btn btn-primary">My CV</a>
                  </div>
                  <div class="col-6">
                    <a href="/en/portfolio" class="btn btn-primary">My projects</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

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
    anime({
      targets: '#header',
      width: '350px',
      height: '40px',
      easing: 'easeInOutQuad',
      duration: 1000,
      translateX: '225%',
      translateY: '750%',
    });
    if (this.$route.path.startsWith('/fr')) {
      this.getDataFr()
    } else {
      this.getDataEn()
    }
  }
}
</script>

<style>
.bg {
  background: url("../../public/backgroundv2.jpg") no-repeat center fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 8vh 30px;
}
.col-size {
  width: 50%;
  background: rgba(162, 182, 189, 0.8);
  padding: 30px;
}
</style>
