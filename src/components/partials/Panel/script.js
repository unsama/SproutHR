export default{
    created: function(){
        document.title = this.title;
    },
    data(){
        return{
            title: 'Grid'
        }
    },

}
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});