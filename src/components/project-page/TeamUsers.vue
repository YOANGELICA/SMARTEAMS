<template>
    <div class="main-container">
        <div class="right-container" style="width: 25%; height: 100%;float:left; ">
            <img src="@/assets/icon-image.png" style="height: 70px; width:70px">
        </div>
        <div class="left-container" style="width: 75%; height: 100%; float:right; ">
            <p to="/Profile" style=" font-weight: 750; font-size: 25px; color:black; margin:0px"> {{username}} </p>
            <p to="/Profile" style=" font-size: 20px; color:black;"> {{useremail}} </p>
        </div>
    </div>
    <br/>
</template>

<script>
    export default {
        props: {
            "username": String,
            "useremail": String
        },
        name: 'TeamUsers',
    }
</script>

<style scoped>
    .main-container {
        height: 100px;
        width: 450px;
        /* background-color: #f7f7f7; */
        background-color: #ffffff;
        color:#000;
        border-radius: 24px;
        padding: 20px;
        /* box-shadow: 10px 10px 10px #f0f0f0; */
    }
</style>