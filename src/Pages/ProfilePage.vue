<template>
    <menu/>
    <UserBanner userName="John Smith"/>
    <PageTitle title="Mi Perfil"/>
    <UserInfo username="John Smith" email="john.smith@gmail.com"/>
    <UserRole role="Ideador" roleInfo="Un pensador flexible, le gusta expandir sus ideas y ama innovar"/>
    <CreateButton href="link"/>
    <UserProyect projectName="Proyecto 1" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    <UserProyect projectName="Proyecto 2" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/>

</template>

<script>
import Menu from '../shared/Menu.vue';
import PageTitle from '../shared/pageTitle.vue';
import UserInfo from './profile-page/UserInfo.vue';
import UserBanner from '../shared/UserBanner.vue';
import UserRole from '../profile-page/UserRole.vue';
import UserProyect from '../profile-page/UserProyect.vue';
import CreateButton from '../profile-page/CreateButton.vue';
import Task from '../shared/Task.vue';

export default{
    name: 'Create-page',
    components: {
    Menu,
    UserBanner,
    PageTitle,
    UserInfo,
    UserRole,
    UserProyect,
    CreateButton,
    Task
}
}
</script>

<style scoped>
</style>