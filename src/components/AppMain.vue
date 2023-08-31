<script>
import ProjectList from './ProjectList.vue';
import axios from 'axios';

export default {
    name:'AppMain',

    components:{
        ProjectList
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
                this.projects = response.data.data;

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

<template>
    <ProjectList :projects="'projects'"/>
</template>
<style lang="scss">
   
</style>