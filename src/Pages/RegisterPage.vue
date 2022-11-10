<template>
    <!-- <Menu/> -->
    <div >
        <Register id="reg"/>
    </div>
    <div>
        <test/>
    </div>
    <!-- <router-link to="/Profile"> MI PERFIL </router-link>
    <RouterView/> -->
</template>

<script>
import Register from '@/components/register-page/Register.vue';
import Menu from '@/components/shared/menu.vue';
import test from '@/components/shared/test.vue';

export default{
    name: 'RegisterPage',
    components: {
    Register,
    Menu,
    test
    }
}
</script>

<style scoped>
</style>