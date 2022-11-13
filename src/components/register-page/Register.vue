<template>
    <div style="text-align: center; height: 520px; width: 520px; color: #FF5758;">

        <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Regístrate ahora </h1><br/>

        <p>Ingrese su nombre completo: </p>
        <input type="text" v-model="username" class="field"><br/>

        <p>Ingrese su correo electónico: </p>
        <input type="text" v-model="email" class="field"><br/>

        <p>Cree una contraseña: </p>
        <input type="password" v-model="password" class="field"><br/>

        <p>Vuelva a ingresar la contraseña: </p>
        <input type="password" v-model="password2" class="field"><br/>

        <button type="button" class="btn btn-default me-3" @click="tomarTest()"> Tomar Test </button>

        <br/>
        <!-- @crear-usuario="crearUsuario = true" -->
        <!-- <button v-if="crearUsuario" @click="callApi()" class="btn" > Crear usuario </button> -->
        <button @click="callApi()" class="btn" > Crear usuario </button>

        <RouterView />
    </div>
</template>

<script>
import {smarteamsApi} from '../../api/smarteamsApi';
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';


export default {
    name: 'Register',
    data(){
      return{
          username:"",
          email:"",
          password: "",
          password2: "",
          store: useStore(),
          router: useRouter(),
          crearUsuario: false

      }
    },
    computed:{
        rol(){
            return this.store.rol
        }
    },
    methods:{
        tomarTest() {
            this.$emit('tomar-test', true)
            // this.createUsuario = true
        },
        async callApi(){
            if (this.password != this.password2){
                alert("La contraseña debe ser igual en ambos campos")
            } 
            else {
                try{
                    const api = await smarteamsApi.post('/api/auth/new', {name: this.username, email: this.email, password: this.password, role: this.role})

                    if (api.status == 200){
                        this.router.push("/Login")
                    }
                    console.log(api, api.status)
                }
                catch(error){
                    console.log(error)
                } 
            }

        },

    }
}
</script>

<style scoped>
/* .box{
    background-color: #ffffff;
    color: #FF5758;
    text-align: center;
    font-size: 16px;
    font-family: helvetica;
    padding: 0px 5px;
    border-radius: 18px;
    height: 450px;
    width: 350px;
    right: 700px;
    top: 100px
} */
p{
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
}
.date-form{
  width: 150px;
  background-color: #EBE9E9;
  color: #5c5c5c;
  padding: 10px 5px;
  margin: 10px 0;
  border: none;
  border-radius: 24px;
  cursor: pointer;
}
</style>