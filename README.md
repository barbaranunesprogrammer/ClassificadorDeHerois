# Desafio de Projeto: Classificador de Nível de Herói - DIO

Este repositório contém a minha solução para o desafio de projeto "Classificador de Nível de Herói", proposto no bootcamp **Formação Lógica de Programação** da [DIO (Digital Innovation One)](https://www.dio.me/), com a mentoria do professor Felipe Aguiar.

## 🎯 Objetivo do Desafio

O objetivo era criar um programa que, a partir do nome e da quantidade de experiência (XP) de um herói, classificasse seu nível de acordo com as seguintes regras:

| Nível de XP              | Classificação |
| ------------------------ | :-----------: |
| Menor que 1.000          |     Ferro     |
| Entre 1.001 e 2.000      |    Bronze     |
| Entre 2.001 e 5.000      |     Prata     |
| Entre 5.001 e 7.000      |     Ouro      |
| Entre 7.001 e 8.000      |    Platina    |
| Entre 8.001 e 9.000      |  Ascendente   |
| Entre 9.001 e 10.000     |    Imortal    |
| Maior ou igual a 10.001  |   Radiante    |

A saída do programa deve exibir a mensagem:
`"O Herói de nome **{nome}** está no nível de **{nivel}**"`

## 🛠️ Tecnologias Utilizadas

-   JavaScript
-   Node.js (com ES Modules)

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone 
    cd seu-repositorio
    ```

2.  **Execute o script:**
    ```bash
    npm start
    ```

O terminal exibirá a lista de todos os heróis e seus respectivos níveis.