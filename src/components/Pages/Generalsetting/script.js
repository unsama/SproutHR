
export default{
    created: function () {
        var self = this;
        // var doc = new PDFDocument;
        $(function() {
            $(".checked").prop('checked', true);
            $("#apply").click(function () {
                 self.submit();
            });
            $(".checkit").click(function () {
                alert("aewfdaw");
                $(".gayab").show();
                // if($(this).prop('checked')){
                //     $("#gayab").show();
                // }else{
                //     $("#gayab").hide();
                // }
            });
            // $("#previewinternal").click(function () {
            //     doc.pipe.createWriteStream('output.pdf');
            //         doc.addPage()
            //             .fillColor("blue")
            //             .text('Here is a link!', 100, 100);
            //     doc.end();
            // });
        });
        self.select();
    },
    props: [
        "edit",
    ],
    data () {
        return {
            aliasdomain: "",
            passwordreset: "",
            externaluser: "",
            portalaccess: "",
            authencation: "",
            importexport: "",
            multicompany: "",
            multicurrency: "",
            intercompany: "",
            sharepartners: "",
            shareproducts: "",
            googledrive: "",
            googledrivecode: "",
            name: "",
            papersize: "",
            orientation1: "",
            topmargin: "",
            bottommargin: "",
            leftmargin: "",
            rightmargin: "",
            displayheader: "",
            headerspacing: "",
            outputdpi: "",
            customreportfooter: "",


        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/setting/general", {
                "aliasdomain": self.aliasdomain,
                "portalaccess": self.portalaccess,
                "authencation": self.authencation,
                "importexport": self.importexport,
                "multicompany": self.multicompany,
                "multicurrency": self.multicurrency,
                "intercompany": self.intercompany,
                "sharepartners": self.sharepartners,
                "shareproducts": self.shareproducts,
                "googledrive": self.googledrive,
            }).then(function(res){
                console.log(res.body);
                alert(self.portalaccess);
            },function(err){
                alert(err);
            });
        },
        submitpaper : function () {
            var self = this;
            self.$http.post("/setting/paperformat", {"name": self.name,"paper_size": self.papersize,"orientation_1": self.orientation1,"top_margin": self.topmargin,"bottom_margin": self.bottommargin,"left_margin": self.leftmargin,"right_margin": self.rightmargin,"display_header": self.displayheader,"header_spacing": self.headerspacing,"output_dpi": self.outputdpi,}).then(function(res){
                console.log(res.body);

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



}