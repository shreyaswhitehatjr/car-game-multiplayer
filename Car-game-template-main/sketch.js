var database;
var form,game,player;
var state,count;
var playerIndex;
var allplayers;
var car1,car2,car3,car4,cars;
function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth,displayHeight);
  
  game= new Game();
  player=new Player();
  form=new Form();
  game.getstate();
  game.start();
 

}

function draw(){
  background("white");
  
  if(count===4)
    {
      game.updateState(1)
      game.play()
    }
 
  
   drawSprites();
  
}

