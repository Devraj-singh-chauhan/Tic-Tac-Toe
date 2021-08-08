// let board= [
//     ['','',''],
//     ['','',''],
//     ['','','']
//   ]
  
//   let players =['X','O'];
  
//   let currentPlayer;
//   let available=[];
  
//   function setup() {
//     createCanvas(400, 400);
//     frameRate(2);
    
//     // if(random(1)<0.5){
//     //   currentPlayer= players[0];
//     // }
//     // else{
//     //   currntPlayer= players[1];
//     // }
    
//     currentPlayer=floor(random(players.length));
    
//     for(let i=0;i<3;i++){
//       for(let j=0;j<3;j++){
//         available.push([i,j]);
//       }
//     }
//   }
  
//   function nextTurn() {
//     let index =floor(random(available.length));
//     let spot =available.splice(index,1)[0];
//     let i=spot[0];
//     let j=spot[1];
//     board[i][j]= players[currentPlayer];
//     currentPlayer= (currentPlayer+1)%2;
//   }
  
//   function checkEquality(a,b,c){
//     if(a==b && b==c && a!=''){
//       return 1;
//     }
//     else return null;
//   }
  
//   function checkWinner(){
//     let winner =null;
    
//     //horizontal
//     for(let i=0;i<3;i++){
//       if(checkEquality(board[i][0],board[i][1],board[i][2])){
//         winner=board[i][0];
//       }
//     }
    
//     //vertical
//     for(let j=0;j<3;j++){
//       if(checkEquality(board[0][j],board[1][j],board[2][j])){
//         winner=board[0][j];
//       }
//     }
    
//     //diagonal
//     if(checkEquality(board[0][0],board[1][1],board[2][2])){
//       winner= board[0][0];
//     }
    
//     if(checkEquality(board[0][2],board[1][1],board[2][0])){
//       winner=board[0][2];
//     }
    
    
//     if(winner==null && available.length==0){
//       return 'tie';
//     } else{
//       return winner;
//     }
//   }
  
//   function draw() {
//     background(220);
//     strokeWeight(3);
    
//     let w=width/3;
//     let h=height/3;
    
//     line(0,h*1,width,h*1);
//     line(0,h*2,width,h*2);
//     line(w*1,0,w*1,height);
//     line(w*2,0,w*2,height);
    
//     for(let i=0;i<3;i++){
//       for(let j=0;j<3;j++){
//         let x= w *j +w/2;
//         let y= h *i +h/2;
//         let rd= w/4;
        
//         let spot = board [i][j];
  
//         if(spot==players[1]){
//           noFill();
//           ellipse(x,y,w/2);
//         }
//         else if(spot==players[0]){
          
//           line(x-rd,y+rd,x+rd,y-rd);
//           line(x+rd,y+rd,x-rd,y-rd);
//         }
//       }
//     }
  
//     let result = checkWinner();
//     if(result !=null){
//       noLoop();
//       createP(result).style('color','#0000FF').style('font-size','100px').style('margin','0 auto');
//     } else{
//       nextTurn();
//     }
    
//   }


let board= [
  ['','',''],
  ['','',''],
  ['','','']
]

let w;
let h;
let ai = 'X';
let human ='O';
let currentPlayer = human;

function setup() {
  createCanvas(500, 500);
  w=width/3;
  h=height/3;
  // aiTurn();  
}
function mousePressed(){
  if(currentPlayer == human){
    let i =floor(mouseY/h);
    let j =floor(mouseX/w);
    
    if(board[i][j]==''){
      board[i][j]=human;
      currentPlayer = ai;
      if(!checkWinner()) aiTurn();
    }
  }
}

function checkEquality(a,b,c){
  if(a==b && b==c && a!=''){
    return 1;
  }
  else return null;
}

function checkWinner(){
  let winner =null;
  
  //horizontal
  for(let i=0;i<3;i++){
    if(checkEquality(board[i][0],board[i][1],board[i][2])){
      winner=board[i][0];
    }
  }
  
  //vertical
  for(let j=0;j<3;j++){
    if(checkEquality(board[0][j],board[1][j],board[2][j])){
      winner=board[0][j];
    }
  }
  
  //diagonal
  if(checkEquality(board[0][0],board[1][1],board[2][2])){
    winner= board[0][0];
  }
  
  if(checkEquality(board[0][2],board[1][1],board[2][0])){
    winner=board[0][2];
  }
  
  let openSpots =  0;
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(board[i][j]==''){
         openSpots++;
         }
    }
  }
  
  if(winner==null && openSpots==0){
    return 'tie';
  } else{
    return winner;
  }
}

function draw() {
  background(100, 220, 200,0.9);
  strokeWeight(3);
  
  line(0,h*1,width,h*1);
  line(0,h*2,width,h*2);
  line(w*1,0,w*1,height);
  line(w*2,0,w*2,height);
  
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      let x= w *j +w/2;
      let y= h *i +h/2;
      let rd= w/4;
      
      let spot = board [i][j];

      if(spot==human){
        noFill();
        ellipse(x,y,w/2);
      }
      else if(spot==ai){
        
        line(x-rd,y+rd,x+rd,y-rd);
        line(x+rd,y+rd,x-rd,y-rd);
      }
    }
  }

  let result = checkWinner();
  if(result !=null){
    noLoop();
    let resultP = createP('');
    resultP.style('color','#FFFC00').style('font-size','38pt').style('margin-left','420px');
    
    if(result=='tie'){
      resultP.html('TIE!');
    } else{
      resultP.html(`${result} wins!`);
    }  
  } 
}