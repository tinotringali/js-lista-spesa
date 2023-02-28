'use strict';

const shoppingList = ['Latte', 'Biscotti', 'Mozzarella', 'Uova', 'Acqua', 'Pane', 'Pasta'];

const ul = document.querySelector('.lista-spesa');

console.log(shoppingList);

let i = 0;

while(i < shoppingList.length){
    const li = document.createElement('li');
    li.innerText = (shoppingList[i]);
    ul.append(li);
    i++;
}