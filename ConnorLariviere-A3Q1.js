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
  background("rgb(5,5,58)");
  buildCatcher(mouseX,0)
  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
  
  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
function buildCatcher(x,y){
  push();
  translate(x,y);
  noStroke();
  fill("rgb(68,68,68)") //create UFO underside
  ellipse(0,28,70,30)
  
  fill("gray") // create UFO base
  ellipse(0,25,70,30) 
  
  fill("lightblue") //create cockpit
  ellipse(0,15,30,20)
  
  fill("white")  //create glint/reflection of light on the cockpit
  ellipse(5,10,5,3)
  
  fill("black") // create dots on the UFO
  ellipse(-21,23,5)
  ellipse(-13,30,5)
  ellipse(0,32,5)
  ellipse(12,30,5)
  ellipse(21,23,5)
  pop();
}
