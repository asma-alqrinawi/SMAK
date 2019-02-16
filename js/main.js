$(document).ready(function() {
$(".down").click(function() {
     $('html, body').animate({
         scrollTop: $(".up").offset().top
     }, 1500);
 });
});

$(document).ready(function() {
$(".up").click(function() {
     $('html, body').animate({
         scrollTop: $(".down").offset().top
     }, 1000);
 });
});


$(document).ready(function() {
$('ALL').on('click', function() {
    $('div.awesomeDocs').animate({
        'width': 'show'
    }, 1000, function() {
        $('div.awesomeDocs').fadeIn(500);
    });
});

$('#home').on('click', function() {
    $('div.home').fadeOut(500, function() {
        $('div.panel').animate({
            'width': 'hide'
        }, 1000);
    });
});
});