


/**
 * bootUp() sets up event handlers
 *
 */

function turnKey() {
  //setup history push/pop-state
  // pushPopListeners();


  /**
   * Search
   */
   
  //navbar navbarSearchForm submitHandler
  $(".navbarSearchForm").submit(function() {
    //get search input field value
    var search_param = $(this).find('input[type="text"]').val();
    //and get pages with matching titles
    getPages(search_param);

    //return false to prevent page reload on form submit
    return false;
  });


  //sidebar nav clickhandler
  //this functionality has been moved to the switchToSection() 
  //function in pushPop.js 
  // $(".mySidebar .nav a").click(function(event) {});


  /**
   * Admin form 
   */

  //adminForm pageUrlGroup clickHandler
  $('#admin-form .pageUrlGroup input[type=checkbox]').click(function() {
    //first enable/disable the page_url input field
    $("#page_url").attr("disabled", !$(this).is(":checked"));

    //then if the checkbox is !:checked
    if (!$(this).is(":checked")) {
      //replace page_url with "default"
      $('#page_url').val(generateMachineName($("#page_title").val()));
    }
  });


  //adminForm page_title -> page_url keyUp handler
  $("#page_title").keyup(function() {
    //if #adminForm .pageUrlGroup input[type=checkbox] is !:checked
    if (!$('#admin-form .pageUrlGroup input[type=checkbox]').is(":checked")) {
      //generage machine name on keyup using generateMachineName() 
      //function from helper.js
      $('#page_url').val(generateMachineName($(this).val()));
    }
  });


  //adminForm page_url blur handler
  //from jQuery documentation: "The blur event is sent to an element when it loses focus"
  $("#page_url").blur(function() {
    //whenever a user "is done" with the page_url input field
    $(this).val(generateMachineName($(this).val()));
  });


  //adminForm add menu checkbox clickhandler to show/hide add menu fields
  $('.addToMenu input[type="checkbox"]').click(function() {
    if ($(this).is(":checked")) {
      $("#admin-form .menuLinkFields").fadeIn(500);
    } else {
      $("#admin-form .menuLinkFields").fadeOut(500);
    }

    //whenever the user clicks add to menu, 
    //make the menu title field required
    $(".addToMenu #menu_title").attr("required", $(this).is(":checked"));
  });


  //adminForm form submitHandler
  $("#admin-form form").submit(function() {
    //prepare adminFormData to be sent with AJAX
    var adminFormData = {
      ":title" : $(this).find("#page_title").val(),
      ":body" : $(this).find("#page_body").val(),
      ":path" : $(this).find("#page_url").val()
      //":user_id" : 1 //this has been moved to PHP
    };

    //if the user has asked to add page to menu
    if ($('.addToMenu input[type="checkbox"]').is(":checked")) {
      //get selected menu parent data
      adminFormData.menuData = {};
      adminFormData.menuData["parent"] = $('.addToMenu select').find(":selected").data("menuItem");
      //get menu link title
      adminFormData.menuData["title"] = $('.addToMenu #menu_title').val();
      //get menu link order
      adminFormData.menuData["weight"] = $('.addToMenu #menu_weight').val();
    }
    console.log("adminFormData: ", adminFormData);

    //send adminFormData with AJAX to DB
    insertNewPage(adminFormData);

    //empty the form once we're done with the information in it
    this.reset(); //.reset() is a JS function, NOT a jQuery function... :D

    //return false to prevent page reload on form submit
    return false;
  });
}