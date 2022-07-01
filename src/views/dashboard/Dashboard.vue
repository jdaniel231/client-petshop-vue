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
        <v-row>
          <v-col lg="12" cols="12">
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div>
                  <strong>Atendimentos</strong><br>
                  <p class="text-h5 mt-4">95</p>
                </div>
                <v-avatar size="60" color="red darken-4" style="border: 3px solid #444">
                  <span>
                    <v-icon color="white">
                      mdi-hospital-box
                    </v-icon>
                  </span>
                </v-avatar>
              </v-card-text>
              <!-- <v-card-actions class="d-flex justify-space-between">
              </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col lg="4" cols="12" >
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex justify-space-between align-center">
            <div>
              <strong>Comissão do mès</strong><br>
              <p class="text-h6 mt-4">R$ 13.000,00</p>
            </div>
            <v-avatar size="60" color="green darken-4" style="border: 3px solid #444">
              <span>
                <v-icon color="white">
                  mdi-currency-brl
                </v-icon>
              </span>
            </v-avatar>
          </v-card-text>
          <!-- <v-card-actions class="d-flex justify-space-between">
          </v-card-actions> -->
        </v-card>
      </v-col>

       <v-col lg="4" cols="12" >
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex justify-space-between align-center">
            <div>
              <strong>Clientes</strong><br>
              <p class="text-h6 mt-4">250</p>
            </div>
            <v-avatar size="60" color="blue darken-4" style="border: 3px solid #444">
              <span>
                <v-icon color="white">
                  mdi-account
                </v-icon>
              </span>
            </v-avatar>
          </v-card-text>
          <!-- <v-card-actions class="d-flex justify-space-between">
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg=12>
        <List />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import List from './List.vue';
export default {
    name: "Dashboard",
    components: { 
      List 
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