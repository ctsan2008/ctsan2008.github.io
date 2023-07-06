let welcomeTextIndex = 0;
let welcomeText1 = "Hi, I am Cheung Tak Sing";
let welcomeText2 = "Welcome To My Personal Website";
let welcomeTextSpeed = 50; /* The speed/duration of the effect in milliseconds */

function welcome1Function() {
  if (welcomeTextIndex < welcomeText1.length) {
    document.getElementById("welcome1").innerHTML +=
      welcomeText1.charAt(welcomeTextIndex);
    welcomeTextIndex++;
    setTimeout(welcome1Function, welcomeTextSpeed);
  } else if (welcomeTextIndex >= welcomeText1.length) {
    welcomeTextIndex = 0;
    setTimeout(welcome2Function, welcomeTextSpeed * 4);
  }
}

function welcome2Function() {
  if (welcomeTextIndex < welcomeText2.length) {
    document.getElementById("welcome2").innerHTML +=
      welcomeText2.charAt(welcomeTextIndex);
    welcomeTextIndex++;
    setTimeout(welcome2Function, welcomeTextSpeed);
  }
}
