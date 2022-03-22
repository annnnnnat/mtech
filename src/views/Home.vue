<template>
  <div class="home">
    <section :class="$q.screen.width > 800 ? 'window-height full-width fullpage-first' : 'full-height full-width fullpage-first'" style="background: #353138">
        <div class="row justify-center items-center full-height full-width text-center">
          <div :class="$q.screen.width > 800 ? 'col-5 floating-label q-gutter-y-md text-left' : 'floating-label q-gutter-y-md q-pt-xl'">
            <div :class="$q.screen.width > 800 ? 'text-white text-h2 text-weight-medium' : 'text-white text-h4 text-weight-medium'">COMPUTER <br />INDUSTRY</div>
              <q-separator v-if="$q.screen.width < 800" inset color="secondary" style="height: 3px" size="50px"/>
              <q-separator v-else color="secondary" style="height: 3px" size="50px"/>
            <div class="text-white">
              <span :class="$q.screen.width > 800 ? 'text-h6' : 'text-caption'">Established in 2018, we are working in 5 different sectors</span>
            </div>
          </div>
          <div :class="$q.screen.width > 800 ? 'col-5 floating-label' : 'floating-label full-width text-center'">
                <q-img class="cursor-pointer" @click="moveUp()" :style="$q.screen.width > 800 ? 'width: 75%' : $q.screen.width > 500 ? 'width: 60%;' : 'width: 100%;' " src="../assets/chart.png"/>
          </div>
        </div>
    </section>
    <q-page-container :style="$q.screen.width > 1200 ? 'padding-top:0px; margin: 0px' : ''">
    <section  :class="$q.screen.width > 1200 ? 'window-height full-width fullpage' : 'full-height full-width fullpage'">
      <div class="justify-center items-center text-center full-width">
        <q-toolbar-title :class="$q.screen.width > 1200 ? 'q-pa-xl' : 'q-pb-xl'">
          <div class="column">
           <div class="text-bold">WE ARE BUILDERS OF THE FUTURE</div>
           <div class="text-subtitle1">nekoj inspiring txt</div>
          </div>
        </q-toolbar-title>
        <div :class="$q.screen.width > 1200 ? 'row q-ml-xl q-mr-xl q-pl-xl q-pr-xl q-gutter-x-md' : 'q-gutter-y-md'">
          <q-card flat dark bordered class="col animateCard" :style="'min-height: 400px; background:'+ str.bgColor" v-for="str in secondStruct" :key="str.desc">
            <q-img class="q-ma-md" :style="$q.screen.width > 1200 ? 'width: 30%;' : 'width: 19%;'" :src="'statics/' + str.img"/>
            <div class="q-mt-sm q-pa-md"> {{ str.desc }} </div> 
          </q-card>
        </div>
        
      </div>
    </section>
    </q-page-container>
    <q-page-container :style="$q.screen.width > 1200 ? 'padding-top:0px; margin: 0px' : ''">
    <section :class="$q.screen.width > 1200 ? 'window-height full-width fullpage' : 'full-height full-width fullpage'">
      <div class="justify-center items-center text-center full-width">
       <q-toolbar-title :class="$q.screen.width > 1200 ? 'q-pa-xl' : 'q-pb-xl'">
          <div class="column">
           <div class="text-bold">PRODUCTS</div>
          </div>
        </q-toolbar-title>
        <div :class="$q.screen.width > 1200 ? 'row q-ml-xl q-mr-xl q-pl-xl q-pr-xl q-gutter-x-md' : 'q-gutter-y-md'">
          <q-card flat class="col animateCard" style="'min-height: 400px;" v-for="str in thirdStruct" :key="str.name">
            <q-img class="q-ma-md" :style="$q.screen.width > 1200 ? 'width: 30%;' : 'width: 19%;'" :src="'statics/' + str.img" />
            <div class="q-mt-sm q-pa-md"> {{ str.name }} </div> 
          </q-card>
        </div>
      </div>
    </section>
    </q-page-container>
    <q-page-container :style="$q.screen.width > 1200 ? 'padding-top:0px; margin: 0px' : ''">
    <section :class="$q.screen.width > 1200 ? 'BFG window-height full-width fullpage' : 'BFG full-height full-width fullpage'">
      <div class="justify-center items-center text-center full-width">
        <q-toolbar-title :class="$q.screen.width > 1200 ? 'q-pa-xl BFGtext' : 'q-pb-xl BFGtext'">
          <div class="column">
           <div class="text-weight-bolder text-h1 text-accent">BATTLE FOR GIOSTONE</div>
           <div class="text-bold text-h6 text-white q-pt-lg">
             <p>Battle For Giostone is a gaming universe filled with amazing species of heroes.<br/> 
             Each Spell has a different value and use, meaning that players can utilize and produce <br/>
             countless combinations to use in a battle and the creative Battlers will always find <br/>
             the key strategy to steal the giostone, destroy the enemy base or meet another victory condition.</p>
            </div>
            <div class="q-mt-xl">
            <q-btn label="See More" size="20px" color="accent"></q-btn>
            </div>
          </div>
        </q-toolbar-title>
      </div>
    </section>
    </q-page-container>
    <section class="full-width q-pa-xs" style="background: #353138">
    <div class="row">
      <div class="col-4">
        <div class="q-ma-lg q-pl-xl"><q-img src="../assets/logo-2.png" style="width:20%"/></div>
        <div class="q-ma-lg">M-Tech Entertainment</div>
        </div>
      <div class="col">dknasdnalks</div>    
    </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import VueApexCharts from 'vue-apexcharts'
import 'animate.css';
export default {
  name: 'Home',
  components: {
    //VueApexCharts,
  },
  data(){
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      secondStruct: [
        {img: 'PTE.png', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", bgColor: "#89DAFF"},
        {img: 'ES.png', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", bgColor: "#DBB1BC"},
        {img: 'DM.png', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", bgColor: "#8F95D3"},
        {img: 'SE.png', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", bgColor: "#D3C4E3"},
        {img: 'BT.png', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", bgColor: "#B1EDE8"},
      ],
      thirdStruct: [
        {name: "Battle For Giostone", img: 'gio.png'},
        {name: "BFG Staking", img: 'staking.png'},
      ]
    }
  },
  mounted(){
    history.scrollRestoration = "manual";
    window.scrollTo(0,0);
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers

    //window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    //window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  unmounted(){
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    //window.removeEventListener('touchstart', this.touchStart); // mobile devices
    //window.removeEventListener('touchmove', this.touchMove); // mobile devices
  },
  methods:{
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      console.log(sections)
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {
      
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
        
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
      console.log(this.activeSection)
      
      if(this.activeSection < 0){
         this.activeSection = this.offsets.length - 1;
      }
      
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
      console.log(this.activeSection)
      
      if(this.activeSection > this.offsets.length - 1)
      {
        this.activeSection = 0;
      }
      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;
      this.animateSection2()
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});

      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    },
    touchStart(e) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    },
    animateSection2(){
      if(this.activeSection === 1){
        const elements = document.querySelectorAll('.animateCard')
        let i = 0;
        for(const el of elements){
          let animation = ""
          if(i<2){
              animation = "animate__bounceInLeft"
          }
          if(i==2){
              animation = "animate__bounceInUp"
          }
          if(i>2){
              animation = "animate__bounceInRight"
          }
          el.classList.add('animate__animated', animation, 'animate__slow');
          el.addEventListener('animationend', () => {
            el.classList.remove('animate__animated', animation, 'animate__slow');
          });
          i++;
        }
      }
    }
  }
}
</script>
<style scoped>
body {
  margin: 0;
  color: #FFF;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
}
.fullpage {
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
}
.fullpage-first {
  width: 100%;
  justify-content: center;
  align-items: center;
}
.BFG {
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
}
.BFG::before{
  content: "";
  background-image: url('../assets/bfg.png');
  position: absolute;
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.8;
}

.BFGtext{
  position: relative;
  line-height: 0.9;
  text-align: center;
}
</style>