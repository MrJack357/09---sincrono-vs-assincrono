// Função assíncrona: Usa setTimeout para simular a fervura da água com um atraso de 5 segundos.
// O código continua executando as próximas linhas enquanto espera o "setTimeout" terminar.
// Quando o tempo acaba, o callback é executado e "passarCafe" é chamado.
function colocarAguaPraFerver() {
    console.log('Colocando água pra ferver');
    setTimeout(() => {
        console.log('Água está fervida');
        
        // Chamada de função síncrona dentro do callback, após a fervura.
        passarCafe();
    }, 5000);   
}

// Função síncrona: Todas as ações desta função são executadas imediatamente na sequência.
// Não há atrasos ou espera por eventos externos.
function prepararPraPassarCafe() {
    console.log('Pegar o pó de café');
    console.log('Pegar filtro de papel');
    console.log('Colocar o pó de café no filtro');
    console.log('Colocar o filtro em cima da xícara');
}

// Função síncrona: Assim como "prepararPraPassarCafe", esta função executa diretamente
// e não espera nada antes de começar ou terminar.
function passarCafe() {
    console.log('Passar a água quente no café');
}

// Chamada da função assíncrona: Inicia a fervura da água e continua com a execução
// do próximo código sem esperar o "setTimeout" terminar.
colocarAguaPraFerver();

// Chamada da função síncrona: Executa imediatamente e termina antes que o "setTimeout" finalize.
prepararPraPassarCafe();
