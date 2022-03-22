<template>
  <div class="about">
    <section id="section1">
       <div class="full-height full-width items-center justify-center row text-center ">
         <div :class="$q.screen.width > 650 ? 'col' : 'row jcontent'">
           <img class="aboutIMG" src="../assets/icons/img1.png" />
           </div>
           <div :class="$q.screen.width > 650 ? 'col' : 'row jcontent'">
              <h3 class="text-h3">Title nesto intro</h3>
              <div class="paragraph">
                <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </span>
                <span>
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                </span>
                <span>
                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
            </div>
            <div :class="$q.screen.width > 650 ? 'col' : 'row jcontent'">
              <img class="aboutIMG" src="../assets/icons/img2.png" />
            </div>
      </div>
    </section>
    <section id="section2">
      <div class="row justify-center items-center full-height full-width text-center coustumQ-card">
        
          <q-card v-if="$q.screen.width > 1200" @mouseenter="qCardRotateIn('animateCard1')" @mouseleave="qCardRotateOut('animateCard1')" flat :class="$q.screen.width > 1200 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-xl-2 q-card q-pa-lg q-ma-lg'">
           
            <div id="animateCard1"  class="animateCard1">
              <img src="../assets/icons/mission.png" >
              <span>MISSION</span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div id="animateCard1none"  class="animateCard1none">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
          </q-card>
             <q-card v-else flat :class="$q.screen.width > 1200 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-xl-2 q-card q-pa-lg q-ma-lg'">
           
            <div  @click="qCardRotateIn('animateCard1')" id="animateCard1"  class="animateCard1">
              <img src="../assets/icons/mission.png" >
              <span>MISSION</span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div @click="qCardRotateOut('animateCard1')" id="animateCard1none"  class="animateCard1none">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
          </q-card>
          <q-card v-if="$q.screen.width > 1200" @mouseenter="qCardRotateIn('animateCard2')" @mouseleave="qCardRotateOut('animateCard2')" flat  :class="$q.screen.width > 1200 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-xl-2 q-card q-pa-lg q-ma-lg'">
            <div  id="animateCard2"  class="animateCard2">
             <img src="../assets/icons/vision.png" >
             <span>VISION</span>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
             <div id="animateCard2none"  class="animateCard2none">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
          </q-card>
          <q-card v-else   flat  :class="$q.screen.width > 1200 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-xl-2 q-card q-pa-lg q-ma-lg'">
              <div @click="qCardRotateIn('animateCard2')"  id="animateCard2"  class="animateCard2">
              <img src="../assets/icons/vision.png" >
              <span>VISION</span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div @click="qCardRotateOut('animateCard2')" id="animateCard2none"  class="animateCard2none">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
          </q-card>
          <q-card v-if="$q.screen.width > 1200" @mouseenter="qCardRotateIn('animateCard3')" @mouseleave="qCardRotateOut('animateCard3')"  flat :class="$q.screen.width > 1200 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-xl-2 q-card q-pa-lg q-ma-lg'">
            <div id="animateCard3"  class="animateCard3">
             <img src="../assets/icons/value.png" >
             <span>VALUES</span>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
             <div id="animateCard3none"  class="animateCard3none">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
          </q-card>
          <q-card v-else   flat :class="$q.screen.width > 1200 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-xl-2 q-card q-pa-lg q-ma-lg'">
            <div @click="qCardRotateIn('animateCard3')" id="animateCard3"  class="animateCard3">
             <img src="../assets/icons/value.png" >
             <span>VALUES</span>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
             <div  @click="qCardRotateOut('animateCard3')" id="animateCard3none"  class="animateCard3none">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             </div>
          </q-card>
          
      </div>
    </section>
    <section id="section3">
      <div class="row justify-center items-center full-height full-width text-center">
         <div class="q-pa-md gridImg">
            
            <div class="parent">
              <div class="div1"> </div>
              <div class="div2"> </div>
              <div class="div3"> </div>
              <div class="div4"> </div>
              <div class="div5"> </div>
            </div>
            
          </div>
      </div>
    </section>
      <section id="section4">
            <h3 class="text-h3">TEAM</h3>
      <div class="row justify-center items-center full-height full-width text-center sec4contentempt">
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
      </div>
      <div class="row justify-center items-center full-height full-width text-center sec4contentempt">
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
        <q-card  flat  :class="$q.screen.width > 900 ? 'col-sm-2 q-card q-pa-lg q-ma-lg' : 'col-sm-4 q-card q-pa-lg q-ma-lg min-wid'">
        
        </q-card>
      </div>
    </section>
</div>
</template>
<script>
import 'animate.css';
export default {
  name: 'About',
  components: {
   
  },
  data() {
    return {
      
    }
  },
  methods:{
    qCardRotateIn(index){
     const elements = document.querySelectorAll('.'+index)
  
     
        for(const el of elements){
          let animation = "animate__flipOutX"
          
          el.classList.add('animate__animated', animation, 'animate__slow');
          el.addEventListener('animationend', () => {
           //za da s smene stajl pri tranzicija
          
            let newclass = index.toString() + "none"
            let oldClas = index.toString()
            document.getElementById(oldClas).style.visibility = "hidden";
            document.getElementById(newclass).style.display = "block";
            el.classList.remove('animate__animated', animation, 'animate__slow');
          });
        }
    },
    qCardRotateOut(index){
       const elements = document.querySelectorAll('.'+index+'none')
     console.log(index.toString())
     console.log(elements)
     
        for(const el of elements){
          let animation = "animate__flipOutX"
          
          el.classList.add('animate__animated', animation, 'animate__slow');
          el.addEventListener('animationend', () => {
            let newclass = index.toString() + "none"
            let oldClas = index.toString()
            document.getElementById(oldClas).style.visibility = "visible";
            document.getElementById(newclass).style.display = "none";
          el.classList.remove('animate__animated', animation, 'animate__slow');
          });
        }
    }
  }
  }

</script>
<style :scoped>
.about{
    padding-top: 5%;
    text-align: center;
}
.about h3{
    line-height: 1px;
    margin-bottom: 3%;
    margin-top: 5%;
    font-size: 4.5vh;
    font-weight: 800;
}
.paragraph{
    padding-left: 10%;
    padding-right: 10%;
    font-size:1.8vh;
    text-align: left;
}
.paragraph span{
    display: block;
    padding-top: 3%;
}
.gridImg img{
  width: 40%;
}

.parent {
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(4, 1fr);
width: 70vw;
height: 40vw;
border-radius: 5%;
}
.parent div{
  border-radius: 15px;
  margin:1vh;
  margin-top: 2%;
}
.div1 { grid-area: 1 / 1 / 5 / 5; background-color: rgb(221, 18, 18);}
.div2 { grid-area: 1 / 5 / 3 / 7; background-color: rgb(224, 228, 8);}
.div3 { grid-area: 3 / 5 / 5 / 7; background-color: rgb(212, 88, 16);}
.div4 { grid-area: 1 / 7 / 3 / 9; background-color: rgb(73, 51, 153); }
.div5 { grid-area: 3 / 7 / 5 / 9; background-color: rgb(42, 141, 100);}
.coustumQ-card div{
  padding: 1%;
  padding-top: 3%;
  padding-bottom: 3%;
}
.coustumQ-card div div{
  margin-top: auto;
  margin-bottom: auto;
}
.coustumQ-card div div img{
  width: 100%;
}
.coustumQ-card div div span{
    font-size: 3vh;
    letter-spacing: 0.2vh;
    font-weight: 700;
    color: #464666e8;
    padding: 5%;
    display: block;
}
.coustumQ-card div div p{
    min-height: 5vh;
}
#section2{
  background: radial-gradient(#72b3ff, transparent);
  padding: 5%;
}
.aboutIMG{
  width:100%
}
.animateCard1none, .animateCard2none, .animateCard3none{
  display: none;
  position: absolute;
  top: 5%;
  padding: 5%!important;
  left: 0;
  margin: 0;
  height: 100%;
}
.jcontent{
  justify-content: center;
}
.jcontent img{
  width: 80%;
}
.jcontent span{
  font-size: 2vh;
}
.sec4contentempt div{
  min-height: 40vh;
  background-color: red;
}@media (max-width: 600px) {
.min-wid{
  min-width: 40%;
}
.parent {
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(8, 1fr);
grid-column-gap: 0px;
grid-template: initial;
grid-row-gap: 0px;

height: 75vh;
}

.div1 { grid-area: 5 / 1 / 9 / 5; }
.div2 { grid-area: 1 / 1 / 3 / 3; }
.div3 { grid-area: 1 / 3 / 3 / 5; }
.div4 { grid-area: 3 / 3 / 5 / 5; }
.div5 { grid-area: 3 / 1 / 5 / 3; }
}
</style>

