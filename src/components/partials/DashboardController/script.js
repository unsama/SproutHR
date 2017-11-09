import Buttonsgroup from "./../Buttonsgroup/Buttonsgroup.vue"
import Pagination from "./../Pagination/Pagination.vue"

export default{
    created: function () {
        $(document).ready(function () {
            $("#searchbutton").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
        $(document).ready(function () {
            $("#hasS").click(function () {
                $("#hh").show();
                $('#hasS').show();
                $('#hasH').hide();
            });
            $("#hasHide").click(function () {
                $("#hh").hide();
                $("#hasH").show();

            });
        });
    },
    components: {
        Buttonsgroup,
        Pagination,
    },
    props: [
        "discard1btn",
        "measurebtn",
        "editform",
        "modal",
        "links",
        "leaveMeetingbtn",
        "editbtn",
        "editlink",
        "discardbtn",
        "createbtn",
        "printbtn",
        "Attachmentbtn",
        "actionbtn",
        "importbtn",
        "groupbtn",
        "cancelbtn",
        "validatebtn",
        "savebtn",
        "savedbtn",
        "heading",
        "pagibtn",
        "firstbtn",
        "secondbtn",
        "thirdbtn",
        "fourthbtn",
        "fifthbtn",
        "paginbtn1",
        "paginbtn2",
        "num1",
        "num2",
        "searchbar",
        "dropdownbtn1",
        "dropdownbtn2",
        "dropdownbtn3",
        "Markbtn",
        "starbtn",
        "Invitebtn",
        "Unsubscribebtn",
        "Settingsbtn",
        "sixthbtn",
        "seventhbtn",
        "eighthbtn",
        "deletedropbtn",
        "duplicatedropbtn",
        "planorderbtn",
        "subordinatebtn",
        "printBadge",
        "leavesSummarybtn",
        "pbtn",
        "printcontact",
        "Production",
    ],
    data(){
        return {
            v: true,
            v1: false
        }
    },

}



// import Buttonsgroup from "./../Buttonsgroup/Buttonsgroup.vue"
// import Pagination from "./../Pagination/Pagination.vue"
//
// export default{
//     created: function () {
//         $(document).ready(function () {
//             $("#searchbutton").click(function () {
//                 $(".samodropdownbutton2").toggle();
//             });
//         });
//         $(document).ready(function () {
//             $("#hasS").click(function () {
//                 $("#hh").show();
//                 $('#hasS').show();
//                 $('#hasH').hide();
//             });
//             $("#hasHide").click(function () {
//                 $("#hh").hide();
//                 $("#hasH").show();
//
//             });
//         });
//     },
//     components: {
//         Buttonsgroup,
//         Pagination,
//     },
//     props: [
//         "discard1btn",
//         "measurebtn",
//         "editform",
//         "modal",
//         "links",
//         "editbtn",
//         "editlink",
//         "discardbtn",
//         "createbtn",
//         "printbtn",
//         "Attachmentbtn",
//         "actionbtn",
//         "importbtn",
//         "groupbtn",
//         "cancelbtn",
//         "validatebtn",
//         "savebtn",
//         "savedbtn",
//         "heading",
//         "pagibtn",
//         "firstbtn",
//         "secondbtn",
//         "thirdbtn",
//         "fourthbtn",
//         "fifthbtn",
//         "paginbtn1",
//         "paginbtn2",
//         "num1",
//         "num2",
//         "searchbar",
//         "dropdownbtn1",
//         "dropdownbtn2",
//         "dropdownbtn3",
//         "Markbtn",
//         "starbtn",
//         "Invitebtn",
//         "Unsubscribebtn",
//         "Settingsbtn",
//         "sixthbtn",
//         "seventhbtn",
//         "eighthbtn",
//
//
//     ],
//     data(){
//         return {
//             v: true,
//             v1: false
//         }
//     },
//
// }
//
