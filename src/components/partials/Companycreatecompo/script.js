export default{

    created: function () {
        var self = this;
        $(function () {
            $('#save').on("click",function(){
                document.getElementById('submitButton').click();

            });
            var r = confirm("Are you sure update user");
            if (r)
            {
                // x="You pressed OK!";
                //console.log("asdasdas");
                window.location.href = "../usersin/"+self.$route.params.id;
                self.submit();
            }
            else
            {
                // x="You pressed Cancel!";
            }
        });




        self.$http.get("/setting/create-company/get-meta").then(function(res){
            if(res.data.status){
                console.log("GET on get-company Failed! \nReason: " + res.data.message);
                console.log(res);
            }
            else{
                this.companyCountryOptions=res.data[0];
                this.companyStateOptions=res.data[1];
                this.companyCurrencyOptions=res.data[2];
                this.companyParentCompanyOptions=res.data[3];
                console.log(res.data[1]);
            }
        },function(err){
            alert(err);
        });
    },
    data(){
        // AZEEM ULLAH's commit starts here

        return {
            imageSrc: "/img/demo/avatar/avatar-person.png",
            title: 'Discuss',
            companyName: '',
            //companySequence: '',      //no reference found of this variable in documentation
            companyParentCompanyId: '',
            companyCurrencyId: '',
            companyRegistry: '',
            companyTaxID: '',
            companyEmail: '',
            companyFax: '',
            companyPhone: '',
            companyWebsite: '',
            companyCountryId: '',
            companyZip: '',
            companyStateId: '',
            companyCity: '',
            companyStreetTwo: '',
            companyStreetOne: '',
            companyTagline: '',
            companyCountryOptions: '',
            companyStateOptions: '',
            companyCurrencyOptions: '',
            companyParentCompanyOptions: '',
            imageData: '',
        }
    },

    computed: {

    },
    methods: {



        submit: function () {
            var self = this;
            // self.$http.post('/setting/create-company/upload-image', self.imageData, {headers: { 'Content-Type': 'multipart/form-data' } }).
            // then(function (response) {
            //     console.log(response.data.path);
            //     console.log(response.data);
            //     this.imageSrc = response.data.path.replace('public','');
            //
            //
            //
            //     console.log(this.imageSrc);
            //
            //
            //
            //
            //          CODE CUT------ AZEEM ULLAH
            //
            //
            //
            //
            // }).catch(function (error) {
            //     console.log(error) // catch your error
            // });
            //
            //




            self.$http.post("/setting/create-company", {
                "companyName": self.companyName,
                "companyTagline": self.companyTagline,
                "companyStreetOne": self.companyStreetOne,
                "companyStreetTwo": self.companyStreetTwo,
                "companyCity": self.companyCity,
                "companyStateId": self.companyStateId,
                "companyZip": self.companyZip,
                "companyCountryId": self.companyCountryId,
                "companyWebsite": self.companyWebsite,
                "companyPhone": self.companyPhone,
                "companyFax": self.companyFax,
                "companyEmail": self.companyEmail,
                "companyTaxID": self.companyTaxID,
                "companyRegistry": self.companyRegistry,
                "companyCurrencyId": self.companyCurrencyId,
                "companyParentCompanyId": self.companyParentCompanyId,
                "image_url": self.imageSrc,


            }).then(function(res){
                if(res.data.status){
                    console.log("Submission Failed! \nReason: " + res.data.message);
                    console.log(res);}
                else
                    console.log("Submission Sucessful!");
            },function(err){
                alert(err);
            });



        },


        // companyImageUpload: function(e) {
        //     var files = e.target.files || e.dataTransfer.files;
        //     if (!files.length)
        //         return;
        //     this.createImage(files[0]);
        // },
        // createImage(file) {
        //     var image = new Image();
        //     var reader = new FileReader();
        //     var vm = this;
        //
        //     reader.onload = (e) => {
        //         vm.image = e.target.result;
        //         console.log(vm.image);
        //     };
        //     reader.readAsDataURL(file);
        //     console.log(reader);
        //     this.imageSrc = vm.image;
        // },
        // removeImage: function (e) {
        //     this.image = '';
        // },

        companyImageUpload: function(e) {
            var self = this;
            var files = e.target.files;
            if(!files[0]) {
                return;
            }
            var data = new FormData();
            data.append('image', files[0]);
            var reader = new FileReader();
            reader.onload = (e) => {
                this.imageSrc = e.target.result;
            };
            reader.readAsDataURL(files[0]);

            if(self.imageSrc.search("demo") == -1){
                self.$http.post("/setting/create-company/delete-image", { imagePath: this.imageSrc
                }).then(function(res){
                    if(res.body.status == 'success'){
                        console.log("Previous image deleted");
                    }
                    else {
                        console.log("Error: Not Deleted!");
                    }
                },function(err){
                    alert(err);
                });
            }

            self.imageData = data;
            // axios.post('/setting/create-company/upload-image', data, {headers: { 'Content-Type': 'multipart/form-data' } }).then(function (response) {
            //     reader.readAsDataURL(files[0]);
            //     console.log(response.data.path);
            //     console.log(response.data);
            //     self.imageSrc = response.data.path.replace('public','');
            //
            // }).catch(function (error) {
            //     console.log(error) // catch your error
            // });
        },

        deleteImg: function(e) {
            var self = this;
            // if(self.imageSrc.search("demo") > -1)
            //     alert("No image Uploaded!");
            // else {
            //     console.log(this.imageSrc);
            //     self.$http.post("/setting/create-company/delete-image", { imagePath: this.imageSrc
            //          }).then(function(res){
            //             if(res.body.status == 'success'){
            //                 console.log(res);
            //                 this.imageSrc = "/img/demo/avatar/avatar-person.png";
            //             }
            //              else {
            //                 console.log("Error: Not Deleted!");
            //             }
            //          },function(err){
            //              alert(err);
            //          });
            // }
            self.imageSrc = '/img/demo/avatar/avatar-person.png';
            self.imageData = '';
        },

        changeItem: function(e) {
            var self = this;
            console.log(self.companyCountryId);
            self.$http.get("/setting/create-company/get-meta/given-country/"+self.companyCountryId).then(function(res){
                console.log(res);
                if(res.data.status){
                    console.log("GET on get-company Failed! \nReason: " + res.data.message);
                    console.log(res);
                }
                else{
                    console.log(res.data[0]);
                    this.companyStateOptions=res.data;
                }
            },function(err){
                alert(err);
            });

        },

        validateBeforeSubmit(e) {
            this.$validator.validateAll();
            if (!this.errors.any()) {
                this.submit()
            }
            else
                alert("Some or one of the required field(s) is either empty or improperly filled!\nForm Submmition is thereby halt-ed.");
        }




        // validateBeforeSubmit() {
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         this.submit();
        //        // alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //        // alert('Correct them errors!');
        //     });
        // }
    },
    // AZEEM ULLAH's commit ends here
}

