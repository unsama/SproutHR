export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $('input[type="radio"]').on('change', function() {
                var className = $(this).val();
                var position;
                switch (className) {
                    case 'top':
                        position = { my: 'center bottom', at: 'center top-10' };
                        break;
                    case 'bottom':
                        position = { my: 'center top', at: 'center bottom+10' };
                        break;
                    case 'left':
                        position = { my: 'right center', at: 'left-10 center' };
                        break;
                    case 'right':
                        position = { my: 'left center', at: 'right+10 center' };
                        break;
                }
                position.collision = 'none';

                $('input[type="text"]').tooltip('option', 'position', position);
                $('input[type="text"]').tooltip('option', 'tooltipClass', className);
            });

            $('#options').buttonset();
            $('input[type="text"]').tooltip();
            $('input[value="right"]').trigger('change');

        });
    },
    data () {
        return {
            title: "Accounting Dashboard",
            dashboard: "Accounting Dashboard",


        }
    },
}