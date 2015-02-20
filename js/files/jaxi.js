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
    	console.log("insertNuPg success: ", data);
      //on success, back to adminState.
      admState();
    },
    error: function(data) {
      console.log("insertNewPage error: ", data);
    }
  });
}

function cntList(data) {
	$.ajax({
		url: "php/cnt_list.php",
		type: "POST",
		dataType: "json",
		data: {},

		success: function(data) {
			console.log("cntList Ajax");
			crtCntList(data);
		},
		error: function(data) {
			console.log("cntList error");
		}
	});
}


function getMnuLnks(destination) {

	$.ajax({
		url: "php/get_mnu_lnks.php",
		type: "GET",
		dataType: "json",
		data: {},
	
		success: function(data) {
			
			var menuTree = crtMnuTree(data);

			console.log("getMnuLnks dest: ", destination);
			if (destination == "admin-form") {
				var slct_html = $('<select class="form-control"/>');

				var topOptn = $('<option value="">Top</option>');

				slct_html.append(topOptn);

				crtAdmMnuSlct (slct_html, menuTree, 0);

				$("#admin-form .menuSelect").html(slct_html);
			} 

			else {
				var mn_html = $("<ul class='nav navbar-nav mainMenuNav'/>");

				crtMainMnu (mn_html, menuTree);

				$(".navbar-invert .navbar-collapse").find(".mainMenuNav").remove();
				$(".navbar-invert .navbar-collapse").prepend(mn_html);
			}
		},
		error: function(data) {
			console.log ("getMnuLnks error", data);
		}
	});
}

function getPg (pageUrl) {
	$.ajax({
		url: "php/get_pg.php",
		type: "POST",
		dataType: "json",
		data: {":path" : pageUrl},

		success: function (data) {
			crtPg(data);
		},
		error: function(data) {
			console.log ("getPg error", data);
		}

	})
}

function getFtr (data) {
	$.ajax({
		url: "php/get_ftr.php",
		type: "GET",
		dataType: "json",
		data: {},

		success: function (data) {
			crtFooter(data);
		},
		error: function(data) {
			console.log ("getFtr error", data);
		}

	})
}
