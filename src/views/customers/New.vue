<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <v-card >
      <v-app-bar color="blue lighten-5">
        <v-icon class="icon-title">mdi-account-plus-outline</v-icon>
        <v-toolbar-title>Cadastro</v-toolbar-title>

        <v-spacer></v-spacer>
         
        <v-btn icon>
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
         <v-btn icon @click="back">
          <v-icon>mdi-keyboard-return</v-icon>
        </v-btn>

      </v-app-bar>
      <v-container
        fluid
        tag="section"
      >
        <v-row justify="center">
          <v-col cols="12" md="8">
            <Form :client="client" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    
  </div>
</template>

<script>
import Form from "../../components/customers/Form.vue";

export default {
    name: "NewClient",
    data: () => ({
        client: {},
        items: [
            {
                text: "Dashboard",
                disabled: false,
                href: "/",
            },
            {
                text: "Clientes",
                disabled: false,
                href: "/customers",
            },
            {
                text: "Novo",
                disabled: false,
            }
        ],
    }),
    components: { Form },
    methods: {
      back: function() {
      this.$router.push("/customers");
    },
    }
}
</script>

<style scoped>
  .icon-title{
    padding: 0 15px;
  }
</style>