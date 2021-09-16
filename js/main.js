/* jshint esversion: 6 */

/*
console.log('1');

const obj = {
  name: 'Roman',
  age: 24
};

console.log(obj);

// const result = confirm("are you here?");

const resultPrompt = prompt("write a num", "");
console.log(typeof(resultPrompt), `: ${resultPrompt}`);

const resultPromptNum = +prompt("write a num again", "");
console.log(typeof(resultPromptNum), `: ${resultPromptNum}`);

const answers = [];

answers[0] = prompt('Your Name?', '');
answers[1] = prompt('Your Lastname?', '');
answers[2] = prompt('How old are you?', '');
*/

// 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genser: [],
  privar: false
};


const a = prompt('Какой последний фильм вы смотрели?'),
      b = prompt('Как вы его оцение?'),
      c = prompt('Какой последний фильм вы смотрели?'),
      d = prompt('Как вы его оцение?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);