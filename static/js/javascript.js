//challenge-1
function ageindays(){
var birthyear=prompt('whats ur birthyear');
var yourage=(2021-birthyear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('you are '+yourage+' days old');
h1.setAttribute('id','ageindays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageindays').remove();
}

//challenge 2
function generateCat(){
     var image=document.createElement('img');
     var div=document.getElementById('flex-cat-gen');
     image.src='https://media.tenor.com/images/a08799cd1db5ac67856124035b3e8f72/tenor.gif';
     div.appendChild(image);


}

//challenge 3
function rpsGame(yourChoice){
    console.log(yourChoice);
  // console.log(yourChoice.src);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice= numberToChoice(randTorpsint());
    //alert(botChoice);
    console.log('computer choice:',botChoice);

    results=decideWinner(humanChoice,botChoice);
    console.log(results);

    message= finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);


}
function randTorpsint(){
  return Math.floor(Math.random()*3);
}
function numberToChoice(number){
  return ['rock','paper','scissor'][number]
}
function decideWinner(yourChoice,computurChoice){
  var rpsdatabase={
    'rock':{'scissor':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'scissor':{'paper':1,'scissor':0.5,'rock':0}
  }
var yourscore=rpsdatabase[yourChoice][computurChoice];
var computerscore=rpsdatabase[computurChoice][yourChoice];
return [yourscore,computerscore];

}
function finalMessage([yourscore,computerscore]){
  if (yourscore===0){
    return {'message':'You lost!','color':'red'};
  }else if (yourscore===0.5){
    return {'message':'You tied!','color':'yellow'};
  }else{
    return {'message':'You won!','color':'green'};
  }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
  var imagesdatabase={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src
  }
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();
 
  var humanDiv=document.createElement('div');
  var botDiv=document.createElement('div');
  var messageDiv=document.createElement('div');

  humanDiv.innerHTML="<img src='"+ imagesdatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
  messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";font-size: 60px;padding:30px;'>"+finalMessage['message']+"</h1>"
  botDiv.innerHTML="<img src='"+ imagesdatabase[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"


  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
  
}
//challenge-4
var all_buttons= document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons=[]
for (let i=0 ; i < (all_buttons.length); i++){
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
//copyAllButtons[1].classList.remove('btn-danger');
//copyAllButtons[1].classList.add('btn-warning');

function buttonColorChange(buttonThingy){
  //console.log(buttonThingy.value);
  if (buttonThingy.value === 'red'){
    buttonRed();
  }else if (buttonThingy.value === 'green'){
    buttonGreen();

  }else if (buttonThingy.value === 'reset'){
    buttonReset();

  }else if(buttonThingy.value ==='random'){
    randomColors();
  }
  }

function buttonRed(){
  for (let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}
function buttonGreen(){
  for (let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}
function buttonReset(){
  for (let i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors(){
    var choices=['btn-primary','btn-danger','btn-success','btn-warning'];
    for (let i=0;i<all_buttons.length;i++){
      var randomNumber=Math.floor(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber])
}}