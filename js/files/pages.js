
// load data for admin form and content list, show admin sidebar. 

function admState () {
	console.log('admState');
	getMnuLnks("admin-form");
	cntList();
	$('#admSideBar').show(800);
	$('#admin-form').show(800);
	$('#content-list').show(800);
}

// Hide all, display splash, menus and footer

function splashState (data) {

$('#admSideBar').hide();
$('#content-list').hide();
$('#admin-form').hide();

getMnuLnks("main");
getFtr(); 

}

function ldPage (data) {
	console.log('ldPage: ', data);
}