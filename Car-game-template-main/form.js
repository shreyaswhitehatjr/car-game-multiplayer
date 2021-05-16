class Form
{
    constructor()
    {
        this.input=createInput("");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
        this.title=createElement("h1");
        this.title1=createElement("h2");
    }

    display()
    {
        this.title.position(500,10);
        this.title.html("CAR RACING GAME");
        this.input.position(350,250);
        this.button.position(350,300);
        this.title1.position(350,200);
        this.title1.html("enter your name")

        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            this.greeting.position(350,250);
            this.greeting.html("Welcome "+this.input.value());
            count=count+1;
            player.updatecount();
            player.name=this.input.value();
            player.index=count;
            player.update();
        });
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title1.hide();
    }

    
}