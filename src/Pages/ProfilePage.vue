<template>
    <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Mi perfil </h1><br/>
    <div class="float-container">
        <div class="float-child">
            <UserInfo  :username="user.name" :useremail="user.email"/>
            <div style="height:20px;"></div>
            <router-link to="/Create" id="create-btn"> + Crear un equipo </router-link>
            <RouterView />
            <div style="height:40px;"></div>
            <h2> Mis proyectos </h2>
            <UserProject v-for="proyecto in proyectos" :projectname="proyecto.equipo.title" :pid="proyecto.equipo._id"/>
        </div>
        <div class="float-child" >
            <!-- <Desarrollador/> -->
            <Clarificador/>
            <!-- <Ideador/> -->
            <!-- <Implementador/> -->
            <div style="height:40px;"></div>
            <h2> Mis tareas asignadas </h2>
            <Task v-for="task in tasks" :TaskName="task.title" :deadline="task.deadline"/>
            <br/>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/shared/menu.vue';
import UserInfo from '@/components/profile-page/UserInfo.vue';
// import UserRole from '@/components/profile-page/UserRole.vue';
import Desarrollador from '@/components/profile-page/DesarrolladorRole.vue';
import Clarificador from '@/components/profile-page/ClarificadorRole.vue';
import Ideador  from '@/components/profile-page/IdeadorRole.vue';
import Implementador from '@/components/profile-page/ImplementadorRole.vue';
import UserProject from '@/components/profile-page/UserProject.vue';
import Task from '@/components/shared/Task.vue';

import {smarteamsApi} from '@/api/smarteamsApi';
import { useRouter } from 'vue-router';


export default{
    name: 'ProfilePage',
    components: {
    Menu,
    UserInfo,
    // UserRole,
    Desarrollador,
    Clarificador,
    Ideador,
    Implementador,
    UserProject,
    Task
    },
    data(){
        return {
            user: JSON.parse( localStorage.getItem("user")),
            router: useRouter(),
            proyectos: [],
            tasks: [],
            title:"",
            deadline:""
        }
    },
    methods:{
        async callApi(){
            try{
                const api = await smarteamsApi.get('/api/equipos/list', {headers: {
                                                                        'x-token': localStorage.getItem('token')}
                                                                        })
                if (api.status == 200){
                    // console.log(api)
                        this.proyectos = api.data.equipos
                    }
                }
                catch(error){
                    console.log(error)
                }
            },
        async callApiTasks(){
            try{
                const api = await smarteamsApi.get('/api/task/list', {headers: {
                                                                     'x-token': localStorage.getItem('token')}
                                                                    })
                if (api.status == 200){
                    console.log(api)
                        this.tasks = api.data.tasks
                        splitDeadline()
                    }
                }
                catch(error){
                    console.log(error)
                }
        },
        splitDeadline(){
            return this.deadline.split("T", 1)[0]
        }
    },
    mounted(){
        this.callApi()
        this.callApiTasks()
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
    font-size: 18px;
    padding: 1em;
    min-height: 500px;
}  
h2{
    font-weight: 750;
    font-size:30px;
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
    font-size: 25px;
    font-weight: 800;
    top:20px;
    bottom:20px;
}
</style>