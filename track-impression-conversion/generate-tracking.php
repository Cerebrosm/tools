<?php

/*
 * Archivo de PHP para generar un archivo de TXT para mostrar en forma de listado todos los trackings ingresados,
 * esto para dar una mayor facilidad al usuario en caso de usar los trackings de manera BULK o en masa.
 */

$timestamp = new DateTime();
$formatTime = $timestamp->format('Y_m_d_H_i_s');

$trackingFile = fopen("tracking-generator/".$formatTime.".txt", "w") or die("No es posible abrir el archivo!");

$data = json_decode($_POST["conversion"], true);

foreach ($data as $key => $value) {
  fwrite($trackingFile, $data[$key] . "\n");
}

fclose($trackingFile);


echo "tracking-generator/".$formatTime.".txt";
?>
