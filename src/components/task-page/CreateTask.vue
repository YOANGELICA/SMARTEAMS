<template>
    <div style="text-align: left; height: 520px; width: 520px; color: #FF5758;">

        <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Añada una tarea </h1><br/>

        <p> Nombre de la tarea </p>
        <input type="text" v-model="title" class="field"><br/>

        <p> Integrante responsable: </p>
        <input type="text" v-model="user" class="field" placeholder="email"><br/>

       <p>Fecha límite</p>
       <input type="date" id="deadline" class="date-form" name="deadline"
            placeholder="dd/mm/aaaa"
            min="2022-11-20" max="2025-12-31" v-model="deadline">
        
        <br/>
        <button @click="callApi()" class="btn"> Añadir tarea </button>
    </div>
</template>

<script>
import {smarteamsApi} from '../../api/smarteamsApi';
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'; 

export default {
    name: 'AddTask',
    data(){
      return{
          title:"",
          user:"",
          deadline: "",
          router: useRouter(),
      }
    },
    methods:{
    async callApi(){
            try{
                const api = await smarteamsApi.post('/api/task/create', {title: this.title, user: this.user, deadline: this.deadline})

                if (api.status == 200){
                    // this.router.push("/Login")
                }
                console.log(api, api.status)
            }
            catch(error){
                console.log(error)
            } 
          }
    },
    
}
</script>

<style scoped>
p{
    font-weight: 800;
    color: #FF5758;
    font-size: 20px
}
label{
    font-weight: 800;
    color: #FF5758;
    font-size: 20px
}
.btn{
  width: 200px;
  background-color: #FF5758;
  color: #ffffff;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 750;
  font-size: 18px;
  text-align:center;
  display: inline-block;
}
.field{
  width: 250px;
  background-color: #EBE9E9;
  color: #5c5c5c;
  padding: 10px 17px;
  margin: 10px 0;
  border: none;
  border-radius: 24px;
  cursor: text;
  font-family: helvetica;
}
::placeholder{
  color: #a6a6a6;
  font-style: italic;
}
.form{
  width: 150px;
  background-color: #EBE9E9;
  color: #5c5c5c;
  padding: 10px 5px;
  margin: 10px 0;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  width: 80px;
}
.date-form{
  width: 150px;
  background-color: #EBE9E9;
  color: #5c5c5c;
  padding: 5px 10px;
  margin: 10px 0;
  border: none;
  border-radius: 24px;
  cursor: pointer;
}
#month{width: 100px;}
</style>