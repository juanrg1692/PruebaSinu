var s = 100, ex = 10, txt,i;

var txt0 = "Puedo escribir los versos más tristes esta noche."
+"Escribir, por ejemplo: “La noche está estrellada,"
+"y tiritan, azules, los astros, a lo lejos.”"
+"El viento de la noche gira en el cielo y canta."
+"Puedo escribir los versos más tristes esta noche."
+"Yo la quise, y a veces ella también me quiso."
+"En las noches como ésta la tuve entre mis brazos."
+"La besé tantas veces bajo el cielo infinito."
+"Ella me quiso, a veces yo también la quería."
+"Cómo no haber amado sus grandes ojos fijos."
+"Puedo escribir los versos más tristes esta noche."
+"Pensar que no la tengo. Sentir que la he perdido."
+"Oir la noche inmensa, más inmensa sin ella."
+"Y el verso cae al alma como al pasto el rocío."
+"Qué importa que mi amor no pudiera guardarla."
+"La noche está estrellada y ella no está conmigo."
+"Eso es todo. A lo lejos alguien canta. A lo lejos."
+"Mi alma no se contenta con haberla perdido."
+"Como para acercarla mi mirada la busca."
+"Mi corazón la busca, y ella no está conmigo."
+"La misma noche que hace blanquear los mismos árboles."
+"Nosotros, los de entonces, ya no somos los mismos."
+"Ya no la quiero, es cierto, pero cuánto la quise."
+"Mi voz buscaba el viento para tocar su oído."
+"De otro. Será de otro. Como antes de mis besos."
+"Su voz, su cuerpo claro. Sus ojos infinitos."
+"Ya no la quiero, es cierto, pero tal vez la quiero."
+"Es tan corto el amor, y es tan largo el olvido."
+"Porque en noches como ésta la tuve entre mis brazos,"
+"mi alma no se contenta con haberla perdido."
+"Aunque éste sea el último dolor que ella me causa,"
+"y estos sean los últimos versos que yo le escribo."

let myFont;
let modelo;
let modelo0;
let modelo1;
let textura;

var xpos = [];
var ypos = [];

var rand01 = 0;

function preload() {
  myFont = loadFont('arial_narrow_7.ttf');
  textura = loadImage("dddd.jpg");
  modelo = loadModel("model0.obj");  
  modelo0 = loadModel("model1.obj");
   modelo1 = loadModel("model2.obj");
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  background(200);
  txt = [];



  for(var i = 0; i<7; i++){
    xpos = append(xpos,random(-width/2,width/2));
    ypos = append(ypos,random(-height/2,height/2));
  }
}

function draw() {
  background(0);

  scale(1);
  fill(255);
  textSize(32);
  textFont(myFont);
  text(txt0, -width/2,-height/2+100, width, height);


  for(var i = 0; i<7; i++){
    pointLight(255,255,255,xpos[i],ypos[i],200);
  }


  if(mouseIsPressed){
    rand01 = random(3);
  }



if(int(rand01) === 0){
  push();
  translate(0,0,0);
  rotateY(frameCount*0.01);
  fill(255,0,0);
  stroke(0);
  noStroke();
  scale(1);
  texture(textura);
  textureMode(NORMAL);
  scale(10);
  model(modelo);
  pop();
}

if(int(rand01) === 1){
  push();
  translate(0,0,0);
  rotateY(frameCount*0.01);
  fill(255,0,0);
  stroke(0);
  noStroke();
  scale(1);
  texture(textura);
  textureMode(NORMAL);
  scale(10);
  model(modelo0);
  pop();
}

if(int(rand01) === 2){
  push();
  translate(0,0,0);
  rotateY(frameCount*0.01);
  fill(255,0,0);
  stroke(0);
  noStroke();
  scale(1);
  texture(textura);
  textureMode(NORMAL);
  scale(10);
  model(modelo1);
  pop();
}
}

