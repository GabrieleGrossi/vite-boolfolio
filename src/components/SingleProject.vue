<template>
    <div class="single-project"> 
        <h2>
            {{ project.name }}
            console.log(project.name)
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
</template>
<script>
export default {
    name: 'SingleProject',
    props:{
        'project': Object
    }
}
</script>
<style lang="scss" scoped>
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
</style>