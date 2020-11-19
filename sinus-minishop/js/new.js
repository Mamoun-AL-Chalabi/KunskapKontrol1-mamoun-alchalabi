
/* ............................... addevent listener  section ...............................*/



/* ............................... reset button ...............................*/

let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';

console.log(reset);


let art1 = document.querySelector('.art-1');


reset.addEventListener('click', resetAll);


/* ............................... name button ...............................*/

let knapp1 = btns[0];
knapp1.addEventListener('click',  changeBtninArt1);


/* ............................... background button ...............................*/

let knapp2 =btns[1];
knapp2.addEventListener('click',changeArt1toRed);


let btn = document.querySelectorAll('header a')
console.log(btn)


/* ............................... photo button ...............................*/

let knapp3 = btn[0];
knapp3.addEventListener('click',changePhoto);


/* ............................... remove button ...............................*/

let knapp4 = btn[1];
knapp4.addEventListener('click',RemoveArt2Btn)


/* ............................... ul button ...............................*/

let knapp5 = btn[2];
knapp5.addEventListener('click', function handler (event) {
    this.removeEventListener("click", handler);
    createUl();
  });

/* ............................... colour button ...............................*/

let btn11 = document.querySelectorAll('header img')

let knapp6 = btn11[1];
knapp6.addEventListener('click', changeKnapp6color);




/* ............................... function section ...............................*/


/* ............................... function for reset button  ...............................*/

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





/* ............................... change name button ...............................*/

function changeBtninArt1() {
    let art1Btn = document.querySelector('.art-1 button');
    art1Btn.innerText = 'bought';
    
}

/* ............................... change button color ...............................*/

function changeKnapp6color (){
    let artBtn = document.querySelector ('.art-1 button')
    artBtn.style.backgroundColor='orange';
}

/* ............................... change background color ...............................*/
function changeArt1toRed() {
    art1.style.backgroundColor = '#b20000';
}

/* ............................... remove button ...............................*/

function RemoveArt2Btn () {
    let art2Btn = document.querySelector('.art-2 button');
    art2Btn.style.display='none';
}

 /* ............................... change photo ...............................*/

function changePhoto () {
    let image = document.querySelector('.art-1 img');
    image.src = "../img/hoodie-fire.png";
}



 /* ...............................creat ul ...............................*/
 
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




