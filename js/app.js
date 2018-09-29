$(document).ready(function () {

    $('.project').hover(function () {
        $(this).css('background', '#000');
        $(this).find('.title').css('color', '#fff');
        $(this).find('.project-inner').css('border-bottom','1.5px solid #000');
    }, function () {
        $(this).css('background', 'transparent');
        $(this).find('.title').css('color', '#000');
        $(this).find('.project-inner').css('border-bottom','1.5px solid #E8E8E8');
    });

    $('.back-button').hover(function(){
        $(this).find('img').attr('src','img/index/logo_hover.png');
    },function(){
        $(this).find('img').attr('src','img/index/logo.png');
    });

});
