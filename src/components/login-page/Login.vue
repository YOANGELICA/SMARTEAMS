<!-- <template>
    <div style="text-align: center; color: #FF5758;">
        <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Iniciar sesión </h1><br/>
        <p class="p">Ingrese su correo electónico</p>
        <input type="text" v-model="email" class="field"><br/>
        <p class="p">Ingrese su contraseña</p>
        <input type="password" v-model="password" class="field"><br/>
        <router-link to="/Profile" @click="login()" class="btn"> Acceder </router-link>
        <RouterView />
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
</style>