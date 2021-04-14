Avengers = "";
HarryPotter = "";

function preload() {
    Avengers = loadSound("The Avengers Theme Song.mp3");
    HarryPotter = loadSound("music.mp3");
}

function setup() {
    Canvas = createCanvas(400, 400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}
function draw() {
    image(Video, 0, 0, 400, 400);
}