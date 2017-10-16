var x_o = false;
var win = false;
var step = 0;




function mark(block){
  if(document.getElementById(block).innerHTML.length == 0){
    if(x_o == false){
      document.getElementById(block).innerHTML = "X";
    } else{
      document.getElementById(block).innerHTML = "O";
    }
    x_o =! x_o;

    checkWin(document.getElementById(block).innerHTML);
  }
}

function checkWin(element){

  step++

  if(step == 9 && win != false){
    win = true;
    element = "FriendShip";
  }

  var t1 = document.getElementById('t1').innerHTML;
  var t2 = document.getElementById('t2').innerHTML;
  var t3 = document.getElementById('t3').innerHTML;

  var m1 = document.getElementById('m1').innerHTML;
  var m2 = document.getElementById('m2').innerHTML;
  var m3 = document.getElementById('m3').innerHTML;

  var b1 = document.getElementById('b1').innerHTML;
  var b2 = document.getElementById('b2').innerHTML;
  var b3 = document.getElementById('b3').innerHTML;

  if(t1 != '' && t1 == t2 && t2 == t3){
    win = true;
  }
  if(m1 != '' && m1 == m2 && m2 == m3){
    win = true;
  }
  if(b1 != '' && b1 == b2 && b2 == b3){
    win = true;
  }
  if(t1 != '' && t1 == m1 && m1 == b1){
    win = true;
  }
  if(t2 != '' && t2 == m2 && m2 == b2){
    win = true;
  }
  if(t3 != '' && t3 == m3 && m3 == b3){
    win = true;
  }
  if(t1 != '' && t1 == m2 && m2 == b3){
    win = true;
  }
  if(t3 != '' && t3 == m2 && m2 == b1){
    win = true;
  }
  if(win){
    document.getElementById('gameHover').style.display = 'block';
    document.getElementById('whoWin').innerHTML = element;
  }
}

function restartGame(){
  location.reload();
}