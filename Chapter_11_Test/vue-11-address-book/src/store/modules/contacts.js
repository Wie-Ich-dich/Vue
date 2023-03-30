import Vue from 'vue';
import router from '../../router';

const USER_INIT='USER_INIT';
const USER_ADD='USER_ADD';
const USER_REMOVE='USER_REMOVE';
const USER_CHANGE='USER_CHANGE';
const OWN_CHANGE='OWN_CHANGE';
var contactId=0;

export default {
    state:{
        items:[],
        own:{}
    },
    mutations:{
        [USER_INIT](state,info){
            state.items=info.items;
            state.own=info.own;
        },
        [USER_ADD](state,user){
            user.id=contactId++;
            user.imgSrc='/static/img/userImg.jpeg';
            state.items.push(user);
            localStorage.items=JSON.stringify(JSON.parse(localStorage.items).push(user));
        },
        [USER_REMOVE](state,userId){
            state.items=state.items.filter(function(item){
                return item.id !== userId;
            });
        },
        [USER_CHANGE](state,user){
            for(var key in state.items){//这里得到的不是一个对象吗？为什么后面直接用它作为键？
                if(state.items[key].id==user.id){
                    state.items[key].name=user.name;
                    state.items[key].tel=user.tel;
                }
            }
        },
        [OWN_CHANGE](state,user){
            var oldName=state.own.name;
            state.own=user;
            sessionStorage.setItem('user',JSON.stringify(user));
            localStorage.setItem(sessionStorage.userId,JSON.stringify(user));//这句为什么？为什么要更新localStorage里面的数据呢？
        }
    },
    actions:{
        userInit({commit}){
            if(sessionStorage.login && sessionStorage.login ==1){
                var items=[
                    {name:'外公',tel:13611112222,status:'亲人'},
                    {name:'外公',tel:13611112222,status:'亲人'},
                    {name:'张晓明',tel:13611112222,status:'同事'},
                    {name:'外公',tel:13611112222,status:'亲人'},
                    {name:'李阳',tel:13611112222,status:'朋友'},
                    {name:'李尔牛',tel:13611112222,status:'同学'}
                ];
                items=items.filter((item)=>{
                    item.id=contactId++;
                    item.imgSrc='/static/img/userImg.jpeg';
                    return item;
                });
                localStorage.items=JSON.stringify(items);
                var own=JSON.parse(sessionStorage.user);
                commit(USER_INIT,{
                    items:JSON.parse(localStorage.items),
                    own:own
                });
            }else{
                alert('请先登录！');
                router.replace('/home/login');
            }
        },
        userAdd({commit},user){
            commit(USER_ADD,user);
        },
        userRemove({commit},userId){
            commit(USER_REMOVE,userId);
        },
        userChange({commit},user){
            commit(USER_CHANGE,user);
        },
        ownChange({commit},user){
            commit(OWN_CHANGE,user);
        }
    }
}