<template>
<div>
  <div class="bg">
    <h1 id="header">{{ home.header }}</h1>
  </div>
  <div class="text-center">
    <h1>{{ home.header }}</h1>
    <div id="mon-objet">Texte de test</div>
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
      width: '400px',
      height: '40px',
      easing: 'easeInOutQuad',
      duration: 1000,
      translateX: 750,
      translateY: 350,
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
  background: url("../../public/background.jpg") no-repeat center fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 8vh 30px;
}
</style>
