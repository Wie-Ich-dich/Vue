<template>
  <div class="li">
    <div v-if="show">
      <div class="text">
        <img :src="item.imgSrc" alt="userprofile"/>
        <div>
          <h1 class="name">{{ item.name }}</h1>
          <p class="tel">{{ item.tel }}</p>
        </div>
      </div>
      <button class="edit" @click="show=false"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="delete" @click="toRemove"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <div v-else>
      <div class="text">
        <img :src="item.imgSrc" alt="userprofile"/>
        <div>
          <input type="text" class="name" v-model="name"/>
          <input type="text" class="tel" v-model="tel"/>
        </div>
      </div>
      <button class="save" @click="SAVE"><i class="fa-solid fa-check"></i></button>
      <button class="return" @click="RETURN"><i class="fa-solid fa-xmark"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data(){
    return {
      show:true,
      name:this.item.name,
      tel:this.item.tel,
      oldName:this.item.name,
      oldTel:this.item.tel
    };
  },
  methods: {
    //这里几个方法都是通过emit触发事件，这和父组件那边传的函数有关；
    //信息卡里面如果点击了垃圾桶标识，就会执行这个函数，然后触发remove事件，父组件notes接收到了之后又触发上一级的remove事件；
    toRemove(){
      this.$emit('remove',this.item.id);
    },
    SAVE(){
      this.show=true;
      this.$emit('change',{
        id:this.item.id,
        name:this.name,
        tel:this.tel
      });
    },
    RETURN(){
      this.show=true;
      this.name=this.oldName;
      this.tel=this.oldTel;
    }
  }
}
</script>

<style>
  @import '../assets/css/fontawesome-free-6.3.0-web/css/fontawesome.min.css';
  @import '../assets/css/fontawesome-free-6.3.0-web/css/solid.min.css';

.li {
  width: 220px;
  margin-right: 48px;
  margin-bottom: 25px;
  height: 58px;
  display: inline-block;
}
.li .text {
  width: 163px;
  padding: 3px 0;
  padding-left: 5px;
  display: inline-block;
}
.text>div {
  margin-top: 3px;
  display: inline-block;
  vertical-align: middle;
}
.text img {
  width: 50px;
  height: 50px;
  margin-right: 2px;
  vertical-align: middle;
  border-radius: 50%;
}

.text input {
  display: block;
  border: none;
}
.text .name {
  width: 100px;
  margin-bottom: 3px;
  font-size: 18px;
  margin-top: 0;
}
.text .tel {
  width: 100px;
  margin: 0;
  font-size: 15px;
}

.li button {
  height: 32px;
  padding: 0;
  margin-top: 11px;
  border: none;
  color: #0f88eb;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  display: none;
}

.delete {
  color: rgb(216,17,17) !important;
}
.save, .edit {
  margin-right: 3px;
}
.li button:focus, .text input:focus {
  outline: none;
}
.li i {
  font-size: 20px;
}
.li:hover {
  border: 1px dashed #0f88eb;
  border-radius: 5px;
}
.li:hover button {
  display: inline-block;
}
</style>