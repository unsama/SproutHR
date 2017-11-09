import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetablecreatecompo from "./../../partials/Templatetablecreatecompo/Templatetablecreatecompo.vue"

export default{
    created: function () {
        var self = this;
        document.title = this.title;
        $(function() {
            $("#save").click(function () {
                // alert("successfully update");
                var r = confirm("Are you sure update");
                if (r)
                {
                    // x="You pressed OK!";
                    //console.log("asdasdas");
                    window.location.href = "../setting/Templatetable";
                    self.submit();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
                self.submit();

            });
        });

    },
    data(){
        return {
            formstatus: false,
            head: "Templates / New",
            title: 'New - Sprout',
            btnlinks: {
                savebtnlink: "",
                discardbtnlink: "/setting/Templatetable",

            },
            templatename: "",
            templateactive: "",
            templatemodel: "",
            templatefilter: "",
            templateurl: "",
            templategdrivename: "",
            name: "",
            options2: "",
        }
    },
    props: [
        "edit",
    ],
    methods: {
        submit: function () {
            var self = this;
            if(!self.formstatus){
                self.formstatus = true;
                self.$http.post("/setting/template", {
                    "template_name": self.templatename,
                    "template_active": self.templateactive,
                    "template_model": self.templatemodel,
                    "template_filter": self.templatefilter,
                    "template_url": self.templateurl,
                    "template_gdrivename": self.templategdrivename}).then(function(res){
                    self.formstatus = false;
                    console.log(res.body);

                },function(err){
                    self.formstatus = false;
                    alert(err);
                });
            }
        },
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/templateselet", {"name": self.name}).then(function(res){self.options2 =res.body.result;},function(err){
                //alert(err);
            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }


    },

    components: {
        DashboardController,
        Templatetablecreatecompo

    }
}


// export default{
//     created: function () {
//         var self = this;
//         this.select();
//         $(function() {
//             $("#save").click(function () {
//                 alert(ef);
//                 // self.submit();
//
//             });
//
//             $(".checkit").click(function () {
//                 alert("aewfdaw");
//                 $(".gayab").show();
//                 // if($(this).prop('checked')){
//                 //     $("#gayab").show();
//                 // }else{
//                 //     $("#gayab").hide();
//                 // }
//             });
//         });
//     },
//     props: [
//         "edit",
//     ],
//     data () {
//         return {
//             templatename: "",
//             templateactive: "",
//             templatemodel: "",
//             templatefilter: "",
//             templateurl: "",
//             templategdrivename: "",
//         }
//     },
//     methods: {
//         submit: function () {
//             var self = this;
//             self.$http.post("/template", {"template_name": self.templatename,"template_active": self.templateactive,"template_model": self.templatemodel,"template_filter": self.templatefilter,"template_url": self.templateurl,"template_gdrivename": self.templategdrivename}).then(function(res){
//                 console.log(res.body);
//
//             },function(err){
//                 alert(err);
//             });
//         },
//
//         validateBeforeSubmit() {
//             this.$validator.validateAll().then(() => {
//                 // eslint-disable-next-line
//                 this.submit();
//                 alert('From Submitted!');
//             }).catch(() => {
//                 // eslint-disable-next-line
//                 alert('Correct them errors!');
//             });
//         }
//
//
//     },
//
//     components: {
//         DashboardController,
//         Templatetablecreatecompo,
//
//     }
//
// }
