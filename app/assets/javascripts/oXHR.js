function getXMLHttpRequest(){
	var xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject){
		if(window.ActiveXObject){
			//on a encore deux possibilite
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}else{
			xhr = new XMLHttpRequest();
		}
	}else{
		alert("Votre navigateur ne prend pas en charge XMLHttpRequest....");
		return null;
	}

	return xhr;
}
