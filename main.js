module.exports = {
    preslovi: function (word) {
        let regExp = /\p{sc=Cyrillic}/gui;
        let cyrillicExists = true;
        let tester = function (word) {
            let wordLat = word.slice(0, 512).match(/\w/gui) || false;
            if (wordLat) {
                wordLat = wordLat.length;
            }
            let counterCyrl = word.slice(0, 512).match(regExp) || false;
            if (counterCyrl) {
                counterCyrl = counterCyrl.length;
            }
            if (wordLat > counterCyrl) {
                cyrillicExists = false;
            }
            return cyrillicExists;
        }
        const convMap = new Map([
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
            ["NJ","Њ"],
            ["Nj","Њ"],
            ["NJ","Њ"],
            ["Nj","Њ"],
            ["LJ","Љ"],
            ["Lj","Љ"],
            ["LJ","Љ"],
            ["Lj","Љ"],
            ["nj","њ"],
            ["nj","њ"],
            ["lj","љ"],
            ["lj","љ"],
            ["a","а"],
            ["b","б"],
            ["v","в"],
            ["g","г"],
            ["dž","џ"],
            ["d","д"],
            ["đ","ђ"],
            ["e","е"],
            ["ž","ж"],
            ["z","з"],
            ["i","и"],
            ["j","ј"],
            ["k","к"],
            ["l","л"],
            ["m","м"],
            ["n","н"],
            ["o","о"],
            ["p","п"],
            ["r","р"],
            ["s","с"],
            ["t","т"],
            ["ć","ћ"],
            ["u","у"],
            ["f","ф"],
            ["h","х"],
            ["c","ц"],
            ["č","ч"],
            ["š","ш"],
            ["x","кс"],
            ["y","иј"],
            ["w","в"],
            ["A","А"],
            ["B","Б"],
            ["V","В"],
            ["G","Г"],
            ["DŽ","Џ"],
            ["Dž","Џ"],
            ["D","Д"],
            ["Đ","Ђ"],
            ["E","Е"],
            ["Ž","Ж"],
            ["Z","З"],
            ["I","И"],
            ["J","Ј"],
            ["K","К"],
            ["L","Л"],
            ["M","М"],
            ["N","Н"],
            ["O","О"],
            ["P","П"],
            ["R","Р"],
            ["S","С"],
            ["T","Т"],
            ["Ć","Ћ"],
            ["U","У"],
            ["F","Ф"],
            ["H","Х"],
            ["C","Ц"],
            ["Č","Ч"],
            ["Š","Ш"],
            ["X","КС"],
            ["Y","ИЈ"],
            ["W","В"],
        ]);
        if (tester(word)) {
            for (const [key, value] of convMap) {
                word = word.replace(RegExp(`${value}`, `gu`), `${key}`);                                                                        //isus
            }
        }
        else {
            for (let k of convMap.keys()) {
                word = word.replace(RegExp(k, 'gu'), convMap.get(k));
            }
        }
        return word;
    }
}

