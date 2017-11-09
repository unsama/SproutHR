export default{
    created: function(){
        document.title = this.title;
    },
    data(){
        return{
            title: 'Departments',
            msg:''
        }
    }
}