<template>
  <div id="app">
    <Menubar :model="items" />
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label: "Acceuil",
            icon: "pi pi-dollar",
            to: "/"
          },
          {
            label: "Promotion",
            icon: "pi pi-ticket",
            items: [
              {
                label: "New",
                icon: "pi pi-fw pi-plus",
                to: "/addQrCode"
              }
            ]
          }
        ]
      };
    }
  };
</script>
<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
