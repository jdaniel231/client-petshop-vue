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
          <List :customers="customers" />        
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import List from '../../components/customers/List.vue';
// import Customer from '../../api/customers'
import { Factory } from '../../api/factory';

const CustomerApi = Factory.get("customers")

export default {
  name: "Customers",
  data: () => ({
    customers: [],
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
  created: function() {
    this.list()
  },
  methods: {
    newClient() {
      this.$router.push("/customers/new");
    },
    list(){
      CustomerApi.list({}).then(response => {
        this.customers = response.data
      }).catch(err => {
        console.log(err.response)
      })
    },
  },
 
}
</script>

<style>
</style>