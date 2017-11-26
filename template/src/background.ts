var worker = new SharedWorker(chrome.runtime.getURL('static/js/backgroundWorker.js'));
worker.port.start();

chrome.browserAction.onClicked.addListener((tab) => {
    
    chrome.tabs.create({ 'url': chrome.extension.getURL(`index.html`), 'selected': true }, () => {

        chrome.tabs.executeScript(tab.id, {file: 'contentScript.js'}, (response) => {
            // Demo: Print the message to the console, and remember the last result
            worker.port.onmessage = function(event) {
                console.log('Received message', event.data);
                window.lastMessage = event.data;
            };
            
            // Demo: send a message
            worker.port.postMessage('Hello');    
        });
    });

});