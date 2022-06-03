function chessBoard(){

    const totalCells = document.querySelectorAll('.board-cells').length;
    console.log("TOTAL CELLS= " + totalCells)
    
    for (let i=0; i<=totalCells; i++){

        let cells = document.getElementById('board-cells' + i)
        if (cells){
            if (i%2 === 0){
                cells.style.backgroundColor = "red" 
            }
    
            else {
                cells.style.backgroundColor = "green"
            }
        }
    };
};
chessBoard();