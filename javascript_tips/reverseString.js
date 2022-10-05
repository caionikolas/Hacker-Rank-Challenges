/*
String reversa usando JavaScript:

. split() divide uma String em um array de strings separando string em substrings.

. reverse() inverte um array no lugar. O 1º elemento da matriz torna-se o último e o último torna-se o 1º.

. join('') junta elementos de um array em uma string.
*/

const reverse = (txt) => {
  return txt.split('').reverse().join('')
}

reverse('farooq') // qooraf
reverse('javascript') // tpircsavaj
reverse('@caio_nikolas') // salokin_oiac@