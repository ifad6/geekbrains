"use strict";

const checkerboard = document.querySelector('#checkerboard');

createBoard(checkerboard);
postFigures(checkerboard);

/**
 * Функция рисует шахматную доску в заданной таблице-контейнере
 * @param {node} container - таблица-контейнер
 */
function createBoard(container) {

	const colHead = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

	for (let i = 0; i <= 8; i++) {

		const row = document.createElement('tr');
		container.appendChild(row);

		for (let j = 0; j <= 8; j++) {

			const cell = document.createElement('td');
			row.appendChild(cell);

			if (i === 0) {
				cell.classList.add('head');
				if (j > 0) {
					cell.innerHTML = colHead[j - 1];
				}
			} else if (i % 2) {
				if (j == 0) {
					cell.innerHTML = i;
					cell.classList.add('head');
				} else if (j % 2) {
					cell.style.backgroundColor = '#000';
				} else {
					cell.style.backgroundColor = '#FFF';
				}
			} else {
				if (j == 0) {
					cell.innerHTML = i;
					cell.classList.add('head');
				} else if (j % 2) {
					cell.style.backgroundColor = '#FFF';
				} else {
					cell.style.backgroundColor = '#000';
				}
			}

		}

	}

}


/**
 * Функция добавляет фигуры на шахматную доску
 * @param {node} container - таблица-контейнер
 */
function postFigures(container) {

	const figures = [
		['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
		['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
	];

	// Черные фигуры
	for (let row = 0; row < 2; row++) {
		for (let col = 0; col < 8; col++) {

			const figure = document.createElement('span');
			figure.classList.add('figure_black');
			figure.innerHTML = figures[row][col];

			const cell = container.querySelector(`tr:nth-child(${row + 2}) td:nth-child(${col + 2})`);
			cell.appendChild(figure);
		}
	}

	// Белые фигуры
	for (let row = 8; row > 6; row--) {
		for (let col = 0; col < 8; col++) {

			const figure = document.createElement('span');
			figure.classList.add('figure_white');
			figure.innerHTML = figures[8 - row][col];

			const cell = container.querySelector(`tr:nth-child(${row + 1}) td:nth-child(${col + 2})`);
			cell.appendChild(figure);
		}
	}
}