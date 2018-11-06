var count = 0

$(document).ready(function () {
    $('#warCelDiv').hide()
    $('#wario').hide()
    $('#space2').hide()
    $('#space').hide()
    $('#warCelDiv').delay(500).fadeIn(1500).delay(3200).fadeOut(1000, function () {
        $('#welcome').delay(1000).fadeIn(1000).delay(1800).fadeOut(500)
        $('#profilePic').delay(1500).animate({ left: "+=200" }, 2000).slideToggle(1000)

        $('#itemOneTitle').delay(4500).slideDown(1500)
        $('#info1').delay(6500).fadeIn(1100)
        $('#info2').delay(9000).fadeIn(1200)
        $('#info3').delay(12000).fadeIn(1300)
        $('#info4').delay(15000).fadeIn(1300)
        $('#info5').delay(18000).show().animate({ color: "lightgrey", fontSize: "40px", opacity: "1.0" }, 1300).delay(200).animate({ color: "black", fontSize: "5px", opacity: "0.2" }, 1000).fadeOut(200, function () {
            $('#wario').show().animate({ marginLeft: "+=1700" }, 2700).fadeOut(function () {

                $('.navbar').slideDown(700, function () {
                    $('#prev').fadeIn(400)
                    $('#next').fadeIn(400, function () {
                        $('#0').animate({ backgroundColor: "#32CD32" }, 200, function () {
                            $('#1').animate({ backgroundColor: "#FF7F50" }, 200, function () {
                                $('#2').animate({ backgroundColor: "#FF7F50" }, 200, function () {
                                    $('#3').animate({ backgroundColor: "#FF7F50" }, 200, function () {
                                        $('#prev').css('pointer-events', 'auto')
                                        $('#next').css('pointer-events', 'auto')
                                        $('#space2').slideDown(900, function () {
                                            $('#space').fadeIn(1100)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
$('#myCarousel').bind('slid.bs.carousel', function (e) {
    if ($(e.relatedTarget).index() == 1) {
        $('body').css('background-color', 'dodgerblue')
    }
    else if ($(e.relatedTarget).index() == 2) {
        $('body').css('background-color', 'goldenrod')
    }
    else if ($(e.relatedTarget).index() == 3) {
        $('body').css('background-color', 'gainsboro')
    }
    else {
        $('body').css('background-color', 'black')
    }

})
$('#myCarousel').bind('slide.bs.carousel', function (e) {
    if ($(e.relatedTarget).index() == 1) {
        $('.carousel-indicators li').css('background-color', 'white')
        $('.carousel-indicators #1').css('background-color', 'orange')
        $('#space2').css('background-color', 'goldenrod')
        $('#space').css('background-color', 'goldenrod')
    }
    else if ($(e.relatedTarget).index() == 2) {
        $('.carousel-indicators li').css('background-color', 'blue')
        $('.carousel-indicators #2').css('background-color', 'red')
        $('#space2').css('background-color', '#420D09')
        $('#space').css('background-color', '#420D09')
    }
    else if ($(e.relatedTarget).index() == 3) {
        $('body').css('background-color', 'gainsboro')
        $('.carousel-indicators li').css('background-color', 'black')
        $('.carousel-indicators #3').css('background-color', 'skyblue')
        $('#space2').css('background-color', 'darkgrey')
        $('#space').css('background-color', 'darkgrey')
    }
    else {
        $('.carousel-indicators li').css('background-color', 'coral')
        $('.carousel-indicators #0').css('background-color', 'lime')
        $('.fa-github').css('background', '#303030')
        $('#space2').css('background-color', 'mediumpurple')
        $('#space').css('background-color', 'mediumpurple')
        $('body').css('background-color', 'black')
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
particlesJS("space", {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 200
            }
        },
        "shape": {
            "type": "circle"
        },
        "color": {
            "value": ["#7EC0EE", "#1E90FF", "#F0F8FF", "#003366"]
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true
        },
        "line_linked": {
            "enable": false,
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
                "particles_nb": 10
            }
        }
    }
})
particlesJS("space2", {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 200
            }
        },
        "shape": {
            "type": "circle"
        },
        "color": {
            "value": ["#7EC0EE", "#1E90FF", "#F0F8FF", "#003366"]
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true
        },
        "line_linked": {
            "enable": false,
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
                "particles_nb": 10
            }
        }
    }
})
