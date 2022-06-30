<template>
  <v-navigation-drawer v-model="drawer" app>
    <div class="pa-4 grey darken-1 ">
      <div class="text-center mt-4">
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        >
          <v-img aspect-ratio="30" src="../assets/images/tuat.png" />
        </v-avatar>
        <h5 class="white--text" >Dr(a). Wanessa Campos </h5>
      </div>
    </div>

    <v-divider></v-divider>
    
    <v-list>
      <v-list-item v-for="[icon, text, path] in links" :key="icon" :to="path" link>
        
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props:['drawer'],
  name: 'Sidebar',

  data: () => ({
    links: [
      ["mdi-view-dashboard-outline", "Dashboard", "/"],
      ["mdi-account", "Clientes", "/customers"],
      ["mdi-hospital-box", "Consulta"],
    ],
  })
}
</script>

<style>
</style>