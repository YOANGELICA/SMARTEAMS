<template>
    <Menu/>
    <!-- <UserInfo username="John Smith" email="john.smith@gmail.com"/>
    <UserRole role="Ideador" roleInfo="Un pensador flexible, le gusta expandir sus ideas y ama innovar"/> -->
    <router-link to="/Create"> CREATE </router-link>
    <RouterView />
    <!-- <UserProject projectName="Proyecto 1" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    <UserProject projectName="Proyecto 2" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/> -->

</template>

<script>
import Menu from '@/components/shared/menu.vue';
import UserInfo from '@/profile-page/UserInfo.vue';
import UserRole from '@/profile-page/UserRole.vue';
import UserProject from '@/profile-page/UserProject.vue';
import CreateButton from '@/profile-page/CreateButton.vue';
import Task from '@/components/shared/Task.vue';

export default{
    name: 'ProfilePage',
    components: {
    Menu,
    UserInfo,
    UserRole,
    UserProject,
    CreateButton,
    Task
}
}
</script>

<style scoped>
</style>