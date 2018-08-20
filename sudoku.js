
var grid = [
            [1,0,5,8,0,2,0,0,0],
            [0,9,0,0,7,6,4,0,5],
            [2,0,0,4,0,0,8,1,9],
            [0,1,9,0,0,7,3,0,6],
            [7,6,2,0,8,3,0,9,0],
            [0,0,0,0,6,1,0,5,0],
            [0,0,7,6,0,0,0,3,0],
            [4,3,0,0,2,0,5,0,1],
            [6,0,0,3,0,8,9,0,0]
    ];

// recursive algo
function solveSudoku(grid, row, col) {
    var cell = findUnassignedLocation(grid, row, col);
    row = cell[0];
    col = cell[1];

    //  if no empty cell found , whole board is solved
    if (row == -1) {
        console.log("solved");
        return true;
    }

    for (var num = 1; num <= 9; num++) {

        if ( isSafe(grid, row, col, num) ) {   
            grid[row][col] = num;
            console.log(" printing assigned number "+ grid[row][col]);

            if ( solveSudoku(grid, row, col) ) {                
                console.log(" grid row: "+ row+ " grid column: "+ col);
                return true;
            }

        // mark cell as empty (with 0)    
            grid[row][col] = 0;
        }
    }

    // back tracking
    console.log("Backtracking ");
    return false;
}
function prettyBoard(grid){
    var s="";
    for(var i=0; i<9;i++){
        for(var j=0; j<9;j++){
            s += grid[i][j];

        }
        s+="\n";
    }
    console.log(s);
}

function findUnassignedLocation(grid, row, col) {
    for (; row < 9 ; col = 0, row++)
        for (; col < 9 ; col++)
            if (grid[row][col] == 0)
                return [row, col];
    return [-1, -1];
}

function isSafe(grid, row, col, num) {
    return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
}

function isRowOk(grid, row, num) {
    for (var col = 0; col < 9; col++)
        if (grid[row][col] == num)
            return false;

    return true;
}
function isColOk(grid, col, num) {
    for (var row = 0; row < 9; row++)
    if (grid[row][col] == num)
        return false;

    return true;    
}
function isBoxOk(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (grid[row + r][col + c] == num)
                return false;

    return true;
}

function printGrid(grid) {
    var res = "";

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            res += grid[i][j];
        }
        res += "\n";
    }
    console.log(res);
}

function start(){
    printGrid(grid);
    if(solveSudoku(grid,0,0)){
        prettyBoard(grid);
        //console.log("Solution Found");
       
    }
    else{
        console.log("No solution exists");
    }

}
start();