<template>
    <!-- <Menu/> -->
    <!-- <router-link to="/Profile"> MI PERFIL </router-link> -->
    <h1 style="font-weight: 800; color:#FF5758; font-size:50px"> ¡Bienvenid@ a Smarteams! </h1> <br/>
    <p style="font-weight: 500; font-size:20px"> Una plataforma para crear equipos imparables. </p><br/>
    <router-link to="/Register" class="btn"> Registrarse </router-link><br/>
    <p style="font-style: italic; font-size:16px; color:#FF5758"> O, si ya tienes una cuenta... </p><br/>
    <router-link to="/Login" class="btn"> Iniciar sesión </router-link>
    <RouterView />
</template>

<script>
import Menu from '@/components/shared/menu.vue';

export default{
    name: 'HomePage',
    components: {
    Menu,
    }
}
</script>

<style scoped>

.btn{
  width: 200px;
  background-color: #FF5758;
  color: #ffffff;
  padding: 10px 5px;
  margin: 10px 0;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 800;
  font-size: 20px;
  text-align:center;
}
</style>