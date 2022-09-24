<template>
    <!-- <Menu/> -->
    <div class="float-container">
        <div class="float-child">
            <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Mi perfil </h1><br/>
            <!-- <UserInfo username="John Smith" email="john.smith@gmail.com"/> -->
            <router-link to="/Create" id="create-btn"> + Crear un equipo </router-link>
            <RouterView />
            <h2> Mis proyectos </h2>
            <!-- <UserProject projectName="Proyecto 1" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <UserProject projectName="Proyecto 2" projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/> -->
        </div>
        <div class="float-child">
            <!-- <UserRole role="Ideador" roleInfo="Un pensador flexible, le gusta expandir sus ideas y ama innovar"/> -->
            <h2> Tareas asignadas </h2>
            <!-- <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/>
            <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/>
            <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy"/> -->
        </div>
    </div>
</template>

<script>
import Menu from '@/components/shared/menu.vue';
import UserInfo from '@/components/profile-page/UserInfo.vue';
import UserRole from '@/components/profile-page/UserRole.vue';
import UserProject from '@/components/profile-page/UserProject.vue';
import Task from '@/components/shared/Task.vue';

export default{
    name: 'ProfilePage',
    components: {
    Menu,
    UserInfo,
    UserRole,
    UserProject,
    Task
}
}
</script>

<style scoped>
.float-container {
    /* border: 3px solid rgb(255, 255, 255); */
    border: none;
    padding: 20px;
    width: 1200px;
    min-height: 500px;
}
.float-child {
    width: 50%;
    float: left;
    padding: 20px;
    /* border:none; */
    background-color: #ffffff;
    color: #000000;
    text-align: left;
    font-size: 18px;
    padding: 1em;
    min-height: 500px;

}  
h2{
    font-weight: 750;
    
}
#create-btn{
    width: 100px;
    background-color: #FF5758;
    color: #ffffff;
    padding: 15px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-size: 30px;
    font-weight: 800;
    bottom:20px;
}
</style>