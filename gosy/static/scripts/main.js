
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        init();
    }
}
function init(){
	var imgs = document.getElementsByTagName('img')
	for(var i=0; i<imgs.length; i++){
		var link = document.createElement('a')
		link.innerHTML = 'Ссылка на хайрез картинки'
		link.setAttribute('href', imgs[i].getAttribute('src'))
		insertAfter(link, imgs[i])
	}
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}




core={
	search:function(){
		var request = req.value.toLowerCase()
		if(request==''){
			core.clearInput()
			return
		}
		scrollTo(0,getOffset(searchAnchor).top)
		var tiles = document.getElementsByClassName('tile')
		for(var i=0; i<tiles.length; i++){
			var text = tiles[i].textContent.toLowerCase() || tiles[i].innerText.toLowerCase()
			if(!(text.indexOf(request)+1)){
				tiles[i].classList.add('hidden')
				tiles[i].classList.remove('visible')
			}else{
				tiles[i].classList.remove('hidden')
				tiles[i].classList.add('visible')
			}
		}
	},
	clearInput: function(){
		req.value=''
		var tiles = document.getElementsByClassName('tile')
		for(var i=0; i<tiles.length; i++){
			tiles[i].classList.remove('hidden')
			tiles[i].classList.add('visible')
		}
	}
}





	function getOffset(elem) {
		if (elem.getBoundingClientRect) {
			// "правильный" вариант
			return getOffsetRect(elem)
		} else {
			// пусть работает хоть как-то
			return getOffsetSum(elem)
		}
	}
	function getOffsetSum(elem) {
		var top=0, left=0
		while(elem) {
			top = top + parseInt(elem.offsetTop)
			left = left + parseInt(elem.offsetLeft)
			elem = elem.offsetParent
		}
		return {top: top, left: left}
	}
	function getOffsetRect(elem) {
		// (1)
		var box = elem.getBoundingClientRect()

		// (2)
		var body = document.body
		var docElem = document.documentElement

		// (3)
		var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
		var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

		// (4)
		var clientTop = docElem.clientTop || body.clientTop || 0
		var clientLeft = docElem.clientLeft || body.clientLeft || 0

		// (5)
		var top  = box.top +  scrollTop - clientTop
		var left = box.left + scrollLeft - clientLeft

		return { top: Math.round(top), left: Math.round(left) }
	}










