 
 function player(token){
    const value = token;
    return{value};
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

    console.log(board);
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

 gameboard();