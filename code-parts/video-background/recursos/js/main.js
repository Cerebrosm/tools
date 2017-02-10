$(document).ready(function(){

  var video = document.getElementById("bg-video");

  video.addEventListener( "canplay", function() {
    video.play();
  });

});
