<template>
  <div class="dashboard">
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <br>
    <v-row>
      <v-col>
        <Fearture />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg=12>
        <v-card>
          <v-app-bar>
              <v-toolbar-title>Lista de atendimentos</v-toolbar-title>

              <v-spacer></v-spacer>
              
              <v-btn icon>
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
import List from '../../components/dashboard/List.vue';
import Fearture from '../../components/dashboard/Fearture.vue';
export default {
    name: "Dashboard",
    components: {
    List,
    Fearture,
},

    data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: true,
          href: '/',
        },
      ],
    }),
}
</script>

<style>
</style>