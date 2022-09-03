<template>
    <menu/>
    <PageTitle title="Regístrate ahora"/>
    <Register/>
</template>

<script>
import PageTitle from '../shared/pageTitle.vue';
import Register from '../register-page/Register.vue';
import Menu from '../shared/Menu.vue';

export default{
    name: 'Create-page',
    components: {
    PageTitle,
    Register,
    Menu,
    }
}
</script>

<style scoped>
</style>