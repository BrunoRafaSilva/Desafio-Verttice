/* selecionar a tela da calculadora*/
let screen = document.getElementById('screen');


/* adicionar itens na tela da calculadora */
function appendToScreen(value) {
    /* verificar se o último caractere é um operador e o próximo caractere também é um operador, impedindo a adição de dois operadores consecutivos*/
    if (screen.value.match(/[+\-*/]/) && value.match(/[+\-*/]/)) {
        return;
    }

    // verificar se a tela está vazia e o valor a ser adicionado é um operador
    else if (screen.value === '' && value.match(/[+\-*\/.]/)) {
        return; // impedir que o cálculo comece com um operador
    }

    // verificar se o último caractere é um ponto e o próximo caractere também é um ponto
    else if (screen.value.charAt(screen.value.length - 1) === '.' && value === '.') {
        return; // impedir a adição de dois pontos consecutivos
    }

    screen.value += value;
}



// limpar a tela da calculadora
function clearScreen() {
    screen.value = '';
}

// calcular o resultado da expressão na tela da calculadora
function calculate() {
    let expression = screen.value;
    let result = eval(expression);
    screen.value = result;
}

/* Função para remover o ultimo ou operador inserido */
function deleteLastItem() {
    /* Verifica a `String` atual da tela */
    let currentString = screen.value;

    /* remover o último caractere da `String` atual */
    let newString = currentString.substring(0, currentString.length - 1);

    /* atualizar a tela com a nova string */
    screen.value = newString;
}

/* `EventListener` que irá capturar o pressionado de teclas, utilizado tipo `keydown`, pois é compativel com notebooks */
document.addEventListener('keydown', keyBind => {
    if (keyBind.key.match(/[+\-*/.]/) || keyBind.key.match(/[0-9]/)) {
        appendToScreen(keyBind.key);
    } else if (keyBind.key == 'Enter') {
        calculate()
    } else if (keyBind.key == 'Backspace') {
        deleteLastItem()
    } else if (keyBind.key == 'Delete') {
        clearScreen()
    }
});


