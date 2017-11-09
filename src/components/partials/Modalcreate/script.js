
export default{
    created: function () {
        var self = this;


    },
    data(){
        return {
            title: '',
            titles: '',
            job_tittle: '',
        }
    },
    computed: {
        fullname: function () {
            return this.first + " " + this.last
        }
    },
    methods: {
    },

}