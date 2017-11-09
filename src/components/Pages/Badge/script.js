import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        $(function(){
            var form = $('.form'),
                cache_width = form.width(),
                a4 = [595.28, 841.89]; // for a4s size paper width and height

            $('.printhussain').on('click', function () {
                alert("print button is pressed!!!");
                $('body').scrollTop(0);
                createPDF();
            });
            //create pdf
            function createPDF() {
                getCanvas().then(function (canvas) {
                    var
                        img = canvas.toDataURL("image/png"),
                        doc = new jsPDF({
                            unit: 'px',
                            format: 'a4'
                        });
                    doc.addImage(img, 'JPEG', 20, 20);
                    doc.save('Badge.pdf');
                    form.width(cache_width);
                });
            }
            // create canvas object
            function getCanvas() {
                form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
                return html2canvas(form, {
                    imageTimeout: 2000,
                    removeContainer: true
                });
            }

            // $('.printhussain').click(function () {
                    //
                    //       doc.fromHTML($('#content').html(), 15, 15, {
                    //
                    //           'width': 170,
                    //           'elementHandlers': specialElementHandlers
                    //       });
                    //       doc.save('sample-file.pdf');
                    //   });

            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
            $(document).ready(function(){
                $(".btn.btn-success.b").click(function(){
                    $("#panel").slideToggle("slow");
                });
            });

            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#edit1').css("display");
                if(check == "none"){
                    $('#edit1').show();
                    $('#main1').hide();
                }else{
                    $('#edit1').hide();
                    $('#main1').show();
                }

            });

            document.title = this.title;
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $(document).ready(function () {
                var d = new Date();
                var hour    = d.getHours();
                var minute  = d.getMinutes();
                var second  = d.getSeconds();
                var time = hour+":"+minute+":"+second;
                $("#demo").html(time);
            });




        });

    },
    data(){
        return {
            employeeName:'',
            jobTitle:'',

            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,

            u:false,
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "Employees/Enrique Jones",
            btnlinks: {

                print2btnlink:"",

            },
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/Employees/selectemployeeinfoForBadge", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.employeeName = parentdata.employeename;
                self.jobTitle = parentdata.job_tittle;
                console.log(" employeeName for badge  "+self.employeename);
                console.log(" jobTitle for badge  "+self.jobTitle);
                console.log(parentdata);
            }, function (err) {

            });

        },
    },

    components: {
        Emptyform,
        Tabs,
        Modal,
        ModelDescription,
        Componame,
        DashboardController,
        Tableview,
        Editing,
        Request_quotation_lower,
        Message,




    }

}
