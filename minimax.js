// function nextTurn(){
//     let available = [];
//     for(let i=0;i<3;i++){
//       for(let j=0;j<3;j++){
//         if(board[i][j]==''){
//            available.push({i,j});
//         }
//       }
//     }
//     let move = random(available);
//     board[move.i][move.j] = ai;
//     currentPlayer = human;
// }

function aiTurn(){
    let bestScore= -Infinity;
    let bestMove;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==''){
                board[i][j]=ai;
                let score = minimax(board,0,false);
                board[i][j]='';

                if(score > bestScore){
                    bestScore = score;
                    bestMove ={i,j};
                }
            }
        }
    }
    board[bestMove.i][bestMove.j] = ai;
    currentPlayer = human;
}

let allResults ={
    X:1,
    O:-1,
    tie:0
}
function minimax(board,depth,isMaximizing){
    let result = checkWinner();
    if(result){
        return allResults[result];
    }

    if(isMaximizing){
        let bestScore= -Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j]==''){
                    board[i][j]=ai;
                    let score = minimax(board,depth+1,false);
                    board[i][j]='';
                    bestScore = max(score,bestScore);
                }
            }
        }
        return bestScore;
    }
    else{
        let bestScore= Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j]==''){
                    board[i][j]=human;
                    let score = minimax(board,depth+1,true);
                    board[i][j]='';
                    bestScore = min(score,bestScore);
                }
            }
        }
        return bestScore;
    }
}

