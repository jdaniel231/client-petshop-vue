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
              <v-toolbar-title>Atendimentos</v-toolbar-title>

              <v-spacer></v-spacer>
              
              <v-btn 
                icon
                class="mb-2"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
          </v-app-bar>           
          <List :attendances="attendances" />        
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import List from '../../components/attendances/List.vue';

import { Factory } from '../../api/factory';

const AttendanceApi = Factory.get("attendances")

export default {
  name: "Attendances",
  data: () => ({
    attendances: [],
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: "Atendimentos",
        disabled: true,
        href: "/attendances",
      },
    ],
  }),
  components: { 
    List 
  },
  created: function() {
    this.list()
  },
  methods: {
    list(){
      AttendanceApi.list({}).then(response => {
        this.attendances = response.data
      }).catch(err => {
        console.log(err.response)
      })
    },
  },
 
}
</script>

<style>
</style>