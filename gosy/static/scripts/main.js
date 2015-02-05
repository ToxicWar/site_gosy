
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
		out.innerHTML=''
		for(var i=0; i<names.length; i++){
			if(names[i].toLowerCase().indexOf(request)+1){
				var xhr = new XMLHttpRequest();
				xhr.onload = function(){
					core.db = JSON.parse(this.responseText)
					core.showTiles()
				}
				xhr.open('GET', "http://3bl3gamer.no-ip.org/wismt/scripts/"+i+".json", true);
				xhr.send(null);
			}
		}

	clearInput: function(){
		req.value=''
	}
}
















