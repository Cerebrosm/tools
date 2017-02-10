<?php

/*
 * Parser of VAST url to get the link
 */
$vastUrl = $_POST['vastUrl'];
$xml = simplexml_load_file($vastUrl) or die("Error: No se puede cargar el objeto");
//print_r($xml->Ad->InLine->Creatives->Creative->Linear->MediaFiles->MediaFile[0]);

foreach($xml->Ad->InLine->Creatives->Creative->Linear->MediaFiles->children() as $media) {
    //echo($media["type"]);

    if($media["type"] == "video/mp4"){
      echo $media;
      return;
    }
}

?>
