function setup() {
  createCanvas(800,600);
  
}

function draw() {
  
  background(220,220,220); 
  
  strokeWeight (3);
  fill(30,70,100);
  line(400,100,400,400); // x1,y1,x2,y2 coordinates
  line(420,100,420,400); 
  line(440,100,440,400); 
  //linee testa-corpo
  
  strokeWeight (3);
  fill(30,70,100);
  line(400,120,350,100); // x1,y1,x2,y2 coordinates
  line(410,150,450,10); 
  line(450,150,510,160);
  //linee testa
  
  noStroke(0);
  fill(200,0,100);
  ellipse(420,140,130); // (x,y,d)
  //testa
  
  noStroke();
  fill(255,255,255);
  ellipse(440,135,50);
  //occhio b
  
  noStroke();
  fill(200,0,100,50);
  ellipse(440,135,20);
  //occhio
  
  noStroke();
  fill(0,0,0);
  ellipse(440,135,10);
  //punto occhio
  
  noStroke();
  fill(91,182,229);
  ellipse(397,130,15);
  ellipse(460,105,13);
  ellipse(470,155,7);
  //puntini attorno occhio
  
  noStroke(0);
  fill(200,0,100);
  ellipse(400,510,100);
  //ruota
  
  noStroke(0);
  fill(0,0,0); //nero
  rect(300,280,200,230); //(x,y,w,h)
  // corpo
  
  stroke(91,182,229);
  strokeWeight(7);
  line(300,300,500,300);
  //linea corpo
  
  line(pmouseX-50,pmouseY,300,300);
  line(pmouseX+50,pmouseY,500,300);


}