'use strict';

let buttonGetURL = document.getElementById('get-url');
let buttonCopyURL = document.getElementById('copy-url');
let indicatorURL = document.getElementById('url');

buttonGetURL.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "ExtractURL" }, function (response) {
      console.log("resp:" + response.url);
      indicatorURL.innerHTML = response.url;
    });
  });
};
buttonCopyURL.onclick = function (element) {
  var url = indicatorURL.innerHTML;
  const elm = document.createElement('textarea');
  elm.value = url;
  document.body.appendChild(elm);
  elm.select();
  document.execCommand('copy');
  document.body.removeChild(elm);
};
