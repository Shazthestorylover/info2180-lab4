document.addEventListener("DOMContentLoaded", function(){

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


    box_1.className = "square";
    box_2.className = "square";
    box_3.className = "square";
    box_4.className = "square";
    box_5.className = "square";
    box_6.className = "square";
    box_7.className = "square";
    box_8.className = "square";
    box_9.className = "square";
    
    //  Commit the above code first then cut out code below 
    // before committing eveything else to maintain order.
    var count = 0;
    var index = 0;

    box_1.addEventListener("click", function()
        {
            if (count%2 == 0)
            {
                box_1.className = "square X";
                box_1.innerHTML = "X";
                count++;
            }
            else
            {
                box_1.className = "square O";
                box_1.innerHTML = "O";
                count++;
            }
        });


    /* for (index=0; index<9; index++)
    {
        if (count%2 == 0)
        {
            board_ID.children[index].addEventListener("click", function()
            {
                board_ID.children[index].className = "square X";
                board_ID.children[index].innerHTML = "X";
                count++;
            });                         
        } 
        else
        {
            board_ID.children[index].addEventListener("click", function()
            {
                board_ID.children[index].className = "square O";
                board_ID.children[index].innerHTML = "O";
                count++;
            });            
        }
    } */

    //box_1.addEventListener("click", function(){}
});
    