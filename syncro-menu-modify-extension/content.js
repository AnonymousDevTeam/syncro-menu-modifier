var maxItems=11;

//window.addEventListener('load', function () {
	var ul = document.getElementsByClassName('mainnav');
	var items = ul[0].getElementsByTagName('li');
	
	//for (var i = 0; i < items.length; ++i) {
	for (var i = 0; i < maxItems; ++i) {
		// do something with items[i], which is a <li> element
		items[i].classList.remove('hidden-lg');
	}
//})