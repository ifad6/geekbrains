"use strict";

// Задания 1 и 2
var text = "'Isn't this game really cool' - he asked.\nShe said: 'Well, it's so hard and I can't pass the first level!'";

console.log(text);
text = text.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
console.log(text);


// Задание 3
var form = document.querySelector('form');

form.addEventListener('submit', function(e){

	var fields = form.querySelectorAll('input');
	for (var field of fields) {

		var mask = new RegExp(field.dataset.mask, 'i');

		if (!mask.test(field.value)) {
			e.preventDefault();

			field.style.borderColor = 'red';
			alert('Проверьте правильность заполнения полей');
		}
	}
});