'use strict';
var onMessage = function(message, sender, callback){
	if(typeof message === 'object' && message.event){
		let event = new CustomEvent(`on_${message.event}`, {
			detail: {
				message: message,
				callback: callback,
				sender: sender
			}
		});
		window.dispatchEvent(event);
	}
};

chrome.runtime.onMessageExternal.addListener(onMessage);
chrome.runtime.onMessage.addListener(onMessage);

window.addEventListener('on_download', function(event){
	var detail = event.detail;
	chrome.downloads.download({
		filename: `${detail.message.filename}.zip`,
		url: detail.message.url,
		conflictAction: chrome.downloads.FilenameConflictAction.UNIQUIFY,
	}, function(downloadItem){
	})
})