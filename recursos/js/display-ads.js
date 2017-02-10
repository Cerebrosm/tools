$(document).ready(function(){

  /*
   * Global variables
   */
  var nBanners = 0;

  /*
   * Se recorre el objeto banner para determinar cuantos banners se tienen que mostrar
   * Por el momento se muestran todos sin importar la cantidad y no hay algún tipo de paginación.
   * Se van agregando cada uno de los banners al contenedor para su visualización.
   */

  var companyContainer = '';

  for(company in companies){

    var objectCompany = companies[company];
    companyContainer += '<li> ' + company + ' <ul>';

    for(campaings in objectCompany){

      var objectCampaing = objectCompany[campaings];
      companyContainer += '<li> ' + campaings + ' <ul>';

      for(size in objectCampaing){

        var objectSize = objectCampaing[size];
        companyContainer += '<li>' + size + ' <ul>';

        for(banner in objectSize){

          var objectBanner = objectSize[banner];
          var kws = objectBanner['platform'];
          var kw = kws.replace(/ /g, "").split("|");
          companyContainer += '<li><a target="_blank" href="visualizador.php?banner=' + objectBanner['banner'] + '&id=' + objectBanner['id'] + '&platform=' + kw + '">' + banner + ' - ' + objectBanner['name'] + '</a></li>';
          console.log(objectBanner);
        }

        companyContainer += '</ul></li>';
        console.log(objectSize);

      }

      companyContainer += '</ul></li>';
      console.log(objectCampaing);

      nBanners++;
    }
    companyContainer += '</ul></li>';

    console.log(objectCompany);

    companyContainer += '</li>';


  }
  $("#banners").append(companyContainer);
  /* Se muestra el total de banners disponibles */
  $("#resultados").html(nBanners + " <b>Campañas disponibles</b>");

});
