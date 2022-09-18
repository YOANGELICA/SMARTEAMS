<template>
    <!-- <Menu/> -->
    <!-- <router-link to="/Profile"> MI PERFIL </router-link>
    <RouterView /> -->
    <UserBanner userName="John Smith"/>
    <PageTitle title="Crear un equipo"/>
    <Create id="create"/>
</template>

<script>
import PageTitle from '@/components/shared/pageTitle.vue';
import Create from '@/components/create-page/Create.vue';
import Menu from '@/components/shared/menu.vue';
import UserBanner from '@/components/shared/UserBanner.vue';

export default{
    name: 'CreatePage',
    components: {
    PageTitle,
    Create,
    Menu,
    UserBanner
    }
}
</script>

<style scoped>

</style>