const ports = [];
onconnect = function(event) {
    var port = event.ports[0];
    ports.push(port);
    port.start();
    port.onmessage = (event) => {
        for (let i = 0; i < ports.length; ++i) {
            if (ports[i] !== port) {
                ports[i].postMessage(event.data);
            }
        }
    };
};