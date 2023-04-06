console.log('I am in');

let btn = document.querySelector(".btn");
let restart = document.querySelector('.restart');
let input = document.querySelector('.in-num');
let notice = document.querySelector('.notice2');
let chance = document.querySelector('.chance');
let inSec = document.querySelector('.in');

let total = 0;
let won = 0;
let lose = 0;
let chc = 5;

//input.value = 'i am input';
btn.addEventListener('click', () => {
    console.log('i am clicked');

    let number;
    if (chc > 0) {
        number = parseInt(Math.random() * 5 + 1);
        chc -= 1;
    } else if (chc == 0 || btn.classsList.contains('btn')) {




        notice.innerHTML = `<b>তোর দম শেষ!</b>🤪 যা ভাগ এইখান থেকে `;
        document.querySelector('.display').innerHTML = 
        `<div class="display-score">
        <div class="score">
        <p class="sore-para"><b>তোর খেলার যোগ্যতা দেখ এবারঃ🤣</b></p>
        <p class="win">তুই জিতছস <b>${won}</b> বার</p>
        <p class="lost">তুই হারছস <b>${lose}</b> বার</p>
        </div>
        </div>
        `;


        btn.classList.remove('btn');
        btn.classList.add('btn-deactive');
        btn.removeEventListener('click');
    }

    if (input.value == number) {
        notice.innerText = `তুই দেখা যায় জিতছস!😍 দে তালি দে এবার`;
        won += 1;
    } else {
        if (input.value > number) {
            notice.innerText = `চুলের সংখ্যা দিছস!🤬 বড় সংখ্যা দিছস কে?🤬 ঠিক মত চিন্তা কর`;
        } else{
            notice.innerText = `চুলের সংখ্যা দিছস!🤬 ছোট সংখ্যা দিছস কে?🤬 কমদামি মনে করছ?`;            
        }
        lose += 1;
    }


    chance.innerText = `তোর কাছে ${chc}/5 বার সুযোগ আছে`;
    
    input.value = '';

    
})

//let disSec = document.querySelector('.display-sec');


restart.addEventListener('click', () => {
    chc = 5;
    chance.innerText = `তোর কাছে ${chc}/5 বার সুযোগ আছে`;

    notice.innerText = '';

    if (btn.classList.contains('btn-deactive')) {
        btn.classList.remove('btn-deactive');
        btn.classList.add('btn');
    }

    lose = 0;
    won = 0;

    document.querySelector('.display').innerHTML = ``;

})
