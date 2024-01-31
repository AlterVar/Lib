$(document).ready(function () {
    $('.fadex').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.carousel-control-prev'),
        nextArrow: $('.carousel-control-next')
    });


    $(function () {
        let icons = {
            header: "static",
            activeHeader: "active"
        };
        $("#accordion").accordion({
            icons: icons,
            collapsible: true,
            heightStyle: "content"
        });
    });

    new WOW().init();

    /* Валидация */

    $('#inputIndex').bind("change keyup input click",function(){
        if(this.value.match(/\D/g)){
            this.value=this.value.replace(/\D/g,'');
        }
    });

    $('#submitBtn').click(function () {
        let inputs = $('.form-control');
        let index = $('#inputIndex');
        let approved = $('.order-approved');
        let form = $( ".form-section" );

        for (let i = 1; i < inputs.length; i++) {
            if (inputs.eq(i).val() < 1) {
                event.preventDefault();
                alert('Заполните поле ' + inputs.eq(i).prev().text());
                return;
            }
        }

        if (index.val().length !== 6) {
            alert('Поле "' + index.prev().text() + '" должно содержать 6 символов');
            return;
        }


        form.delay(600).fadeOut(600, function () {
            approved.removeClass('d-none');
        });
    });

    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
});