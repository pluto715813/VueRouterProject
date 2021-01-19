<template>
    <div class="container">
        <el-col :span="3">
            <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">

                <el-menu-item index="1">
                    <router-link class="nav-link" :to="{name:'shutterstockLink'}">ShutterStock</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link class="nav-link" :to="{name:'depositphotosLink'}">Depositphotos</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link cla class="nav-link" :to="{name:'123rfLink'}">123rf</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link class="nav-link" :to="{name:'bigstockphotoLink'}">bigstockphoto</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <router-link class="nav-link" :to="{name:'istockphotoLink'}">iStockphoto</router-link>
                </el-menu-item>
                <el-menu-item index="6">
                    <router-link class="nav-link" :to="{name:'dreamstimeLink'}">Dreamstime</router-link>
                </el-menu-item>
                <el-menu-item index="7">
                    <router-link class="nav-link" :to="{name:'adobestockLink'}">Adobestock</router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
