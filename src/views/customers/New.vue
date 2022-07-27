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
    <v-card min-height="450px" >
      <v-app-bar>
        <v-toolbar-title>
          <span>Cadastro</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
         
         <v-btn
            icon
            @click="save"
          >
            <v-icon>
              mdi-content-save
            </v-icon>
          </v-btn>
          <v-btn
            icon
            @click="back"
          >
            <v-icon>
              mdi-arrow-u-left-bottom
            </v-icon>
          </v-btn>
      </v-app-bar>      
      <v-row>
        <v-col>
          <Form :customer="customer" />
        </v-col>
      </v-row>

    </v-card>
    
  </div>
</template>

<script>
import Form from "../../components/customers/Form.vue";
import { Factory } from '../../api/factory';

const CustomerApi = Factory.get("customers")


export default {
    name: "NewClient",
    data: () => ({
        customer: {},
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
    components: { 
      Form 
    },
    methods: {
      save: function() {
        CustomerApi.save(this.customer).then(response => {
          if (response.status === 200) {
            this.back();
          }
        });
      },
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