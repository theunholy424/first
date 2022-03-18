let animals = [{
      name: "dog",
      color: "brown"
    }, {
      name: "cat",
      color: "black"
    }, {
      name: "mouse",
      color: "grey"
    }, {
      name: "tiger",
      color: "orange"
    },{
      name: "bird",
      color: "white"
    }
    ];

    let randomIndex;
    let counter = 0;
    let animating = false;

    function setup() {
      createCanvas(600, 600);
      background(200);
      textSize(32);
      text("click to randomize",50,50);

      setTimeout(changeBackground, 1000);
    }
    function draw(){
      if(animating == true){
        ellipse(random(width), random(height), random(50, 200))
      }
    }

    function randomizer(){
      animating = false;
      if (animals[0]) {
        background(random(200,255));
     randomIndex = int(random(animals. length));
      //text(animals[randomIndex].name + "’s favorite color is" +
      //animals[randomIndex].color, 50, 50);
      text(`${animals[randomIndex].name} ’s favorite color is
      ${animals[randomIndex].color}`, 50, 50);
      animals. splice(randomIndex, 1);
  } else {
     background(random(200,255));
     text("nothing left",50,50);
 }
    }
    function changeBackground(){
      if (counter <= 5){
       counter++;
        console.log(counter)
        background(random(255), random(255), random(255));
      setTimeout(changeBackground, 1000);
    } else{

    }
    }
    function mousePressed(){
      animating = true;
      setTimeout(randomizer, 2000);

   }
