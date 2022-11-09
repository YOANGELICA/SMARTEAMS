<template>
    <!-- <Menu/> -->
    <div>
        <h1 style="font-size: 45px; font-weight: 800; color: #FF5758"> Página no encontrada :( </h1>
        <test/>
    </div>
</template>

<script>
import Menu from '@/components/shared/menu.vue';
import test from '@/components/shared/test.vue';
export default{
    name: 'Page404',
    components: {
    Menu,
    test
    }
}
</script>

<style scoped>
</style>