<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <br>
    <v-card >
      <v-app-bar>
        <v-toolbar-title>Cadastro</v-toolbar-title>

        <v-spacer></v-spacer>
         
         <v-btn
            color="cyan"
            class="mr-0"
          >
            Salvar
          </v-btn>
        
          <v-btn
            color="cyan"
            class="ml-2"
            @click="back"
          >
            Cancelar
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