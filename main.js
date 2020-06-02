module.exports = {
    preslovi: function (word, exceptions, type = '') {
        let tester = function(){};
        if (exceptions) {
            exceptions = exceptions.split(', ');    //makes an array out of the passed "exceptions" string, if it exists
        }
        else {
            exceptions = false; //exceptions are set to false, just in case
        }
        if(!type){
         tester = function (word) {
            let regExp = /[\u{0400}-\u{04FF}]/gui;  //RegExp for matching cyrillic characters
            let cyrillicExists = true;  //assumes cyrillic is more abundantly present with a boolean value
            let wordLat = word.slice(0, 512).match(/\w/gui) || false;   //takes the latin characters from the first 512 characters in a string
            if (wordLat) {
                wordLat = wordLat.length;   //counts them, if there are any
            }
            let counterCyrl = word.slice(0, 512).match(regExp) || false;    //takes the cyrillic characters from the first 512 characters in a string
            if (counterCyrl) {
                counterCyrl = counterCyrl.length;   //counts them, if there are any
            }
            if (wordLat > counterCyrl) {    //if there's more latin than cyrillic, sets cyrillicExists to false, otherwise it remains true
                cyrillicExists = false;
            }
            return cyrillicExists;  //returns cyrillicExists, a boolean value that is used later
        }
    }
    if(type === 'Cyrl'){
        type = true;
    }
    else{
        type = false;
    }
        const convMap = new Map([   //a map containing all of the characters and exceptions
            ["Panjeliniz", "Панјелиниз"],
            ["Konjug", "Конјуг"],
            ["Konjuk", "Конјук"],
            ["Konjun", "Конјун"],
            ["Anjug", "Анјуг"],
            ["Podžil", "Поджил"],
            ["Podžet", "Поджет"],
            ["Podžanj", "Поджањ"],
            ["Podžnj", "Поджњ"],
            ["Predžet", "Преджет"],
            ["Predživ", "Преджив"],
            ["Podždr", "Подждр"],
            ["Podržar", "Подржар"],
            ["Podžup", "Поджуп"],
            ["Odžal", "Оджал"],
            ["Odživ", "Оджив"],
            ["Odžval", "Оджвал"],
            ["Odželj", "Оджељ"],
            ["Odžel", "Оджел"],
            ["Odžden", "Оджден"],
            ["Nadžir", "Наджир"],
            ["Nadžup", "Наджуп"],
            ["Nadrždrel", "Надрждрел"],
            ["Nadžanj", "Наджањ"],
            ["Nadžnj", "Наджњ"],
            ["Nadžet", "Наджет"],
            ["Nadživ", "Наджив"],
            ["Nadžn", "Наджн"],
            ["Injunkt", "Инјункт"],
            ["Injek", "Инјек"],
            ["panjeliniz", "панјелиниз"],
            ["konjug", "конјуг"],
            ["konjuk", "конјук"],
            ["konjun", "конјун"],
            ["anjug", "анјуг"],
            ["podžil", "поджил"],
            ["podžet", "поджет"],
            ["podžanj", "поджањ"],
            ["podžnj", "поджњ"],
            ["predžet", "преджет"],
            ["predživ", "преджив"],
            ["podždr", "подждр"],
            ["podržar", "подржар"],
            ["podžup", "поджуп"],
            ["odžal", "оджал"],
            ["odživ", "оджив"],
            ["odžval", "оджвал"],
            ["odželj", "оджељ"],
            ["odžel", "оджел"],
            ["odžden", "оджден"],
            ["nadžir", "наджир"],
            ["nadžup", "наджуп"],
            ["nadrždrel", "надрждрел"],
            ["nadžanj", "наджањ"],
            ["nadžnj", "наджњ"],
            ["nadžet", "наджет"],
            ["nadživ", "наджив"],
            ["nadžn", "наджн"],
            ["injunkt", "инјункт"],
            ["injek", "инјек"],
            ["NJ", "Њ"],
            ["Nj", "Њ"],
            ["NJ", "Њ"],
            ["Nj", "Њ"],
            ["LJ", "Љ"],
            ["Lj", "Љ"],
            ["LJ", "Љ"],
            ["Lj", "Љ"],
            ["nj", "њ"],
            ["nj", "њ"],
            ["lj", "љ"],
            ["lj", "љ"],
            ["a", "а"],
            ["b", "б"],
            ["v", "в"],
            ["g", "г"],
            ["dž", "џ"],
            ["d", "д"],
            ["đ", "ђ"],
            ["e", "е"],
            ["ž", "ж"],
            ["z", "з"],
            ["i", "и"],
            ["j", "ј"],
            ["k", "к"],
            ["l", "л"],
            ["m", "м"],
            ["n", "н"],
            ["o", "о"],
            ["p", "п"],
            ["r", "р"],
            ["s", "с"],
            ["t", "т"],
            ["ć", "ћ"],
            ["u", "у"],
            ["f", "ф"],
            ["h", "х"],
            ["c", "ц"],
            ["č", "ч"],
            ["š", "ш"],
            ["x", "кс"],
            ["y", "иј"],
            ["w", "в"],
            ["q", "ку"],
            ["A", "А"],
            ["B", "Б"],
            ["V", "В"],
            ["G", "Г"],
            ["DŽ", "Џ"],
            ["Dž", "Џ"],
            ["D", "Д"],
            ["Đ", "Ђ"],
            ["E", "Е"],
            ["Ž", "Ж"],
            ["Z", "З"],
            ["I", "И"],
            ["J", "Ј"],
            ["K", "К"],
            ["L", "Л"],
            ["M", "М"],
            ["N", "Н"],
            ["O", "О"],
            ["P", "П"],
            ["R", "Р"],
            ["S", "С"],
            ["T", "Т"],
            ["Ć", "Ћ"],
            ["U", "У"],
            ["F", "Ф"],
            ["H", "Х"],
            ["C", "Ц"],
            ["Č", "Ч"],
            ["Š", "Ш"],
            ["X", "КС"],
            ["Y", "ИЈ"],
            ["W", "В"],
            ["Q", "КУ"],
        ]);
        const changer = function (word) { //declaring the logic as a function because we need it again later
            if (tester(word) || type) {
                for (const [key, value] of convMap) {   //if cyrillicExists is true, it replaces cyrillic with latin as latin was less abundant
                    word = word.replace(RegExp(`${value}`, `gu`), `${key}`);                                                                                                //isus
                }
            }
            else {
                for (const [key, value] of convMap) {
                    word = word.replace(RegExp(`${key}`, 'gu'), `${value}`);   //if cyrillicExists is false, it replaces latin with cyrillic as cyrillic was less abundant
                }
            }
            return word;
        }
        if (exceptions) { //if there are any exceptions, it adds them to the map
            if (tester(word) || type) {   //adds them this way if they are cyrillic
                for (let except of exceptions) {
                    convMap.set(except, changer(except));
                }
            }
            else {
                for (let except of exceptions) {  //adds them the opposte way otherwise
                    convMap.set(changer(except), except);
                }
            }
        }
        word = changer(word);   //applying the previously declared function
        return word;
    }
}

