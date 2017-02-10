<?php
$filteredData=substr($_POST['screen_val'], strpos($_POST['screen_val'], ",")+1);
$unencodedData=base64_decode($filteredData);
$timestamp = new DateTime();
$name = $timestamp->format('His');
$path = str_replace("index.html", "", $_POST['url_val']);
mkdir($path."screens", 0755);
file_put_contents($path.'screens/backup_'.$name.'.png', $unencodedData);
?>
