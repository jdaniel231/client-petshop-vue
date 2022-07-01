<template>
  <v-form>
    <v-container class="py-0" >
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field 
            label="Nome"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field 
            label="CPF"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field 
            label="telefone"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field 
            label="Endereço"
          />
        </v-col>

        <v-col
          cols="12"
          class="text-right"
        >
          <v-btn
            color="success"
            class="mr-0"
          >
            Salvar
          </v-btn>
        
          <v-btn
            color="success"
            class="ml-2"
          >
            Voltar
          </v-btn>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {


}
</script>

<style>

</style>