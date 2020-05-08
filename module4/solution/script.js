(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (name in names) {
    var firstLetter = names[name].charAt(0).toLowerCase();
    // console.log(firstLetter);
    if (firstLetter == "j") {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }
})(window);
