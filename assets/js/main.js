(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  

 //  
 $('.sofaBtn').click( function (event){ 
    event.preventDefault()
    $(".p__two").addClass('show');  

    $(".p__one").removeClass('show');        
    $(".p__three").removeClass('show');      
  });

  $('.textureBtn').click( function (event){ 
    event.preventDefault()
    $(".p__three").addClass('show');  

    $(".p__one").removeClass('show');        
    $(".p__two").removeClass('show');      
  });

 $('.tilbage__link a').click( function (event){ 
    event.preventDefault() 
	$(".p__one").addClass('show');
    $(".p__two").removeClass('show');        
    $(".p__three").removeClass('show');        
  }); 


 $('.sofasat__item a').click( function (event){ 
    event.preventDefault() 
	  $(".p__one").addClass('show');
    $(".p__two").removeClass('show');        
    $(".p__three").removeClass('show');        
  }); 



		// ------------ Counter BEGIN ------------ 
		$(".counter__increment, .counter__decrement").click(function(e)
		{
            e.preventDefault()
			var $this = $(this);
			var $counter__input = $(this).parent().find(".counter__input");
			var $currentVal = parseInt($(this).parent().find(".counter__input").val());

			//Increment
			if ($currentVal != NaN && $this.hasClass('counter__increment'))
			{
				$counter__input.val($currentVal + 1);
			}
			//Decrement
			else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
			{
				if ($currentVal >= 1) {
					$counter__input.val($currentVal - 1);
				}
			}
		});
		// ------------ Counter END ------------ 

 
})(jQuery);
