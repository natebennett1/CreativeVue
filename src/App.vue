<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
        <h1>Welcome to DN Fantasy Football</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/noun_create_424276.png">
          <p>Create a Player</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/noun_team_1350216.png">
          <p>Your team ({{this.$root.$data.cart.length}} players)</p>
        </div>
      </router-link>
    </div>
  </div>

   <router-view />



  <v-footer padless>
    <v-col
      class="social-footer"
      cols="12"
    >
    <a href="https://github.com/natebennett1/CreativeVue" >
    <strong>Github Link - Nate Bennett and Dillon Ormond</strong>
    </a>
    </v-col>
  </v-footer>

</div>
</template>

<script>
// import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    // ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
    cartLength() {
      return this.$root.$data.cart.length;
    }
  },
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #e6dfdf;
}

.social-footer {
    padding: 1rem;
    background: #93b3e6;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    text-align: center;
    font-size: medium;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-left: -100px;
    text-decoration: none;
    text-align: center;
    padding-top: 20p;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  text-decoration: none;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
a:visited { text-decoration: none; color:#000; }
</style>
