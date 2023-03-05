# Desafio 1

## Requisitos

Para executar o programa desse desafio é necessário Node.js instalado em sua máquina, sendo recomendado abrir na IDE Microsoft Visual Studio Code (caso tenha), pois isso tornará o procedimento mais fácil.
Instruções no final do README sobre como abrir no Noje.js.

## O Programa

O programa foi desenvolvido para fazer a contagem de cada carácter em uma strings inserida pelo usuário, ignorando caracteres não alfanuméricos(@!?…). Exemplo:

```javascript
let texto = ".hello world. @12";
```
Que retorna:

```javascript
Map(9) {
'h' => 1,
'e' => 1,
'l' => 3,
'o' => 2,
'w' => 1,
'r' => 1,
'd' => 1,
'1' => 1,
'2' => 1
}
```


Nesse desafio foram criados dois programas, sendo um deles que diferencia a contagem da letra maiúscula e da minuscula e o outro que conta as duas como uma letra só, tudo depende da finalidade da aplicação.

## Ferramentas

Esse programa foi feito em JavaScript puro.

## Instalação do Node.js

Primeiramente entre no link oficial do Node.js(https://nodejs.org/en/download/) e faça o download da versão compatível com seu sistema.

Para executar um arquivo .js diretamente pelo Node.js, siga os seguintes passos:

1. Abra um terminal ou prompt de comando.
2. Navegue até o diretório onde o arquivo .js está localizado usando o comando cd (change directory). Por exemplo, se o arquivo estiver na pasta "documentos", digite o comando cd documentos.
3. Digite o comando node desafio1.js(ou  para executar o arquivo. Substitua "nome-do-arquivo.js" pelo nome do JavaScript(desafio1.js ou desafio1SolucaoAlternativa.js).
4. Pressione a tecla "Enter" para executar o comando.

O Node.js irá executar o código JavaScript no arquivo e exibir a saída no terminal. Certifique-se de que o Node.js esteja instalado em sua máquina antes de executar o arquivo. Se você não tiver o Node.js instalado, pode baixá-lo do site oficial do Node.js.
