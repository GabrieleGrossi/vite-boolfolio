<template>
    <div>
        <h1>
            Main 
        </h1>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'AppMain',

    data(){
        return{
            project:[

            ],
            apiUrl:'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getProjects(){
            //qui prendiamo i vari progetti creati

            axios.get(this.apiUrl,{
                params:{}
            })
            .then(function (response){
                console.log(response)
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