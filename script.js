'use strict';

// let phrase = ['Great choice', 'Great taste', 'Sumptuously', 'I like it too', 'Original solution', 'Well, not bad', 'I think everyone will appreciate', 'Chicly'];
// let phrase = ['Отличный выбор', 'Отличный вкус', 'Великолепно', 'Мне тоже нравится', 'Оригинальное решение', 'А что, неплохо', 'Я думаю все оценят', 'Шикарно'];

var getRandomIntegerMinMax = function(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

let randomColorBtn = document.querySelector('.random-color');
let saveColorBtn = document.querySelector('.save-color');
let description = document.querySelector('.description');
let container = document.querySelector('.container');
let selectedColorsContainer = document.querySelector('.selected-colors__container');
let removeBtn = document.querySelector('.remove-color');

function getColor() {
	let rgbColor = 'rgb(' + getRandomIntegerMinMax(0, 255) + ', ' + getRandomIntegerMinMax(0, 255) + ', ' + getRandomIntegerMinMax(0, 255) + ')';
	container.style.background = rgbColor;
	description.textContent = rgbColor;
	description.style.fontSize = 32 + 'px';
	description.style.lineHeight = 34 + 'px';
	description.style.fontWeight = 'bold';
};

function saveColor() {
	let li = document.createElement('li');
	li.className = "new-color-item";
	li.textContent = description.textContent;
  	li.style.backgroundColor = container.style.background;
  	selectedColorsContainer.append(li);
  	let liAll = selectedColorsContainer.querySelectorAll('li');
  		if (liAll.length === 4) {
  			saveColorBtn.disabled = true;
  		} 
  	};

function removeLastAddedColor() {
	let liAll = selectedColorsContainer.querySelectorAll('li');
	if (selectedColorsContainer.lastChild) {
		selectedColorsContainer.lastChild.remove();
	} 
	if (saveColorBtn.disabled === true) {
		saveColorBtn.disabled = false;
	} 
};

selectedColorsContainer.addEventListener('click', function(event) {
	let target = event.target;
	if (saveColorBtn.disabled === true) {
		saveColorBtn.disabled = false;
	} 
	if (target.className != 'new-color-item') {
		return; }
		target.remove();
});	

randomColorBtn.addEventListener('click', function() {
	getColor();
	saveColorBtn.addEventListener('click', saveColor);
	removeBtn.addEventListener('click', removeLastAddedColor);
});
