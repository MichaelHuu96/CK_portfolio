$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      
      zoomMax: 1, // set max zoom to 1
      zoomMin: 1, // set min zoom to 1
      outlineColour: '#fff',
      outlineThickness: 0,
      reverse: true,
      depth: 1,
      maxSpeed: 0.03,
      textFont: null,
      textColour: null,
      weightMode:'both',
      weight: true,
      
      
      
      

    },'tags')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
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
