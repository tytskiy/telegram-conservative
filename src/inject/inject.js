function disableDefaultHover() {
    var code = 'jQuery && jQuery(".composer_emoji_insert_btn").off("mouseenter mouseleave")';

    var script = document.createElement('script');

    script.textContent = code;

    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}

function onDomReady(callback) {
    chrome.extension.sendMessage({}, function (response) {
        var readyStateCheckInterval = setInterval(function () {
            if (document.readyState === 'complete') {
                clearInterval(readyStateCheckInterval);
                setTimeout(callback, 0);
            }
        }, 10);
    });
}

onDomReady(disableDefaultHover);
