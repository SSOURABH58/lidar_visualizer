let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
let boundarySpacing = 20
let f = false;
let drawing = false;
let x1,x2,y1,y2;
let s;
let g=1;

function setup() {
    createCanvas(windowWidth-100, windowHeight-100);
    walls.push(new Boundary(boundarySpacing, boundarySpacing, width-boundarySpacing, boundarySpacing));
    walls.push(new Boundary(width-boundarySpacing, boundarySpacing, width-boundarySpacing, height-boundarySpacing));
    walls.push(new Boundary(width-boundarySpacing, height-boundarySpacing, boundarySpacing, height-boundarySpacing));
    walls.push(new Boundary(boundarySpacing, height-boundarySpacing, boundarySpacing, boundarySpacing));
    console.log(width);
}
function play(){
    var elem = document.getElementById("play");
    if(elem.value=="Play"){
        f=true;
        elem.value = "Stop";
    }
    else{
        f = false;
        elem.value = "Play";
    }
}
function reset(){
    walls = [];
    f = false;
    var elem = document.getElementById("play");
    elem.value = "Play";
    var e = document.getElementById("angle");
    e.value = "";
    g = 1;
    var elem2 = document.getElementById("range");
    elem2.value = "";
    range = 0;
    walls.push(new Boundary(boundarySpacing, boundarySpacing, width-boundarySpacing, boundarySpacing));
    walls.push(new Boundary(width-boundarySpacing, boundarySpacing, width-boundarySpacing, height-boundarySpacing));
    walls.push(new Boundary(width-boundarySpacing, height-boundarySpacing, boundarySpacing, height-boundarySpacing));
    walls.push(new Boundary(boundarySpacing, height-boundarySpacing, boundarySpacing, boundarySpacing));
    
}
function angle(){
    var e = document.getElementById("angle");
    g = e.value;
    
}
function draw() {
    background(0);
    if(mouseIsPressed === true && f!=true){
        
        if(mouseX>boundarySpacing && mouseX<width-boundarySpacing && mouseY>boundarySpacing && mouseY<height-boundarySpacing ){
            if(drawing==true){
                x2 = mouseX
                y2 = mouseY;
                walls.push(new Boundary(x1,y1,x2,y2));
                drawing = false;
            }
            else{
                x1 = mouseX
                y1 = mouseY;
                drawing = true;
            }
        }
        
    }       
    for (let wall of walls) {
        wall.show();
    }

    if(f==true){

    particle = new Particle(g);
    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);
    }
    
    
    

    xoff += 0.01;
    yoff += 0.01;
}
