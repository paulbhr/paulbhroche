window.onscroll = function() {scroll()};

function scroll() {

  let x = document.documentElement.scrollTop;
  let fast = (x*2+25);
  let comingin = (x-700);
  let offsetLeft = document.getElementById('nav').offsetLeft;

  if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470)
  {
      document.getElementById('nav').style.right = "";
      document.getElementById('nav').style.left = 0;
      document.getElementById("web").style.display = "flex";
  }
  else
  {
      document.getElementById("web").style.display = "none";
      document.getElementById('nav').style.left = "";
      document.getElementById('nav').style.right = ""+fast+"px";
      document.getElementById('edito').style.right = ""+fast+"px";
  }

  if (comingin < 0)
  {
    document.getElementById('realisations').style.right = ""+comingin+"px";
  }
  else
  {
    document.getElementById('realisations').style.right = 0;
  }
}

function progress() {
    let p = document.getElementById('competences').getElementsByTagName('p');
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      width++;
      for (i = 0; i < p.length; i++) {
        p[i].style.width = 0;
        if (width >= p[i].className) {
          p[i].style.width = p[i].className + '%';
        }
        else {
          p[i].style.width = width + '%';
        }
      }
      if (width == 100) {
        clearInterval(id);
      }
    }
}
