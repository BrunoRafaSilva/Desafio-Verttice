/* Função que filtra uma lista de objetos e informa o orçamento total de todos os filmes que tiverem classificação maior ou igual a 7.0 */

/* Criando um array de objetos */
const listaDeFilmes = [
    {
        titulo: 'The Godfather',
        classificacao: 9.2,
        orcamento: 6000000
    },
    {
        titulo: 'The Shawshank Redemption',
        classificacao: 9.3,
        orcamento: 25000000
    },
    {
        titulo: 'The Dark Knight',
        classificacao: 9.0,
        orcamento: 185000000
    },
    {
        titulo: 'Pulp Fiction',
        classificacao: 8.9,
        orcamento: 8000000
    },
    {
        titulo: 'Black Adam',
        classificacao: 6.3,
        orcamento: 260000000
    },
    {
        titulo: 'The Lord of the Rings: The Return of the King',
        classificacao: 8.9,
        orcamento: 94000000
    },
    {
        titulo: 'The Good, the Bad and the Ugly',
        classificacao: 8.8,
        orcamento: 1200000
    },
    {
        titulo: 'Black Panther: Wakanda Forever',
        classificacao: 6.8,
        orcamento: 250000000
    } 
];

/* Criada variavel para armazenar a soma dos orcamentos que passarem na condição*/
let orcamentoTotal = 0;

/* Criado novo array de objetos que recebe o resultado da condicional do método `.filter`, que neste caso é uma função que insere no novo array todos os filmes com classificação superior a 7.0*/
let filmesRenomados = listaDeFilmes.filter(function(filme) {
    return filme.classificacao > 7;
});

/* O método `.forEach` está através da função de retorno percorrendo os objetos de `filmesRenomados` somando o orçamento de todos os filmes presentes nele a variavel `orçamentoTotal` */
filmesRenomados.forEach(function(filme) {
    orcamentoTotal += filme.orcamento;
});

/* Baseado em que o valor do orçamento seja informado em Dolar(US), essa variavel armazena o resultado da soma formatado com o metodo `.toLocaleString()` do qual além de adicionar os "." as casas do valor da moeda local, ainda insere o cifrão */
let resultado = (`O valor total de orçamento dos filmes com nota superior a 7.0 foi de ${orcamentoTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} de dolares.`);

/* Imprime o resultado no console */
console.log(resultado);
