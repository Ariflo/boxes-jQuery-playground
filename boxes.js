$( function (){

	// Add an on click handler to the container div. Console log the x and y position of the click.
	$('#container').on('click', function(e){
	 	var cursorX = e.pageX;
	    	var cursorY = e.pageY;
	    	console.log(cursorX, cursorY);
	} );

	// Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
	$('.boxType1').append('<a href="http://www.galvanize.com/">Galvanize</a>')

	$('.boxType1 a').on('click', function(){
	 	alert("You can check-out, but you may never leave.");
	 	return false;
	} );	

	// For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
	$('.box').on('click', function(){
	 	$('.box').toggleClass("pup");
	} );



	// Write a click handler on the conatainer div. The click handler should turn the container background to black and the background of the original div that was clicked to white. 
	//If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. 
	//You can do it completely with what is given to you in the event callback.
	$('#container').on('click', function(e){
		
		var target = $(e.target); 

		$('#container').css('background', 'green');
		
		if (target.is('#container div .box')){

			target.css('background', 'white'); 
			$('#container').css('background', 'black');
		}


	} );


});





