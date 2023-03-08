// You can start from this outline to write your "Hungry Bird" game
// where objects drop and you try to catch them.
let fallY = 0
let seedX = 0
function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
   seedX = random(50)
  
  
  // ADD CHANGING VARIABLES
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.
 
  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
}

function draw() {
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
  background("rgb(5,5,58)"); //The night sky
  noStroke();
  fill("rgb(17,85,17)") //Field of grass
  rect(0,360,400)
  fill("rgb(160,178,195)") //The moon
  ellipse(350,50,50)
  fill("rgb(121,128,134)") //The moon's craters
  ellipse(335,45,6)
  ellipse(360,60,4)
  ellipse(355,40,9)
  ellipse(348,55,2)
  ellipse(340,65,13)
  
  buildSeed(0,0)    //Background cows (so that cows aren't appearing out of thin air)
  buildSeed(20,0)
  buildSeed(-20,2)
  buildSeed(-70,0)
  buildSeed(40,0)
  buildSeed(70,-5)
  buildSeed(-50,0)
  buildSeed(-30,3)
  buildSeed(-90,-3)
  buildSeed(100,0)
  buildSeed(90,0)
  buildSeed(-80,0)
  buildSeed(60,0)
  buildSeed(-110,-4)
  buildSeed(-120,0)
  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
  buildCatcher(mouseX,0,mouseIsPressed)
  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  fallY = fallY - 1
  buildSeed(seedX,fallY)
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
function buildCatcher(x,y, isMousePressed){
  push();
  translate(x,y);
  noStroke();
    if(isMousePressed == 1){ //Tractor beam turns on
    fill("rgba(62,252,62,0.6)")
    beginShape();
    vertex(-13,30)
    vertex(-30,95)
    vertex(30,95)
    vertex(13,30)
    endShape();
  }
  fill("rgb(68,68,68)") //create UFO underside
  ellipse(0,28,70,30)
  
  fill("gray") // create UFO base
  ellipse(0,25,70,30) 
  
  fill("lightblue") //create cockpit
  ellipse(0,15,30,20)
  
  fill("white")  //create glint/reflection of light on the cockpit
  ellipse(5,10,5,3)
  
  if(isMousePressed ==1){ //Create dots on the UFO. If mouse is pressed, the 'windows' will light up
    fill("yellow")
  }
  else{
    fill("black") 
  }
  ellipse(-21,23,5)
  ellipse(-13,30,5)
  ellipse(0,32,5)
  ellipse(13,30,5)
  ellipse(21,23,5)
  pop();
}

function buildSeed(x,y){ //builds object to be used as seed. in this case, a cow! 
  push();
  stroke("black")
  scale(1.9)   //The cow is scaled and translated because changing the x and y to where I actually wanted it would be tedious and/or messy.
  fill("white")
  translate(x-100,y-150)
  beginShape()
  vertex(204,338) //back of cow
  vertex(205,339)
  vertex(210,341)
  vertex(215,342)
  vertex(225,343)
  vertex(228,347)
  vertex(227,352)
  
  vertex(226,357) //backmost leg
  vertex(226,357)
  vertex(225,357)
  
  vertex(225,352)
  vertex(224,352)
  
  vertex(223,357) //second backmost leg
  vertex(222,357)
  
  vertex(222,352) //underside
  vertex(220,352)
  vertex(218,352)
  vertex(216,352)
  vertex(214,351)
  vertex(213,351)
  
  vertex(212,357) //second frontmost leg
  vertex(211,357)
  
  vertex(210,351) 
  vertex(208,351)
  
  vertex(208,357) //frontmost leg
  vertex(207,357)
  
  vertex(206,352) //neck and head
  vertex(205,350)
  vertex(204,349)
  vertex(203,346)
  vertex(202,342)
  vertex(200,341)
  endShape()

  //These are the shapes for the cow's spots
  fill("black")
  beginShape()
  vertex(216,342) 
  vertex(218,346)
  vertex(219,347)
  vertex(221,347)
  vertex(223,346)
  vertex(224,344)
  vertex(225,342)
  endShape()
  
  beginShape()
  vertex(204,348)
  vertex(206,347)
  vertex(207,348)
  vertex(206,351)
  endShape()
  
  beginShape()
  vertex(205,339)
  vertex(206,342)
  vertex(207,342)
  vertex(208,343)
  vertex(209,341)
  endShape()
  
  ellipse(203,340,0.5); // its eye
  pop();
}
