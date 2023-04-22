$(function(){



// // Change Header Height
    
$('.header').height($(window).height());


$('.header .box i').on('click', function(){


    $('html, body').animate({

        scrollTop: $('.features').offset().top -15
    }, 1000)
})


// click to Hire Us

    $('.work').click(function(){

        $('html, body').animate({

            scrollTop: $('.our-work').offset().top -15
        }, 1000)
    })


    // click to Hire Us

    $('.hire').click(function(){

        $('html, body').animate({

            scrollTop: $('.our-team').offset().top -15
        }, 1000)
    })



    // Over lay picture

$('.our-work .items-box .item').hover(function(){

    $(this).find('.over').eq(0).animate({

        height: '100%',
        opacity: '0.9'
    }, 500)
}, function(){

    $(this).find('.over').eq(0).animate({

        height: '0',
        opacity: '0'
    }, 500)
})



// Show more Picture


    $('.our-work button').click(function(){


        if($(this).text() === 'Show More') {
    
            $('.our-work .items-box .hidden').fadeIn()
            $(this).text('Show Less')
        }
        else {
            $('.our-work .items-box .hidden').fadeOut()
            $(this).text('Show More')
    
            
        }

        
        
    })



    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
        }
                
    }
    
    checkClients();


    // Check Class Active

    $('.testim i').click(function(){

        if($(this).hasClass('fa-chevron-right')) {

            $('.testim .active').fadeOut(100, function(){

                $(this).removeClass('active').next('.client').addClass('active').fadeIn()

                checkClients();
            })
            

        }

        else {  

            $('.testim .active').fadeOut(100, function(){

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn()

                checkClients();
            })
            

           

        }

    })






      // remove the placeholder when I Focus it

      var placeHolderAttr = "" ;

      $('.contact input , textarea').on('focus', function(){

          placeHolderAttr = $(this).attr('placeholder')

          $(this).attr('placeholder', '')
      }).blur(function(){

          $(this).attr('placeholder', placeHolderAttr)
      })
  



// Close Reload
})