export default{
    created: function () {
        $(function(){
            $(".selItem").on("click", function(e){
                e.preventDefault();
            });
        });
    },
    data(){
        return {
            grabData: [],
            aComData: [
                "check1",
                "check2",
                "check3",
                "check4",
                "check5",
                "check6",
                "check7",
                "check8",
                "check9",
                "check9",
                "check6",
                "check6",
                "check6",
                "check4",
                "check5"
            ],
            newVal: ""
        }
    },
    methods: {
        addData: function(event){
            let self = this;
            if(self.newVal != ""){
                self.grabData.push(self.newVal);
                self.newVal = "";
            }
        },
        delData: function(event){
            let self = this;
            if(self.newVal == "" && self.grabData.length > 0){
                console.log("del");
                self.grabData.pop();
            }
        }
    }
}
