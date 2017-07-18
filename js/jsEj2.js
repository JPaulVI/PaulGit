function dameId(){
	var y = document.getElementById('res');
	//window.alert(y);
	y = String(y) + creaIdImg();
	document.getElementById('res').innerHTML = y;
}
function creaId(){
	var y = "";
	y = '<p>' + Math.floor(Math.random() * 10000) + '</p>';
	return y;
}
function creaImg(){
	var y = "";
	y = '<img src="https://pbs.twimg.com/profile_images/562295957383954432/HznhvglX.png">'
	return y;
}
function creaIdImg(){
	var y = "";
	y = '<div class="rand">' + creaImg() + creaId()  + "</div>";
	return y;
}