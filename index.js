var openComment, styles, time, writeStyleChar, writeStyles;

styles = "/* \n * Hello My Name is paramjeet\n * Is it look like trash website\n * Let ME FIXIT for YOU\n */\n\nbody {\n  background-color: #1a1c24;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* ...                  \n *\n * ...Better?            \n *\n * Nah Still look like pile of sh*t.         \n *\n * Dont Worry i am going to make it better.            \n *\n * Are you confused                       \n *\n * This is how it works\n *\n * This CSS is being injected into a DOM <style> element \n * and written in this <pre> element simultaneously.        \n *\n * Still  Confused? Watch!\n *\n */\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* Nobody like this black and white text\n *\n *Let me make it colorfull\n *\n * \n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n * Now we'r Talking.\n */ \n\n\n/* First, we'll move this s*** over */\n\npre { left: 50%; }\n\n\n/* Now I can show you my website */\n\n\n\n* {\n  box-sizing: border-box;\n}\n\n/* Create two equal columns that floats next to each other */\n.column {\n  background-image: url(sand.jpg);\n  background-size:100%;\n  background-repeat: no-repeat;\n  float: left;\n  width: 50%;\n  padding: 10px;\n  height: 100vh; /* Should be removed. Only for demonstration */\n\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n@font-face {\n  font-family: system;\n  font-style: normal;\n  font-weight: 600;\n  src: local(\".SFNSText-Light\"), local(\".HelveticaNeueDeskInterface-Light\"), local(\".LucidaGrandeUI\"), local(\"Ubuntu Light\"), local(\"Segoe UI Light\"), local(\"Roboto-Light\"), local(\"DroidSans\"), local(\"Tahoma\");\n}\n\n* {\n  margin:0;\n  padding:0;\n  background:transparent;\n  font-family: \"system\";\n}\n\n.container {\n  width: 200px;\n}\n\n.word {\n  font-size:3em;\n  font-weight: 300px;\n  color: red;\n  font-weight:bold;\n  float:top;\n  opacity:0;\n  position:absolute;\n}\n\n.w1 {\n  animation: w1anim 20s infinite;\n}\n\n.w2 {\n  animation: w2anim 20s infinite;\n}\n\n.w3 {\n  animation: w3anim 20s infinite;\n}\n\n.w4 {\n  animation: w4anim 20s infinite;\n}\n\n.w5 {\n  animation: w5anim 20s infinite;\n}\n\n\n\n@keyframes w1anim {\n  0%{\n    opacity: 0;\n  }\n  10%{\n    opacity: 1;\n  }\n  20% {\n    opacity:0;\n  }\n}\n\n\n@keyframes w2anim {\n  20%{\n    opacity: 0;\n  }\n  30%{\n    opacity: 1;\n  }\n  40% {\n    opacity:0;\n  }\n}\n\n@keyframes w3anim {\n  40%{\n    opacity: 0;\n  }\n  50%{\n    opacity: 1;\n  }\n  60% {\n    opacity:0;\n  }\n}\n\n@keyframes w4anim {\n  60%{\n    opacity: 0;\n  }\n  70%{\n    opacity: 1;\n  }\n  80% {\n    opacity:0;\n  }\n}\n\n@keyframes w5anim {\n  80%{\n    opacity: 0;\n  }\n  90%{\n    opacity: 1;\n  }\n  100% {\n    opacity:0;\n  }\n}\n\n\n#p1 {\n  font-size: 2em;\n}\nh2 {\n  font-size: 2em;\n}\n#p2 {\n  font-size: 2em;\n}\n#pro3 {\n    text-decoration: none;\n  font-size: 3em;\n  color: black;\n  box-sizing: 5px;\n  border: 1px solid blue;\n  background-color: grey;\n}\n#Resume {\n      text-decoration: none;\n  font-size: 3em;\n  color: black;\n  box-sizing: 5px;\n  border: 1px solid yellow;\n  background-color: grey;\n}\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 50px;\n  text-align: center;\n  text-decoration: none;\n}\n\n.fa:hover {\n    opacity: 0.7;\n}\n.fa-facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.fa-twitter {\n  background: #55ACEE;\n  color: white;\n}\n.fa-instagram {\n  background: #125688;\n  color: white;\n}\n.fa-github {\n  background:black;\n  color:white;\n}\n.fa-linkedin {\n  background: #007bb5;\n  color: white;\n}\n\n.box {\n  background-repeat: no-repeat;\n  background-size: contain;\n  float: left;\n  width: 33.33%;\n  padding: 11vh;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n#box1{\n  background-image: url(android.jpg);\n}\n#box2 {\n  background-image: url(web.png);\n}\n#box3 {\n  background-image: url(python.jpg);\n}\n#pro1 {\n  text-decoration: none;\n  font-size: 1em;\n  color: white;\n  margin: \n}\n\n/* \n *\n * Wahoo!         \n *\n * We did it!       \n *\n * I mean *I* did it, but you know, whatever...\n * This is inspired by jake albaugh He the First one to do  \n * This kind of thing.\n *\n * Thank YOU     \n * \n * See you later!\n *  \n */";

openComment = false;

writeStyleChar = function(which) {
  if (which === '/' && openComment === false) {
    openComment = true;
    styles = $('#style-text').html() + which;
  } else if (which === '/' && openComment === true) {
    openComment = false;
    styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
  } else if (which === ':') {
    styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
  } else if (which === ';') {
    styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
  } else if (which === '{') {
    styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
  } else {
    styles = $('#style-text').html() + which;
  }
  $('#style-text').html(styles);
  return $('#style-tag').append(which);
};

writeStyles = function(message, index, interval) {
  var pre;
  if (index < message.length) {
    pre = document.getElementById('style-text');
    pre.scrollTop = pre.scrollHeight;
    writeStyleChar(message[index++]);
    return setTimeout((function() {
      return writeStyles(message, index, interval);
    }), interval);
  }
};

$('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

time = window.innerWidth <= 578 ? 4 : 16;

writeStyles(styles, 0, time);
