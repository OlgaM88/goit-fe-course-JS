'use strict';

var lists = [];
var form = document.querySelector('form');
var btnAdd = document.querySelector('.btn-add');
var input = document.querySelector('input');
var listContainer = document.querySelector('.list-container');
var listsMenu = document.querySelector('.list-menu');
btnAdd.addEventListener('click', handlerAddNote);
listsMenu.addEventListener('click', handlerDeleteNote);

window.onload = function () {
  lists = localStorage.lists ? JSON.parse(localStorage.lists) : [];
  createList();
};

function handlerAddNote(evt) {
  evt.preventDefault();
  var target = evt.target;
  var request = input.value;
  lists.includes(request) ? alert('Такой адресc существует!') : checkURL(request) ? lists.push(request) : false;
  form.reset();
  localStorage.lists = JSON.stringify(lists);
  createList();
}

function checkURL(url) {
  var regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
  return regURL.test(url);
}

function handlerDeleteNote(_ref) {
  var target = _ref.target;
  var nodeName = target.nodeName;
  var action = target.dataset.action;
  if (nodeName !== 'BUTTON' || action !== 'delete-note') return;
  var parentItem = target.closest('.item');
  var delItem = parentItem.firstElementChild.textContent;
  parentItem.remove();
  var index = lists.indexOf(delItem);
  lists.splice(index, 1);
  localStorage.lists = JSON.stringify(lists);
}

function createList() {
  var source = document.querySelector('#menu').innerHTML.trim();
  var template = Handlebars.compile(source);
  var markup = lists.reduce(function (acc, list) {
    return acc + template(list);
  }, " ");
  listsMenu.innerHTML = markup;
}