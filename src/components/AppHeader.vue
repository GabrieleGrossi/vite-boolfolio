<template>
    <div>
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link :to="{name: link.route}" >
                        {{link.name}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name:'AppHeader',
    data(){
        return{
            links:[
                {
                    route:'homepage',
                    name: 'HomePage'
                },
                {
                    route:'projects.index',
                    name: 'Projects'
                },
                {
                    route:'projects.show',
                    name: 'SingleProjects'
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    nav{
        background-color: rgb(221, 221, 221);
        border-radius: 1rem;
        height: 100px;
    }
    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding: 1.2rem;
    }
    li{
        font-size: 2rem;
    }
</style>