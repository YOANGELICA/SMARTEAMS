<template>
    <h1 style="font-size: 45px; font-weight: 800; color: #000000"> Proyecto 1 </h1> <br/>
    <!-- <h1 style="font-size: 45px; font-weight: 800; color: #000000"> {{equipo.title}} </h1> <br/> -->

    <div class="float-container">
        <div class="float-child">
            <h2> Descripción </h2>
            <ProjectDesc desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <!-- <ProjectDesc :desc="equipo.description"/> -->
            <br/>
            <h2> Integrantes </h2>
            <TeamUsers v-for="x in usuarios" :username="x.usuario.name"/>
            <!-- <TeamUsers username="Integrante 2"/>  -->
        </div>
        <div class="float-child">
            <h2> Fecha límite: </h2>
            <!-- <p> {{equipo.deadline}} </p> -->
            <router-link to="/AddTask" id="add-btn"> + Añadir una tarea </router-link><br/>

            <div style="height:40px;"></div>

            <h2> Tareas asignadas </h2>
            <!-- <Task TaskName="Lorem Ipsum sit amet" taskUser="Integrante 1" deadline="dd-mm-yy"/><br/> -->
            <Task v-for="x in tasks" :TaskName="x.task.title" :taskUser="x.task.user" :deadline="x.task.deadline"/>
        </div>
    </div>
    <RouterView/>

</template>

<script>
import Menu from '@/components/shared/menu.vue';
import ProjectDesc from '@/components/project-page/ProjectDesc.vue';
import TeamUsers from '@/components/project-page/TeamUsers.vue';
import Task from '@/components/shared/Task.vue';
import {smarteamsApi} from '@/api/smarteamsApi';
import { useRouter } from 'vue-router';

export default{
    name: 'ProjectPage',
    components: {
    Menu,
    ProjectDesc,
    TeamUsers,
    Task
    },
    data(){
        return {
            equipo: JSON.parse( localStorage.getItem("equipo")),
            router: useRouter(),
            usuarios: [],
            tasks: [],

        }
    },
    methods:{
        async callApi(){
            try{
                const api = await smarteamsApi.get('/api/equipos/listUsers/:id', {headers: {'x-token': localStorage.getItem('token')}})
                if (api.status == 200){
                    console.log(api)
                        this.usuarios = api.data.usuarios // USUARIOS SALE VACÍO
                    }
                }
                catch(error){
                    console.log(error)
                }
            },
        async callApiTasks(){
            try{
                const api = await smarteamsApi.get('/api/task/listPtasks', {headers: {'x-token': localStorage.getItem('token')}})
                if (api.status == 200){
                        this.tasks = api.data.tasks
                    }
                }
                catch(error){
                    console.log(error)
                }
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
    border: 3px solid rgb(255, 255, 255);
    padding: 20px;
    width: 1200px;
}
.float-child {
    width: 50%;
    float: left;
    padding: 20px;
    border: none;
    background-color: #ffffff;
    color: #FF5758;
    text-align: left;
    font-size: 18px;
    padding: 1em;
    border-radius: 18px;
}
h2{
    font-weight: 800;
    font-size: 28px;
}
#add-btn{
    /* width: 89px; */
    background-color: #FF5758;
    color: #ffffff;
    padding: 15px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 800;
    top:20px;
    bottom:20px;
}
</style>