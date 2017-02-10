<?php
$path = str_replace("index.html", "", $_POST['url']);
$path = $path . "screens";
function dirToArray($dir) {

   $result = array();

   $cdir = scandir($dir);
   foreach ($cdir as $key => $value)
   {
      if (!in_array($value,array(".","..")))
      {
         if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
         {
            $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
         }
         else
         {
            $result[] = $value;
         }
      }
   }

   return $result;
}

function create_zip($files = array(),$destination = '',$overwrite = false) {
	if(file_exists($destination) && !$overwrite) { return false; }
	$valid_files = array();
	if(is_array($files)) {
		foreach($files as $file) {
			if(file_exists($file)) {
				$valid_files[] = $file;
			}
		}
	}
	if(count($valid_files)) {
		$zip = new ZipArchive();
		if($zip->open($destination,$overwrite ? ZIPARCHIVE::OVERWRITE : ZIPARCHIVE::CREATE) !== true) {
			return false;
		}
		foreach($valid_files as $file) {
      $new_filename = substr($file,strrpos($file,'/') + 1);
			$zip->addFile($file,$new_filename);
		}
		$zip->close();
		return file_exists($destination);
	}
	else
	{
		return false;
	}
}

$dirr = dirToArray($path);
$files_to_zip = array();
foreach ($dirr as $key => $value) {
  $files_to_zip[] = $path . "/" . $dirr[$key];
  echo '<tr><td><a target="_blank" href="'. $path . "/" . $dirr[$key] .'"><img src="'. $path . "/" . $dirr[$key] .'"/></a></td></tr>';
}
$result = create_zip($files_to_zip,$path.'/backups.zip');

if($result){
  echo '<tr><td><a href="' . $path.'/backups.zip' . '">Descargar todos los Backups</a></td></tr>';
}
?>
