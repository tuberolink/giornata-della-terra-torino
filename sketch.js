let audioPlayer;

function setup() {
  noCanvas();

  // sfondo nero pagina
  document.body.style.background = "black";
  document.body.style.margin = "0";
  document.body.style.height = "100vh";

  audioPlayer = createAudio('assets/tono2.mp3');

  audioPlayer.attribute(
    'aria-description',
    'Audio player standard.'
  );

  audioPlayer.showControls();

  // 🎯 centratura (senza scale)
  audioPlayer.style('position', 'absolute');
  audioPlayer.style('top', '50%');
  audioPlayer.style('left', '50%');
  audioPlayer.style('transform', 'translate(-50%, -50%)');
}

function draw() {
  // nessuna modifica
}
