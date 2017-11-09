export default{
    created: function () {
    document.title=this.title;

    },
    props: [
        "tableheader",
        "tabledata",
        "tablecheckbox",
        "tablefoot",
        "bullet",
    ],
    data(){
        return {
            title: 'Products - Sprout',
            v: true,
            v1: false
        }
    },
}
