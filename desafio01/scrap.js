
let texto = "hello world";

let contar = contandoletras(texto);

function contandoletras(texto) {
    let contador = {};
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        
        if (letra !== ' ') {
            contador[letra] = (contador[letra] || 0) + 1;
        }
    }

    return contador;
}

console.log(contar);