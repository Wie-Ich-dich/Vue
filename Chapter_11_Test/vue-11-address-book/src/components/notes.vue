<template>
  <div id='search'>
    <div class="search">
        <input type="text" placeholder="请输入搜索联系人" v-model="search"/>
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>
    <p class="all">共有{{ items.length }}个联系人</p>
    <div class="select">
        <input type="radio" name="contacts" checked @click="selectStatu=1">所有联系人
        <input type="radio" name="contacts" @click="selectStatu=2">亲人
        <input type="radio" name="contacts" @click="selectStatu=3">朋友
        <input type="radio" name="contacts" @click="selectStatu=4">同事
    </div>
    <div class="ul" v-if="newItems.length">
        <contactItem v-for="item in newItems" :key="item.id" :item="item" @remove="removeTodo" @change="change"/>
    </div>
    <p class="none" v-else>没有联系人</p>
    <div class="arrow">
        <a href="#search"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
  </div>
</template>

<script>
import contactItem from './noteItem.vue';

export default {
  data(){
    return {
        search:'',
        selectStatu:1
    }
  },
  components: {contactItem},
  props: ['items'],
  computed: {
    newItems:function(){
        if(this.items.length == 0)
            return '';
        if(this.search){
            return this.items.filter((item)=>{
                return (item.name.indexof(this.search) != -1);
            });
        }else {
            switch(this.selectStatu){
                case 1:
                    return this.items;
                    break;
                case 2:
                    return this.items.filter((item)=>{
                        return item.status === '亲人';
                    });
                    break;
                case 3:
                    return this.items.filter((item)=>{
                        return item.status === '朋友';
                    });
                    break;
                default:
                    return this.items.filter((item)=>{
                        return item.status === '同事';
                    });
                    break;
            }
        }
    }
  },
  methods: {
    //这里为什么要这么做，直接用默认的remove方法不好吗？为什么要自己触发一遍？
    removeTodo(id){
        this.$emit('remove',id);
    },
    change(obj){
        this.$emit('change',obj);
    }
  }
}
</script>

<style>
  @import '../assets/css/notes.css';
  @import '../assets/css/fontawesome-free-6.3.0-web/css/fontawesome.min.css';
  @import '../assets/css/fontawesome-free-6.3.0-web/css/solid.min.css';
</style>