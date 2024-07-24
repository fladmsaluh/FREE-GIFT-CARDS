/*var virefy = new Array();

function spin(){
  
  var arr = ["1","2","3","4","5","6","7","8","9"],
  rn = Math.floor(Math.random()*9),
  rn=rn+1;
  
 element = document.getElementById(rn);
 virefy.push(rn);
 



//console.log(virefy);
 //كتأكد واش العنصر ديجا ولات عدو باك كروند حمرة ولا باقي 
 
 for(var n =0;n >virefy.length;n++){
   if (rn === virefy[n]) {
   spin();  
   } else {
    element.style.background = "red";
   
   }
   
 }
 
 
  
 
}

function go(){
  
  for(var i = 1; i < 6; i++){
    
   spin();





  }
  
  
  
  
}*/

//boutab salah

var title = document.getElementById('title'),
 desc = document.getElementById('p'),
 base1 = document.getElementById('BASE1'),
 btn = document.getElementById('bttn'),
 base2 = document.getElementById('base2'),
 imgoff= document.getElementById('offimg');
 var
 code1= document.getElementById('code1'),
code2= document.getElementById('code2'),
code3= document.getElementById('code3'),
code4= document.getElementById('code4');
 
 var 
 wrn = document.getElementById('wrn'),
 prg= document.getElementById('prg'),
 captcha= document.getElementById('captcha');
 captcha.style.opacity='0';
function go(srcc){
  
  console.log(srcc);
  
  //Gone base 1 
base1.classList.remove('visible');
  base1.classList.add('gone');
  
  //visible btn and base 2
  btn.classList.add('visiblebtn');
  btn.classList.remove('gone');
base2.classList.add('visible');
  base2.classList.remove('gone');
  
  imgoff.classList.add('tosmall');
  imgoff.src = srcc;
  
  title.classList.add('gone');
  
  desc.classList.add('gone');
  desc.classList.remove('visible');
  title.classList.add('p-2');
  
  
  
  
  
  
}
function visible(){
  base1.classList.remove('gone');
  base1.classList.add('visible');
btn.classList.remove('visiblebtn');
  btn.classList.add('gone');
base2.classList.remove('visible');
  base2.classList.add('gone');
  
  title.innerHTML = "FREE GIFT CARD CODE";
  desc.classList.add('visible');
  desc.classList.remove('gone');
  
  imgoff.classList.remove('tosmall');
  imgoff.src = "spin.png";
  
  code1.innerHTML='####';
  code2.innerHTML='####';
  code3.innerHTML='####';
  code4.innerHTML='####';
  
  code1.style.background='transparent';
  code2.style.background='transparent';
  code3.style.background='transparent';
  code4.style.background='transparent';
  
  //show prg and gone wrn
  
  
  
  captcha.style.opacity='0';
  captcha.style.height='0px';
  wrn.classList.add('gone');
  prg.classList.remove('gone');
  
 
}


var 
baseall = document.getElementById("baseall"),
drawer = document.getElementById("drawer");
function showdrawer(){
  
  //show drawer
  drawer.classList.remove('gone');
  drawer.classList.add('visible');
  //gone baseall
  baseall.classList.add('gone');
  
  
  
  
}
function hidedrawer(){
  
  //show baseall
  baseall.classList.remove('gone');
  baseall.classList.add('visible');
  
  //gone drawer
  drawer.classList.remove('visible');
  drawer.classList.add('gone');
  
  
  
  //gone warning and show prg
  
  
  
}





function codes(){
  
for(var n = 1;n <5 ; n++){
  
 
 
 if( n === 1){
   setTimeout(function(){
     code1.innerHTML= randomhorof()+numberrandom() +numberrandom()+ randomhorof();
     code1.style.background='seagreen';
     
   },1000);
   
 }
 if(n===2){
   setTimeout(function(){
     code2.innerHTML= numberrandom()+randomhorof() +randomhorof()+ numberrandom();
code2.style.background='seagreen';     
     
   },2000);
   
 }
if(n ===3){
  
  setTimeout(function() {
    code3.innerHTML = numberrandom()+randomhorof() +numberrandom()+ randomhorof();
  
  code3.style.background='seagreen';
  }, 3000);
  
}
if(n ===4){
  setTimeout(function() {
    
  code4.style.background='red';
  
  
  
  //gone prg and show wrn
  wrn.classList.remove('gone');
  prg.classList.add('gone'),
  setInterval(function(){
    captcha.style.opacity='1';
    captcha.style.height='auto';
  },500);
  
  dd = document.getElementById("base2").addEventListener("onclick","og_load()");
  
  
  }, 4000);
  
  
}


  
}
  
}










function randomhorof(){
  
  var arr =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var hr = Math.floor(Math.random()*arr.length);
  var R = arr [hr];
  
  return R;
  
  
}
function numberrandom(){
  
  var nmrr = Math.floor(Math.random()*10);
  return nmrr;
  
  
  
  
}