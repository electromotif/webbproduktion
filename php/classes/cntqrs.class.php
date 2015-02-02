<?php

//inherits all public PDOHelper methods
class CntQrs extends PDOHelper {
	//later when we have login in place, real user_info 
	//will be stored in the property user_info.
	//for now let's just fake it
	protected $user_info = array("user_id" => 1);


	/**
	* Pages
	*/

	public function saveNuPg($page_data) {
		
		//extract path and menu data
		$page_path = $page_data[":path"];
    $menu_data = $page_data["menuData"];
    
		//unset path and menu from $page_data
		unset($page_data["menuData"]);
		unset($page_data[":path"]);
		
		//add user_id before insert
		$page_data[":user_id"] = $this->user_info["user_id"];

		//prep sql and run query

		$sql="INSERT INTO pages (title, body, user_id) VALUES (:title, :body, :user_id)";
		$this->query($sql, $page_data);

		// restore path and menu data 

		$page_data[":path"] = $page_path;
    $page_data["menuData"] = $menu_data;

    // var_dump($page_data) ;
    // echo ("jontes far <br><br>");
		
	}

	public function saveNuPthMenu ($page_data) {
		
		//extract path and menu data
		$page_path = $page_data[":path"];
    $menu_data = $page_data["menuData"];

		//find pid of new page by selecting the latest page 
    //in the pages table

    $sql = "SELECT pid FROM pages ORDER BY created DESC LIMIT 1";
    $new_pid = $this->query($sql);
    
    //extract pid from the array we get back
    
    $new_pid = $new_pid[0]["pid"];

    //insert new page url alias
    
    $sql2 = "INSERT INTO url_alias (path, pid) VALUES (:path, :pid)";
    $url_data = array(":path" => $page_path, ":pid" => $new_pid);
		
		// echo "Jonte<br><br>";
		// var_dump($page_data);

    $this->query($sql2, $url_data);

    //if we are adding the page to a menu, do so
    
    if (isset($menu_data)) {
      /* $sql3 = "INSERT INTO menu_links (title, path, menu, plid, weight) VALUES (:title, :path, :menu_name, :plid, :weight)";
      $menu_data = array(
        ":title" => $menu_data["title"],
        ":path" => $page_path,
        ":menu_name" => $menu_data["parent"]["menu"],
        ":plid" => $menu_data["parent"]["mlid"] ? $menu_data["parent"]["mlid"] : null,
        ":weight" => $menu_data["weight"],
      ); */

			$sql3 = "INSERT INTO menu_links (title, path, menu, plid, weight) VALUES (:title, :path, :menu_name, :plid, :weight)";

			$menu_data = array(
        ":title" => $menu_data["title"],
        ":path" => $page_path,
        ":menu_name" => $menu_data["parent"]["menu"],
        ":plid" => $menu_data["parent"]["mlid"] ? $menu_data["parent"]["mlid"] : null,
        ":weight" => $menu_data["weight"]
        );

      $this->query($sql3, $menu_data);
    } 

	}



};
    

   


  