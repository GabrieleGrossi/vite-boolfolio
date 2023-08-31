<template>
    <div>
        <div v-for="project in projects">
            <h3>
                {{ project.name }}
            </h3>
            <h5>
                {{  project.goal }}
            </h5>
            <span>
                Tipo di progetto: #{{ project.type.name }} 
            </span>
            <span v-for="technology in project.technologies">
                #{{ project.technologies.name }} 
            </span>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'AppMain',

    data(){
        return{
            project:[],
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
                console.log(response.data.data)
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
<style lang="scss">
    
</style>