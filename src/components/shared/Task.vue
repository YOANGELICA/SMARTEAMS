<template>
    <div class="main-container" >
        <div class="right-container" style="width: 10%; height: 100%;float:left; ">
            <img src="@/assets/icon-image.png" style="height: 30px; width:30px">
            <!-- esto tendría que ser un boton de seleccionar sdfbjkdfnkas -->
        </div>
        <div class="left-container" style="width: 90%; height: 100%; float:right; ">
            <h2 style=" font-weight: 750; font-size: 25px;"> {{TaskName}} </h2>
            <p> {{taskUser}} <br/> fecha límite: {{deadline}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            "TaskName": String,
            "taskUser": String,
            "deadline": String
        },
        name: 'Task',
    }
</script>

<style scoped>
    .main-container {
        height: 120px;
        width: 450px;
        background-color: #f1f1f1;
        color:#000000;
        border-radius: 24px;
        padding: 13px 20px;
        /* box-shadow: 10px 10px 10px #e3e3e3; */
    }
</style>