class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

    }

    updateState(){
        database.ref('/').update({
            gameState: state
          });

    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            contestant.getCount();
            question = new Question();
            question.display();
          }

    }

    play(){
        question.hide();
    Contestant.getPlayerInfo();
    background("yellow");
    textSize(30);
    text("Result of the Quiz",350,50);
    if(allPlayers!==undefined){
        var displayAnswers=230;
        fill("red");
        textSize(20);
        text("Contestants who answered correctly are highlighted in green colour",130,230);
    
      for(var plr in allPlayers){
          var correctAnswer="";
          if(correctAnswer===allPlayers[plr].answer){
              fill("green");
          } else{
              fill("red");
          }
          displayAnswers+=30;
          textSize(20);
          text(allPlayers[plr].name+": "+allPlayers[plr].answer,250,displayAnswers);


      }
    }
    drawSprites();
        
    }



    
}