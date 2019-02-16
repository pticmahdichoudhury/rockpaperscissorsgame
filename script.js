
function rng() {
    return Math.floor(Math.random()*3)
}

function checkRes{
    let result = document.getElementById("result")
    let uChoice = rng()
    
    if(uChoice == cChoice){
        result.innerHTML = "tied"
    }
    else if(uChoice == 0 && cChoice == 1) ||  (uChoice == 1 && cChoice == 2) || (uChoice == 2 && cChoice == 0){
        result.innerHTML = "CPU beat U"
    }
     else if(uChoice == 1 && cChoice == 0) ||  (uChoice == 2 && cChoice == 1) || (uChoice == 0 && cChoice == 2){
        result.innerHTML = "U beat CPU"
    }
}

