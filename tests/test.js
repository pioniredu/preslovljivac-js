import preslovi from '../main.js';
const test = require('ava');
test(`Основе пресловљивача`, t => {
	t.plan(2);
	const cyrl = preslovi("dobar dan");
	t.is(cyrl, 'добар дан');
	const lat = preslovi("добар дан");
	t.is(lat, `dobar dan`);
});
test(`Мешовито пресловљивање`, t => {
	t.plan(2);
	const mostLat = preslovi(`dobar дан`);
	t.is(mostLat, `добар дан`);
	const mostCyrl = preslovi(`добар dan`);
	t.is(mostCyrl, `dobar dan`);
});
test(`Изузеци`, t => {
t.plan(4);
const konjun = preslovi(`Konjunkcija`);
const konj = preslovi(`konj`);
t.is(konjun, `Конјункција`);
t.is(konj,`коњ`);
const odziv = preslovi('одживети');
const djurdj = preslovi(`ђурђиц`);
t.is(odziv, `odživeti`);
t.is(djurdj, `đurđic`);
});
test(`Комплетно пресловљивање`, t => {
	t.plan(4);
const kompletCyrl = preslovi(`123kjajaRetardAnjugpanjokošKuRuZĐĐĐ`);
const kompletLat = preslovi(`јајаРетардАнјугПањ123кокошКуРуЗЂЂЂ`);
const presumeCyrl = preslovi(`123kjajaRetardAnjugpanjokoшКуРуЗЂЂЂ`);
const presumeLat = preslovi(`јајаРетардАнјугПањ123коkošKuRuZĐĐĐ`);
t.is(kompletCyrl, `123кјајаРетардАнјугпањокошКуРуЗЂЂЂ`);
t.is(kompletLat,`jajaRetardAnjugPanj123kokošKuRuZĐĐĐ`);
t.is(presumeCyrl,`123кјајаРетардАнјугпањокошКуРуЗЂЂЂ`);
t.is(presumeLat,`jajaRetardAnjugPanj123kokošKuRuZĐĐĐ`);
});
test(`Специјали`, t => {
	t.plan(4);
	const w = preslovi(`Ww`);
	const y = preslovi(`Yy`);
	const x = preslovi(`Xx`);
	const q = preslovi(`Qq`);
	t.is(w,`Вв`);
	t.is(y,`ИЈиј`);
	t.is(x,`КСкс`);
	t.is(q,'КУку');
});
test(`Прескакање додатих изузетака`, t => {
	t.plan(2);
	const microsoft = preslovi('још речи, Microsoft, nasumične reči Google majkrosoft', 'Google, Microsoft');
	const cyrlMicro = preslovi('Мицро мица', 'Мицро');
	t.is(microsoft, 'још речи, Microsoft, насумичне речи Google мајкрософт');
	t.is(cyrlMicro, 'Мицро mica');
});
test(`Експлицитно уношење писма`, t => {
	t.plan(4);
	const text = 'nasumičan tekst';
	const cyrlText = 'насумичан текст';
	t.is(preslovi(text,'','Cyrl'), 'nasumičan tekst');
	t.is(preslovi(text,'','C'), 'насумичан текст');
	t.is(preslovi(cyrlText,'','Cyrl'), 'nasumičan tekst');
	t.is(preslovi(cyrlText,'','cd'),'насумичан текст');
});