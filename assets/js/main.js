


////////////////////////////////////////////////////////////
const p1 = document.querySelector('.p1');
p1.addEventListener('click', fp1 );
function fp1(){
    p1.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p2 = document.querySelector('.p2');
p2.addEventListener('click', fp2 );
function fp2(){
    p2.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p3 = document.querySelector('.p3');
p3.addEventListener('click', fp3 );
function fp3(){
    p3.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p4 = document.querySelector('.p4');
p4.addEventListener('click', fp4 );
function fp4(){
    p4.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p5 = document.querySelector('.p5');
p5.addEventListener('click', fp5 );
function fp5(){
    p5.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p6 = document.querySelector('.p6');
p6.addEventListener('click', fp6 );
function fp6(){
    p6.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p7 = document.querySelector('.p7');
p7.addEventListener('click', fp7 );
function fp7(){
    p7.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p8 = document.querySelector('.p8');
p8.addEventListener('click', fp8 );
function fp8(){
    p8.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p9 = document.querySelector('.p9');
p9.addEventListener('click', fp9 );
function fp9(){
    p9.style.display = 'none';
} // alterar "p1 e fp1"
////////////////////////////////////////////////////////////
const p10 = document.querySelector('.p10');
p10.addEventListener('click', fp10 );
function fp10(){
    p10.style.display = 'none';
} // alterar "p1 e fp1"


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < (offset + height)){
            navLinks.forEach(links => {
                links.classList.remove('ativa');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativa');

            });
        };

    });
}