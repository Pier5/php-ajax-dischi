new Vue({
    el: '#app',
    data: {
        arrAlbum : [],
        arrOptions : [],
        strSelect : ''
    },
    created() {
        axios.get('http://localhost/php-ajax-dischi/api.php')
        .then(response => this.arrAlbum = response.data)
    },
    computed: {
        filterArrOptions () {
          this.arrAlbum.forEach((el) => {
            if (!this.arrOptions.includes(el.genre)) {
              this.arrOptions.push(el.genre)
            }
          })
          return this.arrOptions
        },
        selectOption () {
            return this.arrAlbum.filter((el) => {
              return el.genre
                .includes(this.strSelect)
            })
        }
    }
})