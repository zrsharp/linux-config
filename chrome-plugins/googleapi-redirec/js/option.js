$(document).ready(function(){
	initOption();
});

function getValureFromStr(str, name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = str.substr(1).match(reg);
    if (r != null) 
        return r[2];
    return '';
}

$("#disable-plugin").on("click",function(){
	chrome.storage.sync.get(["status"],function(data){
		var status = data.status;
		if(status == 1){
			setStatus(false);
		}else{
			setStatus(true);
		}
		initOption();
	});
})

function initOption(){
    chrome.storage.sync.get(["status"], function(data){
        var status = data.status;
        if (status == 1) {
            $("#disable-plugin").text("禁用");
            $("#disable-plugin").addClass("btn-primary");
            $("#disable-plugin").removeClass("btn-success");
            $("#current-status").text("已启用");
            $("#current-intro").text("以下请求将会重定向到可用镜像：\najax.googleapi.com\nfonts.googleapi.com");
        } else {
            $("#disable-plugin").text("启用");
            $("#current-status").text("已禁用");
            $("#disable-plugin").addClass("btn-success");
            $("#disable-plugin").removeClass("btn-primary");
			$("#current-intro").text("扩展已禁用，不会对页面产生任何影响。");
        }
    });
}

function setStatus(status){
	if(status){
		chrome.storage.sync.set({
			"status": 1
		},function(){
			console.log("set status : true");
		});
		
		localStorage.setItem('status', 1);
	}else{
		chrome.storage.sync.set({
			"status": 0
		},function(){
			console.log("set status : false");
		});
		
		localStorage.setItem('status', 0);
	}
	reload();
}

function reload(){
	chrome.tabs.getSelected(null, function(tab){
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {
            code: code
        });
    });
}

function loadUrl(url){
	chrome.tabs.getSelected(null, function(tab){
        var code = 'window.location.href="'+url+'";';
        chrome.tabs.executeScript(tab.id, {
            code: code
        });
    });
}