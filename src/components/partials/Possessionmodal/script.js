import Modal from "./../Modal/Modal.vue"
import Possessioninnermodal from "./../Possessioninnermodal/Possessioninnermodal.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    components: {
        Modal,
        Possessioninnermodal
    }
}