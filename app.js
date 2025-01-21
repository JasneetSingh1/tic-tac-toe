 
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
            alert("Invalid Play");
        }
    }
    

    return{
        board,
        printBoard,
        play
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
        board.play(getActivePlayer(), row, column)

        switchPlayerTurn();
        printNewRound();
      }

      printNewRound();

      return{
        playRound
      }

};

// const game = gameController()
// game.playRound(0,1)
// game.playRound(0,1)


// Need to add logic so when player selects invalid cell the game doesnt switch player turn