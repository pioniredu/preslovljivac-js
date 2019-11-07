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
            ["injek", "iнјек"],
            ["DŽ", "Џ"],
            ["Dž", "Џ"],
            ["dž", "џ"],
            ["dj", "ђ"],
            ["Dj", "Ђ"],
            ["DJ", "Ђ"],
            ["LJ", "Љ"],
            ["Lj", "Љ"],
            ["lj", "љ"],
            ["NJ", "Њ"],
            ["Nj", "Њ"],
            ["nj", "њ"],
            ["Đ", "Ђ"],
            ["đ", "ђ"],
            ["a", "а"],
            ["b", "б"],
            ["v", "в"],
            ["g", "г"],
            ["d", "д"],
            ["e", "е"],
            ["ž", "ж"],
            ["z", "з"],
            ["i", "и"],
            ["j", "ј"],
            ["k", "к"],
            ["l", "л"],
            ["lj", "љ"],
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
            ["A", "А"],
            ["B", "Б"],
            ["V", "В"],
            ["G", "Г"],
            ["D", "Д"],
            ["E", "Е"],
            ["Ž", "Ж"],
            ["Z", "З"],
            ["I", "И"],
            ["J", "Ј"],
            ["K", "К"],
            ["L", "Л"],
            ["LJ", "Љ"],
            ["Lj", "Љ"],
            ["M", "М"],
            ["N", "Н"],
            ["NJ", "Њ"],
            ["Nj", "Њ"],
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
            ["Q", "КУ"],
            ["q", "ку"],
            ["X", "КС"],
            ["x", "кс"],
            ["y", "иј"],
            ["Y", "ИЈ"],
            ["w", "в"],
            ["W", "В"],
            ["Č", "Ч"],
            ["DŽ", "Џ"],
            ["Dž", "Џ"],
            ["Š", "Ш"],
        ]);
        if (tester(word)) {
            for (const [key, value] of convMap) {
                word = word.replace(RegExp(`${value}`, `gui`), `${key}`);                                                                        //isus
            }
        }
        else {
            for (let k of convMap.keys()) {
                word = word.replace(RegExp(k, 'gui'), convMap.get(k));
            }
        }
        return word;
    }
};