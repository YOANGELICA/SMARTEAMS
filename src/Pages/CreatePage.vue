<template>
    <menu/>
    <UserBanner userName="John Smith"/>
    <PageTitle title="Crear un equipo"/>
    <Create/>
</template>

<script>
import PageTitle from '../shared/pageTitle.vue';
import Create from '../create-page/Create.vue';
import Menu from '../shared/Menu.vue';
import UserBanner from '../shared/UserBanner.vue';

export default{
    name: 'Create-page',
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