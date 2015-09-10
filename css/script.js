$(document).ready(function(){
    $(window).bind("resize",function(){
    console.log($(this).width())
    if($(this).width() <346){
    $('#navi').addClass('nav-stacked')
    }
    else{
    $('#navi').removeClass('nav-stacked')
    }
})
});