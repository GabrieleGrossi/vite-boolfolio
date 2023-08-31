<template>
    <h1>
        Latest Projects:
    </h1>
    <div class="projects">
        <SingleProject class="single-project" v-for="project in projects" :project='project'/>
    </div>
</template>
<script>
import SingleProject from './SingleProject.vue';

export default {
    name: 'ProjectList',
    components: { 
        SingleProject
    },
    props:{
        'projects': Array
    }
}
</script>
<style lang="scss" scoped>
     div.projects{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>