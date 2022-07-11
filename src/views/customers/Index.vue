<template>
  <div class="bread-div">
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <br>
    <v-row>
      <v-col lg=12>
        <v-card>
          <v-app-bar>
              <v-toolbar-title>Clientes</v-toolbar-title>

              <v-spacer></v-spacer>
              
              <v-btn 
                icon
                class="mb-2"
                @click="newClient"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
          </v-app-bar>           
          <List />        
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import List from '../../components/customers/List.vue';
export default {
  name: "Customers",
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: "Clientes",
        disabled: true,
        href: "/customers",
      },
    ],
  }),
  components: { List },
  methods: {
     newClient() {
      this.$router.push("/customers/new");
    },
  }  
}
</script>

<style>
</style>