
let c;
let b;

function setup(){
    createCanvas(600,600);
    c=color(24,200,190);
    b=color(255,0,0);
}
function draw(){
    noStroke();
    fill(c);
    rect(0,0,300,600);
    fill(b);
    rect(300,0,300,600);
}
function mouseClicked(){
    
    let check = get(110,110);
    if (check[0]== 24 && check[1]==200 && check[2]==190){  
c=b
    }
    let name= get(300,200);
    if (name[0]== 24, name[1]==200, name[2]==190){
b=c
    }
}
