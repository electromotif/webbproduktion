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
			
		//add user_id before insert
		$page_data[":user_id"] = $this->user_info["user_id"];

		//prep sql and run query

		$sql="INSERT INTO pages (title, body, user_id) VALUES (:title, :body, :user_id)";
		$this->query($sql, $page_data);

	}

	public function saveNuPthMenu ($menu_data) {
		
    // add the page to menu

		$sql3 = "INSERT INTO menu_links (title, path, menu, plid, weight) VALUES (:title, :path, :menu_name, :plid, :weight)";
    $this->query($sql3, $menu_data);

	}

	public function saveUrlAls ($page_path) {

    $sql = "SELECT pid FROM pages ORDER BY created DESC LIMIT 1";
    $new_pid = $this->query($sql);
    
    // extract pid from the array we get back
    
    $new_pid = $new_pid[0]["pid"];

    // insert new page url alias
    
    $sql2 = "INSERT INTO url_alias (path, pid) VALUES (:path, :pid)";
    $url_data = array(":path" => $page_path, ":pid" => $new_pid);

    $this->query($sql2, $url_data);

	} 

	// contentlist, links, footer

	public function cnt_list(){
		
		// dead simple query for contenlist..
		$sql = "SELECT * FROM pages ORDER BY created DESC";
		return $this->query($sql);

	}

	public function get_mnu_lnks () {

		// $sql = "SELECT * FROM menu_links ORDER BY mlid DESC";
		$sql = "SELECT * FROM menu_links ORDER BY weight ASC";
		return $this->query($sql);

	}

	public function get_imgs () {

		$sql = "SELECT * FROM images ORDER BY iid DESC";
		return $this->query($sql);

	}

	public function get_footer () {
		$sql = "SELECT * FROM pages ORDER BY pid ASC LIMIT 1";
		return $this->query($sql);
	}

	public function get_page($path) {
		$sql = "SELECT pages.* FROM pages, url_alias WHERE url_alias.pid = pages.pid && url_alias.path = :path";
	}

};
    

   


  