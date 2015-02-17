function crtCntList (data) {
	console.log ("crtCntlist: ", data);

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

	// $('.table-condensed.allpgs').append('<tbody>');

	for (var i = 0; i < data.length; i++) {

		var row = $('<tr>');

		row.append('<td>'+data[i].pid+'</td>');

		// edit/trash icons

		row.append('<td><a href="-'+data[i].pid+'"><span class="glyphicon glyphicon-edit"> </span></a></td>');
		row.append('<td><a href="--'+data[i].pid+'"><span class="glyphicon glyphicon-trash"> </span></a></td>');

		row.append('<td>'+data[i].title+'</td>');
		row.append('<td>'+data[i].author+'</td>');

		// cut down date to fit a bit more 'text'.

		var date = data[i].created.substring(2, 16);

		row.append('<td>'+date+'</td>');

		// display 70 characters of body..

		var bdy = data[i].body.substring(0, 69);

		row.append('<td class="smcurtxt">'+bdy+'...</td>');

		
		
		row.append('</tr>');
		
		$('.table-condensed.allpgs').append(row);  

		}

	// $('.table-condensed.allpgs').append('</tbody>');

}

/* 

		row.append('<span class="badge">'+data[i].pid+'</span></a></td>');
		
*/