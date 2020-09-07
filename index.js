
var app = new Vue({ 
    el: '#app',
    data: {
        img_sources:'',
        dog:'Dogs',
        estado:true
    },
    mounted () {
        axios
          .get('https://dog.ceo/api/breeds/image/random/3')
          .then(response => (this.img_sources = response))
      
    },
    methods: {
        fetch: function (event) {
            axios
            .get('https://dog.ceo/api/breeds/image/random/3')
            .then(response => (this.img_sources = response))
        },
        change: function (event) {
            this.estado = !this.estado
        }
      }



});