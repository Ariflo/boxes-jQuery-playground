$( function (){
console.log( "DOM Ready for manipulation!" );

// Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
$('#secretBox').css('background-color', 'white');
$('<h1> secret box! </h1>').appendTo('#secretBox');

// Find all child divs of the first row. Set the class for each div to boxType3.
$('#row1').children().addClass('boxType3');

// Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
$('#row4 div:last-child').remove();

// Change all red boxes to white.
$('.boxType1').css('background-color', 'white');

// Get the first two divs in the second row. Take away all styling from the divs.
$('#row2 div:lt(2)').removeClass();


// Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
$('.row').children('div:not(#secretBox)').css('width', '2px');	

});


