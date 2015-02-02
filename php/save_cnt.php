<?php

include_once("autoloader.php");

$cq = New CntQrs("127.0.0.1","pantopia","root","mysql");

//save content if told to do so (by receiving correct AJAX data)
if (isset($_REQUEST["page_data"])) {
 
  //save content and echo CntQrs response

  $cq->saveNuPg($_REQUEST["page_data"]);
  
  echo(json_encode($cq->saveNuPthMenu($_REQUEST["page_data"])));
  
}