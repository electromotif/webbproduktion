// JAXI! Hello Fast Show!

// This file contains all AJAX/AJAJ requests



//function to insert a new page into the DB

function insertNuPg(adminFormData) {
  $.ajax({
    url: "php/save_cnt.php",
    type: "post",
    dataType: "json",
    data: {
      //this request must have data to get through the 
      //if-statement in save_content.php
      "page_data" : adminFormData,
    },

    success: function(data) {
      //on success, goTo() the contentList url
      //goTo("content-list");
      
    },
    error: function(data) {
      console.log("insertNewPage error: ", data);
    }
  });
}