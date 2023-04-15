/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

const numberOfFIlms = prompt("Сколько фильмов вы уже посмотрели?", "");

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

let answerCount = 0;
while (answerCount < 2) {
	let name = prompt("Один из последних просмотренных фильмов?", "");
	let rate = prompt("На скользо оцените его?");

	if (name && rate && name.length <= 50 && rate.length <= 50) {
		personalMovieDB.movies[name] = rate;
		answerCount++;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
}

console.log(personalMovieDB); 