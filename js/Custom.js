//Pre-loads carousel animated background
function LoadAnimatedBackground()
{
var img = new Image();
img.src = "images/Animatedbg.gif";
}
//Pre-loads main logo
function LoadLogo() {
    var img = new Image();
    img.src = "images/LogoArthur2.png";
}
LoadAnimatedBackground();
LoadLogo();
$(TitleHover).hide();
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

$(window).scroll(function () {

    /* Check the location of each desired element */
    $('.featurette').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if($(this).hasClass("custom"))
             $(this).animate({
                'opacity': '1'
            }, 500);
        else
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

//Custom Typing animation for professional experience
function animateProfExperienceText() {
    var textContainer = $('#plaintext'); 
    $(textContainer).find('span').each(function () {
                //Necessary for the animation to work
                temp = $(this).text();
                //Verifies if this string isn't or hasn't already been typed
                //Empties field so we can animate it
                $(this).text("");
                //Animation magic
                $(this).typed({
                    strings: [temp],
                    contentType: 'html' // or 'text'
                });
                //Nobody likes a ton of cursors blinking all over the screen right?
                $(this).parent().parent().find('.typed-cursor').css("visibility", "hidden");
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
LoadLogo();
LoadAnimatedBackground();