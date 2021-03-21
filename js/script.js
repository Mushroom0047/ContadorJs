//const btnAumentar = document.getElementById('btnAumentar');
//const btnDisminuir = document.getElementById('btnDisminuir');
const container = document.querySelector('.container');
const digito = document.querySelector('.digito');
let contador = 0;

container.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log();
    if(e.target.classList.contains('btnAumentar')){
        contador ++;
        digito.textContent = contador;
    }
    if(e.target.classList.contains('btnDisminuir')){
        contador --;
        digito.textContent = contador;
    }
});