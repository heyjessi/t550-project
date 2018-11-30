/* main JS file */

console.log("Hello JS world!");

$("#show").click(function(){
    $(".stories").show();
    $(".profile").animate({opacity: '1'}, "slow");
});

$("#show").click(function(){
    $("#show").hide();
});

var best = document.getElementById("weekAudio");
var comfort = document.getElementById("comfortAudio");
var favorite = document.getElementById("favoriteAudio");
var nostalgia = document.getElementById("nostalgiaAudio");
var perfect = document.getElementById("bestAudio");

$('#best').hover(function () {
                    best.load();
                    best.play();
                    imgSize("best"); },
    function () {
        best.pause();
        normalSize();
    });

$('#comfort').hover(function () {
        comfort.load();
        comfort.play();
        imgSize("comfort");},
    function () {
        comfort.pause();
        normalSize();
    });


$('#favorite').hover(function () {
        favorite.load();
        favorite.play();
        imgSize("favorite");},
    function () {
        favorite.pause();
        normalSize();
    });

$('#nostalgia').hover(function () {
        nostalgia.load();
        nostalgia.play();
        imgSize("nostalgia");},
    function () {
        nostalgia.pause();
        normalSize();
    });

$('#perfect').hover(function () {
        perfect.load();
        perfect.play();
        imgSize("perfect");},
    function () {
        perfect.pause();
        normalSize();
    });


function normalSize() {
    $('.myProfile').css('width', '290px');
    $('.myProfile').css('height', '290px');
}

function imgSize(img_id) {
    $('.myProfile').css('width', '262px');
    $('.myProfile').css('height', '262px');
    $("#" + img_id).css('width', '400px');
    $("#" + img_id).css('height', '400px');
    console.log("#" + img_id);
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log(x);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

