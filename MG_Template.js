const game = document.querySelector('#cardgame');
const test = document.querySelector('#test')




//Form variables
const frm = document.querySelector('form');
const row = document.querySelector('#row');
const col = document.querySelector('#col');
//Form Event Listner
frm.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(document.querySelector('tbody').childElementCount);
  // if(document.querySelector('tbody').childElementCount === 0){
  //   addRow(row.value,col.value);
  // } else {
  //   document.querySelector('tbody').remove();
  //   const nwB = document.createElement('tbody');
  //   tbl.append(nwB);
  // }
})



game.addEventListener('click',function(event){
  console.log(event)
  //SIngle img event
  // if(event.target.tagName === "IMG"){
  //   const img = event.target;
  //   if(!img.classList.contains('forward')){
  //     img.classList.add('forward');
  //     // setTimeout(function(){img.classList.remove('forward')},1000)
  //     setTimeout(function(){
  //       img.classList.add('backward');
  //     },3000);
  //     setTimeout(function(){
  //       console.log(img.classList);
  //       img.classList.remove('forward','backward');
  //       console.log(img.classList);
  //     },5000)
  //   }
  // }
  //3D card image event
  if(event.target.tagName === 'IMG'){
    // const front = event.target;
    // const back = event.target.nextElementSibling;
    const card = event.target.parentElement.parentElement;
    console.log(card);
    card.classList.toggle('flipped');
      // setTimeout(function(){img.classList.remove('forward')},1000)
      // setTimeout(function(){
      //   card.classList.add('backward');
      // },3000);
      setTimeout(function(){
        console.log(card.classList);
        card.classList.toggle('flipped');
        console.log(card.classList);
      },4000)
  }
  // if(event.target.tagName === 'IMG'){
  //   const front = event.target.parentElement;
  //   const back = event.target.praentElement;
  //   const card = event.target.parentElement;
  //   console.log(front);

  //   card.classList.toggle('flipped');
  //     // setTimeout(function(){img.classList.remove('forward')},1000)
  //     // setTimeout(function(){
  //     //   card.classList.add('backward');
  //     // },3000);
  //     setTimeout(function(){
  //       // console.log(card.classList);
  //       card.classList.toggle('flipped');
  //       // console.log(card.classList);
  //     },4000)
  // }




})

function createCard(){
  const card = document.createElement('div');
  card.classList.add('holder');
  const front = document.createElement('div');
  front.classList.add('face','front');
  const img = document.createElement('img');
  img.setAttribute('src',"https://images.unsplash.com/photo-1652641294941-2fb3bf657b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80");
  front.append(img);
  const back = document.createElement('div');
  back.classList.add('face','back');
  card.append(front,back);
  return card;
}