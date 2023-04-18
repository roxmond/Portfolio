document.querySelector("#myVideo").playbackRate = 0.65;


var myVid = new Array("./video/clouds_bg.mp4","./video/lights_bg.mp4","./video/waves_bg.mp4");
var myPix = new Array("./imgs/logo/logo4.png", "./imgs/logo/logo7.png" );

function chooseVideo() {
     var randomNum = Math.floor(Math.random() * myVid.length);
     document.getElementById("myVideo").src = myVid[randomNum];
}



function chooseLogo() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myLogo").src = myPix[randomNum];
}

function addLoadEvent(func) { 
    var oldonload = window.onload; 
    if (typeof window.onload != 'function') { 
      window.onload = func; 
    } else { 
      window.onload = function() { 
        if (oldonload) { 
          oldonload(); 
        } 
        func(); 
      } 
    } 
  }
   
  addLoadEvent(chooseVideo); 
  addLoadEvent(chooseLogo); 