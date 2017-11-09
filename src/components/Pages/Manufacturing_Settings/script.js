import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Scrap",
        btnlinks: {
            createbtnlink:"#/app/newuser",
            importbtnlink:"#/app/imported"
        },

        
    }
},


components: {
    Topcontroller,
}
}