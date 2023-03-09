<template>
  <div class="skip-navbar">
    <h1>{{ contact.title }}</h1>
    <p>{{ contact.description }}</p>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      contact: {}
    };
  },
  methods: {
    getDataFr() {
      fetch("http://localhost:3000/contact/fr")
          .then(response => response.json())
          .then(data => (this.contact = data));
    },
    getDataEn() {
      fetch("http://localhost:3000/contact/en")
          .then(response => response.json())
          .then(data => (this.contact = data));
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
</style>