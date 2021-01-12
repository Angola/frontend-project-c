// Vue インスタンスの生成
var vm = new Vue({
    el: '#Vue', //データバインディングの対象となる、DOM要素を指定
    data: { //モデルとなるオブジェクトを指定
        'list': [],　//localStorageに保存された、todoListをセット
        'text' : ''　//空のテキスト
    } ,
    mounted(){
        if(window.localStorage){// localStorageが使用できるかチェック
            if(window.localStorage.getItem("todoList")){// todoListがキーとしてあるかチェック
                var json = window.localStorage.getItem("todoList");// todoListを取り出し
                this.list = JSON.parse(json); // 文字列をオブジェクトに変換
            }
        }
    },
    watch:{
        list(){// listが変更されたあとに,dataを更新
            console.log(this.list)
            this.setLocalStorage()
        }
    },
    methods: {
        setLocalStorage: function(){
            var json = JSON.stringify(this.list); //オブジェクトを文字列に変換
            window.localStorage.setItem('todoList' , json);// オブジェクトをlocalStorageに保存
        },
        push : function(){
            this.list.push({'text': this.text}); // textをlistに追加
            this.text = ''; // textを空にする
        },
        slice : function(index){
            this.list.splice(index , 1);　// 指定されたインデックスの要素を削除
        } ,
        onKeydown : function(e){
            if(e.keyCode === 13){ // Enterキーが押されると、pushメソッドが実行
                this.push();
            }
        } ,
        clear : function(){
            this.list = []; //list要素を全て空に
        }
    }
});
