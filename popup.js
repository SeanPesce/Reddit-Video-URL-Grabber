// Author: Sean Pesce

const authorWebsiteUrl = 'https://SeanPesce.github.io';
const buttonsDiv = document.getElementById('download_buttons');
const bt1080 = document.getElementById('1080p');
const bt720 = document.getElementById('720p');
const bt480 = document.getElementById('480p');
const bt360 = document.getElementById('360p');
const bt240 = document.getElementById('240p');
const noVidLbl = document.getElementById('no_vid');
const authorWebsiteLink = document.getElementById('author_website');

authorWebsiteLink.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'window.location.href = "' + authorWebsiteUrl + '";'});
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
