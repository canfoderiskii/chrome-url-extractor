// var framed_doc = document.getElementById("link_iframe").contentDocument;
// var url = framed_doc.html.body.iframe.src;
// console.log("src=" + url);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url + request.greeting:
            "from the extension" + request.greeting);
        if (request.greeting == "hello")
            sendResponse({ farewell: "goodbye" });
    });
