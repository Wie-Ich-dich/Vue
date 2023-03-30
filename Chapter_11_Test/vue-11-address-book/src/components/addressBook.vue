<template>
  <div id="addressBook">
    <div class="head">
        <div class="logo">
            <img src="../assets/img/logo.png" alt="logo">
        </div>
        <div class="welcome">
            <span class="name">{{ own.name }}</span>，欢迎您！
            <div class="img">
                <img src="../assets/img/profile.jpg" alt="profile">
            </div>
        </div>
    </div>
    <div class="lside">
        <ul>
            <li :class="{'act':clickId==1}" @click="clickId=1">
                <router-link to="/contacts">
                    <i class="fa-solid fa-address-book"></i>通讯录
                </router-link>
            </li>
            <li :class="{'act':clickId==2}" @click="clickId=2">
                <router-link to="/contacts/add">
                    <i class="fa-solid fa-bars"></i>新建联系人
                </router-link>
            </li>
            <li :class="{'act':clickId==3}" @click="clickId=3">
                <router-link to="/contacts/own">
                    <i class="fa-solid fa-user"></i>个人中心
                </router-link>
            </li>
        </ul>
        <div class="out" @click="out"><i class="fa-solid fa-gear"></i>退出登录</div>
    </div>
    <div class="rside">
        <!-- 这些属性是什么意思？？？ 后面几个传的都是函数-->
        <router-view :items="items" :own="own" @remove="removeItem" @add="addItem" @change="changeItem" @changeOwn="changeOwn"></router-view>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';

export default {
  data(){
    return {
        clickId:1
    }
  },
  computed: mapState({//这里的写法要学习学习！！！
    own:state=>state.contacts.own,
    items:state=>state.contacts.items
  }),
  beforeCreate(){
    this.$store.dispatch('userInit');//这里用userInit是因为mapAction没有弄出来；
  },
  methods: {
    ...mapActions([//为什么在addressBook这个父组件就解构出来，然后通过属性传参的方式将这些函数传到子组件中？
        'signOut',
        'userAdd',
        'userRemove',
        'userChange',
        'ownChange'
    ]),
    addItem(item){
        this.userAdd(item);
    },
    removeItem(id){
        this.userRemove(id);
    },
    changeItem(obj){
        this.userChange(obj);
    },
    changeOwn(obj){
        this.ownChange(obj);
    },
    out(){
        this.signOut();
        this.$router.replace('/home/login');
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/fontawesome-free-6.3.0-web/css/fontawesome.min.css';
  @import '../assets/css/fontawesome-free-6.3.0-web/css/solid.min.css';
  @import '../assets/css/addressBook.css'
</style>