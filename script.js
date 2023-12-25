const dialouge = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    "Text 5",
    "Text 6",
    "Text 7",
];
var i = 0;
document.addEventListener('DOMContentLoaded', function () {
  var hihi = document.getElementById('hihi');
  var hoho = document.getElementById('hoho');
  var audio = new Audio('background_sound/generic2.mp3');
  hihi.addEventListener('click', function () {
    hoho.textContent = dialouge[i];
    var j = 1000;
    if(dialouge[i].length < 15) j = 700;
    if(i < dialouge.length - 1) i++;
    else return;
    // Clear existing animation
    hoho.style.animation = 'none';
    audio.play();
    // Trigger reflow (repaint) to apply the changes immediately
    void hoho.offsetWidth;

    // Reapply animation
    hoho.style.animation = 'typing ' + j + 'ms steps(30), cursor .4s step-end infinite alternate';
    hihi.style.pointerEvents = 'none';
    setTimeout(function () {
      hihi.style.pointerEvents = 'auto';
      audio.pause();
    }, 1000);
  });
});
