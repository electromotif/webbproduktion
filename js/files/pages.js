
// administrative state - load data for admin form and content list, show admin sidebar. 

function admState () {
	console.log('admState');
	
	// update menu links in case we are returning from
	// a page submit - user wants to see the submit reflected.
	cntList();
	getMnuLnks("admin-form");
	getMnuLnks("main");
	getFtr(); 
	

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

function pageState (pageUrl) {
	console.log('pageState: ', pageUrl);
	$('#splash').hide();
	$('#pagecontent').hide();
	$('#admSideBar').hide();
	$('#content-list').hide();
	$('#admin-form').hide();
						
	$('#pagecontent').html('<section id="pagetitle"></section><section id="pagebody"></section>');	

	getFtr();
	getPg(pageUrl);
	getMnuLnks("main");

	// display page

	$('#pagecontent').fadeIn(400)

}

