<template>
  <v-app-bar app color="white" elevate-on-scroll elevation="4">

    <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>

    <v-spacer />

    <!-- <v-col lg="6" cols="12">
      <v-form class="mt-5">
        <v-text-field rounded outlined dense placeholder="Pesquisar..." append-icon="mdi-magnify" />
      </v-form>

    </v-col> -->
    
    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          v-bind="attrs"
          v-on="on"
          icon
          class="mx-5 mx-10 "
        >          
          <v-icon>mdi-cog-outline</v-icon> 
        </v-btn>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line >
          <v-list-item-content>
            <v-list-item-title class="text-center">Dr(a)Wanessa Campos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    items: [
      { title: 'Perfil', icon: 'mdi-account'  },
      { title: 'Sair', icon: 'mdi-location-exit'},
    ]
  }),
}
</script>

<style>
</style>