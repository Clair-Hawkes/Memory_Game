//Card backs img links:
const cardBacks = [
  'https://images.unsplash.com/photo-1652641294941-2fb3bf657b53?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985',
  'https://images.unsplash.com/photo-1652641511370-ecb8d426510e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
  'https://images.unsplash.com/photo-1652641742481-148ad3123bad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987'
]

// Variables
const game = document.querySelector('main');
//Game time variable
let gTime = undefined;
//Game time element
let gameTime = document.querySelector('#time');
//Score element
let score = document.querySelector('#score');
//Pairs to find. Assigned via addRow function.
let pairs = undefined;
//Winner message
const winner = document.getElementById('tagline');
//LeaderBoard
const foot = document.querySelector('tfoot');
let bestScore = document.getElementById('best');
let pairScore = document.getElementById('high');
let timeScore = document.getElementById('low');

//Timer & card pick variables
//Card pick 1 is assigned to:
let one = null;
//Card pick 2 is assigned to:
let two = null;
//timerTwo is assigned a setTimeout to flip both 1/2 card picks.
//timer One is no longer used; but can be activated.
//Such that if a second card is not picked within x seconds, card 1 flips back.
let timerOne = null;
let timerTwo = null;

//Form variables
const frm = document.querySelector('form');
const row = document.querySelector('#row');
const col = document.querySelector('#col');




//Form Event Listner
frm.addEventListener('submit',function(event){
  event.preventDefault();
  //Remove the Winner MEssage on Reset
  if(!winner.classList.contains('hidden')){
    winner.classList.add('hidden');
  }
  //If no cards are present in the board space then:
  if(document.querySelector('main').childElementCount === 0){
    // console.log(document.querySelector('main').childElementCount);
    addRow(row.value,col.value);
    document.querySelector('#time');
    gTime = setInterval(function(){
      gameTime.innerText = (Number(gameTime.innerText) + 1).toString();
    },1000)
  } else {
    //Reset board space:
    //1. Delete boardspace
    document.querySelector('main').remove();
    //2. Create and append a new board space
    const main = document.createElement('main');
    document.body.append(main);
    //3. Stop and clear timer interval
    clearInterval(gTime);
    gameTime.innerText = '0';
    //4. Reset move count
    score.innerText = '0';
  }
})



//Create board space and fill with cards
function addRow(rows,cols){
  //Fill an array with paired values
  //row * col = the # of cards total /2 = the number of pairs.
  pairs = rows*cols/2;
  //An array to hold pairs of #'s
  const arr = [];
  for(let i=1;i<=pairs;i++){
    //Push i twice to create a pair
    arr.push(i);
    arr.push(i);
  }
  //Create a copy to splice values off of
  const copy = arr.slice();

  //Set the cardBack;
  const picture = cardBacks[Math.floor(Math.random()*cardBacks.length)];

  //Outer loop creates the number of rows
  for(let i = 1;i<=rows;i++){
    const row = document.createElement('section');
    row.classList.add('row');
    //Inner loop creates the number of columns
    for(let i =1;i<=cols;i++){
      const card = createCard(picture);
      card.lastElementChild.innerText = copy.splice(Math.random()*copy.length,1);
      // td.append(card); Legacy comment. This is V3, and V2 was a table format.
      row.append(card);
    }
    //Resetting the board space deletes and re-appends the main element.
    //Otherwise a var would be used.
    document.querySelector('main').append(row);
  }
}

//Create a single new card
function createCard(bkg){
  const card = document.createElement('div');
  card.classList.add('holder');
  if(row.value == 2){
    card.classList.add('two');
  } else if (row.value == 4){
    card.classList.add('four');
  } else if (row.value == 6){
    card.classList.add('six');
  } else if (row.value == 8){
    card.classList.add('eight');
  }
  const front = document.createElement('div');
  front.classList.add('face','front');
  const img = document.createElement('img');
  img.setAttribute('src',bkg);
  front.append(img);
  const back = document.createElement('div');
  back.classList.add('face','back');
  card.append(front,back);
  return card;
}

//Update ScoreBoard
function updateScoreBoard(){
   if(bestScore.innerText === ''){
          bestScore.innerText = score.innerText;
          pairScore.innerText = pairs;
          timeScore.innerText = gameTime.innerText;
        } else if(pairs > pairScore.innerText){
          bestScore.innerText = score.innerText;
          pairScore.innerText = pairs;
          timeScore.innerText = gameTime.innerText;
        } else if (pairs == pairScore.innerText){
          // console.log('pairs Equal');
          if(score.innerText < bestScore.innerText){
            bestScore.innerText = score.innerText;
            pairScore.innerText = pairs;
            timeScore.innerText = gameTime.innerText;
          } else if (score.innerText == bestScore.innerText){
            // console.log('Score Equal');
            // console.log(Number(timeScore.innerText),' > ', Number(gameTime.innerText));
            // console.log(Number(timeScore.innerText) > Number(gameTime.innerText));
            if(Number(timeScore.innerText) > Number(gameTime.innerText)){
              bestScore.innerText = score.innerText;
              pairScore.innerText = pairs;
              timeScore.innerText = gameTime.innerText;
            }
          }
        }
}


//Flipping Cards Functionality
//Tutorial credit https://3dtransforms.desandro.com/card-flip
document.addEventListener('click',function(event){
  if(event.target.tagName === 'IMG'){
    if(one === null){
      one = event.target.parentElement.parentElement;
      one.classList.toggle('flipped');
      // timerOne = setTimeout(function(){
      //   one.classList.toggle('flipped');
      //   one = null;
      // },3000);
    } else if (one !== null && two === null){
      two = event.target.parentElement.parentElement;
      two.classList.toggle('flipped');
      timerTwo = setTimeout(function(){
        one.classList.toggle('flipped');
        two.classList.toggle('flipped');
        one = null;
        two = null;
      },2000);
      if(one.lastElementChild.innerText === two.lastElementChild.innerText){
        // console.log(one.lastElementChild.innerText,two.lastElementChild.innerText,'Winner!');
        clearInterval(timerOne);
        clearInterval(timerTwo);
        one.lastElementChild.classList.add('pair');
        two.lastElementChild.classList.add('pair');
        one = null;
        two = null;
      }
      score.innerText = (Number(score.innerText) + 1).toString();
      //If all pairs have been found
      //querySelectorAll for every element with the .pair class
      //if the length of this node(?) array === pairs:
      //1. Stop timer
      //Alert You win! Or maybe everything gets a glow effect...
      // console.log('pairs = ',pairs);
      // console.log('class list = ', document.querySelectorAll('.pair').length)
      if(document.querySelectorAll('.pair').length === pairs*2){
        clearInterval(gTime);
        winner.classList.remove('hidden');
        updateScoreBoard();
        foot.classList.remove('collapse');
        // console.log('pairScore = ',pairScore.innerText,'Pairs = ',pairs);
        // console.log('bestScore = ',bestScore.innerText,'Score = ',score.innerText);
        // console.log('timeScore = ',timeScore.innerText,'Time = ',gameTime.innerText);
      }
    }
    //Legacy animation auto flip back and forth;
    // const card = event.target.parentElement.parentElement;
    // card.classList.toggle('flipped');
    //   setTimeout(function(){
    //     console.log(card.classList);
    //     card.classList.toggle('flipped');
    //     console.log(card.classList);
    //   },5000)
  }
})