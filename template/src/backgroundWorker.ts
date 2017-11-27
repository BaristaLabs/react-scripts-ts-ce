// Inspect with chrome://inspect/#workers

const ports = [];
console.log("Hello there, is this existence?");

onconnect = function (event) {
    console.log("Oh dear, something connected.");
    let port = event.ports[0];
    ports.push(port);

    console.dir(event.ports);

    port.addEventListener('message', (e) => {
        console.log('This is quite horrendious, someone (or something) posted a message!');
        console.log(`it said: "${e.data}"!`);
        for (let i = 0; i < ports.length; i++) {
            if (ports[i] !== port) {
                console.log(`I told them off!`);
                ports[i].postMessage(event.data);
            }
        }
    });

    port.start();
};