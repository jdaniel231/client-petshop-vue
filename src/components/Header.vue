<template>
  <v-app-bar app color="#F5F6FA" elevate-on-scroll elevation="4">
   <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>

    <v-text-field
      label="Pesquisar..."
      class="pt-5"
      filled
      prepend-inner-icon="mdi-magnify"
      dense
      solo
      flat
      background-color="grey lighten-4"
      rounded
    ></v-text-field>

    <v-spacer></v-spacer>

    <!-- <v-col lg="6" cols="12">
      <v-form class="mt-5">
        <v-text-field rounded outlined dense placeholder="Pesquisar..." append-icon="mdi-magnify" />
      </v-form>

    </v-col> -->
    
    <v-spacer></v-spacer>

    <v-row
      justify="space-around"
    >   
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            v-bind="attrs"
            v-on="on"
            icon
            x-large
          >       
            <v-avatar color="grey" size="48">
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="grey">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{user.email}}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                roudend
                text
              >
                Perfil
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                roudend
                text
              >
                Sair
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
     </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    user: {
      initials: 'WC',
      fullName: 'Wanessa Campos',
      email: 'wanessacamposvet@gmail.com'

    }
  }),
}
</script>

<style>
</style>