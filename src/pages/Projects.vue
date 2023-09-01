<template>
    <div>
        <h1>
            Projects
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur doloremque ad reprehenderit ut voluptate quis, inventore tempora! Totam possimus tempore nisi at nam a reiciendis eligendi corporis impedit exercitationem.
            Nihil iste consequuntur iusto sapiente eius facilis ipsam repellat? Error dolorum voluptas pariatur molestias expedita excepturi debitis, deserunt ex nisi vero veritatis. Amet quia commodi reiciendis at temporibus, reprehenderit consequuntur!
            Soluta ea rem, exercitationem eaque minima, quas laudantium quo dolores sint libero ipsum atque quis itaque commodi enim. Esse similique dolore, impedit facilis autem doloremque hic tenetur saepe officia ducimus.
            Dicta minus quas asperiores quia quo quibusdam ex omnis possimus ipsam cupiditate a aspernatur reiciendis nobis qui eligendi ea perferendis illum ab eveniet architecto, fugit incidunt quae mollitia? Corporis, molestiae!
            Nisi illo nostrum eveniet asperiores soluta ducimus, quae voluptatibus nulla consequuntur culpa enim expedita? Ipsa modi laborum hic aperiam! Excepturi odio quia quam libero, voluptatum ducimus minus facilis numquam praesentium!
        </p>
    </div>
</template>
<script>
import axios from 'axios';
import SingleProject from '../components/SingleProject.vue';

export default {
    name: 'Projects',
    components:{
        SingleProject,
    },
    data(){
        return{
            apiUrl:'http://127.0.0.1:8000/api/projects',
            project: false
        }
    },
    methods:{
        getSingleProject(){
            console.log(this.$route)
        }
    },
    created() {
        this.getSingleProject();
    },
    
}
</script>
<style lang="scss">
    
</style>