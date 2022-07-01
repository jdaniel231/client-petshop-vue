<template>
  <div class="bread-div">
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  
    <List />

  </div>
</template>

<script>
import List from './List.vue';
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
  components: { List }
}
</script>

<style>
</style>