<?php

include_once("autoloader.php");

$cq = New CntQrs("127.0.0.1","pantopia","root","mysql");
	  
echo(json_encode($cq->get_mnu_lnks()));
		
	  
