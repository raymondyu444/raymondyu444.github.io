$(document).ready(function() {
	$("#services").text("Our Services");

	$('.disclaimer').click(function() {
	  alert('Please read the disclaimer!!!');
	});
    
});

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 576) {
            $(".show").removeClass("show");
    } else {
    	$("#collapseOne").addClass("show");
    };
});