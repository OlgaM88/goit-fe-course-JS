'use strict'
let lists = [];
const form = document.querySelector('form');
const btnAdd = document.querySelector('.btn-add');
const input = document.querySelector('input');
const listContainer = document.querySelector('.list-container');
const listsMenu = document.querySelector('.list-menu');

btnAdd.addEventListener('click', handlerAddNote);
listsMenu.addEventListener('click', handlerDeleteNote);

window.onload = function() {
    lists = localStorage.lists ? JSON.parse(localStorage.lists) : [];
   createList();
}

function handlerAddNote (evt){
    evt.preventDefault();
    let target = evt.target;
    const request = input.value;
   lists.includes(request)? alert('Такой адресc существует!'): 
   checkURL(request)? lists.push(request) : false;
   form.reset();
   localStorage.lists = JSON.stringify(lists); 
   createList();
}

function checkURL(url) {
    var regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    return regURL.test(url);
}

function handlerDeleteNote ({target}) {
    const nodeName = target.nodeName;
    const action = target.dataset.action;
    if (nodeName !== 'BUTTON' || action !== 'delete-note') return;
    const parentItem = target.closest('.item');
    const delItem = parentItem.firstElementChild.textContent;
    parentItem.remove(); 
    const index = lists.indexOf(delItem);
    lists.splice(index, 1);
    localStorage.lists = JSON.stringify(lists);
}

function createList(){
    const source = document.querySelector('#menu').innerHTML.trim();
    const template = Handlebars.compile(source);
    
    const markup = lists.reduce((acc, list) => acc + template(list), " ");
    listsMenu.innerHTML = markup;
}

 

