<template>
    <div class="container">
        <h1> Iniciar sesión </h1><br/>
        <p class="p">Ingrese su correo electónico</p>
        <input type="text" v-model="email" class="field"><br/>
        <p class="p">Ingrese su contraseña</p>
        <input type="password" v-model="password" class="field"><br/>
        <button @click="callApi()" class="btn"> Acceder </button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import {smarteamsApi} from '../../api/smarteamsApi';

export default {
    name: 'Login',
    data(){
      return{
          email:"",
          password: "",
          router: useRouter()
      }
    },
    methods:{
        async callApi(){
            try{
                const api = await smarteamsApi.post('/api/auth/login', {email: this.email, password: this.password})
                
                if (api.status == 200){
                        localStorage.setItem("token", api.data.token),
                        localStorage.setItem("user", JSON.stringify(api.data.usuario))
                        console.log(api)
                    
                    this.router.push("/Profile")
                }
                else{
                    throw new Error("usuario inválido") // sale por la variable error
                }
            }
            catch(error){
                alert("Email o contraseña incorrecto")
                console.log(error)
            } 
        }
    }
}
</script>

<style scoped>
.container{
    text-align: center;
    color: #FF5758;
}
h1{
    font-size: 45px;
    font-weight: 800;
    color: #000000
}
.p{
    font-weight: 800;
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
</style>
<!-- 
<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger"> {{error}} </div>
        <form @submit.prevent="Login()">
            <div class="mb-3">
                <label for="email" class="form-label">
                    Email
                </label>
                <input 
                    id="email" type="email" class="form-control"
                    name="email" required autofocus v-model="email"                
                >
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                    id="password" type="password" class="form-control"
                    name="password" required v-model="password"                
                >
            </div>

            <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </div>
        </form>
        <router-link to="/Profile" @click="login()" class="btn"> Acceder </router-link>
        <RouterView />
    </div>
</template>

<script>
import {userStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
    name: 'Login',
    data(){
      return{
          
          email:"",
          error: null,
          password: "",
          store: userStore,
          router: useRouter    
      }
    },
    methods:{
        async login(){
            try {
                await this.store.dispatch('user/logIn', {
                    email: this.email,
                    password: this.password
            })
            router.push('/')
            }
            catch (err){
                this.error =err.message
            }
        }
    },
    mounted(){
        onAuthStateChanged(auth, async(user) =>{
            if (!user) return this.store.dispatch("user/logout");

            await this.store.dispatch('user/logIn', {
                email:this.email,
                password: this.password
            })
        })
    }
}
</script>

<style scoped>
.p{
    font-weight: 800;
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
</style> -->