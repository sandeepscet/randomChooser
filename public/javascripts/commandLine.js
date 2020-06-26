var speed = 50; //Writing speed in milliseconds
var text = 'sh randomChooser.sh';
var i = 0;
var count = 0;
var time = 1;
var output = [
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
"Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout","Applying aync await",
"Promises sucks",
"ohh there is observalbe too",
"what about callbacks",
"thinking about generators too",
"you forgot settimeout",
];

$( document ).ready(function() {
var textarea = $('.term');
runner();

function runner() {
    textarea.append(text.charAt(i));
    i++;
    setTimeout(
      function() {
        if (i < text.length)
          runner();
        else {
          textarea.append("<br>")
          i = 0;
          setTimeout(function() {feedbacker();}, 1000);
        }
      }, Math.floor(Math.random() * 220) + 50);
  }
  
  
  function feedbacker() {
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    if (time % 2 == 0) {
      i++;
      textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    }
    if (time == 3) {
      i++;
      textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
      i++;
      textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
      i++;
      textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    }
    window.scrollTo(0, document.body.scrollHeight);  
    i++;
    time = Math.floor(Math.random() * 4) + 1;
    count += time;
    setTimeout(
      function() {
        if (i < output.length - 2)
          feedbacker();
        else {
          textarea.append("<br>Choosing...<br>");
          setTimeout(function() {
              $(".load").fadeOut(3000);
              $(".loaded").fadeIn();
              
            }, 500);
        }
      },time);
  }

});


