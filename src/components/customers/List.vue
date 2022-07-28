<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Nome</th>
          <th class="text-center">Telefone</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in customers" :key="item.id">
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.phone }}</td>
          <td class="text-center">
            <v-btn small icon class="mx-3">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
             <v-btn small icon class="mx-3" @click="remove(item.id)">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

import { Factory } from '../../api/factory';

const CustomerApi = Factory.get("customers")


export default {
  name: 'ListCustomers',
  props: {
    customers: Array,
  },
  methods: {
    newClient() {
      this.$router.push("/customers/new");
    },
    remove: function(id){
      if(confirm("Você realmente deseja excluir ?")){
        CustomerApi.delete(id).then(() => {
          this.list()
        })
      }
    },
    list(){
      CustomerApi.list({}).then(response => {
        this.customers = response.data
      }).catch(err => {
        console.log(err.response)
      })
    }
  }
}
</script>

<style>

</style>