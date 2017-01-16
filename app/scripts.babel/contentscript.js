'use strict';
chrome.runtime.sendMessage(chrome.runtime.id, {
	event: 'injected'
});

var script = document.createElement('script');
script.setAttribute('src', chrome.extension.getURL('scripts/inject.js'));
script.setAttribute('type', 'text/javascript');
script.setAttribute('data-id', chrome.runtime.id);
script.setAttribute('id', 'nitudownloader');
window.document.body.appendChild(script);