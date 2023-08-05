<template>
    <label for="id">Id</label>
  <input v-model="id" type="text" />

  <label for="placa">Placa</label>
  <input v-model="placa" type="text" />

  <label for="chasis">chasis</label>
  <input v-model="chasis" type="text" />

  <label for="marca">marca</label>
  <input v-model="marca" type="text" />

  <label for="color">color</label>
  <input v-model="color" type="text" />

</template>

<script>
import {buscarPlacaFachada} from "../components/DatosMostrarTodosVehiculos.vue"

export default {
    data(){
        return{
          id:null,
          placa: null,
          chasis:null,
          marca: null, 
          color: null
        }
    }, 
    methods:{
       async buscarPlacaFachada(placa){
        const data=await buscarPlacaFachada(placa)
        {
            this.id=data.id
            this.placa=data.placa
            this.chasis=data.chais
            this.marca=data.marca
            this.color=data.color
        }
        
        }
    }
}
</script>

<style>

</style>