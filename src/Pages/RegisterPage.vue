<template>
    <!-- <Menu/> -->
    <div class="row mb-5 pb-5" >
        <div class="col-12 d-flex justify-content-center">
            <Register @tomar-test="tomarTest = true"/>  
        </div>
    </div>
    <div class="row"> 
        <div class="col-12">
            <test v-if="tomarTest"/>
        </div>
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
    },
    data() {
        return {
            tomarTest: false
        }
    }
}
</script>

<style scoped>
</style>