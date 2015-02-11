<?php

include_once("autoloader.php");

$cq = New CntQrs("127.0.0.1","pantopia","root","mysql");

	//save content if told to do so (by receiving correct AJAX data)
	if (isset($_REQUEST["page_data"])) {
 		$page_data = $_REQUEST["page_data"];
	  
		//extract path and menu data
		$page_path = $page_data[":path"];
    $menu_data = $page_data["menuData"];  	

		//unset path and menu from $page_data
		unset($page_data["menuData"]);
		unset($page_data[":path"]);

		//save content and echo CntQrs response
	  $cq->saveNuPg($page_data);
	  
	  //save menu data
		if (isset($menu_data)) {
			$menu_data = array(
	      ":title" => $menu_data["title"],
	      ":path" => $page_path,
	      ":menu_name" => $menu_data["parent"]["menu"],
	      ":plid" => $menu_data["parent"]["mlid"] ? $menu_data["parent"]["mlid"] : null,
	      ":weight" => $menu_data["weight"]
	     );

			$cq->saveNuPthMenu($menu_data);
		}

	  echo(json_encode(true));
	  
	}