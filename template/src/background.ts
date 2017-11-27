const worker = new SharedWorker(chrome.runtime.getURL('static/js/backgroundWorker.js'));
worker.port.start();

worker.port.onmessage = (event) => {
    console.log('Received message', event.data);
};

worker.port.onmessageerror = (event) => {
    console.log('uhoh');
};

chrome.browserAction.onClicked.addListener((tab) => {
    
    chrome.tabs.executeScript(tab.id, {file: `static/js/content.js`}, (response) => {
        // Send a message when a tab is opened.
        worker.port.postMessage('New Tab');
    });

    chrome.tabs.create({ 'url': chrome.extension.getURL(`index.html`), 'selected': true }, () => {
        // Add some behavior    
    });

});