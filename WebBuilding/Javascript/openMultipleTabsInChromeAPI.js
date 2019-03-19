//function that opens multiple Chrome Ext tabs in a new window

function openTabsNow(meArray){
    chrome.windows.create({
        focused: true
      }, (tab)=>{
        myWindowID = tab.id;
        for (var i = 0; i < meArray.length; i++) {
            chrome.tabs.create({'url': chrome.extension.getURL(meArray[i]), 'active':true, 'windowId':myWindowID}, function(tab) {
                // Tab opened.
            });
        }   
    });
}