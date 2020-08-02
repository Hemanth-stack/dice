var d1 = Math.floor(Math.random()*6)+1
var d2 = Math.floor(Math.random()*6)+1
function image(d,val){
    if (val == 6){
        document.querySelector(d).style.backgroundImage = "url('images/dice6.png')"
    } 
    if (val == 5){
        document.querySelector(d).style.backgroundImage = "url('images/dice5.png')"
    }
     if (val == 4){
        document.querySelector(d).style.backgroundImage = "url('images/dice4.png')"
    }
     if (val == 3){
        document.querySelector(d).style.backgroundImage = "url('images/dice3.png')"
    }
     if (val == 2){
        document.querySelector(d).style.backgroundImage = "url('images/dice2.png')"
    }
     if (val == 1){
        document.querySelector(d).style.backgroundImage = "url('images/dice1.png')"
    }
}
function verify(d1,d2){
    if (d1 == d2){
        document.querySelector(".head").textContent = "🎉The match is draw🎉"
        return
    }
    if(d2 < d1){
        document.querySelector(".head").textContent = "🎉Player1 is Winner🎉"
    }
    else{
        document.querySelector(".head").textContent = "🎉Player2 is Winner🎉"
    }
}
image(".dice1",d1)
image(".dice2",d2)
verify(d1,d2)