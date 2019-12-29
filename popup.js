'use strict';

let buttonGetURL = document.getElementById('get-url');
let buttonCopyURL = document.getElementById('copy-url');

buttonGetURL.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
      console.log("resp:" + response.farewell);
    });
  });
};
buttonCopyURL.onclick = function (element) {
  var url = document.getElementById("url").innerHTML;
  const elm = document.createElement('textarea');
  elm.value = url;
  document.body.appendChild(elm);
  elm.select();
  document.execCommand('copy');
  document.body.removeChild(elm);
};
