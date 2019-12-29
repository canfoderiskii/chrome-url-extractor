
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var framed_doc = document.getElementById("link_iframe").contentDocument;
        var url = framed_doc.getElementsByTagName("iframe")[0].src;
        console.log("src:" + url);
        if (request.action == "ExtractURL") {
            sendResponse({ url: url });
        } else {
            console.log("unknown request:" + request);
        }
    });
