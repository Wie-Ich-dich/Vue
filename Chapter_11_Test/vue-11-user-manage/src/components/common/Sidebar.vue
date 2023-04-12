<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      router
      background-color="#545c64"
      text-color="#fff"
      unique-opened>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    {{ onRoutes }}
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {
          icon:'el-icon-setting',
          index:'readme',
          title:'系统功能简介'
        },{
          icon:'el-icon-setting',
          index:'userCenter',
          title:'个人中心设置',
          subs:[{
              index:'userCenter',
              title:'查看个人信息'
            },{
              index:'modifyUser',
              title:'修改个人信息'
            },{
              index:'modifyPassword',
              title:'修改个人密码'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes(){ //不知道为什么要弄这个东西？？？？
      return this.$route.path.replace('/','');
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 250px;
  left: 0px;
  top: 70px;
  bottom: 0px;
  background-color: #2E363F;
}
.sidebar>ul {
  height: 100%;
}
</style>