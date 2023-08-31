<script>
import axios from 'axios';
export default {
    name:'AppMain',

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
    <div class="projects">
        <div v-for="project in this.projects" class="single-project"> 
            <h2>
                {{ project.name }}
            </h2>
            <h5>
                {{  project.goal }}
            </h5>
            <h6>
                Tipo di progetto: #{{ project.type.name }}
            </h6>
            <span v-for="technology in project.technologies">
                #{{ technology.name }} 
            </span>
        </div>
    </div>
</template>
<style lang="scss">
    div.projects{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        div.single-project{
            width: calc((100% / 5) - 1rem);
            height: 350px;
            border-radius: 1rem;
            padding: 1rem;
            margin-right: 1rem;
            background-color: rgb(221, 221, 221);
            color: black;
            margin-bottom: 2rem;
            *{
                margin-bottom: 1rem;
            }
            h6, span{
                margin-right: 1rem;
            }
            &:hover{
                background-color: white;
            }
        }
    }
</style>