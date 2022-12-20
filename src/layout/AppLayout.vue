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
        <v-slide-x-transition mode="out-in">  
          <router-view></router-view>
        </v-slide-x-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
  name:'AppLayout',
  data: () => ({
      drawer: true,
    }),
    components: { Header, Sidebar },
}
</script>

<style>

</style>