<template>
<v-app>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4" >
          <v-card elevation="0" >
            <a href="#">
              <v-img src="../../assets/images/petclinic.png" alt="PetClinica" container height="200"></v-img>
            </a>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field 
                  label="Email" 
                  name="email" 
                  prepend-inner-icon="mdi-email" 
                  type="email"
                  class="rounded-0"
                  outlined  
                  v-model="user.email"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  class="rounded-0"
                  outlined
                  v-model="user.password"
                  required
                ></v-text-field>
                <v-btn
                  class="rounded-0"
                  color="#000000"
                  x-large 
                  block
                  dark
                  type="submit"
                >Entrar</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user:{}
    }
  },

}
</script>

<style>

</style>



