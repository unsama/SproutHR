import ComHeader from "./partials/ComHeader.vue"

export default{
    created: function(){
        document.title = this.title;
    },
    data(){
        return{
            title: 'Dashboard',
            msg:'This is DashBoard asd asd'
        }
    },
    components: {
        ComHeader
    }
}