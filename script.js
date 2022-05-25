
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.navbar').addClass("active");
        }
        else{
            $('.navbar').removeClass("sticky");

        }
    })
    //toggle menu/navbar script
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
    })
    // owl carousel script
    

});