<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Lista de atendimentos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
        ></v-text-field>

        <template>
          <v-btn
            color="primary"
            dark
            icon
            class="mb-2"
            v-bind="attrs"
            v-on="on"
          >
           <v-icon>mdi-plus</v-icon>
          </v-btn>
          </template>

        </v-toolbar>
        </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style>

</style>