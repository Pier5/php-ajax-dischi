new Vue({
    el: '#app',
    data: {
        arrAlbum : [],
    },
    created() {
        axios.get('http://localhost/php-ajax-dischi/api.php')
        .then(response => this.arrAlbum = response.data)
    }

})