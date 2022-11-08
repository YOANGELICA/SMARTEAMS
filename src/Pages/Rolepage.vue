<template>
    <!-- <div class="menu">
      <Menu/>
    </div> -->
    <h1> Elige tu perfil </h1>      
    <div class="float-container">

      <div class="float-child">
        <img src="@/assets/student-icon.png" style="height: 300px; width: 300px;"/>
        <span class="caption"> Estudiante </span>
      </div>

      <div class="float-child">
        <img src="@/assets/teacher-icon.png" style="height: 300px; width: 300px"/>
        <span class="caption"> Docente </span>
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
    font-size: 50px;
    color: #000;
    text-align: center;
    margin: 0 0 8px;
  }
  .caption{
    font-weight: 800; 
    font-size: 40px;
    color: #FF5758;
    display: block;
  }
  .float-container {
      border: 3px solid rgb(255, 255, 255);
      padding: 20px;
      width: 1200px;
  }
  .float-child {
      vertical-align: top;
      display: inline-block;
      text-align: center;
      align-items: center;
      width: 50%;
  }  
  </style>