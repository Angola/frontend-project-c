var vm = new Vue({
    el: '#Vue',
    data: {
        bookmarkList: [],
    },
    mounted() {
        if (window.localStorage) {// localStorageが使用できるかチェック
            if (window.localStorage.getItem("bookmark")) {// bookmarkがキーとしてあるかチェック
                var json = window.localStorage.getItem("bookmark");// bookmarkを取り出し
                this.bookmarkList = JSON.parse(json); // 文字列をオブジェクトに変換
            }
        }
    },
    watch: {
        bookmarkList() {
            this.setLocalStorage()
        },
    },
    methods: {
        sliceBookmark(id) {
            this.bookmarkList = this.bookmarkList.filter(item => item.id !== id)
        },
        setLocalStorage: function () {
            const json = JSON.stringify(this.bookmarkList); //オブジェクトを文字列に変換
            window.localStorage.setItem('bookmark', json);// オブジェクトをlocalStorageに保存
        }
    },
    filters: {
        price(value) {
            return value.toLocaleString();
        },
        moment(date) {
            return moment(date).format('YYYY/MM/DD HH:mm');// eslint-disable-line
        }
    }
})