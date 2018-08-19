var initArr="1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

function solve(initArr){
    var row, column;
    if(!findUnassignedLoc){
        return true; // no more empty locations left in the grid
    }
    
}

function prettyBoard(board){

    //returns a well formatted string to display

}

// find position of unassigned cell 

function findUnassignedLoc(arr, row, col){
    for(var i= 1;i<=9; i++){
        for(var j=1; j<=9; j++){
            if(arr[i][j]=='-'){
                return true;
            }
        }
    }
    return false;
}

//check for a number in a row
function inRow(arr, col, num){
    for(var col=1; i<=9; i++){
        if(arr[row][col]== num){
            return true;
        }
    }
}

// check for a number in a column
function inColumn(arr, row, num){
    for(var row=1; i<=9; i++){
        if(arr[row][col]== num){
            return true;
        }
    }
}

//check for a number in the grid
function inGrid(arr, startRow,startCol, num){
    for(var i=1; i<=3; i++){
        for(var j=1; j<=3; j++){
            if(arr[i+startRow][j+startCol]== num){
                return true;
            }
        }
    }
}

