const btn = $('.switch-btn');
const video = $('.video-container');

btn.on('click',function(){
    // console.log(btn);
    if(btn.hasClass('slide')){
        btn.removeClass('slide');
        video.trigger('play');
    }
    else{
        btn.addClass('slide');
        video.trigger('pause');
    }
})

const preloader = $('.preloader');

$(document).ready(function(){
    preloader.addClass('hide-preloader');
})

