var vm=new Vue({
    el:'#vue',
    data:{
        items:[
            //完成为false，未完成为true；
            {
                id:1,
                content:'Chapter_4_2-Todos',
                state:true
            },
            {
                id:2,
                content:'do some laudry',
                state:false
            }
        ],
        itemState:0,
        newTodo:''

    },
    methods:{
        // 方法中可以使用计算属性得到的结果
        addItem(){
            if(this.newTodo){
                this.items.push({
                    id:this.total+1,
                    content:this.newTodo,
                    state:true
                });
            }else{
                alert("请输入待办事项！！");
            }
            this.newTodo='';
            this.itemState=0;
        },
        delOne(itemId){
            // console.log(itemId);
            this.items=this.items.filter(item=>item.id!=itemId);
        },
        clearDone(){
            this.items=this.items.filter(item=>item.state);
        }
    },
    computed:{
        total(){
            return this.items.length;
        },
        notDoneCount(){
            /* var count=0;
            for (let i = 0; i < this.items.length; i++) {
                if(this.items[i].state)
                    count++;
            }
            return count; */
            return this.items.filter(item=>item.state).length;
        },
        itemArray(){
            switch(this.itemState){
                case 1:
                    return this.items.filter(item=>item.state);    
                case 2:
                    return this.items.filter(item=>!item.state);
                case 0:
                default:
                    return this.items.filter(()=>true);
            }
        }
    }
})