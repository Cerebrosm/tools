<?php

$isValid = false;
if($_FILES["zip-file"]["name"]) {
	$filename = $_FILES["zip-file"]["name"];
	$source = $_FILES["zip-file"]["tmp_name"];
	$type = $_FILES["zip-file"]["type"];

	$name = explode(".", $filename);
	$accepted_types = array('application/zip', 'application/x-zip-compressed', 'multipart/x-zip', 'application/x-compressed');
	foreach($accepted_types as $mime_type) {
		if($mime_type == $type) {
			$okay = true;
			break;
		}
	}

	$continue = strtolower($name[1]) == 'zip' ? true : false;
	if(!$continue) {
		$isValid = false;
	}
  $timestamp = new DateTime();
  $formatTime = $timestamp->format('Y_m_d_H_i_s');
  mkdir("/Applications/MAMP/htdocs/CerebroSM/tools.cerebrosm.com/recursos/zip-banners/".$formatTime, 0755);
	$target_path = "/Applications/MAMP/htdocs/CerebroSM/tools.cerebrosm.com/recursos/zip-banners/".$formatTime."/".$filename;  // change this to the correct site path
  $final_path = "/Applications/MAMP/htdocs/CerebroSM/tools.cerebrosm.com/recursos/zip-banners/".$formatTime."/".$name[0]."/index.html";  // change this to the correct site path
  if(move_uploaded_file($source, $target_path)) {
		$zip = new ZipArchive();
		$x = $zip->open($target_path);
		if ($x === true) {
			$zip->extractTo("/Applications/MAMP/htdocs/CerebroSM/tools.cerebrosm.com/recursos/zip-banners/".$formatTime."/"); // change this to the correct site path
			$zip->close();
			//unlink($target_path);
		}
		$htmlFile = file_get_contents($final_path, FILE_USE_INCLUDE_PATH);
		$phpFile = "/Applications/MAMP/htdocs/CerebroSM/tools.cerebrosm.com/recursos/zip-banners/".$formatTime."/".$name[0]."/index.php";
		$handle = fopen($phpFile, 'w') or die('No se puede abrir:  '.$phpFile);
		$phpData = '<?php echo "Se ha generado el archivo desde php"; ?>' . $htmlFile;
		fwrite($handle, $phpData);

		$isValid .= true;
	} else {
		$isValid = false;
	}
}

function human_filesize($bytes, $decimals = 2) {
	$factor = floor((strlen($bytes) - 1) / 3);
	if ($factor > 0) $sz = 'KMGT';
	return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$sz[$factor - 1] . 'B';
}

$postUrl = $final_path;
$postUrl = str_replace("/Applications/MAMP/htdocs/CerebroSM/tools.cerebrosm.com/", "../", $postUrl);

$filesize = filesize($target_path);
$size = human_filesize($filesize, 2);

$metaBool = false;
$metas = "";
$exitTags = "";
$url = $postUrl;

$htmlMetas = "";
$htmlStyles = "";
$htmlHeadScripts = "";
$htmlBody = "";

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
				 $metas .= '<tr><td><p>' . $element->name . '</p></td><td><p>' . $element->content . '</p></td><td><i>&#10003</i><td></tr>';
			 }else{
				 $metas .= '<tr><td><p>' . $element->name . '</p></td><td><p>' . $element->content . '</p></td><td><i>&#10005</i><td></tr>';
			 }
		 }else{
			 $metas .= '<tr><td><p>' . $element->name . '</p></td><td><p>' . $element->content . '</p></td><td><i>-</i><td></tr>';
		 }

	}
	$htmlMetas .= $element;
}

foreach($html->find('style') as $element){
	if($element->name != "" || $element->name != null){
		/*
		 * Meta test validator
		 */
		 if($element->name == "generator"){
			 if (strpos($element->content, 'Google Web Designer') !== false) {
				 $metaBool = true;
				 $metas .= '<p>' . $element->name . '</p><p>' . $element->content . '</p></td><td><i>&#10003</i><td></tr>';
			 }else{
				 $metas .= '<p>' . $element->name . '</p><p>' . $element->content . '</p></td><td><i>&#10005</i><td></tr>';
			 }
		 }else{
			 $metas .= '<p>' . $element->name . '</p></td><td><p>' . $element->content . '</p></td><td><i>-</i><td></tr>';
		 }

	}
	$htmlStyles .= $element;
}

foreach($html->find('head') as $script) {
	foreach($script->find('script') as $java) {
		$htmlHeadScripts .= $java;
	}
}

$bannerWidth = $html->find('div[is="gwd-page"]', 0)->getAttribute('data-gwd-width');
$bannerHeight = $html->find('div[is="gwd-page"]', 0)->getAttribute('data-gwd-height');
$bannerWidth = str_replace("px","", $bannerWidth);
$bannerHeight = str_replace("px","", $bannerHeight);

foreach($html->find('gwd-exit') as $element){
	$exitTags .= '<tr><td><p>' . $element->getAttribute('metric') . '</p></td><td><p>' . $element->getAttribute('url') . '</p></td><td><i>&#10003</i><td></tr>';
}

foreach($html->find('body') as $body) {
	foreach($body->find('img') as $img) {
		$img->source = "/recursos/zip-banners/".$formatTime."/".$name[0]."/".$img->source;
	}
	$htmlBody .= $body;
}

?>

<!DOCTYPE html>
<html lang="es">
<head>

	<?php echo $htmlMetas; ?>
	<?php echo $htmlStyles; ?>
	<?php echo $htmlHeadScripts; ?>

	<style type="text/css">
		.evaluation{
			min-width: 300px;
			min-height: 300px;
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 9;
			border: 1px solid #444;
			padding: 5px 15px;
			margin: 0;
		}
		.evaluation .parameter{
			text-align: left;
		}
	</style>

</head>
<body>
	<?php echo $htmlBody; ?>

	<form id="screenshot" method="post" enctype="multipart/form-data" action="screenshot.php">
		<input type="hidden" name="screen_val" id="screen_val" value="" />
		<input type="hidden" name="url_val" id="url_val" value="<?php echo $postUrl; ?>" />
	</form>

	<div class="evaluation">
		<a target="_self" href="/">Regresar</a>
		<h4>Especificaciones del banner</h4>
		<div class="parameters">
			<table>
				<tr>
					<td><b>Formato:</b></td>
					<td>HTML5</td>
					<td><i>-</i></td>
				</tr>
				<tr>
					<td><b>Tamaño ZIP:</b></td>
					<td><?php echo $size; ?></td>
					<td><i>-</i></td>
				</tr>
				<tr>
					<td><b>Dimensiones:</b></td>
					<td><?php echo $bannerWidth . "x" . $bannerHeight; ?></td>
					<td><i>-</i></td>
				</tr>
				<?php echo $metas; ?>
			</table>
			<hr>
			<h4>Backup Image</h4>
			<b><small>Los backup image se generan cada 0.5 segundos durante 10 segundos</small></b>
			<table id="screens">
				<tr>
					<td>Por favor espere...</td>
				</tr>
			</table>
		</div>
	</div>

	<script type="text/javascript" src="/recursos/js/jquery-1.11.2.js"></script>
	<script type="text/javascript" src="/recursos/js/html2canvas.js"></script>
	<script type="text/javascript" src="/recursos/js/jquery.plugin.html2canvas.js"></script>
	<script>
	$(document).ready(function(){
		var seconds = 0;
		var interval = setInterval(function() {
			if(seconds > 20){
				clearInterval(interval);
				getAllScreenshots();
			}

			if($('div[is="gwd-page"]').length){
				getScreenshot();
				seconds++;
			}


		}, 500);

	});

	function getScreenshot(){
		$('div[is="gwd-page"]').html2canvas({
			onrendered: function (canvas) {
				$('#screen_val').val(canvas.toDataURL("image/png"));
		    $.ajax({
		      url: "screenshot.php",
		      type: "POST",
		      //dataType: "JSON",
		      data: new FormData($("#screenshot")[0]),
		      processData: false,
		      contentType: false,
		      success: function (data, status)
		      {
		        console.log("Data: " + data + " Status: " + status);
		        if(data == 1){

		        }
		      },
		      error: function (xhr, desc, err)
		      {
		        console.log("Error en el envio, XHR: " + xhr + " DESC: " + desc + " ERR:" + err);
		      }
		    });
			}
		});
	}
	function getAllScreenshots(){
		var url = $("#url_val").val();
		$.ajax({
			url: "getScreenshot.php",
			type: "POST",
			//dataType: "JSON",
			data: { url : url },
			success: function (data, status)
			{
				$("#screens").html(data);
			},
			error: function (xhr, desc, err)
			{
			}
		});
	}
	</script>

</body>
</html>
