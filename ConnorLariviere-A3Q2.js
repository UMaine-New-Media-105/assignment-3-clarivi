// You can start from this outline to write your "Hungry Bird" game
// where objects drop and you try to catch them.
function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
  
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
  fill("rgb(160,178,195)") //
  ellipse(350,50,50)
  fill("rgb(121,128,134)")
  ellipse(335,45,6)
  ellipse(360,60,4)
  ellipse(355,40,9)
  ellipse(348,55,2)
  ellipse(340,65,13)
  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
  buildCatcher(mouseX,0,mouseIsPressed)
  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
function buildCatcher(x,y, isMousePressed){
  push();
  translate(x,y);
  noStroke();
    if(isMousePressed == 1){
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
