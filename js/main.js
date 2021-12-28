$(document).ready(function () {

    let $btns = $(".project-area-section .button-group button");
    // console.log($btns);

    $btns.click(function (e) {
        // console.log(e, " clicked");

        $(".project-area-section .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        console.log(selector)
        if(selector != undefined){
            $(".project-area-section .image-group").isotope({
                filter: `.${selector}`
            });
            console.log("got")
        }
        else {
            $(".project-area-section .image-group").isotope({
                filter: selector
            });
        }

        return false;

    })

    $('.image-link').magnificPopup({
        type:'image',
        gallery:{enabled:true}
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0:{
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

})