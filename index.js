var state = [1,0,1,1,0,0,0,1,1];
const winnerMsgDiv = document.getElementById('winnerMsgDiv');
var flag = true;
var xCount=0, oCount=0,drawCount=0;
print();

document.getElementById("mainDiv").addEventListener('click', (e)=>{
    var id = e.target.id;
    console.log(id);
    if(state[id] == 1 || state[id] == 0){
        if(flag){
            e.target.innerText = "X"; 
            state[id]="X";
            flag = !flag; 
        }
        else{
            e.target.innerText = "O"; 
            state[id]="O"; 
            flag = !flag;
        }
        checkWinner(!flag);
    }
    console.log(state);
});


function checkWinner(signState)
{
    if(state[0] == state[1] && state[0] == state[2]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
           //waiting time of 5 sec and then call reset game function
    }
    else if(state[3] == state[4] && state[3] == state[5]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
    }
    else if(state[6] == state[7] && state[6] == state[8]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
    }
    else if(state[0] == state[3] && state[0] == state[6]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
    }
    else if(state[1] == state[4] && state[1] == state[7]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
    }
    else if(state[2] == state[5] && state[2] == state[8]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
    }
    else if(state[0] == state[4] && state[0] == state[8]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
    }
    else if(state[2] == state[4] && state[2] == state[6]){
        if(signState)
        {             
            winnerMsgDiv.innerText = "X Winner !!";
            xCount++;
        }
        else
        {              
            winnerMsgDiv.innerText = "O Winner !!";
            oCount++;
        }
        print();
        setDisabled(setTimeout(resetGame,5000));
    }
    else{
        var count =0;
        for (x in state)
        {
            if(state[x] === 1 || state[x] === 0)
            {
                count+=1;
            }
        }
        if(count == 0)
            winnerMsgDiv.innerText = "Draw !!";
            drawCount++;
    }   
    
}


function setDisabled(){
    for (x in state)
    {
        if(state[x] === 1 || state[x] === 0)
        {
            state[x] = null;
        }
    }
}


function restartGame(){
    location.reload();
}

function resetGame(){
    state = [1,0,1,1,0,0,0,1,1];
    winnerMsgDiv.innerText = "";

    for (x=0; x<9 ; x++)
    {
        document.getElementById(x).innerHTML = "";
    }

}

function statusCount(xCount,oCount,drawCount){
    
    if(winnerMsgDiv.innerText == "X Winner !!"){
        
        xCount++;
    }
    else if(winnerMsgDiv.innerText == "O Winner !!"){
        oCount++;
    }
    else{
        drawCount++;
    }
}


function print(){
    document.getElementsByTagName("h2")[0].innerHTML=`X WIN : ${xCount}`;
    document.getElementsByTagName("h2")[1].innerHTML=`O WIN : ${oCount}`;
    // document.getElementsByTagName("h3")[0].innerHTML=`DRAW : ${drawCount}`;
}