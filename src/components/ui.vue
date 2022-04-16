<template>
    <div class="ui">
    <li id="location"><p>lat:{{lat}}, long:{{lon}}</p></li>
    <button id="volumecontrol" @click="onoff">
      <span v-if="on" class="material-icons">volume_up</span>
      <span v-if="!on" class="material-icons">volume_off</span>
    </button>
    </div>
</template>
<script type="module">
export default{
  name:'UI',
  data(){
    return{
     on: true,
     lat:0,
     lon:0, 
     sound: null,
     description: null,
     fileid: null, 
    }
  },
  methods:{
    onoff(){
      this.on =!this.on;
      console.log(this.on);
    },
    getLocation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          position=>{
            this.lat=Math.round(position.coords.latitude * 100) / 100;
            this.lon=Math.round(position.coords.longitude*100)/100;
          }
        );
      }
    },
  },
  created:function(){
    this.getLocation();
  }
}

</script>

<style>


body {
  font-family: helvetica, arial, sans-serif;
  margin: 2em;
  width: 100vw; 
  height: 100vh; 
  margin : 0px; 
  padding : 0px; 
  border : 0px; 
  background-color : white;
}

h1 {
  font-style: italic;
  color: #373fff;
}

canvas {
  width: 100%;
  height: 100%;
  margin : 0px;
  padding : 0px;
  border : 0px;
  background-color : transparent;
}  
  
</style>