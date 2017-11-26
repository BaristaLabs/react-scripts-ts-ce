(() => {
    let f = document.createElement('iframe');
    f.src = chrome.runtime.getURL('trampoline.html');
    f.style = 'display: none !important;';
    f.hidden = true;
    (document.body || document.documentElement).appendChild(f);
})();