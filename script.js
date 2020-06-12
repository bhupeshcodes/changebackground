const hexnumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E'];
const hexBtn = document.querySelector('.hexBtn')
const hex = document.querySelector('.hex');
const bodyBcg = document.querySelector('body');


hexBtn.addEventListener('click',getHex);

function getHex (){
    let hexCol = '#';

    for(let i=0; i<6;i++){
    let random = Math.floor(Math.random()*hexnumbers.length);
    hexCol +=hexnumbers[random];
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}