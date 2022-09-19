<template>
    <div style="text-align: center">
        <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Iniciar sesión </h1><br/>
        <p class="p">Ingrese su correo electónico</p>
        <input type="text" v-model="email" class="field"><br/>
        <p class="p">Ingrese su contraseña</p>
        <input type="password" v-model="password" class="field"><br/>
        <button @click="login()" id="button"> Acceder </button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
      return{
          username:"",
          email:"",
          password: "",
          password2: ""     
      }
    },
    methods:{
        login(){
            console.log("SESIÓN INICIADA")
        }
    }
}
</script>

<style scoped>
.p{
    font-weight: 800;
    color: #FF5758;
    font-size: 20px}
#button{
    width: 200px;
    background-color: #FF5758;
    border: none;
    color:  #ffffff;
    padding: 10px 10px;
    display: inline-block;
    font-size: 18px;
    border-radius: 24px;
    font-weight: 800;
    top: 10px;
    cursor: pointer;
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
}
</style>