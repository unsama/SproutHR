import Welcome from "./../Welcome/Welcome.vue"



export default{

    created: function(){
        var self = this;
        var temp = '';
        $(function () {
           $("#invite_btn").click(function () {
             var emailer = $("#invite_email").val();
               temp =  emailer.replace(/\n/g,', ');
               //console.log("asdas:"+temp);
                alert("Are you sure invite your friend");
               self.$http.post("/setting/inviteuser", {
                   "mailer_t" : temp
               }).then(function(res){
                   //console.log(res.body);
               },function(err){
                   //alert(err);
               });
           });
        });
    },
    methods: {
        // submit: function () {
        //     console.log(temp);
        //     var self = this;
        //     self.$http.post("/setting/inviteuser", {
        //         //"username": self.username,
        //     }).then(function(res){
        //         //console.log(res.body);
        //     },function(err){
        //         //alert(err);
        //     });
        // },

    },
    
    components: {
        Welcome
    }

}