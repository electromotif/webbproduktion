function crtMnuTree (menuLinks) {

	// Empty array for menu tree

  var menuTree = []; 

  // Empty object for hashmap

  var hashMap = {};

  // loop through menuLinks and ...

  for (i = 0; i < menuLinks.length; i++) {

  	// Give each menuLinks object a new property - children

    menuLinks[i].children = [];

    // Add ** all ** objects to hash, with "_" and value of mlid
    // property as object 'name'

    hashMap["_"+menuLinks[i].mlid] = menuLinks[i];
    
    // if the object does not have a parent-link ID, 
    // ** assume top-level link and push it to menuTree. **

    if (!menuLinks[i].plid){
    menuTree.push(menuLinks[i]); 
    }

	};

  // add children to all menu_items ** using the hash reference **
  // -- The hash reference The hash reference The HASH Reference !! --

  for(var i in hashMap){
    var item = hashMap[i];
    
    //if no parent - plid, skip this iteration of the loop
    if(!item.plid){continue;}

    // add ** all ** others to menuTree ** using the hash reference **
    hashMap["_"+item.plid].children.push(item);
  }; 

  // console.log (JSON.stringify(menuTree));

	return menuTree;
};

// create menu for admin form

function crtAdmMnuSlct (slct_html, menuTree, level) {
	
	var levelInd = "";

	for (var i = 0; i < level; i++) {
		levelInd += "-";
	}

	for (var i = 0; i < menuTree.length; i++) {

		var slctItem = $('<option value="'+menuTree[i].mlid+'">'+levelInd+' '+menuTree[i].title+'</option>');
		slctItem.data("itmKey", menuTree[i]);
		slct_html.append(slctItem);

		if (menuTree[i].children.length > 0) {
			crtAdmMnuSlct(slct_html, menuTree[i].children, level+1);
		}
	}
};

// create user/main menu

function crtMainMnu (ul_html, menuLevel) {
	for (var i = 0; i < menuLevel.length; i++) {
		if (menuLevel[i].children.length > 0) {
			var mnuItem = $('<li class="dropdown"><a href="'+menuLevel[i].path+'">'+menuLevel[i].title+'</a></li>');
			var dropdown = $('<ul class="dropdown-menu"/>');
			mnuItem.prepend(dropdown);

			// for (var j = 0; j < menuLevel[i].children.length; j++) {
			//	console.log ('looping children', menuLevel[i].children[j]);
			// }
			crtMainMnu(dropdown, menuLevel[i].children);
		} else {
			var mnuItem = $('<li><a href="'+menuLevel[i].path+'">'+menuLevel[i].title+'</a></li>');
			
		}
		ul_html.append(mnuItem);
	}
}


function crtMainMnu2 (ul_html, menuLevel) {
	for (var i = 0; i < menuLevel.length; i++) {
		var mnuItem = $('<li><a href="'+menuLevel[i].path+'">'+menuLevel[i].title+'</a></li>');
		
		if (menuLevel[i].children.length > 0) {
			mnuItem.addClass("dropdown");
			var dropdown = $('<ul class="dropdown-menu"/>');
			mnuItem.prepend(dropdown);

			crtMainMnu(dropdown, menuLevel[i].children);
		}

		ul_html.append(mnuItem);
	}
}








