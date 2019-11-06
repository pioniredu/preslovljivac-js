const preslovljivac = require("preslovljivac");
const test = require('ava');
test(`Основе пресловљивача`, t => {
	t.plan(2);
	const cyrl = preslovljivac.preslovi("dobar dan");
	t.is(cyrl, 'добар дан');
	const lat = preslovljivac.preslovi("добар дан");
	t.is(lat, `dobar dan`);
});
test(`Мешовито пресловљивање`, t => {
	t.plan(2);
	const mostLat = preslovljivac.preslovi(`dobar дан`);
	t.is(mostLat, `добар дан`);
	const mostCyrl = preslovljivac.preslovi(`добар dan`);
	t.is(mostCyrl, `dobar dan`);
});
test(`Изузеци`, t => {
t.plan(4);
const konjun = preslovljivac.preslovi(`Konjunkcija`);
const konj = preslovljivac.preslovi(`konj`);
t.is(konjun, `Конјункција`);
t.is(konj,`коњ`);
const odziv = preslovljivac.preslovi('одживети');
const djurdj = preslovljivac.preslovi(`ђурђиц`);
t.is(odziv, `odživeti`);
t.is(djurdj, `đurđic`);
});
test(`Комплетно пресловљивање`, t => {
	t.plan(4);
const kompletCyrl = preslovljivac.preslovi(`123kjajaRetardAnjugpanjokošKuRuZĐĐĐ`);
const kompletLat = preslovljivac.preslovi(`јајаРетардАнјугПањ123кокошКуРуЗЂЂЂ`);
const presumeCyrl = preslovljivac.preslovi(`123kjajaRetardAnjugpanjokoшКуРуЗЂЂЂ`);
const presumeLat = preslovljivac.preslovi(`јајаРетардАнјугПањ123коkošKuRuZĐĐĐ`);
t.is(kompletCyrl, `123кјајаРетардАнјугпањокошКуРуЗЂЂЂ`);
t.is(kompletLat,`jajaRetardAnjugPanj123kokošKuRuZĐĐĐ`);
t.is(presumeCyrl,`123кјајаРетардАнјугпањокошКуРуЗЂЂЂ`);
t.is(presumeLat,`jajaRetardAnjugPanj123kokošKuRuZĐĐĐ`);
});