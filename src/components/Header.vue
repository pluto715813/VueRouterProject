<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><router-link class="nav-link" :to="{name:'homeLink'}">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{name:'aboutLink'}">About</router-link></li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><router-link class="nav-link" :to="{name:'loginLink'}">登录</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{name:'registerLink'}">注册</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>

    // export default{
    //     data(){
    //         return {
    //             homeLink : "/",
    //             aboutLink : "/about",
    //             loginLink : "/login",
    //             registerLink : "/register",
    //         }
    //     }
    // }

</script>

<style>

</style>