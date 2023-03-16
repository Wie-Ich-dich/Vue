import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store=new Vuex.Store({
    state(){
        return {
            name:'Chen weijie',
            weeklyPay:5000,
            week:6 
        }
    },
    mutations:{
        add(state){
            state.weeklyPay=state.weeklyPay+100;
        },
        addNum(state,num){
            state.weeklyPay=state.weeklyPay+num;
        },
        reduce(state){
            state.weeklyPay=state.weeklyPay-100;
        },
        reduceNum(state,num){
            state.weeklyPay=state.weeklyPay-num;
        }
    },
    actions:{
        addWeeklyPay(context){
            context.commit('add');
        },
        reduce(context){
            context.commit('reduce');
        },
        reduceAsync(context){
            setTimeout(()=>context.commit('reduce'),1000);
        },
        reduceNumAsync(context,step){
            setTimeout(()=>context.commit('reduceNum',step),1000);
        }
    }
})

export default store