let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector(.'blue');
const red = document.querySelector(.'red');
const green = document.querySelector(.'green');
const yellow = document.querySelector(.'yellow');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);     
    }
}

//Aacende a próxima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os certos
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert('Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!');
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    })
}

//Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//Função pra próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}
// Função para GAME OVER
let gameOver = () => {
    alert('Pontuação: ${score}!\nVocê perdeu o jogo!\nCique em OK para inicar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo');
    score = 0;

    nextLevel();
}

green.addEventListener('Click', click(0));
red.addEventListener('Click', click(1));
yellow.addEventListener('Click', click(2));
blue.addEventListener('Click', click(3));

playGame();