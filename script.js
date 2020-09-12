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
            lose();
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
    createelementColor(color).classList.add('selected');

    setTimeout(() => {
        createelementColor(color).classList.remove('selected');
    })

    checkOrder();
}