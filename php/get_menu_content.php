<?php

include_once("autoloader.php");

$cq = New ContentQueries("127.0.0.1","pantopia","root","mysql");

//get menu links for a specific menu_name if told to do so 
//(by receiving correct AJAX data), else get all menu_names
if (isset($_REQUEST["menu_name"])) {
  //get all menu_links for a specific menu_name
  echo(json_encode($cq->getMenuLinks($_REQUEST["menu_name"])));
} else {
  //get all menu_names
  echo(json_encode($cq->getMenuNames()));
}