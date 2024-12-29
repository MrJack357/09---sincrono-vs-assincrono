function colocarAguaPraFerver(){
    console.log('Colocando água pra ferver');
    setTimeout(() => {
        console.log('Água está fervida');
        
        passarCafe();
    }, 5000);   
}

function prepararPraPassarCafe(){
console.log('Pegar o po de café');
console.log('Pegar filtro de papel');
console.log('Colocar o po de café no filtro');
console.log('Colocar o filtro em cima da xicara');


}

function passarCafe(){
    console.log('passar a água quente no café');
}

colocarAguaPraFerver();
prepararPraPassarCafe();