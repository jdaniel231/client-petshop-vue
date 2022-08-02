<template>
  <v-navigation-drawer v-model="drawer" dark app class="grey lighten-1" width="100" >
    <div class="text-center mt-5">
      <v-btn fab color="white" x-large>
        <v-icon color="black" >mdi-dog</v-icon>
      </v-btn>
      
    </div>

    <v-divider></v-divider>
    
    <v-list flat class="mt-5" >
      <v-list-item-group v-model="selectedItem" color="black">
        <v-list-item v-for="[icon, title, path] in links" :key="icon" :to="path"  active-class="border" class="ml-2 my-3" :ripple="false" >
          <b></b>
          <b></b>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item-icon v-on="on">
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>  
            </template>
            <span>{{ title }}</span>
          </v-tooltip>

          <!-- <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content> -->

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props:['drawer'],
  name: 'Sidebar',

  data: () => ({
    selectedItem: 0,
    links: [
      ["mdi-view-dashboard-outline", "Dashboard", "/"],
      ["mdi-account", "Clientes", "/customers"],
      ["mdi-hospital-box", "Consulta", '/attendances'],
    ],
  })
}
</script>

<style>
.border  {
   
    background: #F5F6FA ;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
      text-decoration: none;
    
}
.border b:nth-child(1)
{
    
    position: absolute;
    top: -20px;
    height: 20px;
    width: 83%;
    background: #BDBDBD;
  
    display: none; 
}
.border b:nth-child(1)::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background: #BDBDBD;
}
.border b:nth-child(2)
{
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 83%;
    background: #BDBDBD;
    display: none;
}
.border b:nth-child(2)::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    background: #BDBDBD;
}
.border b:nth-child(1),
.border b:nth-child(2)
{
    display: block;
}
</style>