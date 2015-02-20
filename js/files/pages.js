
// administrative state - load data for admin form and content list, show admin sidebar. 

function admState () {
	console.log('admState');
	
	// update menu links in case we are returning from
	// a page submit - user wants to see the submit reflected.
	getMnuLnks("admin-form");
	getMnuLnks("main");

	cntList();

	$('#splash').hide();
	$('#pagecontent').hide();
	$('#admSideBar').fadeIn(400);
	$('#admin-form').fadeIn(400);
	$('#content-list').fadeIn(400);
}

// Splashstate - Hide administrative items, display splash, menus and footer

function splashState (data) {

$('#pagecontent').hide();
$('#admSideBar').hide();
$('#content-list').hide();
$('#admin-form').hide();
$('#splash').fadeIn(400);

getMnuLnks("main");
getFtr(); 

}

// load and display any other page

function loadPg (pageUrl) {
	console.log('getPg: ', pageUrl);
	$('#pagecontent').hide();
	$('#admSideBar').hide();
	$('#content-list').hide();
	$('#admin-form').hide();

	getPg(pageUrl);
	getMnuLnks("main");


	// display page

	$('#pagecontent').show()

}

