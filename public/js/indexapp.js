const fetch = window.fetch


$(document).ready(function() {
  var mySound;
  // Gets Link for Theme Song
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
mySound = new sound("./sound/naruto.mp3");
mySound.play(); 
  $("#download-button4").on("click", function () {
      mySound.stop();
    });

});
