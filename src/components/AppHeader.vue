<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'homepage' }" >
                        Homepage
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects.index' }" >
                        Projects
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects.show' }" >
                        SingleProject
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name:'AppHeader'
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