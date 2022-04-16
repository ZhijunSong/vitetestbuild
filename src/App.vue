
<template>
   <div class="wrapper">
    <!-- <canvas ref="myCanvas"></canvas>   -->
    <a-scene
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
    >
      <a-entity
        sp-aframe=" "
        position="0 -2 0"
        scale="0.8 0.8 0.8"
        look-at="[gps-projected-camera]"
      ></a-entity>
      <a-camera fov="40" gps-projected-camera rotation-reader> </a-camera>

    </a-scene>
    <UI />
   
   </div>


</template>
<script>
import {sculptToMinimalRenderer,createSculptureWithGeometry} from 'shader-park-core';
import { nextTick } from 'vue'
import {spCode} from './spCode.js';
import UI from './components/ui.vue';

export default {
  components:{
    UI
  },
  async mounted() {
    await nextTick();

  // let canvas = this.$refs.myCanvas;
  //  sculptToMinimalRenderer(canvas, spCode);
  },

  methods:{
    shaderShell(){
        AFRAME.registerComponent("sp-aframe", {
        init: function () {
          this.geometry = new THREE.SphereGeometry(2, 2, 2);
          this.params = {
            time: 0.0,
          };
          let mesh = createSculptureWithGeometry(this.geometry, spCode, () => ({
            time: this.params.time,
          }));
          this.material = new THREE.MeshStandardMaterial();
          this.mesh = new THREE.Mesh(this.geometry, this.material);
          this.mesh.material = mesh.material;
          this.mesh.onBeforeRender = mesh.onBeforeRender;
          this.el.setObject3D("mesh", this.mesh);
          // this.el.object3D.scale.set(0.1,0.1,0.1);
        },
        tick: function (time, timeDelta) {
          this.params.time += 0.01;
        },
      });
      }
  },
  created: function() {
        // this.getLocation();
        this.shaderShell();

  }

}
// const count = ref(0)
</script>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ui{
  z-index: 999;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button#volumecontrol{
    border: none;
    background: none;
    display: block;
    position:absolute;
    right:20px;
    bottom: 10px;
    color:white;
}
#location{
   position:absolute;
   left: 10px;
   color:white;
   font-weight: 600;
   font-size: 12px;
   top:10px;
}    
.ui{
  display: block;
  z-index: 1;
  width: 100%;
  height:100%;

}
video{
  z-index:-999;
  overflow: hidden;
  visibility: hidden;
}
.arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: none;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
}

  
</style>