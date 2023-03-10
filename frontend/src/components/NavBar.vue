<template>
  <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
    <b-navbar-brand>
      <img src="logo.ico" alt="Logo" width="50" height="50">
    </b-navbar-brand>
    <b-navbar-brand>Jarod Kohler</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav v-if="$route.path.startsWith('/fr')">
      <b-navbar-nav>
        <b-nav-item href="/fr">Accueil</b-nav-item>
        <b-nav-item href="/fr/a-propos">Qui-suis-je ?</b-nav-item>
        <b-nav-item href="/fr/cv">Mon CV</b-nav-item>
        <b-nav-item href="/fr/portfolio">Mes projets réalisés</b-nav-item>
        <b-nav-item href="/fr/contact">Me Contacter</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Rechercher" disabled></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" disabled>Recherche</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Langues" right>
          <b-dropdown-item href="/fr" disabled>FR</b-dropdown-item>
          <b-dropdown-item href="/en">EN</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    <b-collapse id="nav-collapse" is-nav v-else>
      <b-navbar-nav>
        <b-nav-item href="/en">Home</b-nav-item>
        <b-nav-item href="/en/about">Who am I ?</b-nav-item>
        <b-nav-item href="/en/cv">My CV</b-nav-item>
        <b-nav-item href="/en/portfolio">My projects</b-nav-item>
        <b-nav-item href="/en/contact">Contact Me</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" disabled></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" disabled>Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Langages" right>
          <b-dropdown-item href="/fr">FR</b-dropdown-item>
          <b-dropdown-item href="/en" disabled>EN</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
  }),
};
</script>