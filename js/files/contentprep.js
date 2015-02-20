
// create content-list (list of all pages)

function crtCntList (data) {

	$('.table-condensed.allpgs').html("");

	// tableheads

	var tblHds = '<tr class="pageTableHeads">'+
								
								'<th>P.id</th>'+
								'<th colspan="2">Actions</th>'+
								'<th>Title</th>'+
								'<th>Author</th>'+
								'<th>Created</th>'+
								'<th>Content</th>'+
								'</tr>'; 

	$('.table-condensed.allpgs').append(tblHds); 

	// rows

	for (var i = 0; i < data.length; i++) {

		var row = $('<tr>');

		row.append('<td>'+data[i].pid+'</td>');

		// edit/trash icons. prepend url with e for edit, t for trash.
		// dev. suspended 
		
		// row.append('<td><a href="e'+data[i].pid+'"><span class="glyphicon glyphicon-edit"> </span></a></td>');
		// row.append('<td><a href="t'+data[i].pid+'"><span class="glyphicon glyphicon-trash"> </span></a></td>');

		row.append('<td> </td> <td> </td>');

		// title & author

		row.append('<td>'+data[i].title+'</td>');
		row.append('<td>'+data[i].author+'</td>');

		// cut down date to fit a bit more 'text'.

		var date = data[i].created.substring(2, 16);

		row.append('<td>'+date+'</td>');

		// display 70 characters of body, end row and shove it to DOM.

		var bdy = data[i].body.substring(0, 69);

		row.append('<td class="smcurtxt">'+bdy+'...</td>');
		row.append('</tr>');
		
		$('.table-condensed.allpgs').append(row);  

		}
}

function crtImgSlct (imgData) {
	// image select

	var img_html = $('<br><select class="form-control"/>');
	var slctImg = $('<option value="">Select image</option>');

	img_html.append(slctImg);

	for (var i = 0; i < imgData.length; i++) {

		var slctItem = $('<option value="'+imgData[i].iid+'">'+imgData[i].title+'</option>');
		console.log('looping images', i);
		// slctItem.data("itmKey", imgData[i]);
		
		img_html.append(slctItem);
	}

	$("#admin-form .menuSelect").append(img_html);
	console.log ('appended images');
}



// write footer

function crtFooter (data) {
	
	$('#ftrcont').html(data[0].body); 

}