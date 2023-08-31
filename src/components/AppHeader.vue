<template>
    <div>
        <nav>
            <ul>
                <li>
                    <a href="#">
                        Homepage
                    </a>
                </li>
                <li>
                    <a href="#">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#">
                        SingleProject
                    </a>
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
    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    }
    li{
        font-size: 2rem;
    }
</style>