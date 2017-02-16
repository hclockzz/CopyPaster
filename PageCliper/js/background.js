// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
	const input = document.createElement('input');
	input.style.position = 'fixed';
	input.style.opacity = 0;
	var currentTitle = "null";
	var currentURL = "null";

	currentURL = tabs[0].url;
	currentTitle = tabs[0].title; 
	input.value = currentTitle+":"+currentURL;
	console.log(input.value);
	document.body.appendChild(input);
	input.select();
	document.execCommand('Copy');
	document.body.removeChild(input);
	});
	
});
