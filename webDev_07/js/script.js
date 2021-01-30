window.onload=function(){
//update function: controls various things throughout the page
    function update(){
      document.getElementById('text').innerHTML = +cookieCount+ " Cee-los.";
      document.title = cookieCount + " Cookies";
      document.getElementById('amountAutoClick').innerHTML = "You own " + autoClick + " Autoclickers";
      document.getElementById('amountTheMan').innerHTML = "You own " + theMan + " Autoclickers";
      document.getElementById('cps').innerHTML = +(autoClick+(theMan*10))+" cps";
      if (autoClick >= 1) {
        document.getElementsByClassName('theMan')[0].style.display = 'block';
      }
      if (theMan >= 1){
        document.getElementsByClassName('goldenclo')[0].style.display = 'block';
      }
      if (goldenClo >= 1){
      document.getElementsByClassName('goldenclo')[0].style.display = 'none';
     }
    }
//code for Cookie
var cookieCount = 0;
cookies.addEventListener("click", add);
  function add() {
     cookieCount = cookieCount + 1;
     update();
  }

  //code for save and load
 saveGame.addEventListener("click", save);
  function save(){
    localStorage.setItem("cookieCount", cookieCount);
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("theMan", theMan);
    localStorage.setItem("goldenClo", goldenClo);
  }
  loadGame.addEventListener("click", load);
   function load(){
    cookieCount = localStorage.getItem("cookieCount");
    cookieCount = parseInt(cookieCount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    theMan = localStorage.getItem("theMan");
    theMan = parseInt(theMan);
    goldenClo = localStorage.getItem("goldenClo");
    goldenClo = parseInt(goldenClo);
    update();
  }

  //code for Autoclicker
   var autoClick = 0;
   function timer() {
     cookieCount = cookieCount + autoClick;
     cookieCount = cookieCount + (theMan*10);
     update();
   }
   setInterval(timer, 1000);
   autoC.addEventListener("click", buyAutoClicker);
   function buyAutoClicker(){
     if (cookieCount >= 15) {
        cookieCount = cookieCount - 15;
        autoClick = autoClick + 1;
        update();


     }
   }
   //code for the Man
    var theMan = 0;
    theman.addEventListener("click", buyTheMan);
    function buyTheMan(){
      if (cookieCount >= 120) {
        cookieCount = cookieCount - 120;
        theMan = theMan + 1;
        update();
      }
    }

    //code for Golden Cee-lo (brings you to win screen)
    var goldenClo = 0;
    gold.addEventListener("click", buyGoldenClo);
      function buyGoldenClo(){
        if (cookieCount >= 50000){
         cookieCount = cookieCount - 50000;
         goldenClo = goldenClo + 1;
        window.location.href ="winnerpage.html"
         update();
      }
      }
 }
