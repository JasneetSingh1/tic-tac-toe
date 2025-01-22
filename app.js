 
 function player(token){
    const name = token.toUpperCase();
    const value = token;
    return{name, value};
 }

 function gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(cell());
        }
    }
   
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    };

    const play = (player, row, column) =>{
        
        if(board[row][column].getValue() != "x" && board[row][column].getValue() != "o"){
            board[row][column].addValue(player.value);
        }else{
            throw new Error("Invalid Input");
        }
    }

const parseBoard = () => {
    // COLUMNS
    if(board[0][0].getValue() == "x" && board[1][0].getValue() == "x" && board[2][0].getValue() == "x" ){
        console.log("X Wins");
        return true;
    }
    if(board[0][1].getValue() == "x" && board[1][1].getValue() == "x" && board[2][1].getValue() == "x" ){
        console.log("X Wins");
        return true;
    }
    if(board[0][2].getValue() == "x" && board[1][2].getValue() == "x" && board[2][2].getValue() == "x" ){
        console.log("X Wins");
        return true;
    }

    if(board[0][0].getValue() == "o" && board[1][0].getValue() == "o" && board[2][0].getValue() == "o" ){
        console.log("O Wins");
        return true;
    }
    if(board[0][1].getValue() == "o" && board[1][1].getValue() == "o" && board[2][1].getValue() == "o" ){
        console.log("O Wins");
        return true;
    }
    if(board[0][2].getValue() == "o" && board[1][2].getValue() == "o" && board[2][2].getValue() == "o" ){
        console.log("O Wins");
        return true;
    }

    // ROWS

    if(board[0][0].getValue() == "x" && board[0][1].getValue() == "x" && board[0][2].getValue() == "x" ){
        console.log("X Wins");
        return true;
    }
    if(board[1][0].getValue() == "x" && board[1][1].getValue() == "x" && board[1][2].getValue() == "x" ){
        console.log("X Wins");
        return true;
    }
    if(board[2][0].getValue() == "x" && board[2][1].getValue() == "x" && board[2][2].getValue() == "x" ){
        console.log("X Wins");
        return true;
    }

    if(board[0][0].getValue() == "o" && board[0][1].getValue() == "o" && board[0][2].getValue() == "o" ){
        console.log("O Wins");
        return true;
    }
    if(board[1][0].getValue() == "o" && board[1][1].getValue() == "o" && board[1][2].getValue() == "o" ){
        console.log("O Wins");
        return true;
    }
    if(board[2][0].getValue() == "o" && board[2][1].getValue() == "o" && board[2][2].getValue() == "o" ){
        console.log("O Wins");
        return true;
    }

    // DIAGONAL

    if(board[0][0].getValue() == "x" && board[1][1].getValue() == "x" && board[2][2].getValue() == "x" ){
        console.log("X Wins");
        return true;
    }
    if(board[0][0].getValue() == "o" && board[1][1].getValue() == "o" && board[2][2].getValue() == "o" ){
        console.log("O Wins");
        return true;
    }

    // TIE

    const isFull = (cell) => cell.every((item) => item.getValue() == 'x' || item.getValue() == 'o') ;
    if(board.every(isFull)){
        console.log("It's a Tie");
        return true;
    }
    return false;
}
    

    return{
        board,
        printBoard,
        play,
        parseBoard
    }
 }


 function cell(){
    let value = "";
    
    const addValue = (player) => {
        value = player;
    }

    const getValue = () => value;

    return{
        addValue,
        getValue
    };

 }


const gameController = function(){
    const playerOne = player("x");
    const playerTwo = player("o");

    const board = gameboard();
    const players = [
        {
            name: playerOne.name,
            value: playerOne.value
        },
        {
            name: playerTwo.name,
            value: playerTwo.value
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1]: players[0];
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
      };
    
      const playRound = (row, column) => {
        try{  
            
            board.play(getActivePlayer(), row, column);

            if(board.parseBoard() == true){
                return console.log("END OF GAME"); 
            }

            switchPlayerTurn();
            printNewRound();
            
        } catch(e){
            console.error(e);
        }

      }
      printNewRound();

      return{
        playRound
      }

};



const game = gameController()

  



















