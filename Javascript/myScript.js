$(document).ready(function() {
  if(!$('#myCanvas').tagcanvas({
    shape: "vcylinder", // set shape to vcylinder
    zoomMax: 1, // set max zoom to 1
    zoomMin: 1, // set min zoom to 1
 
    reverse: true,
    outlineThickness:0,
    bgOutlineThickness:0,
    depth: 1,
    maxSpeed: 0.03,
    textFont: null,
    textColour: null,
    weightMode:'both',
    weight: true,
    bgOutlineThickness: 0,
    imageRadius:20,
    initial:[-0.05,0],
    radiusX:0.8,
    radiusZ:1,
    radiusY:0.6,
    depth:1,
    outlineOffset: 0,
    shadowOffset:"[0,2]",
    lock:"y",
    
    
  }, "tags")) {
    $("#myCanvasContainer").hide();
  }

  $("#myCanvasContainer").scroll(function() {
    var scrollLeft = $(this).scrollLeft();
    $("#tags").css("left", -scrollLeft);
  });
});


  function cloudhide(){
      document.querySelector('#myCanvas').
      document.querySelector('#cloud-atag').innerText = "";
  }


  function cloudhide(){
    // Get the current left of the div

    var top = $('#myCanvas').offset().top;
    setTimeout(function() { your_func(); }, 40000);
    $("#myCanvas").css({
      top: 0
    }).animate({
      top: 2000
    }, "slow");
  }
