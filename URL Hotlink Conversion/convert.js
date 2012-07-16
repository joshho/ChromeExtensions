var filterURLs = [
	"http://imgur.com/*", 
	"http://www.quickmeme.com/meme/*", 
	"http://*.memegenerator.net/instance/*",
	"http://memecrunch.com/meme/*"
];

var pattrn = [
	"imgur\.com\/(?![aA]\/.+)(?:[a-zA-Z0-9]+\/)?([a-zA-Z0-9]+)", 
	"quickmeme\.com\/meme\/([a-zA-Z0-9]+)", 
	"memegenerator\.net\/[iI][nN][sS][tT][aA][nN][cC][eE]\/([a-zA-Z0-9]+)",
	"memecrunch\.com\/meme\/((?!.*\/[iI][mM][aA][gG][eE]\.[pP][nN][gG]).*)"
];

var redirectURLTo = [
	"http://i.imgur.com/###.jpg", 
	"http://i.qkme.me/###.jpg", 
	"http://cdn.memegenerator.net/instances/400x/###.jpg",
	"http://memecrunch.com/meme/###/image.png"
];
 
chrome.webRequest.onBeforeRequest.addListener(
function(details) {
	var url = details.url;
	console.log(url);
	for(var i=0; i<filterURLs.length; i++){
		var arr = url.match(pattrn[i]);
		if(arr != null){
			console.log(url);
			console.log(arr);
			if(arr.length >= 2){
				return {redirectUrl: redirectURLTo[i].replace("###",arr[arr.length-1]) };
			}
		}
	}
}
,{urls: filterURLs, types: ["main_frame"] },
 ["blocking"]);