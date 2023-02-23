chrome.tabs.onUpdated.addListener(function(tab,changeInfo,tab){
    if(changeInfo.status === "complete"){
chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
    }
})
