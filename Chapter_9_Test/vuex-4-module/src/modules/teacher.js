const teachers={
    state:{
        t_list:[{
            id:1,
            name:'李小英',
            age:22,
            sex:'女',
            salary:5500,
            changed:false
        }],
        count:0
    },
    getters:{
        //存在四个参数：state（局部）、getters（局部）、rootState（全局）、rootGetters（全局）
    },
    mutations:{//mutations里面不存在rootState来访问；
        //传递多个参数（教师ID和涨幅）时，需要封闭成对象，否则会报错
        add(state,{teacherId,amount}){
            state.t_list.filter(function(teacher){
                if(teacher.id == teacherId){
                    teacher.salary=teacher.salary+eval(amount);
                    teacher.changed=true;
                }
            })
        },
        countAdd10(state,rootState){
            state.count=state.count+10;
            rootState.count+=10;
            console.log("Teacher.count="+state.count+"rootState.count="+rootState.count)
        },
        addOne(state,someone){
            state.t_list.push(someone);
        }
    },
    actions:{
        //actions里面也和getters一样rootState和rootGetters会作为第3、4个参数传入，且会自动传入一个context
        //传递多个参数（教师ID和涨幅）时，需要封闭成对象，否则会报错
        //{commit}是用来解构context中的commit函数
        modifySalary({commit},{teacherId,amount}){
            commit('add',{teacherId,amount});
        },
        addTeacher({commit,rootState},someone){
            commit('addOne',someone);
            commit('countAdd10',rootState);
        }
    }
}

export default teachers;