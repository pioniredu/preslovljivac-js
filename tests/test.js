import preslovi from '../main';
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
const kompletCyrl = preslovi(`"Čovek je rođen da radi, trpi i da se bori. Ko tako ne čini, mora propasti!" - Nikola Tesla`);
const kompletLat = preslovi(`"Човек је рођен да ради, трпи и да се бори. Ко тако не чини, мора пропасти!" - Никола Тесла`);
const presumeCyrl = preslovi(`"Човек је рођен да ради, trpi i da se bori. Ko tako ne čini, mora propasti!" - Nikola Tesla`);
const presumeLat = preslovi(`"Čovek je rođen da radi, трпи и да се бори. Ко тако не чини, мора пропасти!" - Никола Тесла`);
t.is(kompletCyrl, `"Човек је рођен да ради, трпи и да се бори. Ко тако не чини, мора пропасти!" - Никола Тесла`);
t.is(kompletLat,`"Čovek je rođen da radi, trpi i da se bori. Ko tako ne čini, mora propasti!" - Nikola Tesla`);
t.is(presumeCyrl,`"Човек је рођен да ради, трпи и да се бори. Ко тако не чини, мора пропасти!" - Никола Тесла`);
t.is(presumeLat,`"Čovek je rođen da radi, trpi i da se bori. Ko tako ne čini, mora propasti!" - Nikola Tesla`);
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
