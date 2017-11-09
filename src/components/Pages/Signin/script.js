export default{
    created: function () {
        console.log("this is some check")
    },
    data(){
        return {
            title: 'Discuss',

        }
    },

    computed: {
       
    },
    methods: {
        submit: function () {
            var self = this;
            // alert(self.username+ " " + self.email + " " + self.password);
            self.$http.post("/check", {"username": self.username, "email": self.email, "password": self.password}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();
            alert('From Submitted!');
        }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
        });
        }
    },

}