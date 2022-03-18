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

    function setup() {
      createCanvas(600, 600);
      background(200);
      textSize(32);
      text("click to randomize",50,50);



    }
    function draw(){


    }
    function mousePressed(){
      if (animals[0]) {
        background(random(200,255));
      randomIndex = int(random(animals. length));
      text(animals[randomIndex].name, 50, 50);
      animals. splice(randomIndex, 1);
    } else {
      background(random(200,255));
      text("nothing left",50,50);
    }
    }
