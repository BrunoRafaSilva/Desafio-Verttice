/* Função que recebe um array de numeros inteiros e retorna o maior produto possivel entre dois números desse array*/

/* Criado `Array` preenchido com números inteiros e espaços vazios*/
const numeros = [0,1,3,0,4,1,99,27,25];

/* Criando e definindo duas variaveis com o valor inicial de zero */
let maior = 0;
let segundoMaior = 0;

/* Através do loop `for` irá ser percorrido todos os números presentes no array para verificar seus valores*/
for(var i =0; i<numeros.length; i++) {

    /* Adicionada condição que sempre guarda o maior numero na varial `maior` e guarda o valor anterior ao novo maior número na varial `segundoMaior */
    if(numeros[i] > maior){
        segundoMaior = maior;
        maior = numeros[i];
    }
}

/* Variavel contendo o resultado da multiplicação entre o segundo maior valor e primeiro, também o formatando para casas de milhar*/
let resultado = (segundoMaior*maior).toLocaleString('pt-BR');

/* Imprime o resultado no console */
console.log(resultado);