export default{
    created: function(){
        $(function () {
            document.title = this.title;
            $("#ckbCheckAll2").click(function () {
                $(".checkBoxClass").prop('checked', $(this).prop('checked'));
            });
        });
    },
    props: [
        "tableheader",
        "tabledata",
        "tablecheckbox",
        "tablefoot",
        "check",
    ],
    data(){
        return{
            title: 'Tablemain',
            v: true,
            v1: false

        }
    },
}
