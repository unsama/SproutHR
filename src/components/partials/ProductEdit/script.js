import DashboardController from "./../DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../Request_quotation_lower/Request_quotation_lower.vue"

export default{
    created: function () {
        document.title = this.title;
        var self = this;
        $(function () {
            $(".company_btn_click").click(function () {
                $(".company_btn").hide();
            }) ;
            $(".individual_btn_click").click(function () {
                $(".company_btn").show();
            }) ;




        });
    },
    data () {
        return {
            nextactivity: "Products / [E-COM08] Apple In-Ear Headphones",

        }
    },

    data(){
        return {
            title: 'Discuss',
            name: '',
            company: '',
            individual: '',
            street1: '',
            street2: '',
            company_name: '',
            options:'',
            job_position:'',
            phone_number:'',
            mobile_number:'',
            fax_number:'',
            email:'',
            language:'',
            is_Customer:'',
            is_sales_person:'',
            sale_pricelist:'',
            internal_reference_id:'',
            bank_account_id:'',
            credit_card_id:'',
            is_vendor:'',
            barcode:'',
            customer_payment_terms:'',
            degree_of_trust:'',
            vendor_payment_terms:'',

            v: true,
            v1: false


        }
    },

    methods: {
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/company_name", {"company_name": self.company_name}).then(function(res){self.options =res.body.result;},function(err){
                //alert(err);
                // console.log(res.body.data);
            });
        },
        submit: function () {
            //alert("adasdsadsad");
            var self = this;
            //var ckeditor_value = CKEDITOR.instances.editor1.getData();
            //alert(self.name+ " ");
            self.$http.post("/sales/add_customer", {
                "name": self.name,
                "individual": self.individual,
                "company": self.company,
                "street1": self.street1,
                "street2": self.street2,
                "job_position": self.job_position,
                "phone_number": self.phone_number,
                "mobile_number": self.mobile_number,
                "fax_number": self.fax_number,
                "email": self.email,
                "language": self.language,
                "is_Customer": self.is_Customer,
                "is_sales_person": self.is_sales_person,
                "sale_pricelist": self.sale_pricelist,
                "internal_reference_id": self.internal_reference_id,
                "bank_account_id": self.bank_account_id,
                "credit_card_id": self.credit_card_id,
                "is_vendor": self.is_vendor,
                "barcode": self.barcode,
                "customer_payment_terms": self.customer_payment_terms,
                "degree_of_trust": self.degree_of_trust,
                "vendor_payment_terms": self.vendor_payment_terms,
            }).then(function(res){
                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },

    },


    components: {
        DashboardController,
        Request_quotation_lower
    }
}