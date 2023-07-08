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

function openHobbies(evt, hobbies) {
  // Declare all variables
  var i, hobbiesContent, tablinks;

  // Get all elements with class="hobbies-content" and hide them
  hobbiesContent = document.getElementsByClassName("hobbies-content");
  for (i = 0; i < hobbiesContent.length; i++) {
    hobbiesContent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(hobbies).style.display = "flex";
  evt.currentTarget.className += " active";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("bio").className += " animate__slideInLeft";
  }
}
