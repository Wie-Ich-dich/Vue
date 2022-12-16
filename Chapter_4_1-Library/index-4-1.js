Vue.filter('dateFormat',function(dT){
    var yyyy=dT.getFullYear();
    var mm=dT.getMonth()+1;
    var dd=dT.getDate();
    var hhmmss=dT.toLocaleTimeString();
    return `${yyyy}-${mm}-${dd} ${hhmmss}`;
});

var vm= new Vue({
    el:'#vue',
    data:{
        trClass:'tr1',
        bookId:'',
        bookName:'',
        bookPublisher:'',
        bookAuthor:'',
        searchKeyWord:'',
        bookList:{
            num:3,
            data:[
                {
                    id:1,
                    name:'Web 前端开发技术',
                    publisher:'清华大学出版社',
                    author:'储久良',
                    ptime:new Date()
                },
                {
                    id:2,
                    name:'Java 程序设计',
                    publisher:'电子工业出版社',
                    author:'耿祥义',
                    ptime:new Date()
                },
                {
                    id:3,
                    name:'JavaScript 高级程序设计',
                    publisher:'高等教育出版社',
                    author:'张璐璐',
                    ptime:new Date()
                }
            ]
        }
    },
    methods:{
        add(){
            if(!this.bookId || !this.bookAuthor || !this.bookName || !this.bookPublisher){
                alert("图书数据不完整，请补充！");
            }else if(parseInt(this.bookId) <= this.bookList.num){
                alert("图书编序号已存在！已为您自动填充！请再次点击添加按钮！");
                this.bookId = this.bookList.num+1;
            }else{
                this.bookList.num++;
                this.bookList.data.push({
                    id:this.bookList.num,
                    name:this.bookName,
                    publisher:this.bookPublisher,
                    author:this.bookAuthor,
                    ptime:new Date()
                });
                this.bookAuthor='';
                this.bookId='';
                this.bookName='';
                this.bookPublisher='';
            }                    
        },
        search(sKW){
            if(!sKW){
                return this.bookList.data;
            }
            return this.bookList.data.filter(function(obj){
                return (obj.name+'&'+obj.publisher+'&'+obj.author+'&'+obj.ptime.getFullYear()+'-'+(obj.ptime.getMonth()+1)+'-'+obj.ptime.getDate()).indexOf(sKW) > -1;
            });
        },
        deleteBook(id){
            // console.log(id);
            this.bookList.data.splice(id-1, 1);
            this.bookList.data.forEach((book,index) => {
                book.id=index+1;
            });
            this.bookList.num--;
        }
    }
});