let first_card = Math.floor(Math.random() * 10) + 2;
let secound_card = Math.floor(Math.random() * 10) + 2;
let sum = first_card+secound_card;
let hasblackjack=false;
let isalive=true;
let message="";
let cards=[first_card,secound_card];
let cardsEl=document.getElementById("cards-el");
let sumEl=document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
function startgame(){
    rendergame();}
    function rendergame(){
        cardsEl.textContent = "";
    cardsEl.textContent="Cards: ";
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent=sum;

    if (sum<=20){
        message="Do you want to draw a new card?";
    }
    else if (sum===21){
        message="Wohoo! You've got Blackjack!";
        hasblackjack=true;
    }
    else {
        message="You're out of the game!";
        isalive=false;
    }
    messageEl.textContent = message;
}
    function newcard(){
        if (isalive === true && hasblackjack === false){
        let card = Math.floor(Math.random() * 10) + 2;
        sum+=card;
        cards.push(card);
        rendergame();
        }
        else{
            messageEl.textContent="the easiest money i will ever make! ";
        }
    }
    
