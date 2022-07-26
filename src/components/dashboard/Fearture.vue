<template>
  <div>
    <v-row >
      <v-col
        v-for="(fearture, index) in feartures"
        :key="index" 
      >
        <v-card elevation="2" color="grey lighten-1" class="rounded-lg">
          <v-card-text class="d-flex justify-space-between align-center">
            <div>
              <strong>{{ fearture.title }}</strong><br>
              <p class="text-h5 mt-4">{{fearture.count}}</p>
            </div>
            <v-avatar size="60" :color="fearture.color" style="border: 3px solid #444">
              <span>
                <v-icon color="white">
                 {{fearture.icon}}
                </v-icon>
              </span>
            </v-avatar>
          </v-card-text>
        </v-card>  
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  name: 'Fearture',

  data: () => ({
    feartures: [
      {title: 'Atendimentos', icon: 'mdi-hospital-box', count: '190', color: 'red darken-4' },
      {title: 'Clientes', icon: ' mdi-account', count: '190', color: 'blue darken-4' },
      {title: 'Comissão', icon: ' mdi-currency-brl', count: 'R$ 14.000', color: 'green darken-4' },
    ]
  })

}
</script>

<style>
</style>