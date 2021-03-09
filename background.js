chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    bears[request.url]=response.count
})

chrome.browserAction.onClicked.addListener(function (tab){
    chrome.tabs.create({url:'popup.html'})
})