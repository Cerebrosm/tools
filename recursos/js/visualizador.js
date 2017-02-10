$(document).ready(function(){

  /*
   * Global variables
   */

  var isMobile = false;
  var isTablet = false;

  /*
   * Detect if mobile / Tablet or Desktop via Mobile detect plugin
   * This is for custom iframe banner to specific dimensions
   */
  var md = new MobileDetect(window.navigator.userAgent);

  if(md.mobile()){

    // isMobile

  }else if(md.tablet()){

    // isTablet

  }else{

    // isDesktop

  }

  /*
   * Set banner options on the fly
   */
  if($("#banner-desktop-size").length){

    for(company in companies){
      var objectCompany = companies[company];
      for(campaings in objectCompany){
        var objectCampaing = objectCompany[campaings];
        for(size in objectCampaing){
          var objectSize = objectCampaing[size];
          for(banner in objectSize){
            var searchBannerID = objectSize[banner]['id'];
            if(searchBannerID == actualBannerID){
              $("#banner-desktop-size").attr("class", 'iframe-container ' + objectSize[banner]['position']);
              $("#banner-desktop-iframe").attr("src", objectSize[banner]['source']);
              $("#title-banner").html(objectSize[banner]['name']);
            }
          }
        }
      }
    }
  }

});
