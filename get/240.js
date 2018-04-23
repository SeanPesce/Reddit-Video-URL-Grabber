// Author: Sean Pesce

// Attempt to get the video file in 240p
function getVid() {
  const titleElements = document.getElementsByClassName('title');
  const urlSuffix = '/DASH_600_K';
  let url = '';
  
  for (let i = 0; i < titleElements.length; i++) {
    if (titleElements[i].nodeName.toUpperCase() == 'A') {
      url = titleElements[i].href + urlSuffix;
      break;
    }
  }
  if (url.length > 0 && url.indexOf('v.redd.it') !== -1) {
    window.location.href = url;
  } else {
    // Using Reddit's 2018 redesign; acquire URL with alternate technique
    url = '';
    const sourceElements = document.getElementsByTagName('SOURCE');
    for (let i = 0; i < sourceElements.length; i++) {
      if (sourceElements[i].src.toString().indexOf('v.redd.it') !== -1) {
        const fullVidUrl = sourceElements[i].src.toString();
        if (fullVidUrl.indexOf('Playlist') !== -1) {
          url = fullVidUrl.substr(0, fullVidUrl.lastIndexOf('/')) + urlSuffix;
        } else {
          url = fullVidUrl + urlSuffix;
        }
        break;
      }
    }
    if (url.length > 0) {
      window.location.href = url;
    }
  }
}

getVid();
