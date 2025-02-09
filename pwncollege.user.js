// ==UserScript==
// @name Rob's pwncollege visibility script
// @match *://pwn.college/*
// @version 0.1
// @run-at document-end
// ==/UserScript==

function fix_font() {
  const paragraphs = document.querySelectorAll('p');
  const list_items = document.querySelectorAll('li');

  paragraphs.forEach((p) => {
  p.style.fontFamily = 'Arial, sans-serif';
  });

  list_items.forEach((p) => {
  p.style.fontFamily = 'Arial, sans-serif';
  });
}

fix_font();
