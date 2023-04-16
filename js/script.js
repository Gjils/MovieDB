/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFIlms; 

function start () {
	numberOfFIlms = prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFIlms === "" || numberOfFIlms === null || isNaN(numberOfFIlms)) {
		numberOfFIlms = prompt("Сколько фильмов вы уже посмотрели?", "");
	}

	numberOfFIlms = +numberOfFIlms;
}

start();

const personalMovieDB = {
	count: numberOfFIlms,
	movies: {

	},
	actors: {

	},
	geners: [

	],
	privat: false
};

function rememberMyFilms () {
	let answerCount = 0;
	while (answerCount < 2) {
		let name = prompt("Один из последних просмотренных фильмов?", "").trim();
		let rate = prompt("На скользо оцените его?").trim();
	
		if (name && rate && name.length <= 50 && rate.length <= 50) {
			personalMovieDB.movies[name] = rate;
			answerCount++;
		} else console.log("error");
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	}
}

detectPersonalLevel();

function showMyDB(isPrivat) {
	if (!isPrivat) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	let answerCount = 0;
	while (answerCount < 3) {
		let genre = prompt(`Ваш любимый жанр под номером ${answerCount + 1}`, "").trim();
		if (genre) {
			personalMovieDB.geners[answerCount] = genre;
			answerCount++;
		} else console.log("error");
	}
}


writeYourGenres();


showMyDB();