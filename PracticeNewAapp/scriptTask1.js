/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numbersOfFilms = +prompt('How many movies have you watched?', '');


const personalMovieDB = {
   count: `${numbersOfFilms}`,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


for (let i = 0; i < 2; i++) {
   const a = prompt('One of the last movies you watched?', 'logan'),
      b = prompt('How much do you value it?', '8.1');

   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
}

if (personalMovieDB.count < 10) {
   console.log('Viewed quite a few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('You are a classic viewer');
} else if (personalMovieDB.count >= 30) {
   console.log('You are a movie buff');
} else {
   console.log('An error occurred');
}

console.log(personalMovieDB);

// (personalMovieDB >= 10 && personalMovieDB < 30)