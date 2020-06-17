
$(".learnMore-button").click(function () {
    $(".Info").slideToggle(1000)

})

const player = document.querySelector("lottie-player");
player.load("https://assets5.lottiefiles.com/packages/lf20_HTwm72.json");



// or load via a Bodymovin JSON string/object

$(document).ready(function () {
    $(".more").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".more:hidden").slice(0, 6).slideToggle(1000);
        if ($(".more:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
})


$('.nonloop').owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 25,

    responsive: {
        600: {
            items: 2
        }

    }
});

var off = $(".navc").offset().top;
console.log(off)

$(window).scroll(function () {
    var x = $(window).scrollTop();
    if (x > off) {
        $(".navbar").css({ backgroundColor: '#3a0877', transition: ".5s" })
        $(".c").css({ color: "#fff", transition: ".5s" })
    }
    else {
        $(".navbar").css("backgroundColor", "transparent")
        $(".c").css({ color: "#fff" })
    }
})

$(document).ready(function () {
    $("#loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto")
    })
})