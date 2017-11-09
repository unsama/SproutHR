export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "All Expense Reports",
            title: 'Configure Expense - Sprout',
        }
    },
}