var vm = new Vue({
    el: '#vue_det',
    data: {
        firstname: "Arturo",
        lastname: "Lopez",
    },
    methods: {
        mydetails: function(){
            return "Mi nombre es " + this.firstname + " " + this.lastname;
        }
    }
})