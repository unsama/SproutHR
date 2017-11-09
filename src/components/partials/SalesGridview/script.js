export default{
    created: function(){
        document.title = this.title;
    },
    props: [
        "tabledata",
        "tablecheckbox",
        "tablefoot"
    ],
    data(){
        return{
            title: 'Tablemain'
        }
    },
}