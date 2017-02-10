<?php
  session_start();

  function human_filesize($bytes, $decimals = 2) {
    $factor = floor((strlen($bytes) - 1) / 3);
    if ($factor > 0) $sz = 'KMGT';
    return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$sz[$factor - 1] . 'B';
  }



  if(isset($_SESSION["url"])){
    $postUrl = $_SESSION["url"];
    $postUrl = str_replace("/Applications/MAMP/htdocs/CerebroSM/tools.cerebrosm.com/", "../", $postUrl);
  }else{
    echo "No esta";
  }

  $filesize = filesize($_SESSION["zip"]);
  $size = human_filesize($filesize, 2);

  $metaBool = false;
  $metas = "";
  $exitTags = "";
  $url = $postUrl;
  error_reporting(E_ALL);
  include_once('simple_html_dom.php');
  $html = file_get_html($url);
  foreach($html->find('meta') as $element){
    if($element->name != "" || $element->name != null){
      /*
       * Meta test validator
       */
       if($element->name == "generator"){
         if (strpos($element->content, 'Google Web Designer') !== false) {
           $metaBool = true;
           $metas .= '<p>' . $element->name . '</p><p>' . $element->content . '</p><i>&#10003</i>';
         }else{
           $metas .= '<p>' . $element->name . '</p><p>' . $element->content . '</p><i>&#10005</i>';
         }
       }else{
         $metas .= '<p>' . $element->name . '</p><p>' . $element->content . '</p><i>-</i>';
       }

    }
  }

  $bannerWidth = $html->find('div[is="gwd-page"]', 0)->getAttribute('data-gwd-width');
  $bannerHeight = $html->find('div[is="gwd-page"]', 0)->getAttribute('data-gwd-height');
  $bannerWidth = str_replace("px","", $bannerWidth);
  $bannerHeight = str_replace("px","", $bannerHeight);

  foreach($html->find('gwd-exit') as $element){
    $exitTags .= '<tr><td><p>' . $element->getAttribute('metric') . '</p></td><td><p>' . $element->getAttribute('url') . '</p></td><td><i>&#10003</i><td></tr>';
  }

?>
<!DOCTYPE html>
<html lang="es">
<head>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Description -->
	<title>Herramientas - Banner Verification - Cerebro Smart Media</title>
  <meta content="Cerebro Smart Media - Agencia de Marketing digital dedicada a innovar en el área de publicidad digital" name="description">
  <meta content="cerebro, smart, media, cerebrosm, cerebro smart, cerebro smart media, agencia, agencia digital, agencia de marketing digital, publicidad digital" name="keywords">

	<!-- Icons -->
	<link rel="apple-touch-icon" sizes="180x180" href="/recursos/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="/recursos/favicons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/recursos/favicons/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/recursos/favicons/manifest.json">
  <link rel="mask-icon" href="/recursos/favicons/safari-pinned-tab.svg" color="#2b5797">
  <meta name="theme-color" content="#ffffff">

	<!-- Social -->

	<!-- Facebook -->
	<meta property="og:url" content="" />
  <meta property="og:title" content="" />
  <meta property="og:description" content="" />
  <meta property="og:site_name" content="" />
  <meta property="og:image" content="" />

	<!-- Twitter -->
	<meta content="summary_large_image" name="twitter:card">
  <meta content="" name="twitter:title">
  <meta content="" name="twitter:description">
  <meta content="@" name="twitter:site">
  <meta content="@" name="twitter:creator">
  <meta content="" name="twitter:domain">
  <meta content="" name="twitter:image:src">

	<!-- Stylesheets -->
	<link type="text/css" rel="stylesheet" href="/recursos/css/font-awesome.css"/>
	<link type="text/css" rel="stylesheet" href="/recursos/css/bootstrap.css"/>
	<link type="text/css" rel="stylesheet" href="/recursos/css/animate.css"/>
	<link type="text/css" rel="stylesheet" href="/recursos/css/main.css"/>

	<!-- Stylesheets for older browsers -->
	<!-- IE6/7 micro clearfix -->
	<!--[if lte IE 7]>
		<style>
			.grouping {
				*zoom: 1;
			}
		</style>
	<![endif]-->
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<!-- Javascript -->



</head>
<body>

	<!-- Bootstrap Template -->

	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<a href="/" target="_self">
						<img class="img-responsive logo" src="/recursos/images/tool-logo-white.png"/>
					</a>
  				<h1>Cerebro Smart Media <small>Banner Verification</small></h1>
				</div>
			</div>
		</div>
	</header>

	<section>

		<div class="container">

			<div class="row">

				<div class="col-md-10 col-md-offset-1">

					<p>En este espacio se muestran las especificaciones</p>
					<div class="clearfix"></div>

					<div class="col-md-12">

            <table class="table">
              <tr>
                <td>Tamaño</td>
                <td><?php echo $size; ?></td>
              </tr>
              <?php echo $metas; ?>
            </table>
            <table class="table">
              <?php echo $exitTags; ?>
            </table>

            <div id="i-banner-container" style="width:<?php echo $bannerWidth; ?>px;height:<?php echo $bannerHeight; ?>px;">
              <div class="i-overlayer" style="width:<?php echo $bannerWidth; ?>px;height:<?php echo $bannerHeight; ?>px;"></div>
              <iframe id="i-banner" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" bordercoor="#000000" src="<?php echo $url; ?>" width="<?php echo $bannerWidth; ?>" height="<?php echo $bannerHeight; ?>"></iframe>
            </div>
            <br><br>
            <div id="div-banner" class="div-banner"></div>
            <div class="clearfix"></div>
            <p><b>NOTA. Los links o enlaces del banner han sido deshabilitados para prevenir que sean ejecutados y modifiquen los resultados de medición.</b></p>
					</div>

					<div class="clearfix"></div>

				</div>

			</div>

      <div class="row">
				<div class="col-md-6 col-md-offset-3">
					<br>
					<p><a target="_blank" href="http://cerebrosm.com.mx">Cerebro Smart Media</a> es una agencia digital mexicana innovadora y siempre estamos creando herramientas que ayudan y facilitan tanto nuestro trabajo como el de los demás.</p>

					<ul class="redes footer">
						<li><a href="https://www.facebook.com/CerebroSM/?fref=ts" target="_blank"><i class="fa fa-facebook-official fa-4x" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div>

		</div><!-- Container -->

	</section>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-4 pull-right">
					<a href="/" target="_self">
						<img class="img-responsive logo" src="/recursos/images/tool-logo-white.png"/>
					</a>
				</div>
			</div>
		</div>
	</footer>

	<!-- End Bootstrap Template -->

	<!-- Javascript -->
	<script type="text/javascript" src="/recursos/js/jquery-1.11.2.js"></script>
	<script type="text/javascript" src="/recursos/js/bootstrap.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.6/postscribe.min.js"></script>
	<script type="text/javascript" src="/recursos/js/script-banner-test.js"></script>
  <script type="text/javascript">
    $(window).load(function(){
      $('.i-overlayer').click(function(event) {
        event.preventDefault();
        var bannerUrl = $('#i-banner').contents().find('gwd-exit').attr("url");
        alert("Liga implementada - " + bannerUrl);
      });
    });
    /*$('#div-banner').load('<?php echo $url; ?>',function(){alert('loaded')});*/
  </script>
  <script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-67008624-2', 'auto');
	  ga('send', 'pageview');
	</script>
</body>
</html>
