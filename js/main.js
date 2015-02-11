$("document").ready(function(){

pushPopListeners();
getMnuLnks("admin-form");


//-----

//-----
	
//adminForm pageUrlGroup clickHandler

$('#admin-form .pageUrlGroup').on( "click", 'input[type=checkbox]', function() {

	//enable/disable the page_url input field

	$("#page_url").attr("disabled", !$(this).is(":checked"));

	// if checkbox is checked

	/* if (!$(this).is(":checked")) {
	//replace page_url with "default"
	$('#page_url').val(generateMachineName($("#page_title").val()));
	} */

});

//adminForm form submitHandler

$("#admin-form form").submit(function() {
	
	//prepare adminFormData to be sent with AJAX
	
	var adminFormData = {
	  ":title" : $(this).find("#page_title").val(),
	  ":body" : $(this).find("#page_body").val(),
	  ":path" : $(this).find("#page_url").val()
	};


	if ($('.addToMenu input[type="checkbox"]').is(":checked")) {
	
		//get selected menu parent data
		adminFormData.menuData = {};
		
		// get parent link (the mlid which is stored as plid for the page submitted)
		adminFormData.menuData ["parent"] = {"mlid": $(".addToMenu option:selected").val(), "menu" : "menu-main-menu"};
		//get menu link title
		adminFormData.menuData["title"] = $('.addToMenu #menu_title').val();
		//get menu link order
		adminFormData.menuData["weight"] = $('.addToMenu #menu_weight').val();
	}
	
	insertNuPg(adminFormData);

	this.reset();

	return false;
});


    
  
}); // DOM Ready end