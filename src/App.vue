<template>
  <v-app 
    id="inspire"
     :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <Header @handleDrawer="drawer = !drawer" />
    <Sidebar :drawer="drawer" />
    <v-main>
      <v-container
        class="px-6"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
  export default {
    data: () => ({
      // cards: ["Today", "Yesterday"],
      drawer: false,
    }),
    components: { Header, Sidebar },
}
</script>