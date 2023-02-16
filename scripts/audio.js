//les fichier audio
var audioContext = new AudioContext();
var jumpSound = new Audio("Super mario brothers original.mp3");

//ajuster le son
var gainNode = audioContext.createGain();
gainNode.gain.value = 0.5;
gainNode.connect(audioContext.destination);

//utiliser le son lorsque la personne saute
function jump() {
  var jumpNode = audioContext.createBufferSource();
  jumpNode.buffer = jumpSound;
  jumpNode.connect(gainNode);
  jumpNode.start();
  //le code quand la personne saut
}

//appler la fonction jump

jump()