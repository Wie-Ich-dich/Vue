const students={
    state:{
        s_list:[{
            id:210022,
            name:'张小英',
            age:22,
            sex:'女',
            result:60
        }],
        count:0
    },
    getters:{
        //存在四个参数：state（局部）、getters（局部）、rootState（全局）、rootGetters（全局）
    },
    mutations:{//mutations里面不存在rootState来访问；
        //传递多个参数（教师ID和涨幅）时，需要封闭成对象，否则会报错
        modify(state,studentId){
            state.s_list.filter(function(student){
                if(student.id == studentId){
                    if(student.result+5 <= 100 && student.result > 30){
                        student.result+=5;
                    }
                }     
            })
        },
        countAdd10(state,rootState){
            state.count=state.count+10;
            rootState.count+=10;
            console.log("Student.count="+state.count+"rootState.count="+rootState.count)
        }
    },
    actions:{
        //actions里面也和getters一样rootState和rootGetters会作为第3、4个参数传入，且会自动传入一个context
        //传递多个参数（教师ID和涨幅）时，需要封闭成对象，否则会报错
        //{commit}是用来解构context中的commit函数
        modifyResult({commit},studentId){
            commit('modify',studentId);
        }
    }
}

export default students;