<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Nome</th>
          <th class="text-center">Data do atendimento</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in attendances" :key="item.id">
          <td class="text-center">{{ item.customer_id }}</td>
          <td class="text-center">{{ item.created_at }}</td>
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

export default {
  name: 'ListAttendances',
  props: {
    attendances: Array,
  },
}
</script>

<style>

</style>