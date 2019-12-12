$(document).ready(function () {
  $('#botones').on('click', 'button', function (e) {
    let nombre = e.target.id;
    $(`.${nombre}`)[0].pause();
    $(`.${nombre}`)[0].currentTime=0;
    $(`.${nombre}`)[0].play();
  });

  // del 3 al 9
  $(document).keydown(function (e) { 
    let press = e.key
    if(press > 2 && press < 10)  {
        $(`audio[data-v=${press}]`)[0].pause();
        $(`audio[data-v=${press}]`)[0].currentTime=0;
        $(`audio[data-v=${press}]`)[0].play();
    }
  });
  
});













