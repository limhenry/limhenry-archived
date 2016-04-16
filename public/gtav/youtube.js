var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}
function onPlayerReady(event) {
  player.unMute();
  document.getElementById('unmute').style.visibility = 'hidden';
  var unMuteButton = document.getElementById("unmute");
  unMuteButton.addEventListener("click", function() {
    player.unMute();
    document.getElementById('unmute').style.visibility = 'hidden';
    document.getElementById('mute').style.visibility = 'visible';
  });
  var muteButton = document.getElementById("mute");
  muteButton.addEventListener("click", function() {
    player.mute();
    document.getElementById('mute').style.visibility = 'hidden';
    document.getElementById('unmute').style.visibility = 'visible';
  });
}
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
