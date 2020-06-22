document.addEventListener("DOMContentLoaded", function() {
    
    var xArray = [];
    var oArray = [];
    var players = []
    
    players[0] = "Player1";
    players[1] = "Player2"; 
    var gameOver = false;
    var markers = ["X", "O"]
    var playersTurn = 0
    var winCombo = [
        ["square1", "square2", "square3"],
        ["square4", "square5", "square6"],
        ["square7", "square8", "square9"],
        ["square1", "square4", "square7"],
        ["square2", "square5", "square8"],
        ["square3", "square6", "square9"],
        ["square1", "square5", "square9"],
        ["square3", "square5", "square7"],
    ];

    function findWinner() {
        for (var i = 0; i < winCombo.length; i++) {
            //iterate to the nested array and compare both players array and if they match all 3 values
            //keep track of the count in this block 
            let XmatchCount = 0;
            let OmatchCount = 0;
            for(var j = 0; j < winCombo[i].length; j++) {
                if(playersTurn == 0 && xArray.includes(winCombo[i][j])) {
                    // console.log(i, j)
                    XmatchCount = XmatchCount + 1
                }
                if(playersTurn == 1 && oArray.includes(winCombo[i][j])) {
                    OmatchCount = OmatchCount + 1
                }
                if(XmatchCount == 3) {
                    document.getElementById("h2").innerText = players[0] + " Wins"
                    gameOver = true
                }  
                if(OmatchCount == 3) {
                    document.getElementById("h2").innerText = players[1] + " Wins"
                    gameOver = true
                }
                if((xArray.length + oArray.length) >= 9) {
                    gameOver = true;
                    document.getElementById("h2").innerText = "DRAW"
                    
                }

                //check if the xarray & oarray dot includes the current value 
                //if there is a match we increment match by 1 
            }
        } 
    }  
    
     var boxes = document.getElementsByClassName("square")
        for(var i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("click", clickBox)
            // console.log(boxes[i])
    }       
    
    function clickBox(e) {
        if(!gameOver) {
            // console.log(e.target)
            e.target.innerText = markers[playersTurn] 
            e.target.removeEventListener("click", clickBox)
            if(playersTurn == 0) {
                xArray.push(e.target.id)
                console.log(xArray)
            }
            else {
                oArray.push(e.target.id)
            }
            console.log(xArray, oArray)
            findWinner();
            if(!gameOver) {
                toggle()
            }
        }
        //grab the id of that box and store it to the players array
        //check if theres a winner
        //change whats happening in the box
        }

    function toggle() {
        if (playersTurn === 0) playersTurn = 1
        else playersTurn = 0
        document.getElementById("h2").innerText = players[playersTurn] + "'s Turn "
    }
     
})
