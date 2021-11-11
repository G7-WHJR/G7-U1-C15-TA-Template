var colors = ["white","black", "red", "blue", "green", "yellow", "orange", "violet"];
var currentColor;

function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("white");
    header();
}

function draw()
{
  
  
    var y = 50;
    for (i = 0; i < colors.length; i++){
        var currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
        currentColor.appear();
        y = y + 50;
    }
}

//The function that changes the color of the line being drawn
function colorChange() {
  
    
}

function drawing() {
    if (mouseX > 100 && mouseY > 100)
    {
        stroke(currentColor);
        strokeWeight(3); 
        line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function header() {
  fill("#404040");
  rect(0, 0, width, 50);
  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

    

