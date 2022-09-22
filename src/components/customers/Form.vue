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
            label="Endereço"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-divider class="mb-5"></v-divider>
      <v-toolbar flat>
        <h4>Animal</h4>
        <template v-slot:extension>
          <v-btn 
          icon
          @click="dialog = !dialog"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
      <v-dialog
        v-model="dialog"
        max-width="a"
      >
        <v-card   
          class="mx-auto"
        >
          <v-app-bar>
            <v-card-title class="text-center">Cadastro</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="save">
              <v-icon>
                mdi-content-save
              </v-icon>
            </v-btn>
            <v-btn icon @click="dialog = false">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-app-bar>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="mt-3">
              <v-col cols="6">
                <v-select 
                  label="Tipo de animal" 
                  outlined 
                  dense
                  :items="selectType"
                ></v-select>
              </v-col> 
               <v-col cols="6">
                <v-text-field label="Nome" outlined dense></v-text-field>
              </v-col> 
                <v-col cols="6">
                <v-text-field label="Idade" outlined dense></v-text-field>
              </v-col> 
              <v-col cols="6">
                <v-text-field label="Peso" outlined dense></v-text-field>
              </v-col> 
              <v-col cols="6">
                <v-text-field label="Raça" outlined dense></v-text-field>
              </v-col> 
              <v-col cols="6">
                <v-select label="Sexo" 
                outlined 
                dense
                 :items="selectSex"
                ></v-select>
              </v-col> 
            </v-row>
          </v-card-text>
        </v-card>

      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    selectType: [
      {text: "Cão", value: 'dog'},
      {text: "Gato", value: 'cat'}
    ],
    selectSex: [
      {text: "Macho", value: 'male'},
      {text: "Fêmea", value: 'female'}
    ]
  }),
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