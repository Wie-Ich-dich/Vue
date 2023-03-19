import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        count:0
    },
    getters:{},
    mutations:{
        add1(state){
            state.count+=1;
        },
        reduce1(state){
            state.count-=1;
        },
        addN(state,n){
            state.count+=n;
        },
        reduceN(state,n){
            state.count-=n;
        }
    },
    actions:{
        add1Async(context){
            setTimeout(function(){context.commit('add1')},2000);
        },
        addNAsync({commit},n){
            setTimeout(function(){commit('addN',n)},2000);
        },
        reduce1Async(context){
            setTimeout(function(){context.commit('reduce1')},2000);
        },
        reduceNAsync({commit},n){
            setTimeout(function(){commit('reduceN',n)},2000);
        }
    }
}) 

export default store;