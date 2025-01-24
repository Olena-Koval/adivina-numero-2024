const INITIAL_SCORE = 20
const MAX_NUMBER = 20

initData()
function initData() {
  let score = INITIAL_SCORE
  let highscore = 0
  let number = Math.trunc(Math.random() * MAX_NUMBER) + 1
}

/* seleccionar todos los elementos del DOM que necesitamos */
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const guessField = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

checkBtn.addEventListener('click', checkNumber)
function checkNumber() {
  //obtenemos el numero pulsado
  //si no es un numero que lo correcta
  //si es un numero y no es correcro... -> comprobamos score: perdemos partida? o actualizamos nuestras variables y el DOM
  //si es un numero y es correcto ... -> comprobamos score: ganamos partida? o actualizamos nuestras variables y el DOM
}
