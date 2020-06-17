
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


// $('.loop').owlCarousel({
//     center: true,
//     items: 2,
//     loop: true,
//     margin: 10,
//     responsive: {
//         600: {
//             items: 4
//         }
//     }
// });



$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },

        600: {
            items: 2
        },
        700: {
            items: 2
        },
        900: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

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

$(".home-nav").click(function () {
    var currentHref = $(this).attr("href");
    var currentOffset = $(currentHref).offset().top
    $("html, body").animate({ scrollTop: currentOffset }, 1000)
})
$(".top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 2000)
})