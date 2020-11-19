// 1

// Återställ knappen

let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';

console.log(reset);


let art1 = document.querySelector('.art-1');

// Sätt en event listener på reset knappen
reset.addEventListener('click', resetAll);

// sätt event listener för första knappen

let knapp1 = btns[0];
knapp1.addEventListener('click',  changeBtninArt1);




let knapp2 =btns[1];
knapp2.addEventListener('click',changeArt1toRed);


let btn = document.querySelectorAll('header a')
console.log(btn)


let knapp3 = btn[0];
knapp3.addEventListener('click',changePhoto);

let knapp4 = btn[1];
knapp4.addEventListener('click',RemoveArt2Btn)


let knapp5 = btn[2];
knapp5.addEventListener('click', function handler (event) {
    this.removeEventListener("click", handler);
    createUl();
  });



let btn11 = document.querySelectorAll('header img')

let knapp6 = btn11[1];
knapp6.addEventListener('click', changeKnapp6color);


function resetAll() {
    art1.style.backgroundColor = 'white';

    // reset radikalt till Sinus Hoodie
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';

    // reset image
    let image = document.querySelector('.art-1 img');
    image.src = "../img/hoodie-ash.png";

    // change first BTN in art1
    let art1Btn = document.querySelector('.art-1 button');
    art1Btn.innerText = 'buy';
    art1Btn.style.backgroundColor = '#222';

    // add Art2 btn
    let art2Btn = document.querySelector('.art-2 button');
    art2Btn.style.display='block';

    document.querySelector('ul').remove();
    
    knapp5.addEventListener('click', function handler (event) {
        this.removeEventListener("click", handler);
        createUl();
      });

}

function changeBtninArt1() {
    let art1Btn = document.querySelector('.art-1 button');
    art1Btn.innerText = 'bought';
    
}


function changeKnapp6color (){
    let artBtn = document.querySelector ('.art-1 button')
    artBtn.style.backgroundColor='orange';
}

// ändrar art-1 backgrundsfärg till hot pink
function changeArt1toRed() {
    art1.style.backgroundColor = '#b20000';
}


function RemoveArt2Btn () {
    let art2Btn = document.querySelector('.art-2 button');
    art2Btn.style.display='none';
}



function changePhoto () {
    let image = document.querySelector('.art-1 img');
    image.src = "../img/hoodie-fire.png";
}




 
function createUl (){

let body = document.querySelector('body');


let newUl = document.createElement('ul');
body.appendChild(newUl);

for(let i=0; i<10; i++){
    let listItem = document.createElement('li');
    let addtext = document.createTextNode('Clara Best Teacher');
    listItem.setAttribute('class', 'list-group-item');
    newUl.appendChild(listItem);
    listItem.appendChild(addtext);
}

let newLis = newUl.children;

 for(let i=0; i<newLis.length; i++){
   newLis[i].style.backgroundColor = 'white';
   newLis[i].style.border = 'solid black';
   newLis[i].style.listStyle = 'none';
   newLis[i].style.marginRight = '2rem';
   newLis[i].style.padding = '1.5rem';
}



}




