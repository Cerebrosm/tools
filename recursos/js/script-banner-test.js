$(document).ready(function(){

  /*
   * Script unicamente para la aplicación web Script-banner-test
   * En esta aplicación se pretende pedir al usuario el script del banner para después visualizarlo y pueda comprobar
   * que funciona el banner correctamente y en el caso de que quiera tomar una impresión de pantalla.
   */
  $("#demo").on("click", function(){

     // demo btn
     $('#display-area').html('');
     postscribe('#display-area', '<img class="img-responsive" src="/recursos/images/script-banner-test-demo-468x60.gif"/>');

  });
  $("#test").on("click", function(){

    // Test btn
    $('#display-area').html('');
    var getTextArea = $("#text-area").val();
    postscribe('#display-area', getTextArea);
  });
  $("#vast").on("click", function(){

    // demo btn
    var vastUrl = $('#text-area-vast').val();
    $.ajax({
      method: "POST",
      url: "text-area-vast.php",
      data: { vastUrl: vastUrl }
    }).done(function( msg ) {
      $('#display-video-area').html('');
      var videoScript = "<video controls><source class='embed-responsive-item' src='" + msg + "' type='video/mp4'/></video>"
      postscribe('#display-video-area', videoScript);
    });

  });

  $("#form-zip").submit(function(e){
    /*
    e.preventDefault();
    $.ajax({
      url: "upload-banner.php",
      type: "POST",
      //dataType: "JSON",
      data: new FormData($("#form-zip")[0]),
      processData: false,
      contentType: false,
      success: function (data, status)
      {
        console.log("Data: " + data + " Status: " + status);
        if(data == 1){
          window.location.href = 'verify-html.php'; //Will take you to Google.
        }
      },
      error: function (xhr, desc, err)
      {
        console.log("Error en el envio, XHR: " + xhr + " DESC: " + desc + " ERR:" + err);
      }
    });*/

  });

});


function loadingToogle(){
  setTimeout(function(){
    $(".loading").toggleClass("hidden");
  }, 500);
}
