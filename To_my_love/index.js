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

document.addEventListener('click', function() {
  const music = document.getElementById('bg-music');
  
  music.play().then(() => {
    console.log("Playback started successfully!");
  }).catch(error => {
    console.log("Playback failed or was blocked:", error);
  });
}, { once: true });