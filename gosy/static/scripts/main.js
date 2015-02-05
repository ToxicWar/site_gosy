
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        init();
    }
}
function init(){

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
















