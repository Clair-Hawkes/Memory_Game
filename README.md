# Memory Game
### Introduction
Memory Game is a simple **beginner** project. Have fun and enjoy!  
I welcome any and all critique and thoughts.   
>Match like items by remembering their position. Match all like items to win!  

## Instructions
1. The game will start with a 2x2 grid of cards.  
   Either click "Start" or change the number of columns and then click start!
2. Click a card to flip!  
   Click a second card to flip!
3. If both cards match they will remain face up.  
   If both cards do not match they will flip back down.
4. Match cards until you win!
   To replay click reset, optionally change the # of columns, and click "Start".
## Features
* The game's current time in seconds, and # of moves is displayed in the top right.
  * 1 move = 1 card flip
* The user's highest score will be diosplayed  after a succsessful win in the top right.
  * Highest score is calculated by:
    * Matching a higher # of pairs always nets a higher top score.  
    * Then games are ranked by # of moves and finally time.  
    * The top score can be found per instance  
* A card flipping animation plays upon each card press
  * Cards cannot be spam clicked
* A variable game board can be generated from 2x2 up to 8x8
  * Cards will be shuffled randomly via the [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle) 
    * Picture is technically "Durstenfeld shuffle" based off the Fisher-Yates.
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Durstenfeld_shuffle.svg" style="width:400px">
## Files List
The files list contains 3 full sets. Each of which contains an html, css, and js file.
1. Final_MG.ext files are the final draft.
2. Game_Board.ext files are a second draft attempt to incorporate a tabular format.
3. MG_Template.ext files are a first draft attempt to complete animation 
## Future Ideas
While this project is complete in current form; future inclusions could be:
* _Variable symbols to match_
* _User supplied images_
* _Background music_
## Shoutout!
Thank you to Desandro for the wonderful [card flipping animation tutorial](https://3dtransforms.desandro.com/card-flip).  
>This project was smoother sailing thanks to you.
