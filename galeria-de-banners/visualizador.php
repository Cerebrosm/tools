<?php

/*
 * Queries ?
 * banner=display|richmedia
 * id=12dhfgrtlan
 */

$id = $_GET["id"];
$banner = $_GET["banner"];
$platform = $_GET["platform"];
$platform = explode(",",$platform);

?>
<!DOCTYPE html>
<html lang="es">
<head>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Description -->
	<title>Cerebro Smart Media Visualizador de banner</title>
	<meta content="Cerebro Smart Media - Agencia de Marketing digital dedicada a innovar en el área de publicidad digital" name="description">
  <meta content="cerebro, smart, media, cerebrosm, cerebro smart, cerebro smart media, agencia, agencia digital, agencia de marketing digital, publicidad digital" name="keywords">

	<!-- Icons -->
	<link rel="apple-touch-icon" sizes="180x180" href="/recursos/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" href="/recursos/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/recursos/favicons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="/recursos/favicons/manifest.json">
	<link rel="mask-icon" href="/recursos/favicons/safari-pinned-tab.svg" color="#2b5797">

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

	<!-- Inline javascript to determine the id of the banner and specifications -->
	<script type="text/javascript">

		var actualBannerID = "<?php echo $id; ?>";

	</script>

</head>
<body>

	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<a href="/" target="_self">
						<img class="img-responsive logo" src="/recursos/images/tool-logo-white.png"/>
					</a>
  				<h1>Cerebro Smart Media <small>Visualizador de banner</small></h1>
				</div>
			</div>
		</div>
	</header>

	<section id="banner">

		<div class="container">

			<div class="row">

				<div class="col-md-12">

					<div class="row">

						<?php
							if(in_array("Desktop", $platform)){
						?>
							<span id="desktop" class="fa-stack fa-2x active">
								<i class="fa fa-circle fa-stack-2x"></i>
								<i class="fa fa-desktop fa-stack-1x fa-inverse"></i>
							</span>
						<?php
							}
						?>

						<?php
							if(in_array("Tablet", $platform)){
						?>
							<span id="tablet" class="fa-stack fa-2x">
								<i class="fa fa-circle fa-stack-2x"></i>
								<i class="fa fa-tablet fa-stack-1x fa-inverse"></i>
							</span>
						<?php
							}
						?>

						<?php
							if(in_array("Mobile", $platform)){
						?>
							<span id="mobile" class="fa-stack fa-2x">
								<i class="fa fa-circle fa-stack-2x"></i>
								<i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
							</span>
						<?php
							}
						?>

					</div>

				</div>

			</div>

			<div class="row desktop-bg">

				<div class="col-md-12">

					<div class="row">

							<h5 id="title-banner"></h5>

					</div>

				</div>

				<div class="col-md-12">

					<div id="banner-desktop-size" class="iframe-container">
						<iframe id="banner-desktop-iframe" class="iframe-banner" src="" frameborder="0" scrolling="no" ></iframe>
					</div>

				</div>

			</div>

		</div>

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
	<script type="text/javascript" src="/recursos/js/mobile-detect.js"></script>
	<?php if($banner == "displayAd"){ ?>
	<script type="text/javascript" src="/recursos/js/bannerDisplay.js"></script>
	<?php }elseif($banner == "richmediaAd"){ ?>
	<script type="text/javascript" src="/recursos/js/bannerRich.js"></script>
	<?php }else{ ?>
		<!-- Error loading the material -->
	<?php } ?>
	<script type="text/javascript" src="/recursos/js/visualizador.js"></script>
</body>
<html>
