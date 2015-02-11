function crtMnuTree (menuLinks) {

	// Empty array for menu tree

  var menuTree = []; 

  // Empty object for hashmap

  var hashMap = {};

  // loop through menuLinks and ...

  // menuLinks.forEach(function(item) {

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

  
  // console.log ("Hash: ", hashMap);
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









