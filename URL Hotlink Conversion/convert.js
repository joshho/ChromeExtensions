chrome.webRequest.onBeforeRequest.addListener(
function(details) {
	var url = details.url;
	if( url != "http://imgur.com/" ){
		var i = url.lastIndexOf("/");
		if( i == url.length-1 ){
			url = url.substr(0,url.length-1);
			i = url.lastIndexOf("/");
		}
		if( i != -1){
			var code = url.substr(i+1);
			return {redirectUrl: "http://i.imgur.com/"+code+".jpg"};
		}
	}
}
,{urls: [
	"http://imgur.com/*"
	]
 },
 ["blocking"]);

chrome.webRequest.onBeforeRequest.addListener(
function(details) {
	var url = details.url;
	if( url != "http://quickmeme.com/" ){
		var i = url.lastIndexOf("/");
		if( i == url.length-1 ){
			url = url.substr(0,url.length-1);
			i = url.lastIndexOf("/");
		}
		if( i != -1){
			var code = url.substr(i+1);
			return {redirectUrl: "http://i.qkme.me/"+code+".jpg"};
		}
	}
}
,{urls: [
	"http://www.quickmeme.com/*"
	]
 },
 ["blocking"]);