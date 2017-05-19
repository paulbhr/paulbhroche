window.onscroll = function() {scroll()};

function scroll() {
  let navposition = (document.getElementById('nav').offsetLeft - window.scrollX);
  let realposition = (document.getElementById('realisations').offsetTop - window.scrollY);
  let x = window.scrollY;
  let fast = (x*2+25);
  let comingin = (document.body.offsetHeight);
  let offsetLeft = document.getElementById('nav').offsetLeft;


  /*if (navposition <= 0)
  {
      document.getElementById('nav').style.right = "";
      document.getElementById('nav').style.left = 0;
      document.getElementById("web").style.display = "flex";
      document.getElementById("web").className = "animated fadeInUp";
  }
  else
  {
      document.getElementById("web").style.display = "none";
      document.getElementById("web").className = "";
      document.getElementById('nav').style.left = "";
      document.getElementById('nav').style.right = ""+fast+"px";
      document.getElementById('edito').style.right = ""+fast+"px";
  }*/

  if ((document.getElementById('realisations').offsetLeft + document.getElementById('realisations').offsetWidth) <= document.body.offsetWidth && window.scrollY > document.body.offsetHeight)
  {
    document.getElementById('realisations').style.right = ""+0+"px";
    document.getElementById('nav').style.right = "";
    document.getElementById('nav').style.left = 0;
    document.getElementById("web").style.display = "flex";
    document.getElementById("nav").className = "animated fadeInLeft";
  }
  else {
    document.getElementById('realisations').style.right = ""+(x - document.body.offsetHeight)+"px";
    document.getElementById("web").style.display = "none";
    document.getElementById("web").className = "";
    document.getElementById('nav').style.left = "";
    document.getElementById('nav').style.right = ""+fast+"px";
    document.getElementById('edito').style.right = ""+fast+"px";
    document.getElementById("nav").className = "";
  }

  let title = document.getElementsByTagName('h1');

  for(i=0; i < title.length; i+=2) {
    title[i].style.transition = "box-shadow 0.5s";
    let position = (title[i].offsetTop - window.scrollY);
    if ((document.body.offsetHeight - position) > (document.body.offsetHeight / 2)) {
      title[i].classList.add("boxShadowLeft");
    }
    else {
      title[i].classList.remove("boxShadowLeft");
    }
  }
  for(i=1; i < title.length; i+=2) {
    title[i].style.transition = "box-shadow 0.5s";
    let position = (title[i].offsetTop - window.scrollY);
    if ((document.body.offsetHeight - position) > (document.body.offsetHeight / 2)) {
      title[i].classList.add("boxShadowRight");
    }
    else {
      title[i].classList.remove("boxShadowRight");
    }
  }
}




function progress(element) {
  element.nextElementSibling.className = "animated fadeInRight"
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

function slidein(element) {
  if (element.nextElementSibling.className = "ng-hide") {
    element.nextElementSibling.className = "animated fadeInRight";
  }
  else if(element.nextElementSibling.className = "ng-show") {
    element.nextElementSibling.className = "animated fadeOut";
  }
}

function article(element) {
  if (element.lastElementChild.className = "ng-hide") {
    element.lastElementChild.className = "animated fadeInLeft";
  }
  else if(element.lastElementChild.className = "ng-show") {
    element.lastElementChild.className = "animated fadeOut";
  }
}

function scrollto(id) {
  let element = document.getElementById(id);
  element.scrollIntoView();
}

function bisou() {
  alert("😘");
}
