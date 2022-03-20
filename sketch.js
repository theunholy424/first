var cats = [];

let randomIndex;
let counter = 0;
let animating = false;
let cartoons = [];
let imageCounter = 0;
let button;
let addMoreButton;
let cnv;
let nameInputs = [];



function preload() {
  for (let i = 0; i <= 9; i++) {
    cartoons[i] = loadImage("./assets/cat_" + i + ".png")
    console.log(cartoons[i])
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(170,30,30);
  textSize(36);
  textFont(`Courier new`);
  textAlign(CENTER);
  textStyle(BOLD);
  imageMode(CENTER);
  fill(255);
  frameRate(8);


  button = select( `#randButton`);
  button.mousePressed(buttonPressed);
  addMoreButton = select( `#addMoreButton`);
  //addMoreButton.mousePressed(buttonPressed);

  for (let i = 0; i < 1; i++){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

  //setTimeout(changeBackground, 1000);
}

function draw() {

  if (animating == true) {
    clear();
    image(cartoons[imageCounter], width /2, height /2);
    if (imageCounter < cartoons.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (cats[0]) {
    //background(random(200,255));
    clear();
    randomIndex = int(random(cats.length));
    //text(animals[randomIndex].name + "’s favorite color is" +
    //animals[randomIndex].color, 50, 50);
    image(random(cartoons), width / 2, height / 2);
    text(cats[randomIndex].name, width/2, height - 25);
    cats.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left", width/2, height/2);
  }
}

function changeBackground() {
  if (counter <= 5) {
    counter++;
    console.log(counter)
    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  } else {

  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
