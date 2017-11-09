import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function () {
        document.title = this.title;
        var self = this;
        $(function(){
            CKEDITOR.replace('editor1');
        });
        $(function() {
            $("#save").click(function () {
                self.submit();
            });
        });
    },
    data () {
        return {
            activityimport: "",
            viewname: "",
            viewtype: "",
            model: "",
            sequence: "",
            active: "",


            btnlinks: {
                savebtnlink: "",
                discardbtnlink: "/setting/generalsetting",
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            var  ckeditor_value = CKEDITOR.instances.editor1.getData();
            self.$http.post("/setting/externalheader", {
                "viewname": self.viewname,
                "viewtype": self.viewtype,
                "model": self.model,
                "sequence": self.sequence,
                "active": self.active,
                "ckeditor_value": ckeditor_value,
            }).then(function(res){
                console.log(res.body);
                alert(self.portalaccess);
            },function(err){
                alert(err);
            });
        },

        // validateBeforeSubmit() {
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         this.submit();
        //         alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         alert('Correct them errors!');
        //     });
        // },
        // validateBeforeSubmit() {
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         this.submitpaper();
        //         alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         alert('Correct them errors!');
        //     });
        // }


    },
    components: {
        DashboardController,
    }
}
