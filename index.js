//declaring constants
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥑", "🥧"];
const game = document.getElementById("gambling");
const button = document.getElementById("play");
const state = document.getElementById("state")
let first_emoji = "o";
let second_emoji = "o";
let third_emoji = "o";
let range = 0;


//declaring on click button
button.onclick = function(){
      //defininf first emoji
   range =  Math.floor(Math.random() * fruits.length);
   first_emoji = fruits[range];

   range =  Math.floor(Math.random() * fruits.length);
   second_emoji = fruits[range];

   range =  Math.floor(Math.random() * fruits.length);
   third_emoji  = fruits[range];

   game.textContent = first_emoji + second_emoji + third_emoji;
   state.innerHTML = "You did not win😔😔"

   if( first_emoji == second_emoji && second_emoji == third_emoji ){
      state.innerHTML = "You won🎉🎉"
      }
 
   if(first_emoji == second_emoji && first_emoji != third_emoji || second_emoji == third_emoji && second_emoji != first_emoji || first_emoji == third_emoji && first_emoji != second_emoji){
     state.innerHTML = "We got so far🥲🥲"
   }
}