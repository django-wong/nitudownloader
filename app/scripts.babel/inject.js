/*
* @Author: Django Wong
* @Date:   2017-01-14 04:49:05
* @Last Modified by:   Django Wong
* @Last Modified time: 2017-01-16 20:56:19
* @File Name: inject.js
*/

'use strict';

if (window.Tool) {
	var id = document.querySelector('#nitudownloader').getAttribute('data-id');
	window.Tool.doRefresh = function (a) {
		var name_ele = document.querySelector('.download-img-name');
		var name = name_ele.textContent;
		chrome.runtime.sendMessage(id, {
			event: 'download',
			url: a,
			filename: name
		});
	};
} else {
	console.warn('插件注入失败');
}