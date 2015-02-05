
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
		if(request=='') return false
		
		var tiles = document.getElementsByClassName('tile')
		for(var i=0; i<tiles.length; i++){
			if(!(tiles[i].innerText.toLowerCase().indexOf(request)+1)){
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
















