var isMobile = false; //initiate as false
$(TitleHover).hide();
// IFrame
function resizeIframe(obj) {
	obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
$(".MainMenuHover").hover(function () {
    $(TitleHover).html($(this).html());
    $(TitleHover).stop();
    $(TitleHover).fadeIn();
},
	function () {
	    // $(TitleHover).html(oldText);
	    $(TitleHover).fadeOut()
	}
);
$(".col-lg-4").hover(function () {
    $(TitleHover).html($(this).find("h2").html());
    $(TitleHover).stop();
    $(TitleHover).fadeIn();
    $(this).find("img").css("box-shadow", "0px 0px 5px #000EE8");
},
	function () {
	    // $(TitleHover).html(oldText);
	    $(this).find("img").css("box-shadow", "none");
	    $(TitleHover).fadeOut();
	}
);
$("#AboutMeMenu").click(function () {
    $('html, body').animate({
        scrollTop: (parseInt($("#AboutMe").offset().top, 10) * 0.90)
    }, 500);
});
$("#ContactMeMenu").click(function () {
    $('html, body').animate({
        scrollTop: (parseInt($("#ContactMe").offset().top, 10) * 0.90)
    }, 500);
});
$("#ExperienceButton").click(function () {
    $('html, body').animate({
        scrollTop: (parseInt($("#ProfessionalExperience").offset().top, 10) * 0.90)
    }, 500);
});
$("#ProgrammingSkillsButton").click(function () {
    $('html, body').animate({
        scrollTop: (parseInt($("#ProgrammingSkills").offset().top, 10) * 0.90)
    }, 500);
});
$("#PapersButton").click(function () {
    $('html, body').animate({
        scrollTop: (parseInt($("#Papers").offset().top, 10) * 0.90)
    }, 500);
});
//Code to check if device is mobile to change layout of the background accordingly
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
//Default Cover Image
if (isMobile) {
    //$(TitleHover).css("data-position", "fixed");
    $($(".container.marketing")[0]).css("margin-top", "120%");
    $($(".navbar.navbar-inverse.navbar-static-top")[0]).css("position", "fixed");
    $($(".navbar.navbar-inverse.navbar-static-top")[0]).css("width", "100%");
}
else { //Here we will pre-load the GIF and only display it after it has been fully loaded

    var img = new Image();
    img.src = "images/Animatedbg.gif";
}
//Pre-loads main logo
function LoadLogo() {
    var img = new Image();

    img.onload = function () {
        $(".OverlayImage").css("background", "center no-repeat url(" + img.src + ")");
    };
    img.src = "images/LogoArthur2.png";
}
LoadLogo();

//Distance from top of window
var distance = $('#FixedHeader').offset().top,
    $window = $(window);
var originalHtml = $('#FixedHeader').html();
//Code below was an old fixed header that used to show after the used scrolled down the window
//$window.scroll(function () {
//    if (!isMobile) {
//        if ($window.scrollTop() >= distance) {
//            // Your div has reached the top
//            $('.container').addClass("scrolledContainer");
//        }
//        else if(distance) {
//            $('.container').removeClass("scrolledContainer");
//        }
//    }

//});

$(window).scroll(function () {

    /* Check the location of each desired element */
    $('.featurette').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If 98% of the object is visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object * 0.91) {

            $(this).animate({
                'opacity': '1'
            }, 500);

            $(this).find('span').each(function () {

                //Necessary for the animation to work
                temp = $(this).text();
                //Verifies if this string isn't or hasn't already been typed
                if (temp !== "" && temp !== "|" && $(this).parent().find('.typed-cursor').length === 0) {
                    //Empties field so we can animate it
                    $(this).text("");
                    //Animation magic
                    $(this).typed({
                        strings: [temp],
                        contentType: 'html' // or 'text'
                    });
                    //Nobody likes a ton of cursors blinking all over the screen right?
                    $(this).parent().parent().find('.typed-cursor').css("visibility", "hidden");
                }
            });
        }
    });
});

//Remove elements that are ugly on mobile
if (isMobile) {
    $('.col-md-5').each(function () {
        if ($(this).find("img").attr("src") === "images/placeHolder.png") {
            $(this).find("img").hide();
        }
    });
}
//Typed animation
$(document).ready(function () {
    $(function () {
        $("#TypedTitle").typed({
            strings: ["I'm a Full-stack developer.^500", "I'm a web designer.^500", "I'm Arthur Geron.^500"],
            typeSpeed: 0
        });
    });
});
$(window).on('load', function () {
    if ($(window).width() > 800)
        $('.container.marketing').css('margin-top', $('.carousel.slide').height());
    else
        $('.container.marketing').css('margin-top', $('.carousel.slide').height());
})


//Fixing logo position(carousel slider)
$(document).on('load', function () {
    $('.carousel').height = (500 + $('.navbar-wrapper')[0].height) + 'px';
})
$(document).ready(function () {
    if (!isMobile)
        $('.Overlay').css('margin-top', ($('.navbar-collapse.collapse').height() * 0.7) + 'px');
});
//$(window).scroll(function () {
//    if ($(this).scrollTop() > 1) {
//        $('#FixedHeader').addClass("sticky");
//    }
//    else {
//        $('#FixedHeader').removeClass("sticky");
//    }
//});
