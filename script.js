const Board = (function Board(){
    const size = 3;
    row = [];
    for (let i = 0; i < size; i++){
        row[i] = [];
        for (let j = 0; j < size; j++){
            row[i].push("_");
        }
    }
    visualize(row);
    return {row};
})()

function visualize(board){
    board.forEach(element => {
        console.log(element)
    });
}

function player(name){
    var points = [];
    const getPoints = () => points;
    return {name, getPoints}
}

const X = player("X");
const O = player("O");