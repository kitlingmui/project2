const fetch = window.fetch


$(document).ready(function() {
  
  // Gets Link for Theme Song
     var audioElement = document.createElement("audio");
     audioElement.setAttribute("src", "./img/win.mp3");

     // Theme Button
     $("#download-button1").on("click", function () {
       audioElement.play();
     });
     $("#download-button2").on("click", function () {
       audioElement.pause();
     });

});