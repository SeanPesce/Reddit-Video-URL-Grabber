// Author: Sean Pesce

// Attempt to get the video file in 360p
function getVid() {
  const urlSuffix = '/DASH_1_2_M';
  var titleElements = document.getElementsByClassName('title');
  var url = '';
  
  for (var i = 0; i < titleElements.length; i++) {
    if (titleElements[i].nodeName == 'A' || titleElements[i].nodeName == 'a') {
      url = titleElements[i].href + urlSuffix;
      break;
    }
  }
  if (url.length > 0) {
    window.location.href = url;
  }
  /*if (titleElements[i].href != null && titleElements[i].href.toString().indexOf('v.redd.it') !== -1) {
    url = titleElements[i].href + urlSuffix;
    break;
  }*/
}

getVid();
