# Desafio 1

## Requisitos

Para executar o programa desse desafio é necessário Node.js instalado em sua máquina, sendo recomendado abrir na IDE Microsoft Visual Studio Code (caso tenha), pois isso tornará o procedimento mais fácil. Instruções no final do README sobre como abrir no Node.js.

## O Programa

O programa foi desenvolvido para fazer a contagem de cada caractere em uma string inserida pelo usuário, ignorando caracteres não alfanuméricos (@!?...). Exemplo:

```javascript
let texto = ".hello world. @12";

// Retorno:
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