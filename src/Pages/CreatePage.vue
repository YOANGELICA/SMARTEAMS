<template>
    <!-- <Menu/> -->
    <!-- <router-link to="/Profile"> MI PERFIL </router-link>
    <RouterView /> -->
    <div style="clear: both;"></div>
    <Create id="create"/>
</template>

<script>
import Create from '@/components/create-page/Create.vue';
import Menu from '@/components/shared/menu.vue';

export default{
    name: 'CreatePage',
    components: {
    Create,
    Menu,
    }
}
</script>

<style scoped>

</style>