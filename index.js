let pointHome = 0
let pointGuest = 0

function add1PointHome(){
    pointHome+=1
    console.log("+1 point for home")
    document.getElementById("scoreHome").textContent = pointHome
}

function add2PointHome(){
    pointHome+=2
    console.log("+2 point for home")
    document.getElementById("scoreHome").textContent = pointHome
}

function add3PointHome(){
    pointHome+=3
    console.log("+3 point for home")
    document.getElementById("scoreHome").textContent = pointHome
}

// GUEST part
function add1PointGuest(){
    pointGuest+=1
    console.log("+1 point for Guest")
    document.getElementById("scoreGuest").textContent = pointGuest
}

function add2PointGuest(){
    pointGuest+=2
    console.log("+2 point for Guest")
    document.getElementById("scoreGuest").textContent = pointGuest
}

function add3PointGuest(){
    pointGuest+=3
    console.log("+3 point for Guest")
    document.getElementById("scoreGuest").textContent = pointGuest
}

//function reset
function reset(){
    pointHome = 0
    pointGuest = 0
    document.getElementById("scoreHome").textContent = 0
    document.getElementById("scoreGuest").textContent = 0
    console.log("Game reset")
}
