var count = 0

$(document).ready(function () {
    //particlesJS("snowfall", 'assets/snowflakes.json')
    $('#snowfall').hide()
    $('#welcome').delay(1000).fadeIn(1000).delay(1800).fadeOut(500)
    $('#profilePic').delay(1500).animate({ left: "+=200" }, 2000).slideToggle(1000)

    $('#itemOneTitle').delay(4500).slideDown(1500)
    $('#info1').delay(6500).fadeIn(1100)
    $('#info2').delay(9000).fadeIn(1200)
    $('#info3').delay(12000).fadeIn(1300)
    $('#info4').delay(15000).fadeIn(1300)
    $('#info5').delay(18000).fadeIn(1000).delay(1000).fadeOut(1000, function () {
        $('body').animate({ backgroundColor: 'black' }, 1300, function () {
            $('.pos-f-t').slideDown(700, function () {
                $('#prev').fadeIn(400)
                $('#next').fadeIn(400, function () {
                    $('#0').animate({ backgroundColor: "#57f224" }, 200, function () {
                        $('#1').animate({ backgroundColor: "#FF7F50" }, 200, function () {
                            $('#2').animate({ backgroundColor: "#FF7F50" }, 200, function () {
                                $('#3').animate({ backgroundColor: "#FF7F50" }, 200, function () {
                                    $('#prev').css('pointer-events', 'auto')
                                    $('#next').css('pointer-events', 'auto')
                                    $('#snowfall').show()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
$('#myCarousel').bind('slide.bs.carousel', function (e) {
    if ($(e.relatedTarget).index() == 1) {
        $('body').css('background-color', 'dodgerblue')
        $('body').css('background-image', 'none')
        $('.carousel-indicators li').css('background-color', 'white')
        $('.carousel-indicators #1').css('background-color', 'orange')
    }
    else if ($(e.relatedTarget).index() == 2) {
        $('body').css('background-color', 'goldenrod')
        $('body').css('background-image', 'none')
        $('.carousel-indicators li').css('background-color', 'blue')
        $('.carousel-indicators #2').css('background-color', 'red')
    }
    else if ($(e.relatedTarget).index() == 3) {
        $('body').css('background-color', 'gainsboro')
        $('body').css('background-image', 'none')
        $('.carousel-indicators li').css('background-color', 'black')
        $('.carousel-indicators #3').css('background-color', 'skyblue')
    }
    else {
        $('body').css('background-color', 'black')
        $('body').css('background-image', 'none')
        $('.carousel-indicators li').css('background-color', 'coral')
        $('.carousel-indicators #0').css('background-color', 'lime')
        $('.fa-github').css('background', '#303030')
    }
})
function randomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
function changeWelcomeColor() {
    colorInput = randomColor()
    $('#welcome').css('color', colorInput)
}
setInterval("changeWelcomeColor()", 250)
particlesJS("snowfall", {
    "particles": {
        "number": {
            "value": 500
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "value": 2,
            "random": false
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "left",
            "straight": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true
            }
        },
        "modes": {
            "push": {
                "particles_nb": 100
            }
        }
    }
})
particlesJS("snowfall2", {
    "particles": {
        "number": {
            "value": 500
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "value": 2,
            "random": false
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "straight": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            }
        },
        "modes": {
            "push": {
                "particles_nb": 12
            }
        }
    }
});
