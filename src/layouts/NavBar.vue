<template>
    <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="$q.screen.width > 1500">
      <q-toolbar>
        <q-toolbar-title class="text-left q-pa-md q-ml-xl col-1">
            <div style="max-height: 65px;">
              <img class="cursor-pointer" src="../assets/logo-2.png" style="max-height: inherit;">
            </div>
          </q-toolbar-title> 
          <div class="col text-grey-6 row text-center q-gutter-x-xl cursor-pointer text-bold" style="font-size:18px">
          <div v-for="el in menu" :key="el" :class="el.selected ? 'active' : ''" @click="changeActive(el.name, el.route)"> {{ el.name }}</div>
          </div>
          <div class="col-1 text-bold">
           <q-select
            popup-content-class="text-bold text-grey-6"
            color="black"
            transition-show="jump-up"
            transition-hide="jump-up"
            borderless 
            hide-bottom-space
            bg-color="transparent"
            v-model="language"
            :options="options"
            style="width: 50px"
           />
          </div>
          <div class="col-1 q-gutter-md">
          <q-icon
            class="text-blue cursor-pointer"
            size="sm"
            name="fab fa-facebook"
          />
          <q-icon
            class="text-purple cursor-pointer"
            size="sm"
            name="fab fa-instagram"
          />
          <q-icon
            class="text-indigo-6 cursor-pointer"
            size="sm"
            name="fab fa-discord"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-header elevated v-else>
      <q-toolbar>
        <q-toolbar-title class="q-ml-md text-left q-pa-md col">
            <div style="max-height: 65px;">
              <img class="cursor-pointer" src="../assets/logo-2.png" style="max-height: inherit;">
            </div>
        </q-toolbar-title>
        <q-btn flat class="col-1" color="secondary" round icon="menu">
        <q-menu fit class="window-width overflow-hidden text-center justify-center items-center text-grey-6 text-bold">
          <q-list >
            <q-item clickable v-close-popup v-for="item in menu" :key="item">
              <q-item-section :class="item.selected ? 'active' : ''" @click="changeActive(item.name, item.route)">{{item.name}}</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <div class="q-gutter-lg">
                  <q-icon
                    class="text-blue cursor-pointer"
                    size="sm"
                    name="fab fa-facebook"
                  />
                  <q-icon
                    class="text-purple cursor-pointer"
                    size="sm"
                    name="fab fa-instagram"
                  />
                  <q-icon
                    class="text-indigo-6 cursor-pointer"
                    size="sm"
                    name="fab fa-discord"
                  />
        </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-select
                class="full-width"
                popup-content-class="text-bold text-grey-6"
                color="black"
                transition-show="jump-up"
                transition-hide="jump-up"
                borderless 
                hide-bottom-space
                bg-color="transparent"
                v-model="language"
                :options="options"
              >
              <template v-slot:selected>
              <div class="text-center full-width text-grey-6 text-bold q-pl-lg">
               {{ language }}
               </div>
              </template>
              </q-select>

            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
        </q-toolbar>
    </q-header>
   

    <q-page-container :style="$q.screen.width > 800 ? 'padding-top:0px; margin: 0px' : ''">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'NavBar',
  components:[
  ],
  data() {
    return {
        menu : [
            {name : 'Home', selected: true , route: "/"},
            {name : 'About Us', selected: false, route: "/about"},
            {name : 'Careers', selected: false, route: "/careers"},
            {name : 'Projects', selected: false, route: "/projects"},
            {name : 'Contact Us', selected: false, route: "/contactus"},
        ],
        language: 'EN',
        options: [
        'EN', 'MK'
        ],
    }
  },
  mounted(){
    //this.$q.iconSet.arrow.dropdown = ""
  
    let index = this.menu.map(function(x) { return x.route; }).indexOf(this.$router.currentRoute.value.fullPath) 
    this.setActive(index);
  },
  methods: {
      setActive(index){
         var temp = this.menu;
         let prev = this.menu.map(function(x) { return x.selected; }).indexOf(true) 
         temp[prev].selected = false;
         this.menu = temp;

        temp[index].selected = true;
        this.menu = temp
      },
      changeActive(name, route){
          let prev = this.menu.map(function(x) { return x.selected; }).indexOf(true) 
          let i = this.menu.map(function(x) { return x.name; }).indexOf(name) 
          var temp = this.menu;

          temp[prev].selected = false;
          this.menu = temp;
          
          temp[i].selected = true;
          this.menu = temp

          this.$router.push(route)
      }
  }
}
</script>
<style scoped>
.active{
    color: #175d82;
}
.q-field__native > span{
  font-weight: bold;
}

</style>