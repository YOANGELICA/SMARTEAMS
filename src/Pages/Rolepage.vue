<template>
    <!-- <div class="menu">
      <Menu/>
    </div> -->
    <h1> Elige tu perfil </h1>
    <div class="float-container">
      <div class="float-child">
        <img src="@/assets/student-icon.png" style="height: 300px; width: 300px;"/>
        <h1> Estudiante </h1>
      </div>
      <div class="float-child" id="img" style="position: relative;">
        <div class="center">
            <img src="@/assets/teacher-icon.png" style="height: 300px; width: 300px"/>
        </div>
        <h1> Docente </h1>
    </div>
    </div>

    <RouterView />
</template>
  
  <script>
  import Menu from '@/components/shared/menu.vue';
  
  export default{
      name: 'RolePage',
      components: {
      Menu,
      }
  }
  </script>
  
  <style scoped>
  h1{
    font-weight: 800; 
    font-size:50px
  }
  .float-container {
      border: 3px solid rgb(255, 255, 255);
      padding: 20px;
      width: 1200px;
  }
  .float-child {
      float: left;
      padding: 30px;
      border: 2px solid #fff;
      display: flex;
      justify-content: center;
  }  
  .center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
  #img{
    text-align: right;
  }
  </style>