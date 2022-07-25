<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Telefone</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in customers" :key="item.id">
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ item.phone }}</td>
          <td class="text-center">
            <v-btn small color="primary" class="mx-3">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
             <v-btn small color="primary" class="mx-3">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'ListCustomers',
  props: {
    customers: Array,
  },
  methods: {
     newClient() {
      this.$router.push("/customers/new");
    },
  }
}
</script>

<style>

</style>