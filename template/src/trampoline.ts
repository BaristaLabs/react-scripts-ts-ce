let worker = new SharedWorker(chrome.runtime.getURL('static/js/backgroundWorker.js'));
worker.port.start();
// Demo: Print the message to the console, and remember the last result
worker.port.onmessage = (event) => {
    console.log('Received message', event.data);
    window.lastMessage = event.data;
};