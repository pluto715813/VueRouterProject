<template>
    <div>
        <h1>home</h1>
        <div @click="Jump" class="btn btn-success">跳转</div>
    </div>
</template>

<script>

export default {
    methods:{
        Jump(){

            // this.$router.replace('/about');//指定跳转地点
            // this.$router.go(-1);//返回上一级
            // this.$router.replace({name:'aboutLink'});//指定路由名称的name属性名称

            // this.$router.push('about');
            this.$router.push('about');

        }
    }
}

</script>