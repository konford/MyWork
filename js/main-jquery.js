
$(document).ready(function() {		

        
	var w = $(window).width();

	if (w <= 950) {
		if($("#right").hasClass("redd")) {} else {
			$("#right").clone("#right").attr('id', 'rightAdaptiv').appendTo("#left");
			$("#right").addClass("redd");
		}
		 
	};

	if (w >= 951) {
		if($("#right").hasClass("redd")) {
			  $("#right").removeClass("redd");
			  $("#rightAdaptiv").remove();
		 }
	}


	if (w <= 730) {
		var h2 = $(".paragraph h2");
		if($(".paragraph h2").length) {
			 $(".paragraph h2").remove();
			$(h2).prependTo(".course");
		 }
		
	}

	if (w >= 731) {
		var h2 = $(".course h2");
		if($(".course h2").length) {
			$(".course h2").remove();
			$(h2).prependTo(".paragraph");
		}
		
	}
	
	
	$(window).bind("resize" , function () {
		
		var w = $(window).width();


			if (w <= 950) {
				if($("#right").hasClass("redd")) {} else {
					$("#right").clone("#right").attr('id', 'rightAdaptiv').appendTo("#left");
					$("#right").addClass("redd");
				}
				 
			};

			if (w >= 951) {
				if($("#right").hasClass("redd")) {
					  $("#right").removeClass("redd");
					  $("#rightAdaptiv").remove();
				 }
			}


			if (w <= 730) {
				var h2 = $(".paragraph h2");
				if($(".paragraph h2").length) {
				     $(".paragraph h2").remove();
				    $(h2).prependTo(".course");
			     }
				
			}

			if (w >= 731) {
				var h2 = $(".course h2");
				if($(".course h2").length) {
					$(".course h2").remove();
				    $(h2).prependTo(".paragraph");
				}
				
			}

  });

});
