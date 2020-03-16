$(function () {

    $('button[filter]').click(function (e) {
        e.preventDefault();
        let $this = $(this),
            works = $('.filter__item'),
            thisClass = $this.attr('filter'),
            divShow = $('.' + thisClass),
            allBtn = $('button[filter]');


        if ($this.hasClass('active')) console.log(1);
        else if (thisClass == 'all') {
            works.fadeOut(0);
            works.fadeIn(600);
            allBtn.removeClass('active');
            $this.addClass('active');
            console.log(1);
        } else {
            console.log(2);
            works.fadeOut(0)
            divShow.fadeIn(600);
            allBtn.removeClass('active');
            $this.addClass('active');
        }

    });

    $('.slider-team').slick({
        slidesToShow:3,
        slidesToScroll:3,
        arrows:false,
        dots:true,
    });
});

