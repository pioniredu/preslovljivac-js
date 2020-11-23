import odredi from '@pionir/detektor-js';

// a map containing all of the characters and exceptions
const convMap = new Map([
  ['Panjeliniz', 'Панјелиниз'],
  ['Konjug', 'Конјуг'],
  ['Konjuk', 'Конјук'],
  ['Konjun', 'Конјун'],
  ['Anjug', 'Анјуг'],
  ['Podžil', 'Поджил'],
  ['Podžet', 'Поджет'],
  ['Podžanj', 'Поджањ'],
  ['Podžnj', 'Поджњ'],
  ['Predžet', 'Преджет'],
  ['Predživ', 'Преджив'],
  ['Podždr', 'Подждр'],
  ['Podržar', 'Подржар'],
  ['Podžup', 'Поджуп'],
  ['Odžal', 'Оджал'],
  ['Odživ', 'Оджив'],
  ['Odžval', 'Оджвал'],
  ['Odželj', 'Оджељ'],
  ['Odžel', 'Оджел'],
  ['Odžden', 'Оджден'],
  ['Nadžir', 'Наджир'],
  ['Nadžup', 'Наджуп'],
  ['Nadrždrel', 'Надрждрел'],
  ['Nadžanj', 'Наджањ'],
  ['Nadžnj', 'Наджњ'],
  ['Nadžet', 'Наджет'],
  ['Nadživ', 'Наджив'],
  ['Nadžn', 'Наджн'],
  ['Injunkt', 'Инјункт'],
  ['Injek', 'Инјек'],
  ['panjeliniz', 'панјелиниз'],
  ['konjug', 'конјуг'],
  ['konjuk', 'конјук'],
  ['konjun', 'конјун'],
  ['anjug', 'анјуг'],
  ['podžil', 'поджил'],
  ['podžet', 'поджет'],
  ['podžanj', 'поджањ'],
  ['podžnj', 'поджњ'],
  ['predžet', 'преджет'],
  ['predživ', 'преджив'],
  ['podždr', 'подждр'],
  ['podržar', 'подржар'],
  ['podžup', 'поджуп'],
  ['odžal', 'оджал'],
  ['odživ', 'оджив'],
  ['odžval', 'оджвал'],
  ['odželj', 'оджељ'],
  ['odžel', 'оджел'],
  ['odžden', 'оджден'],
  ['nadžir', 'наджир'],
  ['nadžup', 'наджуп'],
  ['nadrždrel', 'надрждрел'],
  ['nadžanj', 'наджањ'],
  ['nadžnj', 'наджњ'],
  ['nadžet', 'наджет'],
  ['nadživ', 'наджив'],
  ['nadžn', 'наджн'],
  ['injunkt', 'инјункт'],
  ['injek', 'инјек'],
  ['NJ', 'Њ'],
  ['Nj', 'Њ'],
  ['NJ', 'Њ'],
  ['Nj', 'Њ'],
  ['LJ', 'Љ'],
  ['Lj', 'Љ'],
  ['LJ', 'Љ'],
  ['Lj', 'Љ'],
  ['nj', 'њ'],
  ['nj', 'њ'],
  ['lj', 'љ'],
  ['lj', 'љ'],
  ['a', 'а'],
  ['b', 'б'],
  ['v', 'в'],
  ['g', 'г'],
  ['dž', 'џ'],
  ['d', 'д'],
  ['đ', 'ђ'],
  ['e', 'е'],
  ['ž', 'ж'],
  ['z', 'з'],
  ['i', 'и'],
  ['j', 'ј'],
  ['k', 'к'],
  ['l', 'л'],
  ['m', 'м'],
  ['n', 'н'],
  ['o', 'о'],
  ['p', 'п'],
  ['r', 'р'],
  ['s', 'с'],
  ['t', 'т'],
  ['ć', 'ћ'],
  ['u', 'у'],
  ['f', 'ф'],
  ['h', 'х'],
  ['c', 'ц'],
  ['č', 'ч'],
  ['š', 'ш'],
  ['x', 'кс'],
  ['y', 'иј'],
  ['w', 'в'],
  ['q', 'ку'],
  ['A', 'А'],
  ['B', 'Б'],
  ['V', 'В'],
  ['G', 'Г'],
  ['DŽ', 'Џ'],
  ['Dž', 'Џ'],
  ['D', 'Д'],
  ['Đ', 'Ђ'],
  ['E', 'Е'],
  ['Ž', 'Ж'],
  ['Z', 'З'],
  ['I', 'И'],
  ['J', 'Ј'],
  ['K', 'К'],
  ['L', 'Л'],
  ['M', 'М'],
  ['N', 'Н'],
  ['O', 'О'],
  ['P', 'П'],
  ['R', 'Р'],
  ['S', 'С'],
  ['T', 'Т'],
  ['Ć', 'Ћ'],
  ['U', 'У'],
  ['F', 'Ф'],
  ['H', 'Х'],
  ['C', 'Ц'],
  ['Č', 'Ч'],
  ['Š', 'Ш'],
  ['X', 'КС'],
  ['Y', 'ИЈ'],
  ['W', 'В'],
  ['Q', 'КУ'],
]);

export default function preslovi(word, exceptions, type = '') {
  const tester = !type ? function (word) {
    return odredi(word) === 'Cyrl';
  } : function () { }

  // makes an array out of the passed "exceptions" string, if it exists
  exceptions = exceptions ? exceptions.split(', ') : false;
  type = type === 'Cyrl';

  // declaring the logic as a function because we need it again later
  const doesCyrillicExist = tester(word) || type;
  const changer = function (word) {
    for (const [key, value] of convMap) {
      const [find, replace] = [doesCyrillicExist ? value : key, doesCyrillicExist ? key : value]
      word = word.replace(RegExp(`${find}`, `gu`), `${replace}`);
    }

    return word;
  }

  // if there are any exceptions, it adds them to the map
  if (exceptions) {
    for (let except of exceptions) {
      convMap.set.apply(
        convMap,
        doesCyrillicExist ? [except, changer(except)] : [changer(except), except]
      );
    }
  }

  // applying the previously declared function
  word = changer(word);
  return word;
}
