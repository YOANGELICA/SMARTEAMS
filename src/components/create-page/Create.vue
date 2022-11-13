<template>
  <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Crear un equipo </h1><br/>
  <div class="float-container">
    <div class="float-child">
        <p> Nombre del proyecto </p>
            <input type="text" id="pname" class="input" placeholder="Escribe aquí..." v-model="title">
        <p> Inserte los correos electrónicos de los integrantes </p>
            <textarea type="text" id="user-emails" class="input" placeholder="Separados por comas, sin epsacios" v-model="project_users"> </textarea>
        <!-- <p style="font-style: italic"> Ó, Inserte una lista de usuarios (.csv / .xlsx)</p>
            <button id="insert" class="btn"> Insertar </button> <br/>  -->
    </div>
    <div class="float-child">
      <!-- <label for="start">Fecha límite:</label> -->
      <p>Fecha límite:</p>

      <input type="date" id="deadline" class="date-form" name="deadline"
            placeholder="dd/mm/aaaa"
            min="2022-11-20" max="2025-12-31" v-model="deadline">
           
       <p>Añada una descripción</p>
        <textarea type="text" id="desc" class="input" placeholder="Escribe aquí..." v-model="description"> </textarea> <br/>
       <button id="listo-btn" @click="callApi()" class="btn">¡Listo!</button>
    </div>
  </div>
</template>

<script>
import {smarteamsApi} from '../../api/smarteamsApi';
import { useRouter } from 'vue-router';

export default {
    name: 'Create',
    data(){
      return{
          title:"",
          project_users:"",
          deadline:"",
          description:"",
          router: useRouter()
          }
    },
    methods:{
        async callApi(){
            try{
                const api = await smarteamsApi.post('/api/equipos/create', {title: this.title, project_users: this.project_users, deadline: this.deadline, description: this.description},
                {headers: {'x-token': localStorage.getItem('token')}}
                )

                if (api.status == 200){
                    this.router.push("/Project")
                }
            }
            catch(error){
                console.log(error)
            } 
        }
    }
}
</script>

<style scoped>
.float-container {
    border: 3px solid rgb(255, 255, 255);
    padding: 20px;
    width: 1200px;
}
.float-child {
    width: 50%;
    float: left;
    padding: 20px;
    border: none;
    background-color: #ffffff;
    color: #FF5758;
    text-align: left;
    font-size: 18px;
    padding: 1em;
    border-radius: 18px;
}  
.btn{
  width: 120px;
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
}
::placeholder{
  color: #a6a6a6;
  font-style: italic;
}
.label{
  color: #a6a6a6;
  font-style: italic;
}
.input{
  width: 300px;
  background-color: #EBE9E9;
  color: #5c5c5c;
  padding: 10px 17px;
  margin: 10px 0;
  border: none;
  border-radius: 24px;
  cursor: text;
  font-size: 18px;
}
#pname{
  height: 40px;
  width: 350px;
}
#desc{
  width: 350px;
  height: 150px;
  box-sizing: border-box;
  resize: none;
  font-family: helvetica;
  /* font-size: 14px; */
}
#user-emails{
  width: 350px;
  height: 150px;
  box-sizing: border-box;
  resize: none;
  font-family: helvetica;
  /* font-size: 14px; */
}
p{font-weight: 800;
font-size: 21px;
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
#listo-btn{
  left: 230px;
}
</style>