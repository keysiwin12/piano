botones = document.getElementsByTagName('button');
for(let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click',function(e) {
    let nombre = e.target.id;
    let sonido = document.getElementsByClassName(`${nombre}`);
    sonido[0].pause();
    sonido[0].currentTime=0;
    sonido[0].play();
  });
}


// del 3 al 9
document.addEventListener('keypress' ,function(e) {
  press =window.e ? e.which : e.keyCode;
  if(press > 50 && press<58) { 
    $(`audio[data-v=${e.key}]`)[0].pause();
    $(`audio[data-v=${e.key}]`)[0].currentTime=0;
    $(`audio[data-v=${e.key}]`)[0].play();
  }
});