<template>
    <menu/>
    <UserBanner userName="John Smith"/>
    <PageTitle title="Proyecto 1"/>
    <ProjectDesc projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    <ProgressBar/>
    <TeamUsers username="Integrante 1" role="Ideador" />
    <TeamUsers username="Integrante 1" role="Ideador" />
    <TeamUsers username="Integrante 1" role="Ideador" />
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy" taskUser="Integrante 1"/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy" taskUser="Integrante 1"/>
    <Task TaskName="Lorem Ipsum sit amet" deadline="dd-mm-yy" taskUser="Integrante 1"/>

</template>

<script>
import Menu from '../shared/Menu.vue';
import UserBanner from './shared/UserBanner.vue';
import PageTitle from '../shared/pageTitle.vue';
import ProjectDesc from '../project-page.vue';
import ProgressBar from './proyect-page/Progress-bar.vue';
import TeamUsers from './proyect-page/Team-users.vue';
import Task from '../shared/Task.vue';

export default{
    name: 'Create-page',
    components: {
    Menu,
    UserBanner,
    PageTitle,
    ProjectDesc,
    ProgressBar,
    TeamUsers,
    Task
    }
}
</script>

<style scoped>
</style>