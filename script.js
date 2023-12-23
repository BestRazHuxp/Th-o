const dialouge = [
  "thật ra thì..." ,
  "tui cũng muốn viết thư tay lắm!",
  "nhưng mà vấn đề là...",
  "nó ra siu nhân điện quang á :>",
  "thành ra hong có làm được :((",
  "nên là nay làm đỡ cái web" ,
  "chúc mừng giáng sinh bà nho :>",
  "(xin lũi vì lỡ báo mấy cây bút màu cụa bà ;-;)",
  "Cảm ơn bà vì đã ở bên tui suốt hơn một năm qua",
  "Hehe",
  "Tuy có nhiều lúc bà cọc cằn, khó ở",
  "Cũng nhiều lúc tui làm bà giận rùi buồn",
  "Nhưng mò sau cùng hai đứa vẫn làm hòa :>",
  "Bà vẫn siuuuuuuu dễ thương",
  "siu xinh lun (dù tăng 2 kí :>)",
  "đùa hoiiii",
  "tăng kí là tốt mò hehe",
  "Aaaaaaaaaa",
  "Viết tới đây hoiiii, sến quáaaaa",
  "Tóm lại là",
  "tui...",
  "yêu bà!",
  "heh",
  ":>",
  "Hết rùi",
  "À",
  "Còn nữa",
  "Dù Thảo có muốn hay hong thì",
  "Thảo thi tốt nhaaaaaaaaaaaaa!!!!!!!",
  "Chúc Thảo có một cái giáng sinh",
  "Học bài mau vào nhé :3",
  "iu",
  "bai <333",
];
var i = 0;
document.addEventListener('DOMContentLoaded', function () {
  var hihi = document.getElementById('hihi');
  var hoho = document.getElementById('hoho');
  var audio = new Audio('generic2.mp3');
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
