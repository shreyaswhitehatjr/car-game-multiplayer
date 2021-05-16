class Player
{
    constructor()
    {
       this.name="" ;
       this.index=0;
       this.distance=0;
    }

    getcount()
    {
        var playerCountref=database.ref('playerCount') 
        playerCountref.on("value",function(data){count=data.val()})

    }

    updatecount()
    {
       database.ref('/').update({playerCount:count})   

    }
    
    getPlayerInfo()
    {
      var playerinforef=database.ref('players') 
      playerinforef.on("value",function(data){allplayers=data.val()})
    }

    update()
    {
       playerIndex="players/player"+this.index;
       database.ref(playerIndex).set({name:this.name,distance:this.distance})
    }

}