// readline-sync --- npm install --save readline-sync
var names = console.log(prompt('Input'))
for (var i = 0; i < names.length; i++) {
  if (i == 0)
	firstLetter = names[i]
  if (firstLetter == 'j') {
	byeSpeaker.speak(names[i]);
  } else {
	helloSpeaker.speak(names[i]);
  }
}
