// An array of all the colors used in this code.
let colors = ["white","black", "red", "blue", "green", "yellow", "orange", "violet", "grey"];
let currentColor;

function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 

    // Set the background to white, and move the line to setup();
    background("white");
  
    header();
    

}

function draw()
{
  //Call function to begin drawing the line on the canvas if mouse is pressed
  
  
  
    let y = 50;
    for (i = 0; i < colors.length; i++){

       //make an object for each color box:
        var currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
        currentColor.appear();
        y = y + 50;
    }
}

//The function that changes the color of the line being drawn
function colorChange() {
  
    
}

//Function that does the drawing
function drawing() {
  
    if (mouseX > 100 && mouseY > 100)
    {
        stroke(currentColor); //sets drawing color
        strokeWeight(3); //thichkess of drawing line
        line(pmouseX, pmouseY, mouseX, mouseY); //draws a line that follows the mouse
  }
}

//display instruction
function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

    

