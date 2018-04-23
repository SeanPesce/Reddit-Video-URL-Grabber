// Author: Sean Pesce

const AUTHOR_WEBSITE = 'https://SeanPesce.github.io';

let buttonsDiv = document.getElementById('download_buttons');
let bt1080 = document.getElementById('1080p');
let bt720 = document.getElementById('720p');
let bt480 = document.getElementById('480p');
let bt360 = document.getElementById('360p');
let bt240 = document.getElementById('240p');
let noVidLbl = document.getElementById('no_vid');
let authorWebsite = document.getElementById('author_website');

author_website.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'window.location.href = "' + AUTHOR_WEBSITE + '";'});
    });
  };

bt1080.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'get/1080.js'});
    });
  };

bt720.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'get/720.js'});
    });
  };

bt480.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'get/480.js'});
    });
  };

bt360.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'get/360.js'});
    });
  };

bt240.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'get/240.js'});
    });
  };
