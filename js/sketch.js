var standingAstronaut;
var runningAstronaut;
var jumpingAstronaut;
var star;
var background;

function preload(){
    standingAstronaut = loadAnimation("standingAstronaut1.png","standingAstronaut2.png",
    "standingAstronaut3.png","standingAstronaut4.png","standingAstronaut5.png");
    
    runningAstronaut = loadAnimation("runingAstronaut1.png","runingAstronaut2.png",
    "runingAstronaut3.png","runingAstronaut4.png","runingAstronaut5.png","runingAstronaut6.png",
    "runingAstronaut7.png","runingAstronaut8.png","runingAstronaut9.png","runingAstronaut10.png",
    "runingAstronaut11.png","runingAstronaut12.png");

    jumpingAstronaut = loadAnimation("jumpingAstronaut1.png","jumpingAstronaut2.png",
    "jumpingAstronaut3.png","jumpingAstronaut4.png","jumpingAstronaut5.png","jumpingAstronaut6.png")

    star = loadAnimation("star1.png","star2.png","star3.png","star4.png","star5.png","star6.png")
    background =loadImage("background2.jpg")
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    }

  function draw() {
    background(backgroundImage);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }












