<template>
  <v-card height="450">
    <v-card-text>
      <v-row>
        <v-col cols="6" >
          <v-text-field
            v-model="customer.name"
            label="Nome"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="6" >
          <v-text-field
            v-model="customer.phone"
            label="Telefone"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="6" >
          <v-text-field
            v-model="customer.address"
            label="Endreço"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>