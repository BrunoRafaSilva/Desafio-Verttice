/* Contagem de caracteres ignorando o caracteres não alfanuméricos */

/* Variavel contendo frase que irá ter a contagem de caracteres realizada */ 
let frase = ".helLo world. @";

/* Essa conversão da variável em maiuscula faz com que independente da letra estar maiuscula, ou não, ela será contada apenas como letra e não contendo, por exemplo, "1 w" e "1 W" */
let texto = text.toUpperCase()

/* Declaração de um objeto `Map` vazio */
const contador = new Map();

/* O loop `for..of` retorna um array `[key, value]` sem a necessidade de um indice para cada iteração, fazendo com que `letra` receba os atributos iterados de `texto` */
for (let letra of texto) {

    /* O método `.match()` procura se o parametro passado a ela está presente na iteração que está sendo realizada através do loop, nesse caso o parametro foi a expressão `[A-Za-z0-9]` que restringe a identificação a caracteres alfanumericos. (São esses caracteres entre A...Z,a...z, 0...9.) */
  if (letra.match(/[A-Za-z0-9]/)) {

    /* O método `.set` serve para definir ou atualizar o value da key ([key,value]) que está sendo verificada no momento.
        o método .get() retorna o `value` atual da `key` analisada, se ele for 0 (undefined) ele define uma nova `key` com value 1 e se já houve algum `value` nesta `key`, ele adiciona +1 ao `value`, essa verificação é feita através do operador `OR lógico`(||) */
    contador.set(letra, (contador.get(letra) || 0) + 1);
  }
}

/* Imprime o resultado no console */
console.log(contador);