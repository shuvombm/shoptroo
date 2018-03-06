(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        var path = window.location.pathname.split("/").pop();
         // Add active class to target link
          if ( path == '' ) {
            path = 'index.html';
          }

          var target = $('.top-menu a[href="'+path+'"]');
        target.addClass('active-top-menu');
        
        
        
        $(".balance-option-triger").on("click", function(){
            $(".balance-option ul").toggleClass("balance-active");
            return false;
        });
        
        
        $("body").on("click", function(){
            $(".balance-option ul").removeClass("balance-active");
            
        });
        
        $(".show-login").on("click", function(){
            $(".login-signup, .login-overley").addClass("login-active");
            return false;
        });
        
        $(".close-login, .login-overley").on("click", function(){
            $(".login-signup, .login-overley").removeClass("login-active");
            return false;
        });
        

        $(".show-cashback").on("click", function(){
            $(".missing-cashback, .login-overley").addClass("cashback-active");
            return false;
        });
        
        $(".close-cashback, .login-overley").on("click", function(){
            $(".missing-cashback, .login-overley").removeClass("cashback-active");
            return false;
        });
        
        

        
        
        

        //Owl carousel Start//
            $(".cashback-wrapper").owlCarousel({
             loop: false,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dot:false,
             nav: true,
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false,
             margin: 10,    
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:4,
                 },
                 1000:{
                     items:8,
                 }
             }
            
         });



    $('.datepicker').datepicker();   

    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 