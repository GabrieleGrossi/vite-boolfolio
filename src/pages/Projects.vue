<template>
    <h1>
        Latest Projects:
    </h1>
    <div class="projects">
        <SingleProject class="single-project" v-for="project in projects" :project='project'/>
    </div>
</template>
<script>
import axios from 'axios';
import SingleProject from '../components/SingleProject.vue';

export default {
    name: 'Projects',
    components: { 
        SingleProject
    },
    data(){
        return{
            projects: [],
            apiUrl:'http://127.0.0.1:8000/api/projects',
        }
    },

    methods: {
        getProjects(){
            //qui prendiamo i vari progetti creati

            axios.get(this.apiUrl,{
                params:{}
            })
            .then( (response) =>{
                //console.log(response.data.data)
                this.projects = response.data.results.data;
                //console.log(response.data.results.data[0].technologies)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
    created(){
        this.getProjects();
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