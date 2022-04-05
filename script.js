//toggle
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("aktif");
    navItems.classList.toggle("aktif");
});

document.querySelectorAll(".nav-list").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("aktif");
    navItems.classList.remove("aktif");
}))

//slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slide = document.querySelector('.card').children;
const kontenCard = konten-card.length;
let index= 0;

prev.addEventListener('click', () => {
    nextKontenCard('next');
});

next.addEventListener('click', () => {
    nextKontenCard('prev');
});

function nextKontenCard(direction){
    if(direction == 'next'){
        index++;
        if(index == kontenCard){
            index = 0;
        }
    }
    else{
        if(index == 0){
            index = kontenCard = -1;
        }
        else{
            index--;
        }
    }

    for(let i = 0; i < konten-card.length; i++){
        konten-card[i].classList.remove('aktif');
    }
    konten-card[index].classList.add('aktif');
}