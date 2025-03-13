function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove(); 
    }, 8000);
}

$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})

function sendLove() {
    let name = getQueryParam("name") || "baby";
    let message = document.getElementById("message");
    message.innerHTML = `Will you be my valentine ${name}?`;
    setTimeout(() => {
        message.style.opacity = 1;
    }, 100);
    for (let i = 0; i < 50; i++){
        setTimeout(createHeart, i * 100);
    }
}



sendLove();