alert("This is a match between you and Ananse. The first to cross 300 points wins. All the best.");

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');


let value1 = 0;
let value2 = 0;




 
// function addAnanse(){
//     let possible = [1,2,3,4,-5,0,6,7,8,9,10,0,-11,12,13,14,15,16,-17,18,0,19,20,21]
//     let random = Math.floor(Math.random() * possible.length)
//     let number = possible[random]
//     value1 += number;
//     h1.textContent = value1;
// }

// button1.addEventListener('click',addAnanse);

function addYou(){
    // Generating random numbers for Ananse
    let possible = [1,2,3,4,-5,0,6,7,8,9,10,0,-11,12,13,14,15,16,-17,18,0,19,20,21]
    let random = Math.floor(Math.random() * possible.length)
    let number = possible[random]
    value1 += number;
    h1.textContent = value1;
    // Generating random numbers for the player

    let possible2 = [1,0,2,3,4,5,6,7,-8,9,0,10,-11,12,13,14,-15,0,16,17,18,19,-20,21]
    let random2 = Math.floor(Math.random()*possible2.length)
    let number2 = possible2[random2]
    value2 += number2;
    h2.textContent = value2;

    if (value2 > 300){
        alert("Ananse has won🕷. Better luck next time")
        location.reload()
    }
    
    if (value1 > 300){
        alert("You won🎉. You won. You are smarter than Ananse.")
        location.reload()
    }
}

button2.addEventListener('click',addYou);


