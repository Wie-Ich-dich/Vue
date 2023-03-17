import Vue from 'vue'
import Vuex from 'vuex'
import Students from '../modules/student.js'
import Teachers from '../modules/teacher.js'

Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        Students,
        Teachers
    },
    state:{
        company:'IT管理学院',
        count:0
    },
    getters:{},
    mutations:{},
    actions:{}
})

export default store