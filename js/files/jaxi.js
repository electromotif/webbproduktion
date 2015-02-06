// JAXI! Hello Fast Show!

// This file contains all AJAX requests



//function to insert a new page into the DB

function insertNuPg(adminFormData) {
  $.ajax({
    url: "php/save_cnt.php",
    type: "post",
    dataType: "json",
    data: {
      //this request must have data to get through the 
      //if-statement in save_content.php
      "page_data" : adminFormData
    },
    success: function(data) {
      //on success, goTo() the contentList url
      //goTo("content-list");
      console.log("insertNuPg success: ", data);
    },
    error: function(data) {
      console.log("insertNewPage error: ", data);
    }
  });
}

function cntList(data) {
	/*$.ajax({
		url: "php/cnt_list.php",
		type: "GET",
		dataType: "json",
		data: "",
	}),

	success: function(data) {
		console.log("jaxi away!");
	},
	error: function(data) {
		console.log("cntList error");
	}*/

}

function getMnuLnks(data) {
	$.ajax({
		url: "php/get_mnu_lnks.php",
		type: "GET",
		dataType: "json",
		data: {},
	
		success: function(data) {
			console.log ("menulinks: ", data);
		},
		error: function(data) {
			console.log ("getMnuLnks error", data);
		}
	});
}
