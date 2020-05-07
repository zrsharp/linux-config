$(document).ready(function(){
	chrome.storage.sync.get(["status"],function(data){
		var status = data.status;
		if(status == 1){
		}else{
		}
	});
});
