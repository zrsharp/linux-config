chrome.webRequest.onBeforeRequest.addListener(function(details){
	var url = details.url;
	var status = localStorage.getItem('status');
	var new_url = url.replace("ajax.googleapis.com","ajax.font.im");
	new_url = new_url.replace("fonts.googleapis.com","fonts.font.im");
	
	if(status == 1){
		return {
	        redirectUrl: new_url
	    };
	}else{
		
	}
}, {
    urls: [
		"https://ajax.googleapis.com/*",
		"http://ajax.googleapis.com/*",
		"https://fonts.googleapis.com/*",
		"http://fonts.googleapis.com/*"
	],
    types: ["script", "object", "xmlhttprequest", "other", "image","stylesheet"]
}, ["blocking"]);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
});