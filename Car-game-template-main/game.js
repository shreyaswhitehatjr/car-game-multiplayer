class Game
{
    constructor()
    {

    }
    getstate()
    {
      var gameStateref=database.ref('gameState') 
        gameStateref.on("value",function(data){state=data.val()})   
    }
    
    updateState(state)
    {
      database.ref('/').update({gameState:state})   
 
    }
    
    start()
    {
      player.getcount();
      form.display();
      car1=createSprite(300,300)
      car2=createSprite(500,300)
      car3=createSprite(700,300)
      car4=createSprite(900,300)
      cars=[car1,car2,car3,car4]         

    }

    play()
    {
     form.hide();
     text("game started",350,20)    
     player.getPlayerInfo();
     var x=300,y=100;
     var index=0; 
      
     for(var plr in allplayers)
     {
     //text(allplayers[plr].name+":"+allplayers[plr].distance,x,y);
    // y=y+50;
      index=index+1
      x=x+200
      y=displayHeight-allplayers[plr].distance
      cars[index-1].x=x
      cars[index-1].y=y
      if(index===player.index)
      {
        cars[index-1].shapeColor="red"
        camera.position.x=cars[index-1].x
        camera.position.y=cars[index-1].y
      }
     

     if(keyIsDown(UP_ARROW))
     {
       player.distance= player.distance+50
       player.update();
     }
     }
    }

    end()
    {

    }
}