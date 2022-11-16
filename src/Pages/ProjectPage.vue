<template>
    <h1 style="font-size: 45px; font-weight: 800; color: #000000"> {{title}} </h1> <br/>

    <div class="float-container">
        <div class="float-child">
            <h2> Descripción </h2>
            <ProjectDesc :desc="desc"/>
            <br/>
            <h2> Integrantes </h2>
            <TeamUsers v-for="x in usuarios" :username="x.user.name"/>

        </div>
        <div class="float-child">
            <h2> Fecha límite: </h2>
            <p> {{deadline}} </p>
            <router-link :to="'/AddTask/'+pid" id="add-btn"> + Añadir una tarea </router-link><br/>
            <div style="height:40px;"></div>
            <h2> Tareas asignadas </h2>
            <!-- <Task TaskName="Investigar antecedentes" taskUser="John Smith" deadline="27-11-22"/><br/> -->
            <!-- <Task TaskName="Redactar introducción" taskUser="Luis Perez" deadline="30-11-22"/><br/> -->
            <Task v-for="task in tasks" :TaskName="task.title" :taskUser="task.user?.name" :deadline="task.deadline"/>
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
import { useRoute } from 'vue-router';

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
            route: useRoute(),
            usuarios: [], 
            tasks: [],
            title: "",
            deadline:"",
            desc:"",
        }
    },
    methods:{
        async callApi(){
            try{
                const api = await smarteamsApi.get('/api/equipos/listUsers/'+ this.$route.params.id, {headers: {'x-token': localStorage.getItem('token')}})
                if (api.status == 200){
                    // console.log(this.$route)
                        this.usuarios = api.data.usuarios
                    }
                }
                catch(error){
                    console.log(error)
                }
            },
        async callApiTasks(){
            try{
                const api = await smarteamsApi.get('/api/task/listPtasks/'+ this.$route.params.id ,{headers: {'x-token': localStorage.getItem('token')}})
                if (api.status == 200){
                    console.log(api.data)
                        this.tasks = api.data.tasks
                    }
                }
                catch(error){
                    console.log(error)
                }
        },
        async callApiInfo(){
            try{
                const api = await smarteamsApi.get('/api/equipos/show/'+ this.$route.params.id, {headers: {'x-token': localStorage.getItem('token')}})
                if (api.status == 200){
                        this.title = api.data.equipos.title
                        var a = api.data.equipos.deadline
                        this.deadline = a.split("T", 1)[0]
                        this.desc = api.data.equipos.description
                        // console.log(api)
                    }
                }
                catch(error){
                    console.log(error)
                }
        }
    },
    computed: {
        pid(){
            return this.$route.params.id
        }
    },
    mounted(){
        this.callApi()
        this.callApiTasks()
        this.callApiInfo()
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