document.addEventListener("DOMContentLoaded", function() {

    const game_ID = document.getElementById("game");
    const status_ID = document.getElementById("status");
    const board_ID = document.getElementById("board");
    const controls_Class = document.querySelector("controls");
    const btn_Class = document.querySelector("btn");

    // Setting up grid of boxes
    let box_1 = board_ID.children[0];
    let box_2 = board_ID.children[1];
    let box_3 = board_ID.children[2];
    let box_4 = board_ID.children[3];
    let box_5 = board_ID.children[4];
    let box_6 = board_ID.children[5];
    let box_7 = board_ID.children[6];
    let box_8 = board_ID.children[7];
    let box_9 = board_ID.children[8];

    // Setting the class of each box in the grid
    box_1.className = "square";
    box_2.className = "square";
    box_3.className = "square";
    box_4.className = "square";
    box_5.className = "square";
    box_6.className = "square";
    box_7.className = "square";
    box_8.className = "square";
    box_9.className = "square";

    var mainBoard;
    var count = 0; // Meant to keep tracks of the number of clicks.
    var index = 0; // Meant to traverse the board.

    var players = [];
    var markers = ["X", "O"];
    players[0] = "player-0";
    players[1] = "player-1";
    var whoseTurn = 0;


    const winCombinations = [
        // Normal winning combinations --> From left to right (horizontally) on board.
        [box_1, box_2, box_3],
        [box_4, box_5, box_6],
        [box_7, box_8, box_9],

        // Other winning combinations --> Vertically (from top to bottom)
        [box_1, box_4, box_7],
        [box_2, box_5, box_8],
        [box_3, box_6, box_9],

        // Unique winning combinations --> Diagonally across the board
        [box_3, box_5, box_7],
        [box_1, box_5, box_9],

    ];




    //-----------------------Defining functions used to manpulate the game.----------------------------------------



    function togglePlayers() {
        if (whoseTurn == 0) {
            whoseTurn = 1;
        } else {
            whoseTurn = 0;
        }
    }


    function playGame() {
        for (index = 0; index < 9; index++) {
            if (count % 2 == 0 && players[0]) {
                board_ID.children[index].addEventListener("click", function() {
                    this.className = "square X";
                    this.innerHTML = "X";

                    console.log(count++, 'X');
                    togglePlayers();
                });
            } else {
                board_ID.children[index].addEventListener("click", function() {
                    this.className = "square O";
                    this.innerHTML = "O";

                    console.log(count++, 'O');
                    togglePlayers();
                });
            }
            //count++;

        }

        // Displaying modified style of box when players hover over them
        if (document.querySelector("div").className == "square") {
            document.getElementsByClassName("hover");
        }

    }

    playGame();






});