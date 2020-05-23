_spells = [
{
    id:"alter-self",
    name:"Альтер эго",
    en:"Alter self",
    school: "trans",
    level:{"sor":2,"wiz":2},
    components:"В, С",
    casting_time:"1 действие",
    range:"Персональное",
    target:"Вы",
    duration:"10 минут/уровень (П)",
    text:""
},
/*
Антипатия (Antipathy)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"drd":9, "sor":8, "wiz":8
    components: "В, С, М/БФ
    casting_time: "1 час
	range: "Близкое (25 футов + 5 футов/2 уровня)
    target: " Одно место (до 10  куб. фут./уровень) или один объект
	duration: "2 часа/уровень
    savings: Воля частично
    resistance: "Да
*/
/*
Астральная Проекция (Astral Projection)
    school: "necro",
    level: {"clr":9, "sor":9, "wiz":9, Путешествия
    components: "В, С, М
    casting_time: "30 минут
	range: "Касание
    target: Вы плюс одно существо/два уровня
	duration: "См. текст
    savings: Нет
    resistance: "Да
*/
/*
Аура Святости (Holy Aura)
    school: "abjur",
    level: {"clr":8, Добро 8, Удача 8
    components: "В, С, Ф
    casting_time: "1 действие
	range: "20 футов
    target: Одно существо за уровень персонажа в радиусе 20 футах сосредоточения
	duration: "1 раунд/уровень (П)
    savings: "См. текст
    resistance: "Да (без вреда)
*/
/*
Аура Скверны (Unholy Aura)
    school: "abjur", [Зло]
    level: {"clr":8, Зло 8
    components: "В, С, Ф
    casting_time: "1 действие
	range: "20 ф.
    target: Одно существо/уровень в радиусе взрыва 10 ф., вы в центре
	duration: "1 раунд/уровень (П)
    savings: "См. текст
    resistance: "Да (без вреда)
*/
/*
Барьер Из Клинков (Blade Barrier)
    school: "evoc",
    level: {"clr":6, Добро 6, Война 6
    components: "В, С.
	Время Cотворения: 1 полный раунд
    range: "Среднее (100 ф. + 10 ф./ уровень)
	effect: "Вращающийся круг клинков радиусом до 30 ф.
    duration: "10 минут/уровень
    savings: "Реакция нейтрализует (см. текст)
    resistance: "Да
*/
/*
Безжизненная Оболочка (Antilife Shell)
    school: "abjur",
    level: {Животные 6, "clr":6, "drd":6
    components: "В, С, БФ
    casting_time: "1 полный раунд
	range: "10 футов
    target: "Эманация радиусом 10 ф., вы в центре
	duration: "10 минут/уровень (П)
    savings: "Нет
    resistance: "Да
*/
{
    id:"silent-image",
    name:"Безмолвный образ",
    en:"Silent image",
    school: "illus",
    subschool: "Figment",
    level:{"brd":1,"sor":1,"wiz":1},
    components:"В, С, Ф",
    casting_time:"1 действие",
    range:"Большое (400 ф. + 40 ф./уровень)",
    effect:"Зрительный фантом, не превышающий куб 10 ф. + один куб 10 ф./уровень (ИФ)",
    target:"",
    duration:"Концентрация",
    savings: "Воля неверие (при взаимодействии)",
    resistance:"Нет",
    text:"Создает простую иллюзию по вашему выбору."
},
/*
Безошибочная Телепортация (Teleport Without Error)
    school: "conj",
    school: "Teleportation",
    level: {"sor":7, "wiz":7, Путешествия 7
*/
/*
Безумие (Insanity)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"sor":7, "wiz":7
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: "Одно живое существо
	duration: "Мгновенно
    savings: "Воля нейтрализует
    resistance: "Да
*/
{
    id:"bless",
    name:"Благословение",
    en:"Bless",
    school: "ench",
    subschool: "Compulsion",
    level:{"clr":1,"pal":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "50 футов",
    target: "Все союзники внутри 50 ф.",
	duration: "1 минута/уровень",
	savings: "Нет",
	resistance: "Да (без вреда)"
},
{
    id:"bless-water",
    name:"Благословение воды",
    en:"Bless water",
    school: "trans",
    descriptor: "Good",
    level: {"clr":1,"pal":1},
	components: "В, С, М",
	casting_time: "1 минута",
	range: "Прикосновение",
	target: "Фляжка воды",
	duration: "Мгновенно",
	savings: "Воля нейтрализует (объект)",
	resistance: "Да (объект)"
},
{
    id: "bless-weapon",
    name: "Благословение оружия",
    en:"Bless weapon",
    school: "trans",
    level: {"pal":1},
    components: "В, С",
    casting_time: "1 действие",
    range: "Прикосновение",
    target: "Оружие",
    duration: "1 минута/уровень",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "glitterdust",
    name: "Блестящая пыль",
    en: "Glitterdust",
    school: "conj",
    subschool: "Creation",
    level: {"brd":2,"sor":2,"wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    area: "Существа или объекты в пределах 10 футов",
	duration: "1 раунд/уровень",
    savings: "Воля нейтрализует (только ослепление)",
    resistance: "Да"
},
/*
Богохульство (Blasphemy)
    school: "evoc", (Зло, Звук)
    level: {"clr":7, Зло 7
    components: "В
    casting_time: "1 действие
    range: "30 ф.
    area: "Существа на расстоянии до 30 футов от вас
    duration: "Мгновенно
    savings: "Нет
    resistance: "Да
*/
/*
Божественная Мощь (Divine Power)
    school: "evoc",
    level: {"clr":4, Война 4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 минута/уровень
*/
{
    id: "divine-favor",
    name: "Божественное покровительство",
    en: "Divine favor",
    school: "evoc",
    level: {"clr": 1, "pal": 1},
    components: "В, С, БФ",
    casting_time: "1 действие",
    range: "Персональное",
    target: "Вы",
    duration: "1 минута"
},
/*
Большие Планарные Узы (Greater Planar Binding)
	    school: "conj",
    subschool: "Summoning",

	(см. текст)
	    level: {"sor":8, "wiz":8
	    components: "В, С, М
	    target: До 24 КХ стихийных духов и пришельцев, все в пределах 30 ф.
*/
/*
Большое Волшебное Оружие (Greater Magic Weapon)
	    school: "trans",
    level: {"brd":3, "clr":4, "pal":3, "sor":3, "wiz":3
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно оружие или пятьдесят стрелковых снарядов (все они должны находиться вместе во время произношения заклинания)
	duration: "1 час/уровень
    savings: "Воля нейтрализует (без вреда, объект)
    resistance: "Да (без вреда, объект)
*/
/*
Большое Восстановление (Greater Restoration)
	    school: "necro",
	    components: "В, С, ОО
	    level: {"clr":7
	    casting_time: "10 минут
*/
/*
Большое Наблюдение (Greater Scrying)
	    school: "div",
	    level: {"brd":6, "clr":7, "sor":7, "wiz":7
	    components: "В, С
	    casting_time: "1 действие
		duration: "1 час/уровень
*/
/*
Большое Рассеивание (Greater Dispelling)
	    school: "abjur",
	    level: {"brd":5, "clr":6, "drd":6, "sor":6, "wiz":6
*/
/*
Большое Созидание Теней (Greater Shadow Evocation)
	Иллюзии (Тени)
	    level: {"sor":6, "wiz":6
*/
/*
Большое Сотворение (Major Creation)
    school: "conj",
    subschool: "Creation",

    level: {"sor":5, "wiz":5
    casting_time: "10 минут
	range: "Близкое (25 ф. + 5 ф./2 уровня)
	duration: "См. текст
*/
/*
Большой Волшебный Клык (Greater Magic Fang)
	    school: "trans",
	    level: {"drd":3, "rgr":3
		range: "Близкое (25 ф. + 5 ф./2 уровня)
	    target: "Одно живое существо
		duration: "1 час/уровень
*/
/*
Большой Вызов Теней (Greater Shadow Conjuration)
	Иллюзии (Тени)
    level: {"sor":5, "wiz":5
*/
/*
Большой Образ (Major Image)
    school: "illus",
    subschool: "Figment",
    level: { "brd":3, "sor":3, "wiz":3
	duration: "Концентрация + 3 раунда
*/
/*
Большой Охранный Глиф (Greater Glyph Of Warding)
	    school: "abjur",
	    level: {"clr":6
*/
/*
Большой Планарный Союзник (Greater Planar Ally)
	    school: "conj",
    subschool: "Summoning",

	(см. текст)
	    level: {"clr":8
	effect: "До 24 КХ вызванных элементалей или пришельцев, все в пределах 30 ф. при появлении.
*/
/*
Большой Приказ (Greater Command)
	    school: "ench",     
    subschool: "Compulsion",
	(Языковое, Ментальное воздействие)
	    level: {"clr":5
	    target: Одно существо/уровень, на расстоянии не более 30 ф. друг от друга
		duration: "1 раунд/уровень
*/
/*
Буря Отмщения (Storm Of Vengeance)
    school: "conj",
    subschool: "Summoning",

    level: {"clr":9
    components: "В, С
    casting_time: "1 полный раунд
	range: "Большое (400 ф. + 40 ф./уровень)
    effect: "Облако бури радиусом 360 ф.
	duration: "Концентрация (максимум 10 раундов) (П)
    savings: "См. текст
    resistance: "Да
*/
{
    id: "bulls-strengh",
    name: "Бычья сила",
    en: "Bull’s strengh",
    school: "trans",
    level: {"brd":2, "clr":2, "sor":2, "wiz":2, },
    domen: {"Strength": 2},
    components: "В, С, М/Ф",
    casting_time: "1 действие",
    range: "Прикосновение",
    target: "Существо",
    duration: "1 час/уровень",
    savings: "Воля (без вреда)",
    resistance: "Да (без вреда)"
},
{
    id: "deathwatch",
    name: "Вахта смерти",
    en: "Deathwatch",
    school: "necro",
    level: {"clr":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Четверть круга, эманирующий от вас на все расстояние",
	duration: "10 минут/уровень",
    savings: "Нет",
    resistance: "Нет"
},
/*
Великолепный Особняк Морденкайнена (Mordenkainen’s Magnificent Mansion)
    school: "conj",
    subschool: "Creation",

    level: {"sor":7, "wiz":7
    components: "В, С, Ф
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    effect: "Особняк из иного измерения, до 3-х 10-футовых кубов/уровень (ИФ)
	duration: "1 часа/уровень
    savings: "Нет
    resistance: "Нет
*/
/*
Верный Пес Морденкайнена (Mordenkainen’s Faithful Hound)
    school: "conj",
    subschool: "Creation",

    level: {"sor":5, "wiz":5
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Стороживой пес-фантом
	duration: "1 час/уровень заклинателя или пока не разряжено, тогда 1 раунд/ уровень заклинателя
    savings: "Нет
    resistance: "Нет
*/
{
    id: "mount",
    name: "Верховое животное",
    en: "Mount",
    school: "conj",
    subschool: "Summoning",
    level: {"sor":1, "wiz":1},
	components: "В, С, М",
    casting_time: "1 полный раунд",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Одно верховое животное",
	duration: "2 часа/уровень",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "continual-flame",
    name: "Вечный огонь",
    en: "Continual flame",
    school: "illus",
    subschool: "Figment",
    level: {"clr":3, "sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    effect: "Иллюзорное пламя",
	duration: "Постоянно",
    savings: "Нет",
    resistance: "Нет"
},
/*
Взрыв (Implosion)
    school: "evoc",
    level: {"clr":9, Разрушение 9
	    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: Одно материальное существо/уровень
	duration: "Концентрация (до 4-х раундов)
    savings: "Стойкость нейтрализует
    resistance: "Да
*/
{
    id: "sound-burst",
    name: "Взрыв звука",
    en: "Sound burst",
    school: "evoc",
    descriptor: "Sonic",
    level: {"brd":2, "clr":2},
	components: "В, С, Ф/БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Радиус 10 ф.",
	duration: "Мгновенно",
    savings: "Воля частично",
    resistance: "Да"
},
/*
Взрывчатые Руны (Explosive Runes)
	    school: "abjur",     descriptor: "Force",
    level: {"sor":3, "wiz":3
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Один объект весом не более 10 фн.
	duration: "Пока не разрядится (П)
    savings: "См. текст
    resistance: "Да
*/
{
    id: "shatter",
    name: "Вибрация",
    en: "Shatter",
    school: "evoc",
    descriptor: "Sonic",
    level: {"brd":2, "clr":2, "sor":2, "wiz":2},
    domen: {"Chaos": 2, "Destruction": 2},
	components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area_or_target: "Радиус 3 ф.; или один твердый объект или одно прозрачное существо",
	duration: "Мгновенно",
    savings: "Воля нейтрализует (объект); Воля нейтрализует (объект) или Стойкость наполовину (см. текст)",
    resistance: "Да (объект)"
},
{
    id: "see-invisibility",
    name: "Видеть невидимое",
    en: "See invisibility",
    school: "div",
    level: {"brd":2, "sor":2, "wiz":2},
	components: "В, С, М",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    area: "Конус",
	duration: "10 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
/*
Вихрь (Whirlwind)
    school: "evoc", 
	descriptor: "Air",
    level: {Воздух 8, "drd":8
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    effect: "Циклон высотой 30 ф., радиусом 10 ф. у основания и 30 у вершины
	duration: "1 раунд/уровень
    savings: "Реакция нейтрализует (см. текст)
    resistance: "Да
*/
/*
Внушение (Suggestion)
    school: "ench",     
    subschool: "Compulsion",
 (Ментальное воздействие, Языковое)
    level: {"brd":2, "sor":3, "wiz":3
	    components: "В, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно живое существо
	duration: "1 час/уровень или до окончания
    savings: "Воля нейтрализует
    resistance: "Да
*/
{
    id: "magic-missile",
    name: "Волшебная стрела",
    en: "Magic missile",
    school: "evoc",
    descriptor: "Force",
    level: {"sor":1, "wiz":1},
	components: "В, С",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    target: "До пяти существ, все в пределах 15 ф.",
	duration: "Мгновенно",
    savings: "Нет",
    resistance: "Да"
},
/*
Волшебное Облачение (Magic Vestment)
    school: "trans",
    level: {"clr":3, Сила 3, Война 3
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: "Доспехи или щит
	duration: "1 час/уровень
    savings: "Воля нейтрализует (без вреда, объект)
    resistance: "Да (без вреда, объект)
*/
{
    id: "magic-weapon",
    name: "Волшебное оружие",
    en: "Magic weapon",
    school: "trans",
    level: {"brd":1, "clr":1, "pal":1, "sor":1, "wiz":1},
    domen: {"War":1},
	components: "В, С, Ф, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Оружие",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует (без вреда, объект)",
    resistance: "Да (без вреда, объект)",
},
{
    id: "magic-stone",
    name: "Волшебный камень",
    en: "Magic stone",
    school: "trans",
    level: {"clr":1},
    domen: {"Earth": 1},
	components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "До трех камешков",
	duration: "30 минут или пока не разряжено",
    savings: "Воля нейтрализует (без вреда, объект)",
    resistance: "Да (без вреда, объект)",
},
{
    id: "magic-fang",
    name: "Волшебный клык",
    en: "Magic fang",
    school: "abjur",
    level: {"drd":1, "pal":1},
	components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Живое существо",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
{
    id: "magic-mouth",
    name: "Волшебный рот",
    en: "Magic mouth",
    school: "illus",
    subschool: "Glamer",
    level: {"brd":2, "sor":2, "wiz":2},
	components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно существо или объект",
	duration: "Постоянно пока не разряжено",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)",
    text: "Говорит один раз при активации."
},
/*
Волшебный Сосуд (Magic Jar)
    school: "necro",
    level: {"sor":5, "wiz":5
    components: "В, С, Ф
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: "Одно существо
	duration: "1 час/уровень или до возвращения в свое тело
    savings: "Воля нейтрадизует (см. текст)
    resistance: "Да
*/
/*
Воображаемый Убийца (Phantasmal Killer)
    school: "illus",
    subschool: "Phantasm",
(Страх, ментальное воздействие)
    level: {"sor":4, "wiz":4
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Одно живое существо
	duration: "Мгновенно
    savings: "Воля неверие (при взаимодействии), потом Стойкость частично
    resistance: "Да
*/
/*
Воскрешение (Resurrection)
    school: "conj",
    subschool: "Healing",

    level: {"clr":7
    casting_time: "10 минут
*/
/*
Восстановление (Restoration)
    school: "conj",
    subschool: "Healing",

    level: {"clr":4
    components: "В, С, М
*/
/*
Вред (Harm)
    school: "necro",
    level: {"clr":6, Разрушение 6, "drd":7
    components: "В, С
    casting_time: "1 действие
    range: "Касание
    target: "Существо
    duration: "Мгновенно
    savings: "Нет
    resistance: "Да
*/
{
    id: "flare",
    name: "Вспышка",
    en: "Flare",
    school: "conj",
    descriptor: "Light",
    level: {"brd":0, "drd":0, "sor":0, "wiz":0},
    components: "В",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Взрыв света",
	duration: "Мгновенно",
    savings: "Стойкость нейтрализует",
    resistance: "Да",
    text: "Ослепляет одно существо (-1 атака)."
},
/*
Врата (Gate)
	Вызывание (Сотворение, Призывание)
    level: {"clr":9, "sor":9, "wiz":9
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    effect: "См. текст
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет
*/
/*
Временный Стазис (Temporal Stasis)
    school: "trans",
    level: {"sor":9, "wiz":9
	components: "В, С, М
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "Постоянно
    savings: "Нет
    resistance: "Да
*/
/*
Вуаль (Veil)
    school: "illus",
    subschool: "Glamer",
    level: {"brd":6, "sor":6, "wiz":6
    components: "В, С
    casting_time: "1 действие
	range: "Большое (400 ф.. + 40 ф./уровень)
    target: Одно или более существ, все в пределах 30 ф.
	duration: "Концентрация + 1 час/уровень (П)
    savings: "Воля нейтрализует (см. текст)
    resistance: "Да (см. текст)
*/
{
    id: "endurance",
    name: "Выносливость",
    en: "Endurance",
    school: "trans",
    level: {"clr":2, "sor":2, "wiz":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо, которого коснулись",
	duration: "1 час/уровень",
    savings: "Нет",
    resistance: "Да",
},
/*
Высасывание Жизненной Энергии (Energy Drain)
    school: "necro",
    level: {"clr":9, "sor":9, "wiz":9
	range: "Близкое (25 ф. + 5 ф./2 уровня)
	duration: "Мгновенно
    savings: "Стойкость нейтрализует (см. текст)
*/
/*
Выставленная Рука Бигби (Bigby’s Interposing Hand)
	school: "evoc",
    level: {"sor":5, "wiz":5
    components: "В, С, Ф
    casting_time: "1 действие
    range: "Среднее (100 ф. + 10 ф./ уровень)
	effect: "10-футовая рука
    duration: "1 раунд/уровень
    savings: "Нет
    resistance: "Да
*/
{
    id: "augury",
    name: "Гадание",
    en: "Augury",
    school: "div",
    level: {"clr":2},
    components: "В, С, Ф",
    casting_time: "1 действие",
    range: "Персональное",
    target: "Вы",
    duration: "Мгновенно"
},
/*
Газообразная Форма (Gaseous Form)
	school: "trans",
    level: {Воздух 3, "brd":3, "sor":3, "wiz":3
    components: "С, М/БФ
    casting_time: "1 действие
	range: "Касание
    target: "Добровольное телесное существо
	duration: "2 минуты/уровень
    savings: "Нет
    resistance: "Нет
*/
/*
Галлюцинация (Hallucinatory Terrain)
    school: "illus",
    subschool: "Glamer",
    level: {"brd":4, "sor":4, "wiz":4
    components: "В, С, М
    casting_time: "10 минут
	range: "Большое (400 ф. + 40ф./уровень)
    area: "30 футовый куб/уровень (ИФ)
	duration: "2 часа/уровень
    savings: "Воля неверие (при взаимодействии)
    resistance: "Нет

*/
/*
Гигантские Паразиты (Giant Vermin)
	school: "trans",
    level: {"clr":4, "drd":4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: До трех паразитов на расстоянии не более 30 ф.
	duration: "1 минута/уровень
    savings: "Нет
    resistance: "Да

*/
{
    id: "hypnotism",
    name: "Гипноз",
    en: "Hypnotism",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: { "brd": 1, "sor": 1, "wiz": 1},
    components: "В, С",
    casting_time: "1 действие",
    range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Несколько живых существ, все в пределах 30 футов друг от друга.",
    duration: ": 2d4 раунда",
    savings: "Воля нейтрализует",
    resistance: "Да",
    text: "Очаровывает 2d4 КХ существ."
},
{
    id: "hypnotic-pattern",
    name: "Гипнотический узор",
    en: "Hypnotic pattern",
    school: "illus",
    subschool: "Pattern",
    descriptor: "Mind-Affecting",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "(В), С, М",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    effect: "Разноцветные огни в радиусе 15 ф.",
	duration: "Концентрация + 2 раунда",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
/*
Глубокая Тьма (Deeper Darkness)
    school: "evoc", 
	descriptor: "Darkness",
    level: {"clr":3
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Объект
	duration: "1 день/уровень
    savings: "Нет
    resistance: "Нет
*/
/*
Гнев Закона (Order’s Wrath)
    school: "evoc", 
	descriptor: "Lawful",
    domen: {"Law": 4},
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 футов + 10 футов/уровень)
	area: "Неортодоксальные существа внутри области взрыва, охватывающего 30-футовый куб
	duration: "Мгновенно (1 раунд)
    savings: "Реакция частично (см. текст)
    resistance: "Да
*/
{
    id: "speak-with-animals",
    name: "Говорить с животными",
    en: "Speak with animals",
    school: "div",
    level: {"clr":2, "drd":2, "rgr":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "1 минута/уровень"
},
/*
Говорить С Камнями (Stone Tell)
    school: "div",
    level: {"drd":6
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 минута/уровень
*/
/*
Говорить С Мертвыми (Speak With Dead)
    school: "necro", 
	descriptor: "Language-Dependent",
    level: {"clr":3
    components: "В, С, БФ
    casting_time: "10 минут
	range: "10 ф.
    target: "Одно мертвое существо
	duration: "1 минута/уровень
    savings: "Воля нейтрализует (см. текст)
    resistance: "Нет
*/
/*
Говорить С Растениями (Speak With Plants)
    school: "div",
    level: {"clr":3, "drd":3, "rgr":2
    components: "В, С
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 минута/уровень
*/
/*
Горящее Облако (Incendiary Cloud)
    school: "conj",
    subschool: "Creation",
 
	descriptor: "Fire",
    level: {"sor":8, "wiz":8
	components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    effect: "Облако распространяется на 30 ф. в ширину и на 20 ф. в высоту
	duration: "1 раунд/уровень
    savings: "Реакция наполовину (см. текст)
    resistance: "Да (см. текст)
*/
/*
Густой Туман (Solid Fog)
    school: "conj",
    subschool: "Creation",

    level: {"sor":4, "wiz":4
    components: "В, С, М
	duration: "1 минута/уровень
*/
/*
Дверь Между Измерениями (Dimension Door)
    school: "conj",
    school: "Teleportation",
    level: {"brd":4, "sor":4, "wiz":4, Путешествия 4
    components: "В
    casting_time: "1 действие
	range: "Большое (400 ф. + 40ф./уровень)
    target: "Вы и существо, которого вы коснулись, и прочие добровольцы до 50 фн./уровень.
	duration: "Мгновенно
*/
{
    id: "misdirection",
    name: "Дезинформация",
    en: "Misdirection",
    school: "illus",
    subschool: "Glamer",
    level: {"brd":2, "sor":2, "wiz":2},
	components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно существо или объект, куб до 10 ф.",
	duration: "1 час/уровень",
    savings: "Воля нейтрализует (объект)",
    resistance: "Нет"
},
{
    id: "daylight",
    name: "Дневной Свет",
    en: "Daylight",
	school: "evoc",
    descriptor: "Light",
    level: {"brd":2, "clr":3, "sor":2, "wiz":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Касание",
    target: "Объект, которого коснулись",
	duration: "10 минут/уровень",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "virtue",
    name: "Добродетель",
    en: "Virtue",
    school: "trans",
    level: {"clr":0, "drd":0, "pal":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "1 минута",
    savings: "Да (без вреда)",
    resistance: "Да (без вреда)"
},
{
    id: "goodberry",
    name: "Добряника",
    en: "Goodberry",
    school: "trans",
    level: {"drd":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "2d4 свежих ягод",
	duration: "1 день/уровень",
    savings: "Нет",
    resistance: "Да"
},
{
    id: "mage-armor",
    name: "Доспехи Мага",
    en: "Mage Armor",
    school: "conj",
    subschool: "Creation",
    descriptor: "Force",
    level: {"brd":1, "sor":1, "wiz":1},
	components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "1 час/уровень (П)",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
{
    id: "animal-friendship",
    name: "Дружба С Животным",
    en: "Animal Friendship",
    school: "ench",
    subschool: "Charm",
    descriptor: "Mind-Affecting",
    level: {"drd":1, "rgr":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно животное",
	duration: "Мгновенно",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
{
    id: "shillelagh",
    name: "Дубинка",
    en: "Shillelagh",
    school: "trans",
    level: {"drd":1},
	components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Одна неволшебная дубовая дубина или посох",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует (П)",
    resistance: "Да (объект)"
},
{
    id: "barskin",
    name: "Дубовая Кожа",
    en: "Barskin",
	school: "trans",
    level: {"drd":2},
    domen: {"Plant":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
    range: "Касание",
    target: "Живое существо",
    duration: "10 минут/уровень",
    savings: "Нет",
    resistance: "Да (без вреда)",
},
{
    id: "spiritual-weapon",
    name: "Духовное Оружие",
    en: "Spiritual Weapon",
    school: "evoc",
    descriptor: "Force",
    level: {"clr":2},
    domen: {"War":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    effect: "Волшебное оружие из энергии",
	duration: "1 раунд/уровень (П)",
    savings: "Нет",
    resistance: "Да"
},
/*
Душеловка (Trap The Soul)
    school: "conj",
    subschool: "Summoning",
    level: {"sor":8, "wiz":8
    components: "В, С, М, (Ф)
    casting_time: "1 действие или см. текст
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно существо
	duration: "Постоянно (см. текст)
    savings: "См. текст
    resistance: "Да (см. текст)

*/
/*
Дышать Под Водой (Water Breathing)
school: "trans",
    level: {"clr":3, "drd":3, "sor":3, "wiz":3, Вода 3
    components: "В, С, M/БФ
    casting_time: "1 действие
	range: "Касание
    target: "Живые существа.
	duration: "2 часа/уровень (см. текст)
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Желание (Wish)
Универсальное
    level: {"sor":9, "wiz":9
    components: "В, ОО
Время Сотворения : 1 действие
	range: "См. текст
Цель, Эффект или     area: "См. текст
	duration: "См. текст
    savings: "См. текст
    resistance: "Да

*/
/*
Железное Дерево (Ironwood)
school: "trans",
    level: {"drd":6
	    components: "В, С
    casting_time: "1 минута за каждый превращенный фунт
	range: "Касание
    target: "5 фн. дерева/уровень
	duration: "1 день/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
/*
Железное Тело (Iron Body)
school: "trans",
    level: {Земля 8, "sor":8, "wiz":8
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 минута/уровень (П)

*/
/*
Живой Дуб (Liveoak)
school: "trans",
    level: {"drd":6
	    components: "В, С
    casting_time: "10 минут
	range: "Касание
    target: "Дерево
	duration: "1 день/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
{
    id: "animal-messenger",
    name: "Животное-Посланник",
    en: "Animal Messenger",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"clr":2, "drd":2, "rgr":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 футов + 5 футов на 2 уровня)",
    target: "Одно миниатбрное животное",
	duration: "1 день/уровень",
    savings: "Нет",
    resistance: "Да"
},
/*
Животный Транс (Animal Trance)
    school: "ench",     
    subschool: "Compulsion",
(Ментальное воздействие, Звуковое)
    level: {"brd":2, "drd":8
    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Животные, бестии или волшебные бестии с Интеллектом 1 или 2
	duration: "Концетрация
    savings: "Воля нейтрализует (см. текст)
    resistance: "Да

*/
{
    id: "grease",
    name: "Жир",
    en: "Grease",
    school: "conj",
    subschool: "Creation",
    level: {"brd":1, "sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target_or_area: "Один объект или квадрат размером 10 x 10",
	duration: "1 раунд/уровень",
    savings: "См. текст",
    resistance: "Нет",
    text: "Делает квадрат со стороной 10 футов или предмет скользким."
},
/*
Жуть (Weird)
    school: "illus",
    subschool: "Phantasm",
    descriptor: ["Fear", "Mind-Affecting"],
    level: {"sor":9, "wiz":9
    target: Любое число существ, все в пределах 30 ф.
*/
{
    id: "disguise-self",
    name: "Загримироваться",
    en: "Disguise Self",
    school: "illus",
    subschool: "Glamer",
    level: {"brd":1},
    components: "В, С",
    casting_time: "1 действие",
    range: "Персональное",
    target: "Вы",
    duration: "1 минут/уровень (П)",
    text: "Изменяет вашу внешность."
},
/*
Заданный Образ (Programmed Image)
    school: "illus",
    subschool: "Figment",
    level: {"brd":6, "sor":6, "wiz":6
effect: "Визуальный фантом, который не может быть больше 20-футового куба + одного 10-футового куба/уровень (ИФ)
	duration: "Постоянно, пока не сработало, потом 1 раунд/уровень
*/
/*
Заклинание Про Запас (Сontingency)
    school: "evoc",
    level: {"sor":6, "wiz":6
    components: "В, С, М, Ф
    casting_time: "Минимум 10 минут (см. текст)
    range: "Персональное
    target: "Вы
    duration: "1 день/уровень или пока не будет рассеяно
*/
{
    id: "delay-poison",
    name: "Замедление Яда",
    en: "Delay Poison",
    school: "conj",
    subschool: "Healing",
    level: {"brd":2, "clr":2, "drd":2, "pal":2, "rgr":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
    range: "Касание",
    target: "Существо",
    duration: "1 час/уровень",
    savings: "Стойкость нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
/*
Замешательство (Confusion)
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":3, "sor":4, "wiz":4, Обман 4
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: Все существа в радиусе 15 ф.
	duration: "1 раунд/уровень
    savings: "Воля нейтрализует
    resistance: "Да
*/
{
    id: "confusion-lesser",
    name: "Замешательство, малое",
    en: "Confusion, Lesser",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":1},
    components: "В, С, М/БФ",
    range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно живое существо",
    duration: "1 раунд",
    text: "Одно существо в замешательстве на 1 раунд."
},
/*
Зараза (Contagion)
    school: "necro",
    level: {"clr":3, Разрушение 3, "drd":3, "sor":4, "wiz":4
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Живое существо
	duration: "Мгновенно
    savings: "Реакция нейтрализует
    resistance: "Да
*/
{
    id: "protection-from-good",
    name: "Защита От Добра",
    en: "Protection From Good",
    school: "abjur",
    descriptor: "Evil",
    level: {"brd":1, "clr":1, "sor":1, "wiz":1},
    domen: {"Evil":1}
},
/*
Защита От Заклинаний (Protection From Spells)
    school: "abjur",
    level: {Магия 8, "sor":8, "wiz":8
    components: "В, С, М, Ф
    casting_time: "1 действие
	range: "Касание
    target: До одного существа/4 уровня, которых вы коснулись
	duration: "10 минут/уровень
    savings: "Воля нейтрализуюет (без вреда)
    resistance: "Да (без вреда)
*/
{
    id: "protection-from-law",
    name: "Защита От Закона",
    en: "Protection From Law",
    school: "abjur",
    descriptor: "Chaotic",
    level: {"brd":1, "clr":1, "sor":1, "wiz":1},
    domen: {"Chaos":1}
},
{
    id: "protection-from-evil",
    name: "Защита От Зла",
    en: "Protection From Evil",
    school: "abjur",
    descriptor: "Good",
    level: {"brd":1, "clr":1, "pal":1, "sor":1, "wiz":1},
    domen: {"Good":1},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "10 минут/уровень (П)",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (см. текст)"
},
/*
Защита От Паразитов (Repel Vermin)
    school: "abjur",
    level: {Животные 4, "clr":4, "drd":4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "10 ф.
    area: "Эманация радиусом 10 ф., вы в центре
	duration: "10 минут/уровень
    savings: "Нет или Воля нейтрализует (см. текст)
    resistance: "Да
*/
/*
Заточение (Imprisonment)
    school: "abjur",
    level: {"sor":9, "wiz":9
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да

*/
/*
Защита От Отрицательной Энергии (Negative Energy Protection)
    school: "abjur",
    level: {"clr":3
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Одно живое существо
	duration: "1 раунд/уровень
    savings: " Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Защита От Паразитов (Repel Vermin)
    school: "abjur",
    level: {Животные 4, "clr":4, "drd":4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "10 ф.
    area: "Эманация радиусом 10 ф., вы в центре
	duration: "10 минут/уровень
    savings: "Нет или Воля нейтрализует (см. текст)
    resistance: "Да

*/
/*
Защита От Смерти (Death Ward)
	    school: "necro",
	    level: {"clr":4, Смерть 4, "drd":5, "pal":4
	    components: "В, С, БФ
		range: "Касание
	    target: "Живое существо
		duration: "19 минут/уровень
	    savings: "Нет
	    resistance: "Да (без вреда)
*/
/*
Защита От Стихий (Protection From Elements)
    school: "abjur",
    level: {"clr":3, "drd":3, Удача 3, Защита 3, "rgr":2, "sor":3, "wiz":3
    components: "В, С, БФ
    casting_time: "1 действие
	duration: "10 минут/уровень или пока не разрядится
*/
{
    id: "protection-from-arrows",
    name: "Защита От Стрел",
    en: "Protection From Arrows",
    school: "abjur",
    level: {"sor":2, "wiz":2},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "10 минут/уровень или до разряжения",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
    {
        id: "protection-from-chaos",
        name: "Защита От Хаоса",
        en: "Protection From Chaos",
        school: "abjur",
        descriptor: "Lawful",
        level: {"brd": 1, "clr": 1, "sor": 1, "wiz": 1},
        domen: {"Law": 1}
    },
/*
Заблуждение (Mislead)
Иллюзии (Фантомы, Мороки)
    level: {"brd":5, Удача 6, "sor":6, "wiz":6, Обман 6
    components: "С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
Цель/effect: "Вы/один иллюзорный двойник
	duration: "1 раунд/уровень (П)
    savings: "Нет/Воля неверие (при взаимодействии)
    resistance: "Нет

*/
/*
Замедление (Slow)
school: "trans",
    level: {"brd":3, "sor":3, "wiz":3
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно существо/уровень, все в пределах 30 ф.
	duration: "1 раунд/уровень
    savings: "Воля нейтрализует
    resistance: "Да
*/
/*
Запрет (Forbiddance)
    school: "abjur",
    level: {"clr":6
    components: "В, С, М, БФ
    casting_time: "6 раундов
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "60-футовый куб/уровень (ИФ)
	duration: "Постоянно
    savings: "См. текст
    resistance: "Да
*/
/*
Захват Души (Soul Bind)
    school: "necro",
    level: {"clr":9, "sor":9, "wiz":9
    components: "В, С, Ф
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Труп
	duration: "Постоянно
    savings: "Воля нейтрализует
    resistance: "Нет
*/
{
    id: "mirror-image",
    name: "Зеркальное Отражение",
    en: "Mirror Image",
    school: "illus",
    subschool: "Figment",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Персональное (см. текст)",
    target: "Вы",
	duration: "1 минута/уровень"
},
/*
Землетрясение (Earthquake)
    school: "evoc",
    level: {"clr":8, Разрушение 8, "drd":9, Земля 7
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Большое (400 ф. + 40ф./уровень)
    area: "Радиус 5 ф./уровень (ИФ)
	duration: "1 раунд
    savings: "См. текст
    resistance: "Нет
*/
/*
Зловонное Облако (Stinking Cloud)
    school: "conj",
    subschool: "Creation",
    level: {"sor":3, "wiz":3
    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    effect: "Облако в радиусе 30 ф., 20 ф. высотой
	duration: "1 раунд/уровень
    savings: "Стойкость нейтрализует (см. текст)
    resistance: "Да
*/
/*
Знак Правосудия (Mark Of Justice)
school: "trans",
    level: {"clr":5
    components: "В, С, БФ
    casting_time: "10 минут
	range: "Касание
    target: "Существо
	duration: "Постоянно (см. текст)
    savings: "Нет
    resistance: "Да
*/
/*
Знание Легенд (Legend Lore)
    school: "div",
    level: {"brd":4, Знание 7, "sor":6, "wiz":6
    components: "В, С, М, Ф
    casting_time: "см. текст
	range: "Персональное
    target: "Вы
	duration: "См. текст
*/
{
    id: "zone of truth",
    name: "Зона Правды",
    en: "Zone Of Truth",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"clr":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "5-футовый радиус",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
{
    id: "identify",
    name: "Идентификация",
    en: "Identify",
    school: "div",
    level: {"brd":1, "sor":1, "wiz":1},
    domen: {"Magic":2},
    components: "В, С, М/БФ",
    casting_time: "1 час",
	range: "Касание",
    target: "До одного объекта за уровень волшебника",
	duration: "Мгновенно",
    savings: "Нет",
    resistance: "Нет",
    text: "Определяет свойства магического предмета."
},
/*
Изгнание (Banishment)
    school: "abjur",
    level: {"clr":6, "sor":7, "wiz":7
    components: "В, С, Ф
    casting_time: "1 действие
    range: "Близкое (25 футов + 5 фт./2 уровня)
    target: Одно или более существ из других измерений, все в пределах 30 ф.
    duration: "Мгновенно
    savings: "Воля нейтрализует
    resistance: "Да
*/
{
    id: "remove-fear",
    name: "Изгнание Страха",
    en: "Remove Fear",
    school: "abjur",
    level: {"clr":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно существо плюс еще одно/четыре уровня, все в пределах 30 ф.",
	duration: "10 минут и см. текст",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)",
    text: "Подавляет страх или дает бонус +4 к спасброскам против страха для одного субъекта + еще одного/уровень."
},
/*
Изготовление (Fabricate)
	school: "trans",
    level: {"sor":5, "wiz":5
    components: "В, С, М
    casting_time: "См. текст
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "До 10 кб. ф./уровень (см. текст)
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет
*/
{
    id: "remove-paralysis",
    name: "Излечение Паралича",
    en: "Remove Paralysis",
    school: "conj",
    level: {"clr":2, "pal":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "До четырех существ, все в пределах 30 ф.",
	duration: "Мгновенно",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
/*
Излечение Слепоты/Глухоты (Remove Blindness/Deafness)
    school: "conj",
    subschool: "Healing",
    level: {"clr":3, "pal":3
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "Мгновенно
    savings: "Стойкость нейтрализует (без вреда)
    resistance: "Да (без вреда)
*/
/*
Изменение Памяти (Modify Memory)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":4
    components: "В, С
    casting_time: "1 действие (см. текст)
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно живое существо
	duration: "Постоянно
    savings: "Воля нейтрализует
    resistance: "Да
*/
{
    id: "change-self",
    name: "Изменение Внешности",
    en: "Change Self",
    school: "illus",
    subschool: "Glamer",
    level: {"sor":1, "wiz":1},
    domen: {"Trickery":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Существо",
    target: "Вы",
	duration: "10 минут/уровень (П)"
},
/*
Изоляция (Sequester)
    school: "abjur",
    level: {"sor":7, "wiz":7
    components: "В, С, М
    casting_time: "1 действие
	range: "Касание
    target: "Одно существо или объект (куб до 2 ф./уровень)
	duration: "1 день/уровень (П)
    savings: "Воля нейтрализует (объект)
    resistance: "Да (объект)
*/
/*
Изречение (Dictum)
    school: "evoc", (Закон, Звук)
    level: {"clr":7, Закон 7
    components: "В
    casting_time: "1 действие
	range: "30 ф.
    area: "Существа в радиусе 30 ф. от персонажа
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да

*/
{
    id: "daze",
    name: "Изумление",
    en: "Daze",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":0, "sor":0, "wiz":0},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5ф./2 уровня)",
    target: "Одна персона",
	duration: "1 раунд",
    savings: "Воля нейтрализует",
    resistance: "Да",
    text: "Существо типа гуманоид с КХ 4 и менее теряет свое следующее действие."
},
/*
Иллюзорная Стена (Illusory Wall)
    school: "illus",
    subschool: "Phantasm",
    level: {"sor":4, "wiz":4
	    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    effect: "Образ 1 ф. х 10 ф. х 10 ф.
	duration: "Постоянно
    savings: "Воля неверие (при взаимодействии)
    resistance: "Нет

*/
/*
Иллюзорное Письмо (Illusory Script)
    school: "illus",
    subschool: "Pattern",
    descriptor: "Mind-Affecting",
    level: {"brd":3, "sor":3, "wiz":3
    components: "В, С, М
    casting_time: "1 минута или дольше
	range: "Касание
    target: "Один объект весом не более 10 фн.
	duration: "1 день/уровень
    savings: "Воля нейтрализует (см. текст)
    resistance: "Да

*/
/*
Иммунитет К Заклинаниям (Spell Immunity)
    school: "abjur",
    level: {"clr":4, Защита 4, Сила 4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "10 минут/уровень
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Искупление (Atonement)
    school: "abjur",
    level: {"clr":5, "drd":5
    components: "В, С, М, Ф, БФ, ОО
    casting_time: "1 час
    range: "Касание
    target: "Живое существо
    duration: "Мгновенное
    savings: "Нет
    resistance: "Да
*/
/*
Исцеление (Heal)
    school: "conj",
    subschool: "Healing",
    level: {"clr":6, "drd":7, Лечение 6
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да (без вреда)
*/
/*
Излечение Болезни (Remove Disease)
    school: "conj",
    subschool: "Healing",
    level: {"brd":3, "clr":3, "drd":3, "rgr":3
	    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "Мгновенно
    savings: "Стойкость нейтрализует (без вреда)
    resistance: "Да (без вреда)
*/
/*
Излечение Верхового Животного (Heal Mount)
    school: "conj",
    subschool: "Healing",
    level: {"pal":3
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Ваше верховое животное
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да (без вреда)
*/
{
    id: "warp-wood",
    name: "Искривление Древесины",
    en: "Warp Wood",
    school: "trans",
    level: {"drd":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "1 ф. древесины/уровень, все в пределах радиуса 20 ф.",
	duration: "Постоянно",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (предмет)"
},
{
    id: "tashas-hideous-laughter",
    name: "Истеричный Смех Таши",
    en: "Tasha’s Hideous Laughter",
    school: "ench",
    subschool: "Compulsion",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно существо (см. текст)",
	duration: "1d3 раунда",
    savings: "Воля нейтрализует",
    resistance: "Да",
    text: "Существо теряет действия на 1 раунд/уровень."
},
/*
Истинное Видение (True Seeing)
    school: "div",
    level: {"clr":5, "drd":7, Знание 5, "sor":6, "wiz":6
    components: "В, С, М
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "1 минута/уровень
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)
*/
/*
Истинное Воскрешение (True Resurrection)
    school: "conj",
    subschool: "Healing",
    level: {"clr":9, Лечение 9
    casting_time: "10 минут
*/
{
    id: "true-strike",
    name: "Истинный Удар",
    en: "True Strike",
    school: "div",
    level: {"sor":1, "wiz":1},
    components: "В, Ф",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "1 раунд"
},
/*
Камень В Плоть (Stone To Flesh)
school: "trans",
    level: {"sor":6, "wiz":6
    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: "Одно окаменевшее существо или каменный цилиндр от 1 до 3 ф. в диаметре и до 10 ф. длиной
	duration: "Мгновенно
    savings: "Стойкость нейтрализует (см. текст)
    resistance: "Да
*/
/*
Камнекожа (Stoneskin)
    school: "abjur",
    level: {Земля 6, "sor":4, "wiz":4, Сила 6
	    components: "В, С, М
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "10 минут/уровень или пока не разряжено
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
{
    id: "melfs-acid-arrow",
    name: "Кислотная Стрела Мелфа",
    en: "Melf’s Acid Arrow",
    school: "conj",
    subschool: "Creation",
    descriptor: "Acid",
    level: {"sor":2, "wiz":2},
    components: "В, С, М, Ф",
    casting_time: "1 действие",
	range: "Большое (400 ф. + 40 ф./уровень)",
    effect: "Одна стрела кислоты",
	duration: "1 раунд + 1 раунд/три уровня",
    savings: "Нет",
    resistance: "Да"
},
/*
Кислотный Туман (Acid Fog)
    school: "conj",
    subschool: "Creation",
    descriptor: "Acid",
    level: {"sor":6, "wiz":6, Вода 7
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "1 действие
effect: "Туман 30 ф., 20 ф. высотой
	duration: "1 раунд/уровень
    savings: "Нет
    resistance: "Да

*/
{
    id: "lullaby",
    name: "Колыбельная",
    en: "Lullaby",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":0},
    components: "В, С",
    casting_time: "1 действие",
    range: "Средннее (100 ф. +10 ф./уровень)",
    area: "Все живые существа в области взрыва 10 ф",
    duration:"Концентрация + 1 раунд/уровень (П)",
    savings: "Воля нейтрализует",
    resistance: "Да",
    text: "Цель становится сонной; -5 к проверкам Обнаружение и Тонкий Слух, -2 к спасброску Воли против сна."
},
/*
Клон (Clone)
	    school: "necro",
	    level: {"sor":8, "wiz":8
	    components: "В, С, М, Ф
    casting_time: "10 минут
	range: "Касание
effect: "Один клон
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Контакт С Другим Измерением (Contact Other Plane)
	    school: "div",
	    level: {"brd":5, "sor":5, "wiz":5
	    components: "В
	    casting_time: "10 минут
		range: "Персональное
	    target: "Вы
		duration: "Концентрация

*/
/*
Конус Холода (Cone Of Cold)
	    school: "evoc", 
	descriptor: "Cold",
    level: {"sor":5, "wiz":5, Вода 6
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Конус
	duration: "Мгновенно
    savings: "Рекция наполовину
	    resistance: "Да

*/
/*
Конь-Призрак (Phantom Steed)
    school: "conj",
    subschool: "Creation",

    level: {"brd":3, "sor":3, "wiz":3
	    components: "В, С
    casting_time: "10 минут
	range: "0 ф.
effect: "Одно квази-реальное, конеподобное существо
	duration: "1 час/уровень
    savings: "Нет
    resistance: "Нет

*/
{
    id: "cats-grace",
    name: "Кошачья Грация",
    en: "Cat's Grace",
	school: "trans",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "1 час/уровень",
    savings: "Нет",
    resistance: "Да"
},
/*
Крик (Shout)
    school: "evoc", 
	descriptor: "Sonic",
    level: {"brd":4, "sor":4, "wiz":4
    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Конус
	duration: "Мгновенно
    savings: "Стойкость частично (см. текст) (объект)
    resistance: "Да (объект)

*/
/*
Круг Погибели (Circle Of Doom)
    school: "necro",
    level: {"clr":5, Разрушение 5
    components: "В, С
    casting_time: "1 действие
	range: "20 футов
    area: "Все враги и нежить в области взрыва 20 ф.
	duration: "Мгновенная
    savings: "Реакция наполовину
    resistance: "Да

*/
/*
Круг Смерти (Circle Of Death)
    school: "necro",
    level: {"sor":6, "wiz":6
    components: "В, С, М
    casting_time: "1 действие
	range: "Средннее (100 ф. +10 ф./уровень)
    area: "Живые существа в радиуса взрыва 50 ф.
	duration: "Мгновенно
    savings: "Реакция нейтрализует
    resistance: "Да

*/
/*
Круг Телепортации (Teleportation Circle)
    school: "conj",
    school: "Teleportation",
    level: {"sor":9, "wiz":9
    components: "В, М
    casting_time: "10 минут
	range: "Касание
    effect: "Круг радиусом до 5 ф., который телепортирует тех, кто активирует его
	duration: "10 минут/уровень (П)
    savings: "Нет
    resistance: "Да

*/
/*
Лабиринт (Maze)
    school: "conj",
    subschool: "Creation",
     descriptor: "Force",
    level: {"sor":8, "wiz":8
    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно существо
	duration: "См. текст
    savings: "Нет
    resistance: "Нет

*/
{
    id: "levitate",
    name: "Левитация",
    en: "Levitate",
    school: "trans",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Персональное или Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Вы или одно согласное существо или один объект (общий вес до 100 фн./уровень)",
	duration: "10 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "chill-touch",
    name: "Леденящее Прикосновение",
    en: "Chill Touch",
    school: "necro",
    level: {"sor":1, "wiz":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Касание",
    target: "Одно существо/уровень персонажа",
	duration: "Мгновенная",
    savings: "Реакция частично",
    resistance: "Да"
},
/*
Ледяная Сфера Отилюка (Otiluke’s Freezing Sphere)
    school: "evoc", 
	descriptor: "Cold",
    level: {"sor":6, "wiz":6
    components: "В, С, Ф
    casting_time: "1 действие
	range: "см. текст
Цель, Эффект или     area: "см. текст
	duration: "см. текст
    savings: "см. текст
    resistance: "Да

*/
{
    id: "chill-metal",
    name: "Ледяной Металл",
    en: "Chill Metal",
    school: "trans",
	descriptor: "Cold",
    level: {"drd":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Близкое (25 футов +5 фт./2 уровня)",
    target: "Металлическое снаряжение одного существа/два уровня, все в пределах 30 ф.",
    duration: "7 раундов",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)"
},
/*
Ледяной Шторм (Ice Storm)
    school: "evoc", 
	descriptor: "Cold",
    level: {"drd":5, "sor":4, "wiz":4
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    area: "Цилиндр (20 ф. радиус, 40 ф. высота)
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да

*/
{
    id: "cure-light-wounds",
    name: "Лечение Легких Ран",
    en: "Cure Light Wounds",
    school: "conj",
    subschool: "Healing",
    level: {"brd": 1, "clr": 1, "drd": 1, "pal": 1, "rog": 2},
    domen: {"Healing": 1},
    components: "В, С",
    casting_time: "1 действие",
    range: "Касание",
    target: "Существо, которого коснулись",
    duration: "Мгновенно",
    savings: "Воля наполовину (без вреда) (см. текст)",
    resistance: "Да (без вреда)",
    text: "Вылечивает урон 1d8 +1/уровень (максимум +5)."
},
{
    id: "cure-minor-wounds",
    name: "Лечение Мелких Ран",
    en: "Cure Minor Wounds",
    school: "conj",
    subschool: "Healing",
    level: {"clr":0, "drd":0}
},
/*
Лечение Серьезных Ран (Cure Serious Wounds)
    school: "conj",
    subschool: "Healing",
    level: {"brd":3, "clr":3, "drd":4, "pal":4, "rgr":4, Лечение 3

*/
/*
Лечение Смертельных Ран (Cure Critical Wounds)
    school: "conj",
    subschool: "Healing",
    level: {"brd":4, "clr":4, "drd":5, Лечение 4

*/
{
    id: "cure-moderate-wounds",
    name: "Лечение Средних Ран",
    en: "Cure Moderate Wounds",
    school: "conj",
    subschool: "Healing",
    level: {"brd":2, "clr":2, "drd":3, "pal":3},
    domen: {"Healing": 2}
},
{
    id: "leomunds-trap",
    name: "Ловушка Леомунда",
    en: "Leomund's Trap",
    school: "illus",
    subschool: "Glamer",
    level: {"sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Объект",
	duration: "Постоянно",
    savings: "Нет",
    resistance: "Нет"
},
/*
Ложное Видение (False Vision)
    school: "illus",
    subschool: "Glamer",
    level: {"brd":5, "sor":5, "wiz":5, Обман 5
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Эманация радиуса 25 ф. + 5ф./2 уровня с центром там, где вы были при сотворении заклинания
	duration: "1 минута/уровень
    savings: Нет
    resistance: "Нет

*/
{
    id: "ray-of-enfeeblement",
    name: "Луч Слабости",
    en: "Ray Of Enfeeblement",
    school: "necro",
    level: {"sor":1, "wiz":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Луч",
	duration: "1 минута/уровень",
    savings: "Стойкость нейтрализует",
    resistance: "Да"
},
{
    id: "ray-of-frost",
    name: "Луч Холода",
    en: "Ray Of Frost",
    school: "conj",
    subschool: "Creation",
	descriptor: "Cold",
    level: {"sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Луч",
	duration: "Мгновенно",
    savings: "Нет",
    resistance: "Да"
},
/*
Любопытный Глаз (Prying Eyes)
    school: "div",
    level: {"sor":5, "wiz":5
    components: "В, С, М
    casting_time: "1 действие
	range: "Одна миля
    effect: "Создает 1d4 парящих глаза + 1 глаз/уровень
	duration: "1 час/уровень
    savings: "Нет
    resistance: "Нет

*/
{
    id: "nystuls-magic-aura",
    name: "Магическая Аура Нистула",
    en: "Nystul’s Magic Aura",
    school: "illus",
    subschool: "Glamer",
    level: {"sor":1, "wiz":1},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Касание",
    target: "Один предмет весом до 5 фунтов/уровень",
	duration: "1 день/уровень",
    savings: "Нет (см. текст)",
    resistance: "Нет",
    text: "Наделяет объект ложной аурой."
},
{
    id: "arcane-mark",
    name: "Магический Знак",
    en: "Arcane Mark",
    school:"univ",
    level: {"sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "Касание",
    effect: "Одна личная руна или отметка, размером не больше 1 кв. фута",
	duration: "Постоянно",
    savings: "Нет",
    resistance: "Нет"
},
/*
Магическое Око (Arcane Eye)
    school: "div",
    level: {"sor":4, "wiz":4
    components: "В, С, М
    casting_time: "10 минут
Радиус: Неограниченно
effect: "Магический сенсор
	duration: "1 минута/уровень
    savings: Нет
    resistance: "Нет

*/
/*
Магический Круг Против Добра (Magic Circle Against Good)
    school: "abjur", 
	descriptor: "Evil",
    level: {"brd":3, "clr":3, Зло 3, "pal":3, "sor":3, "wiz":3

*/
/*
Магический Круг Против Закона (Magic Circle Against Law)
    school: "abjur", 
	descriptor: "Chaotic",
    level: {"brd":3, "clr":3, Хаос 3, "pal":3, "sor":3, "wiz":3

*/
/*
Магический Круг Против Зла (Magic Circle Against Evil)
    school: "abjur", 
	descriptor: "Good",
    level: {"brd":3, "clr":3, Добро 3, "pal":3, "sor":3, "wiz":3
    area: "Эманиция 10 ф. от существа, которого коснулись
	duration: "10 минут/уровень
    resistance: "Нет (см. текст)

*/
/*
Магический Круг Против Хаоса (Magic Circle Against Chaos)
    school: "abjur", 
	descriptor: "Lawful",
    level: {"brd":3, "clr":3, Закон 3, "pal":3, "sor":3, "wiz":3

*/
/*
Магический Мираж (Mirage Arcana)
    school: "illus",
    subschool: "Glamer",
    level: {"brd":5, "sor":5, "wiz":5
	    components: "В, С
    casting_time: "1 действие
    area: "Один 20-футовый куб/уровень (ИФ)
	duration: "Концентрация +1 час/уровень (П)

*/
{
    id: "lesser-restoration",
    name: "Малое Восстановление",
    en: "Lesser Restoration",
    school: "conj",
    subschool: "Healing",
    level: {"clr":2, "drd":2},
    components: "В, С",
    casting_time: "3 раунда",
	range: "Касание",
    target: "Существо",
	duration: "Мгновенно",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
/*
Малое Сотворение (Minor Creation)
    school: "conj",
    subschool: "Creation",
    level: {"sor":4, "wiz":4
    components: "В, С, М
    casting_time: "1 минута
	range: "0 ф.
effect: "Ненадетый, немагический предмет из неживой растительной материи, до 1 ф. кб./уровень
	duration: "1 час/уровень
    savings: "Нет
    resistance: "Нет

*/
/*
Малые Планарные Узы (Lesser Planar Binding)
Вызывание (Зов) (см. текст)
    level: {"sor":5, "wiz":5
	    components: "В, С
    casting_time: "10 минут
	range: "Близкое (25 ф. + 5 ф./2 уровня) (см. текст)
    target: "Один элементаль или пришелец до 8 КХ
	duration: "Мгновенно
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Малый Обет (Lesser Geas)
    school: "ench",     
    subschool: "Compulsion",
(Языковое, Ментальное воздействие)
    level: {"brd":3, "sor":4, "wiz":4
	    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно живое существо до 7 КХ
	duration: "1 день/уровень или до разряжения (П)
    savings: "Воля нейтрализует
    resistance: "Да

*/
{
    id: "minor-image",
    name: "Малый Образ",
    en: "Minor Image",
    school: "illus",
    subschool: "Glamer",
    level: {"brd":2, "sor":2, "wiz":2},
	duration: "Концентрация +2 раунда"
},
/*
Малый Планарный Союзник (Lesser Planar Ally)
Вызывание (Зов) (см. текст)
    level: {"clr":4
	    components: "В, С, БФ
    casting_time: "10 минут
	range: "Близкое (25 ф. + 5 ф./2 уровня) (см. текст)
effect: "Один призванный элементаль или пришелец до 8 КХ
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Малый Шар Неуязвимости (Minor Globe Of Invulnerability)
    school: "abjur",
    level: {"sor":4, "wiz":4
	    components: "В, С, М
    casting_time: "1 действие
	range: "10 ф.
    area: "Спектральные эманации на 10 ф., вы в центре
	duration: "1 раунд/уровень
    savings: "Нет
    resistance: "Нет

*/
{
    id: "arcane lock",
    name: "Магический Замок",
    en: "Arcane Lock",
    school: "abjur",
    level: {"sor":2, "wiz":2},
    components: "В, С, M",
    casting_time: "1 действие",
	range: "Касание",
    target: "Дверь, ворота или сундук, до 30 кв. ф./уровень",
	duration: "Постоянно",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "blur",
    name: "Марево",
    en: "Blur",
    school: "illus",
    subschool: "Glamer",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "В",
    casting_time: "1 действие",
    range: "Касание",
    target: "Существо",
    duration: "1 минута/уровень",
    savings: "Воля (без вреда)",
    resistance: "Да (без вреда)"
},
/*
Массовая Невидимость (Mass Invisibility)
    school: "illus",
    subschool: "Glamer",
    level: {"sor":7, "wiz":7
    components: "В, С, М
	range: "Большое (400 ф. + 40 ф./уровень)
    target: Любое количество существ, все в пределах 180 ф.

*/
/*
Массовая Спешка (Mass Haste)
school: "trans",
    level: {"brd":6, "sor":6, "wiz":6
    target: Одно существо/уровень, все в пределах 30 ф.

*/
/*
Массовое Внушение (Mass Suggestion)
    school: "ench",     
    subschool: "Compulsion",
(Ментальное воздействие, Языковое)
    level: {"brd":6, "sor":6, "wiz":6
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: Одно существо/уровень, все в пределах 30 ф.

*/
/*
Массовое Исцеление (Mass Heal)
    school: "conj",
    subschool: "Healing",
    level: {"clr":8, "drd":9, Лечение 8
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: Одно и более существ, все в пределах 30 ф.

*/
/*
Массовое Очарование (Mass Charm)
    school: "ench",
    subschool: "Charm",
    descriptor: "Mind-Affecting",
    level: {"sor":8, "wiz":8
	    components: "В
    target: "Одно и более существ, все в пределах 30 ф.
	duration: "1 день/уровень

*/
/*
Мгновенное Призывание Дравмия (Drawmij'а Instant Summons)
    school: "conj",
    subschool: "Summoning",
    level: {"sor":7, "wiz":7
    components: "В, С, М
    casting_time: "1 действие
	range: "См. текст
    target: "Один объект, весом до 10 фунтов, все стороны не более 6 ф.
	duration: "Постоянно, пока не разряжено
    savings: "Нет
    resistance: "Нет

*/
/*
Меняющийся Посох (Changestaff)
school: "trans",
    level: {"drd":7, Растение 7
    components: "В, С, Ф
    casting_time: "1 полный раунд
	range: "Касание
    target: "Ваш посох
	duration: "1 час/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
/*
Мерцание (Blink)
	school: "trans",
	    level: {"brd":3, "sor":3, "wiz":3
	    components: "В, С
	    casting_time: "1 действие
		range: "Разное
	    target: "Вы
		duration: "1 раунд/уровень

*/
/*
Метеоритный Дождь (Meteor Swarm)
    school: "evoc", 
	descriptor: "Fire",
    level: {"sor":9, "wiz":9
	    components: "В, С
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    area: "Похоже на заклинание огненный шар (см. текст)
	duration: "Мгновенно
    savings: "Нет или Реакция наполовину (см. текст)
    resistance: "Да

*/
/*
Меч Морденкайнена (Mordenkainen’s Sword)
    school: "evoc",     descriptor: "Force",
    level: {"sor":7, "wiz":7
	    components: "В, С, Ф
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
effect: "Один меч
	duration: "1 раунд/уровень (П)
    savings: "Нет
    resistance: "Да

*/
/*
Миниатюрная Хижина Леомунда (Leomund’s Tiny Hut)
    school: "evoc",     descriptor: "Force",
    level: {"brd":3, "sor":3, "wiz":3
	    components: "В, С, М
    casting_time: "1 действие
	range: "20 ф.
effect: "Радиус 20 ф., вы в центре
	duration: "2 часа/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
/*
Мокрый Снег (Sleet Storm)
    school: "conj",
    subschool: "Creation",
 
	descriptor: "Cold",
    level: {"drd":4, "sor":3, "wiz":3
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    area: "Мокрый снег на 40 ф., 20 ф. в высоту
	duration: "1 раунд/уровень
    savings: "Реакция частично
    resistance: "Нет

*/
/*
Молот Хаоса (Chaos Hammer)
	    school: "evoc", 
	descriptor: "Chaotic",
	    level: {Хаос 4
	    components: "В, С
	    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Взрыв радиусом 20 ф.
	duration: "Мгновенно
    savings: "Воля наполовину (см. текст)
    resistance: "Да

*/
/*
Мольба (Prayer)
Вызывание
    level: {"clr":3, "pal":3
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "30 ф.
    area: "Все союзники и противники в радиусе взрыва 30 ф., вы в центре
	duration: "1 раунд/уровень
    savings: "Нет
    resistance: "Да

*/
/*
Наблюдение (Scrying)
    school: "div",
    level: {"brd":3, "clr":5, "drd":4, "sor":4, "wiz":4
    components: "В, С, М/БФ, Ф
    casting_time: "1 час
	range: "См. текст
effect: "Магический сенсор
	duration: "1 минута/уровень
    savings: "Нет
    resistance: "Нет

*/
/*
Наделить Волшебной Силой (Imbue With Spell Ability)
    school: "evoc",
    level: {"clr":4, Магия 4
	    components: "В, С, БФ
    casting_time: "10 минут
	range: "Касание
    target: "Существо
	duration: "До разряжения
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
{
    id: "find-traps",
    name: "Найти Ловушки",
    en: "Find Traps",
    school: "div",
    level: {"clr":2},
    components: "В, С",
    casting_time: "1 действие",
    range: "Среднее (100 ф. + 10 ф./уровень)",
    target: "Вы",
    duration: "1 минута/уровень"
},
{
    id: "locate-object",
    name: "Найти Объект",
    en: "Locate Object",
    school: "div",
    level: {"brd":2, "clr":3, "sor":2, "wiz":2},
    domen: {"Travel":2},
    components: "В, С, Ф/БФ",
    casting_time: "1 действие",
	range: "Большое (400 ф. + 40 ф./уровень)",
    area: "Круг, вы в центре, радиус 400 ф. + 40 ф./уровень",
	duration: "1 минута/уровень",
    savings: "Нет",
    resistance: "Нет"
},
/*
Найти Путь (Find The Path)
	Пророчество
    level: {"clr":6, "drd":6, Знание 6, Путешествие 6
    components: "В, С, Ф
    casting_time: "3 раунда
	range: "Персональное или касание
    target: "Вы или существо, которого коснулись
	duration: "10 минут/уровней
    savings: "Нет или Воля нейтрализует (без вреда)
    resistance: "Нет или Да (без вреда)

*/
/*
Найти Существо (Locate Creature)
    school: "div",
    level: {"brd":4, "sor":4, "wiz":4
    components: "В, С, М
    duration: "10 минут/уровень
*/
/*
Наложить Проклятие (Bestow Curse)
	school: "trans",
    level: {"brd":3, "clr":3, "sor":4, "wiz":4
    components: "В, С
    casting_time: "1 действие
    range: "Касание
    target: "Существо
    duration: "Постоянно
    savings: "Воля нейтрализует
    resistance: "Да

*/
{
    id: "inflict-light-wounds",
    name: "Нанесение Легких Ран",
    en: "Inflict Light Wounds",
    school: "necro",
    level: {"clr":1},
    domen: {"Destruction":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Касание",
    area: "Существо",
	duration: "Мгновенно",
    savings: "Воля наполовину (см. текст)",
    resistance: "Да"
},
{
    id: "inflict-minor-wounds",
    name: "Нанесение Незначительных Ран",
    en: "Inflict Minor Wounds",
    school: "necro",
    level: {"clr":0}
},
{
    id: "inflict-serious-wounds",
    name: "Нанесение Серьезных Ран",
    en: "Inflict Serious Wounds",
    school: "necro",
    level: {"clr":3}
},
/*
Нанесение Смертельных Ран (Inflict Critical Wounds)
    school: "necro",
    level: {"clr":4, Разрушение 4

*/
{
    id: "inflict-moderate-wounds",
    name: "Нанесение Средних Ран",
    en: "Inflict Moderate Wounds",
    school: "necro",
    level: {"clr":2}
},
{
    id: "know-direction",
    name: "Направление",
    en: "Know Direction",
    school: "div",
    level: {"drd":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "Мгновенно",
    text: "Вы определяете направление на север."
},
/*
Нашествие Насекомых (Insect Plague)
    school: "conj",
    subschool: "Summoning",
(см. текст)
    level: {"clr":5, "drd":5
	    components: "В, С, БФ
    casting_time: "1 полный раунд
	range: "Большое (400 ф. + 40 ф./уровень)
    area: "Рой насекомых 180 ф. в ширину и до 60 ф. в высоту
	duration: "1 минута/уровень
    savings: "См. текст
    resistance: "Нет

*/
{
    id: "invisibility",
    name: "Невидимость",
    en: "Invisibility",
    school: "illus",
    subschool: "Glamer",
    level: {"brd":2, "sor":2, "wiz":2},
    domen: {"Trickery":2},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Персональное или касание",
    target: "Вы или существо или объект весом не более 100 фн./уровень",
	duration: "10 минут/уровень (П)",
    savings: "Нет или Воля нейтрализует (без вреда, объект)",
    resistance: "Нет или Да (без вреда, объект)"
},
{
    id: "invisibility-to-animals",
    name: "Невидимость Для Животных",
    en: "Invisibility To Animals",
    school: "abjur",
    level: {"drd":1},
    components: "С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Одно существо/уровень",
	duration: "10 минут/уровень",
    savings: "Нет",
    resistance: "Да"
},
{
    id: "invisibility-to-undead",
    name: "Невидимость Для Нежити",
    en: "Invisibility To Undead",
    school: "abjur",
    level: {"clr":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Одно существо/уровень",
	duration: "10 минут/уровень (П)",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
{
    id: "unseen-servant",
    name: "Невидимый Слуга",
    en: "Unseen Servant",
    school: "conj",
    subschool: "Creation",
    level: {"brd": 1, "sor": 1, "wiz": 1},
    components: "В, С, М",
    casting_time: "1 действие",
    range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Один невидимый, неразумный, бесформенный слуга",
    duration: "1 час/уровень",
    savings: "Нет",
    resistance: "Нет",
    text: "Создает невидимую силу, выполняющую ваши команды."
},
/*
Нейтрализовать Яд (Neutralize Poison)
    school: "conj",
    subschool: "Healing",
    level: {"brd":4, "clr":4, "drd":3, "pal":4, "rgr":3
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Касание
    target: "Существо или предмет до 1 ф.3/уровень
	duration: "Постоянно
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Необнаружение (Nondetection)
Прекращение
    level: {"rgr":4, "sor":3, "wiz":3, Обман 3
    components: "В, С, М
Время Cотворения: 1 действие
	range: "Касание
    target: "Существо или предмет
	duration: "1 час/уровень
    savings: "Воля нейтрализует (без вреда, предмет)
    resistance: "Да (без вреда, предмет)

*/
{
    id: "nystuls-undetectable-aura",
    name: "Необнаружимая Аура Нистула",
    en: "Nystul’s Undetectable Aura",
    school: "illus",
    subschool: "Glamer",
    level: {"sor":1, "wiz":1},
    domen: {"Magic":1},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Касание",
    target: "Одни предмет весом до 5 фн./уровень",
	duration: "1 день/уровень",
    savings: "Нет (см. текст)",
    resistance: "Нет"
},
{
    id: "undetectable-alignment",
    name: "Неопределенное Мировоззрение",
    en: "Undetectable Alignment",
    school: "abjur",
    level: {"brd":2, "clr":2, "pal":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно существо или объект",
	duration: "24 часа",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объекта)",
    text: "Скрывает мировоззрение на 24 часа."
},
/*
Непреодолимый Танец Отто (Otto’s Irresistible Dance)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"sor":8, "wiz":8
    components: "В
    casting_time: "1 действие
	range: "Касание
    target: "Живое существо
	duration: "1d4 +1 раунд
    savings: "Нет
    resistance: "Да

*/
{
    id: "gentle-repose",
    name: "Нетленные Останки",
    en: "Gentle Repose",
    school: "necro",
    level: {"clr":2, "sor":3, "wiz":3},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Труп, которого коснулись",
	duration: "1 день/уровень",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)"
},
/*
Ночной Кошмар (Nightmare)
    school: "illus",
    subschool: "Phantasm",
(Ментальное воздействие, Зло)
    level: {"brd":5, "sor":5, "wiz":5
    components: "В, С
    casting_time: "10 минут
	range: "Неограниченное
    target: "1 живое существо
	duration: "Постоянно
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Обессиливание (Enervation)
Некроманития
    level: {"sor":4, "wiz":4
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10ф./уровень)
effect: "Луч негативной энергии
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да

*/
/*
Обет/Миссия (Geas/Quest)
	    school: "ench",     
    subschool: "Compulsion",

(Языковое, Ментальное воздействие)
    level: {"brd":6, "sor":6, "wiz":6
    target: "Одно живое существо
    savings: "Нет

*/
/*
Облако Смерти (Cloudkill)
	    school: "conj",
    subschool: "Creation",
	    level: {"sor":5, "wiz":5
	    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. +10 ф./уровень)
effect: "Облако распространяется на 30 ф. в ширину и на 20 ф. в высоту
	duration: "1 минута/уровень
    savings: "См. текст
    resistance: "Да

*/
{
    id: "fog-cloud",
    name: "Облако Тумана",
    en: "Fog Cloud",
    school: "conj",
    subschool: "Creation",
    level: {"sor":2, "wiz":2},
    domen: {"Water":2},
    //, Вода 2
    components: "В, С",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    effect: "Туман распространяется в радиусе 30 футов, 20 в высоту.",
	duration: "10 минут/уровень",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "detect-good",
    name: "Обнаружить Добро",
    en: "Detect Good",
    school: "div",
    level: {"clr":1, "rgr":2}
},
{
    id: "detect-animals-or-plants",
    name: "Обнаружить Животных Или Растения",
    en: "Detect Animals Or Plants",
    school: "div",
    level: {"drd":1, "rgr":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Большое (400 ф. + 40 ф./уровень)",
    area: "Эманации от вас в виде четверти круга и до конца диапазона  заклинания",
	duration: "Концентрация, до 10 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "detect-law",
    name: "Обнаружить Закон",
    en: "Detect Law",
    school: "div",
    level: {"clr":1, "rgr":2}
},
{
    id: "detect evil",
    name: "Обнаружить Зло",
    en: "Detect Evil",
    school: "div",
    level: {"clr":1, "rgr":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
    range: "60 футов",
    area: "Эманации от вас в виде четверти круга и до конца диапазона  заклинания",
	duration: "Концентрация, до 10 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "detect-snares-and-pits",
    name: "Обнаружить Ловушки И Ямы",
    en: "Detect Snares And Pits",
    school: "div",
    level: {"drd":1, "rgr":1},
    components: "В, С",
    casting_time: "1 действие",
    range: "60 ф.",
    area: "Эманации от вас в виде четверти круга и до конца диапазона  заклинания",
	duration: "Концентрация, до 10 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "detect-magic",
    name: "Обнаружить Магию",
    en: "Detect Magic",
    school: "univ",
    level: {"brd":0, "clr":0, "drd":0, "sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "60 ф.",
    area: "Эманации от вас в виде четверти круга и до конца диапазона  заклинания",
	duration: "Концентрация, до 1 минуты/уровень (П)",
    savings: "Нет",
    resistance: "Нет",
    text: "Обнаруживает заклинания и магические предметы в радиусе 60 ф."
},
/*
Обнаружить Магическое Наблюдение (Detect Scrying)
    school: "div",
    level: {"brd":4, "sor":4, "wiz":4
    components: "В, С, М
    casting_time: "1 действие
    range: "120 ф.
    area: "Эманации радиусом 120 ф., исходящие от вас
    duration: "24 часа
    savings: "Нет
    resistance: "Нет

*/
{
    id: "detect-thoughts",
    name: "Обнаружить Мысли",
    en: "Detect Thoughts",
    school: "div",
    descriptor: "Mind-Affecting",
    level: {"brd":2, "sor":2, "wiz":2},
    domen: {"Knowledge":2},
    components: "В, С, Ф/БФ",
    casting_time: "1 действие",
	range: "60 ф.",
    area: "Эманации от вас в виде четверти круга и до конца диапазона  заклинания",
	duration: "Концентрация, до 1 минут/уровень (П)",
    savings: "Воля нейтрализует (см. текст)",
    resistance: "Нет"
},
{
    id: "detect-undead",
    name: "Обнаружить Нежить",
    en: "Detect Undead",
    school: "div",
    level: {"clr":1, "pal":1, "sor":1, "wiz":1},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "60 ф.",
    area: "Эманации от вас в виде четверти круга и до конца диапазона  заклинания",
	duration: "Концентрация, до 1 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "detect-secret-doors",
    name: "Обнаружить Секретные Двери",
    en: "Detect Secret Doors",
    school: "div",
    level: {"brd":1, "sor":1, "wiz":1},
    domen: {"Knowledge":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "60 ф.",
    area: "Эманации от вас в виде четверти круга и до конца диапазона  заклинания",
	duration: "Концентрация, до 1 минуты/уровень (П)",
    savings: "Нет",
    resistance: "Нет",
    text: "Выявляет скрытые двери в радиусе 60 ф."
},
{
    id: "detect-chaos",
    name: "Обнаружить Хаос",
    en: "Detect Chaos",
    school: "div",
    level: {"clr":1, "rgr":2}
},
{
    id: "detect-poison",
    name: "Обнаружить Яд",
    en: "Detect Poison",
    school: "div",
    level: {"clr":0, "drd":0, "pal":1, "sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target_or_area: "Одно существо, один объект или куб 5 футов",
	duration: "Мгновенно",
    savings: "Нет",
    resistance: "Нет"
},
/*
Оборотничество  (Animal Shapes)
school: "trans",
    level: {Животные 7, "drd":8
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно согласное существо/уровень, все в пределах 30 ф.
	duration: "1 час/уровень (П)
    savings: "Нет (см. текст)
    resistance: "Да (без вреда)

*/
/*
Обращение (Commune)
    school: "div",
    level: {"clr":5
    components: "В, С, М, БФ, ОО
    casting_time: "10 минут
	range: "Персональное
    target: "Вы
	duration: "1 раунд/уровень

*/
/*
Огненная Ловушка (Fire Trap)
    school: "abjur",
	descriptor: "Fire",
    level: {"drd":2, "sor":4, "wiz":4
    components: "В, С, М
    casting_time: "10 минут
	range: "Касание
    target: "Объект
	duration: "Постоянно или пока не разряжено
    savings: "Реакция наполовину (см. текст)
    resistance: "Да

*/
/*
Огненные Семена (Fire Seeds)
    school: "conj",
    subschool: "Creation", 
	descriptor: "Fire",
    level: {"drd":6, Огонь 6, Солнце 6
    components: "В, С, М
    casting_time: "1 действие/семя
	range: "Касание
    target: До четырех желудей или до восьми ягод остролиста
	duration: "10 минут/уровень или пока не использовано
    savings: "Реакция наполовину (см. текст)
    resistance: "Да

*/
/*
Огненный Шар (Fireball)
    school: "evoc",
	descriptor: "Fire",
    level: {"sor":3, "wiz":3
    components: "В, С, М
    casting_time: "1 действие
	range: "Большое (400 ф. + 40ф./уровень)
    area: "Радиус 20 футов
	duration: "Мгновенно
    savings: "Реакция наполовину
    resistance: "Да

*/
/*
Огненный Шар Замедленного Действия (Delayed Blast Fireball)
    school: "evoc",
	descriptor: "Fire",
    level: {"sor":7, "wiz":7
	duration: "До 5 раундов (см. текст)

*/
/*
Огненный Шторм (Fire Storm)
    school: "evoc",
	descriptor: "Fire",
    level: {"clr":8, "drd":7, Огонь 7
    components: "В, С
    casting_time: "1 полный раунд
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Два 10 футовых кубов/уровень (ИФ)
	duration: "Мгновенно
    savings: "Реакция наполовину
    resistance: "Да

*/
/*
Огненный Щит (Fire Shield)
    school: "evoc", (Огонь или Холод)
    level: {Огонь 5, "sor":4, "wiz":4, Солнце 4
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 раунд/уровень (П)
    savings: "Нет

*/
{
    id: "faerie-fire",
    name: "Огонь Фей",
    en: "Faerie Fire",
    school: "evoc",
    level: {"drd":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Большое (400 ф. + 40ф./уровень)",
    area: "Существа и объекты в пределах 5 футового взрыва",
	duration: "1 минута/уровень",
    savings: "Нет",
    resistance: "Да"
},
/*
Ограниченное Желание (Limited Wish)
Универсальное
    level: {"sor":7, "wiz":7
	    components: "В, С, ОО
    casting_time: "1 действие
	range: "См. текст
Цель, Эффект или     area: "См. текст
	duration: "См. текст
    savings: "Нет
    resistance: "Да

*/
{
    id: "animate-rope",
    name: "Оживить Веревку",
    en: "Animate Rope",
    school: "trans",
    level: {"sor":1, "wiz":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф. на уровень)",
    target: "Один подобный веревке предмет длиной до 50 ф. + 5 ф./уровень",
	duration: "1 раунд/уровень",
    savings: "Нет",
    resistance: "Нет",
    text: "Заставляет веревку двигаться по вашей команде."
},
/*
Оживить Предмет (Animate Objects)
school: "trans",
    level: {Хаос 6, "clr":6
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: "Предметы или материя, 1 куб. фут/уровень
	duration: "1 раунд/уровень
    savings: "Нет
    resistance: "Нет

*/
{
    id: "animate-dead",
    name: "Оживить Труп",
    en: "Animate Dead",
    school: "necro", 
	descriptor: "Evil",
    level: {"clr":2, "drd":8},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Один или несколько трупов",
	duration: "Мгновенное",
    savings: "Нет",
    resistance: "Нет"
},
/*
Озарение Морденкайнена (Mordenkainen’s Lucubration)
school: "trans",
    level: {"wiz":6
    components: "В, С
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "Мгновено

*/
{
    id: "entangle",
    name: "Опутывание",
    en: "Entangle",
	school: "trans",
    level: {"drd":1, "rgr":1},
    domen: {"Plant":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Большое (400 ф. + 40 ф./уровень)",
    area: "Растения в пределах 40-футового радиуса",
	duration: "1 минута/уровень",
    savings: "Реакция (см. текст)",
    resistance: "Нет"
},
/*
Освобождение (Dismissal)
    school: "abjur",
    level: {"brd":4, "clr":4, "sor":5, "wiz":5
    components: "В, С, Ф/БФ
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Существо-пришелец
	duration: "Мгновенно
    savings: "Воля нейтрализует
    resistance: "Да

*/
{
    id: "consecrate",
    name: "Освящение",
    en: "Consecrate",
    school: "evoc",
    level: {"clr":2},
    components: "В, С, М, БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Эманации радиусом 20 ф.",
	duration: "2 часа/уровень",
    savings: "Нет",
    resistance: "Нет"
},
/*
Оскверненное Место (Unhallow)
    school: "evoc", 
	descriptor: "Evil",
    level: {"clr":5, "drd":5
    components: "В, С, М
    casting_time: "1 день
	range: "Касание
    area: "Область радиусом 10 ф./уровень, исходящая от точки касания
	duration: "Мгновенно
    savings: "Нет
    resistance: "См. текст

*/
{
    id: "desecrate",
    name: "Осквернение",
    en: "Desecrate",
    school: "evoc",
    level: {"clr":2},
    domen: {"Evil":2},
    components: "В, С, М, БФ",
    casting_time: "1 действие",
    range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Эманации в радиусе 20 футов",
    duration: "2 часа/уровень",
    savings: "Нет",
    resistance: "Да"
},
/*
Остановить Нежить (Halt Undead)
    school: "necro",
    level: {"sor":3, "wiz":3
    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: "До трех неживых существ, все в пределах 30 ф.
	duration: "1 раунд/уровень
    savings: "См. текст
    resistance: "Да

*/
/*
Остановка Времени (Time Stop)
school: "trans",
    level: {"sor":9, "wiz":9, Обман 9
    components: "В
    casting_time: "1 действие
	range: "Персональное
    area: "Вы
	duration: "1d4+1 раунд

*/
/*
Острие (Keen Edge)
school: "trans",
    level: {"brd":3, "sor":3, "wiz":3
    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: Одно оружие или 50 снарядов, которые должны соприкасаться друг с другом во время произнесения заклинания
	duration: "10 минут/уровень
    savings: "Воля нейтрализует (без вреда, объект)
    resistance: "Да (без вреда, объект)

*/
/*
Острые Камни (Spike Stones)
school: "trans",
    level: {"drd":4, Земля 4
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Один квадрат 20 ф./уровень
	duration: "1 час/уровень (П)
    savings: "Реакция частично
    resistance: "Да

*/
/*
От Дерева К Дереву (Tree Stride)
    school: "conj",
    school: "Teleportation",
    level: {"drd":5, "rgr":4
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 час/уровень или пока не иссякнет (см. текст)

*/
{
    id: "open-close",
    name: "Открыть/Закрыть",
    en: "Open/Close",
    school: "trans",
    level: {"brd":0, "sor":0, "wiz":0},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Близкое (25 футов + 5 футов/2 уровня)",
    target: "Портал или объект, который может быть открыт или закрыт",
	duration: "Мгновенно",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)",
    text: "Открывает или закрывает маленькие или легкие вещи."
},
/*
Отличная Память Рэри (Rary’s Mnemonic Enhancer)
school: "trans",
    level: {Маг 4
    components: "В, С, М, Ф
    casting_time: "10 минут
	range: "Персональное
    area: "Вы
	duration: "Мгновенно

*/
/*
Отмена Гравитации (Reverse Gravity)
school: "trans",
    level: {"drd":8, "sor":7, "wiz":7
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Куб до 10 ф./уровень (ИФ)
	duration: "1 раунд/уровень (П)
    savings: "Нет (см. текст)
    resistance: "Нет

*/
/*
Отражение Заклинаний (Spell Turning)
    school: "abjur",
    level: {Удача 7, Магия 7, "sor":7, "wiz":7
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "До применения или 10 минут/уровень

*/
/*
Оттолкнуть Древесину (Repel Wood)
school: "trans",
    level: {"drd":6, Растение 6
	    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Путь шириной 120 ф. и высотой 10 ф., исходящий от вас
	duration: "1 минута/уровень
    savings: "Нет
    resistance: "Нет

*/
/*
Оттолкнуть Металл Или Камень (Repel Metal Or Stone)
    school: "abjur",
    level: {"drd":8
	    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Путь шириной 120 ф., высотой 10 ф., исходящая от вас
	duration: "1 раунд/уровень
    savings: "Нет
    resistance: "Нет

*/
/*
Отторжение (Repulsion)
    school: "abjur",
    level: {"brd":6, "clr":7, Защита 7, "sor":6, "wiz":6
	    components: "В, С, Ф/БФ
    casting_time: "1 действие
	range: "До 10 ф./уровень
    area: "Эманация радиусом до 10 ф./уровень, вы в центре
	duration: "1 раунд/уровень (П)
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Охрана И Наблюдение (Guards And Wards)
    school: "abjur",
    level: {"sor":6, "wiz":6
    components: "В, С, М, Ф
    casting_time: "30 минут
	range: "Внутри области действия заклинания.
    area: "До 200 кв. футов/уровней (ИФ)
	duration: "2 часа/уровень
    savings: "Нет
    resistance: "См. текст

*/
/*
Охранный Глиф (Glyph Of Warding)
    school: "abjur",
    level: {"clr":3
    components: "В, С, М
    range: "Касание
Цель или Область: Объект, которого коснулись, или до 5 кв. ф./уровень
    duration: "Пока не разряжено
    savings: "См. текст
    resistance: "Да (объект)

*/
/*
Очаровать Монстра (Charm Monster)
	    school: "ench",     subschool: "Charm",
    descriptor: "Mind-Affecting",
	    level: {"brd":3, "sor":4, "wiz":4
    target: "Одно живое существо
	duration: "1 день/уровень

*/
{
    id: "charm-person",
    name: "Очаровать Существо",
    en: "Charm Person",
    school: "ench",
    subschool: "Charm",
    descriptor: "Mind-Affecting",
    level: {"brd":1, "sor":1, "wiz":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно существо",
	duration: "1 час/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да",
    text: "Делает одну персону вашим другом."
},
{
    id: "charm-person-or-animal",
    name: "Очаровать Существо Или Животное",
    en: "Charm Person Or Animal",
    school: "ench",
    subschool: "Charm",
    descriptor: "Mind-Affecting",
    level: {"drd":2},
    target: "Одно существо или животное"
},
/*
Очищение От Невидимости (Invisibility Purge)
    school: "evoc",
    level: {"clr":3
	    components: "В, С
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 минута/уровень
*/
{
    id: "purify-food-and-drink",
    name: "Очищение Пищи И Питья",
    en: "Purify Food And Drink",
    school: "univ",
    level: {"clr":0, "drd":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "10 ф.",
    target: "1 кб. ф./уровень зараженной пищи и воды",
	duration: "Мгновенно",
    savings: "Воля нейтрализует",
    resistance: "Да (объект)"
},
{
    id: "feather-fall",
    name: "Падение Пера",
    en: "Feather Fall",
	school: "trans",
    level: {"brd":1, "sor":1, "wiz":1},
    components: "В",
    casting_time: "См. текст",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Любые объекты или существа в свободном падении в радиусе 10 футов, чей общий вес не превышает 300 фн./уровень",
	duration: "До приземления или 1 раунд/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да (объект)",
    text: "Предметы или существа падают медленнее."
},
/*
Палящий Свет (Searing Light)
    school: "evoc",
    level: {"clr":3, Солнце 3
	    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Луч
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да

*/
{
    id: "scare",
    name: "Паника",
    en: "Scare",
    school: "necro",
    descriptor: ["Fear", "Mind-Affecting"],
    level: {"brd":2, "sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    target: "Все существа в радиусе 15 ф.",
	duration: "1 раунд/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
{
    id: "spider-climb",
    name: "Паук",
    en: "Spider Climb",
    school: "trans",
    level: {"sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "10 минут/уровень",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
{
    id: "web",
    name: "Паутина",
    en: "Web",
    school: "conj",
    subschool: "Creation",
    level: {"sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    effect: "Паутина, раскинувшаяся на площадь радиусом 20 ф.",
	duration: "10 минут/уровень",
    savings: "Реакция нейтрализует (см. текст)",
    resistance: "Да"
},
{
    id: "obscuring-mist",
    name: "Пелена",
    en: "Obscuring Mist",
    school: "conj",
    subschool: "Creation",
    level: {"clr":1, "drd":1, "sor":1, "wiz":1},
    domen: {"Air":1, "Water":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "30 ф.",
    effect: "Облако с разбросом в 30 футов и в 20 футов в высоту, вы в центре",
	duration: "1 минута/уровень",
    savings: "Нет",
    resistance: "Нет"
},
/*
Передвижение Земли (Move Earth)
school: "trans",
    level: {"sor":6, "wiz":6
    components: "В, С, М
    casting_time: "См. текст
	range: "Большое (400 ф. + 40 ф./уровень)
    area: "Почва в области до 750 кв. футов и до 10 ф. в гулбину (ИФ)
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Перемещение Посредством Растений (Transport Via Plants)
school: "trans",
    level: {"drd":6
    components: "В, С
    casting_time: "1 действие
	range: "Неограниченное
    area: "Вы
	duration: "1 раунд

*/
/*
Перст Смерти (Finger Of Death)
    school: "necro",
	descriptor: "Death",
    level: {"drd":8, "sor":7, "wiz":7
    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно живое существо
	duration: "Мгновенно
    savings: "Стойкость частично
    resistance: "Да

*/
/*
Печать Пестрой Змеи (Sepia Snake Sigil)
    school: "conj",
    subschool: "Creation",
     descriptor: "Force",
    level: {"brd":3, "sor":3, "wiz":3
    components: "В, С, М
    casting_time: "10 минут
	range: "Касание
    target: "Одна книга или текст
	duration: "Постоянно или пока не разряжено; до освобождения или 1d4 дня + 1 день/уровень (см. текст)
    savings: "Реакция нейтрализует
    resistance: "Нет

*/
/*
Пир Героев (Heroes' Feast)
    school: "evoc",
    level: {"clr":6
    components: "В, С, БФ
    casting_time: "10 минут
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    effect: "Пир для одного существа/уровень
	duration: "1 час + 12 часов (см. текст)
    savings: "Нет
    resistance: "Да (без вреда)

*/
{
    id: "pyrotechnics",
    name: "Пиротехника",
    en: "Pyrotechnics",
    school: "trans",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Большое (400 ф. + 40 ф./уровень)",
    area: "Один источник огня, до 20 кб. ф.",
	duration: "1d4+1 раунд или 1d4+1 раунд после того, как существа покинут облако дыма (см. текст)",
    savings: "Воля или Стойкость нейтрализует (см. текст)",
    resistance: "Да или Нет (см. текст)"
},
{
    id: "tensers-floating-disk",
    name: "Плавучий Диск Тенсера",
    en: "Tenser’s Floating Disk",
    school: "evoc",
    descriptor: "Force",
    level: {"sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Диск энергии 3 ф. в диаметре",
	duration: "1 час/уровень",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "flame blade",
    name: "Пламенный Клинок",
    en: "Flame Blade",
    school: "evoc", 
	descriptor: "Fire",
    level: {"drd":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    effect: "Мечевидный луч",
	duration: "1 минута/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
/*
Планарные Узы (Planar Binding)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"sor":6, "wiz":6
    components: "В, С, М
    target: До 16 КХ призванных элементалей или пришельцев, все появляются в пределах 30 ф.

*/
/*
Планарный Союзник (Planar Ally)
Вызывание
    level: {"clr":6
effect: "До 16 КХ призванных элементалей или пришельцев, все появляются в пределах 30 ф.

*/
/*
Планарный Якорь (Dimensional Anchor)
    school: "abjur",
    level: {"clr":4, "sor":4, "wiz":4
    components: "В, С
    casting_time: "1 действие
    range: "Среднее (100 ф. + 10 ф./уровень)
	effect: "Луч
    duration: "1 минута/уровень
    savings: "Нет
    resistance: "Да (объект)

*/
/*
Плач Баньши (Wail Of The Banshee)
    school: "necro", (Смерть, Звуковой)
    level: {Смерть 9, "sor":9, "wiz":9
    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно живое существо/уровень в пределах 30 ф.
	duration: "Мгновенно
    savings: "Стойкость нейтрализует
    resistance: "Да

*/
/*
Плащ Хаоса (Cloak Of Chaos)
	    school: "abjur", 
	descriptor: "Chaotic",
    level: {Хаос 8, "clr":8
    components: "В, С, Ф
    casting_time: "1 действие
	range: "20 ф.
    target: Существо/уровень в радиусе взрыва 20 ф., вы в центре
	duration: "1 минута/уровень (П)
    savings: "См. текст
    resistance: "Да (без вреда)

*/
/*
Плоть В Камень (Flesh To Stone)
	school: "trans",
    level: {"sor":6, "wiz":6
    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: "Одно существо
	duration: "Мгновенно
    savings: "Стойкость нейтрализует
    resistance: "Да

*/
/*
Поднять Мертвого (Raise Dead)
    school: "conj",
    subschool: "Healing",

    level: {"clr":5
	    components: "В, С, М, БФ
    casting_time: "1 минута
	range: "Касание
    target: "Мертвое существо
	duration: "Мгновенно
    savings: "Нет (см. текст)
    resistance: "Да (без вреда)

*/
/*
Подчинить Животное (Dominate Animal)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {Животные 3, "drd":3
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. +10 ф./уровень)
    target: "Одно животное
	duration: "1 раунд/уровень
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Подчинить Монстра (Dominate Monster)
	    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
	    level: {"sor":9, "wiz":9
	    target: "Одно существо

*/
/*
Подчинить Существо (Dominate Person)
	    school: "ench",     
    subschool: "Compulsion",
	(Ментальное Воздействие)
    level: {"brd":4, "sor":5, "wiz":5
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10ф./уровень)
    target: "Один гуманоид Среднего размера или менее
	duration: "1 день/уровень
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Поле Антимагии (Antimagic Field)
    school: "abjur",
    level: {"clr":8, Магия 6, Защита 6, "sor":6, "wiz":6
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "10 футов
    target: "Эманаця радиусом 10 ф., вы в центре
	duration: "10 минут на уровень (П)
    savings: "Нет
    resistance: "См. текст

*/
/*
Полет (Fly)
	school: "trans",
    level: {"sor":3, "wiz":3, Путешествия 3
    components: "В, С, Ф/БФ
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "10 минут/уровень
    savings: "Нет
    resistance: "Да (без вреда)

*/
/*
Ползучая Погибель (Creeping Doom)
	    school: "conj",
    subschool: "Summoning",
    level: {Животные 8, "drd":7
    components: "В, С
    casting_time: "1 полный раунд
	range: "Близкое (25 ф. + 5 ф./2 уровня)/100 ф. (см. текст)
effect: "1,000 насекомых в радиусе 10 футов
	duration: "1 минута/уровень
	    savings: "Нет
	    resistance: "Нет

*/
/*
Полный Анализ (Analyze Dweomer)
    school: "div",
    level: {"sor":6, "wiz":6
	    components: "В, С, Ф
    casting_time: "8 часов
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Один объект или существо
	duration: "1 час/уровень (П)
    savings: "См. текст
    resistance: "Нет

*/
{
    id: "aid",
    name: "Помощь",
    en: "Aid",
    school: "ench",
    subschool: "Compulsion",
    level: {"clr":2},
    domen: {"Good":2, "Luck":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Живое существо",
	duration: "1 минута/уровень",
    savings: "Нет",
    resistance: "Да (без вреда)"
},
{
    id: "comprehend languages",
    name: "Понимание Языков",
    en: "Comprehend Languages",
    school: "div",
    level: {"clr":1, "sor":1, "wiz":1},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "10 минут/уровень",
    text: "Можно понимать любую разговорную и письменную речь."
},
/*
Порча (Unholy Blight)
    school: "evoc", 
	descriptor: "Evil",
    level: {Зло 4
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Радиус 20 ф.
	duration: "Мгновенно
    savings: "Стойкость частично
Сопротивляемость заклинанию: Да

*/
/*
Порыв Ветра (Gust Of Wind)
	    school: "evoc",
    level: {"brd":3, "sor":3, "wiz":3
    components: "В, С, Ф
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Порыв ветра (Шириной и высотой 10 футов) вырывается из вас и двигается к пределу диапазона действия заклинания.
	duration: "1 раунд
    savings: "Стойкость нейтрализует
    resistance: "Да

*/
/*
Послание (Sending)
    school: "evoc",
    level: {"clr":4, "sor":5, "wiz":5
	    components: "В, С, М/БФ
    casting_time: "10 минут
	range: "См. текст
    target: "Одно существо
	duration: "1 раунд (см. текст)
    savings: "Нет
    resistance: "Нет

*/
{
    id: "expeditious-retreat",
    name: "Поспешное Отступление",
    en: "Expeditious Retreat",
	school: "trans",
    level: {"brd":1, "sor":1, "wiz":1},
    domen: {"Travel":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "1 минута/уровень (П)",
    text: "Ваша скорость увеличивается на 30 футов."
},
/*
Посох С Заклинанием (Spellstaff)
school: "trans",
    level: {"drd":6
	    components: "В, С, Ф
    casting_time: "10 минут
	range: "Касание
    target: "Деревянный посох
	duration: "Постоянно пока не разряжено (П)
    savings: "Воля нейтрализует (объект)
    resistance: "Да (объект)

*/
/*
Постоянство (Permanency)
Универсальное
    level: {"sor":5, "wiz":5
	    components: "В, С, ОО
    casting_time: "2 раунда
	range: "См. текст
Цель, Эффект или     area: "См. текст
	duration: "Постоянно (см. текст)
    savings: "Нет
    resistance: "Нет

*/
/*
Постоянный Образ (Permanent Image)
    school: "illus",
    subschool: "Figment",
    level: {"brd":6, "sor":6, "wiz":6
Эффекты: Фантомы, которые не могут простираться более чем на 20 ф. кб. + один 10-футовый куб/уровень (ИФ)
	duration: "Постоянно (П)

*/
{
    id: "death-knell",
    name: "Похоронный Звон",
    en: "Death Knell",
    school: "necro",
    descriptor: ["Death", "Evil"],
    level: {"clr":2},
    domen: {"Death":2},
    components: "В, С",
    casting_time: "1 действие",
    range: "Касание",
    target: "Живое существо",
    duration: "Мгновенно/10 минут за КХ цели (см. текст)",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
{
    id: "mending",
    name: "Починка",
    en: "Mending",
    school: "trans",
    level: {"brd":0, "clr":0, "drd":0, "sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "10 ф.",
    target: "Один объект до 1 фута",
	duration: "Мгновенно",
    savings: "Воля нейтрализует (без вреда, объект)",
    resistance: "Да (без вреда, объект)",
    text: "Чинит легкие поломки предмета."
},
/*
Праведная Мощь (Righteous Might)
school: "trans",
    level: {"clr":5, Сила 5
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 раунд/уровень

*/
/*
Превратить Грязь В Камень (Transmute Mud To Rock)
school: "trans",
    level: {"drd":5, "sor":5, "wiz":5
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "До двух кубов 10 ф./уровень (ИФ)
	duration: "Постоянно
    savings: "См. текст
    resistance: "Нет

*/
/*
Превратить Камень В Землю (Transmute Rock To Mud)
school: "trans",
    level: {"drd":5, "sor":5, "wiz":5
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: " Среднее (100 ф. + 10 ф./уровень)
    area: "До двух кубов 10 ф./уровень (ИФ)
	duration: "Постоянно (см. текст)
    savings: "См. текст
    resistance: "Нет

*/
/*
Превратить Металл В Дерево (Transmute Metal To Wood)
school: "trans",
    level: {"drd":7
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    area: "Все металлические объекты в радиусе взрыва 40 ф.
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да (объект; см. текст)

*/
/*
Превращение (Polymorph Other)
school: "trans",
    level: {"sor":4, "wiz":4
	    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: "Одно существо
	duration: "Постоянно
    savings: "Стойкость нейтрализует
    resistance: "Да

*/
/*
Превращение Себя (Polymorph Self)
school: "trans",
    level: {"rgr":4, "sor":4, "wiz":4
	    components: "В
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 час/уровень (П)

*/
/*
Предвидение (Foresight)
	    school: "div",
    level: { "drd":9, Знание 9, "sor":9, "wiz":9
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Персона
    target: "См. текст
	duration: "10 минут/уровень
    savings: "Нет или Воля нейтрализует (без вреда)
    resistance: "Нет или Да (без вреда)

*/
/*
Призвать Молнию (Call Lightning)
	    school: "evoc", 
	descriptor: "Electricity",
    level: {"drd":3
    components: "В, С
    casting_time: "10 минут + 1 действие за каждый удар молнии
	range: "Большое (400 ф. + 40 ф./уровень)
	duration: "10 минут/уровень
    savings: "Реакция наполовину
    resistance: "Да
*/
{
    id: "summon-monster-1",
    name: "Призвать Монстра I",
    en: "Summon Monster I",
    school: "conj",
    subschool: "Summoning",
    descriptor: "see text",
    level: {"brd":1, "clr":1, "sor":1, "wiz":1},
    components: "В, С, Ф/БФ",
    casting_time: "1 полный раунд",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Одно призванное существо",
	duration: "1 раунд/уровень (П)",
    savings: "Нет",
    resistance: "Нет",
    text: "Призывает пришельца, который будет сражаться на вашей стороне."
},
{
    id: "summon-monster-2",
    name: "Призвать Монстра II",
    en: "Summon Monster II",
    school: "conj",
    subschool: "Summoning",
    descriptor: "see text",
    level: {"brd":2, "clr":2, "sor":2, "wiz":2},
    effect: "Одно и более призванных существ, все в пределах 30 ф."
},
/*
Призвать Монстра Iii (Summon Monster Iii)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"brd":3, "clr":3, "sor":3, "wiz":3
effect: "Одно и более призванных существ, все в пределах 30 ф.
*/
/*
Призвать Монстра Iv (Summon Monster Iv)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"brd":4, "clr":4, "sor":4, "wiz":4
effect: "Одно и более призванных существ, все в пределах 30 ф.
*/
/*
Призвать Монстра V (Summon Monster V)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"brd":5, "clr":5, "sor":5, "wiz":5
effect: "Одно и более призванных существ, все в пределах 30 ф.

*/
/*
Призвать Монстра Vi (Summon Monster Vi)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"brd":6, "clr":6, "sor":6, "wiz":6
effect: "Одно и более призванных существ, все в пределах 30 ф.

*/
/*
Призвать Монстра Vii (Summon Monster Vii)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"brd":7, "clr":7, "sor":7, "wiz":7
effect: "Одно и более призванных существ, все в пределах 30 ф.

*/
/*
Призвать Монстра Viii (Summon Monster Viii)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"clr":8, "sor":8, "wiz":8
effect: "Одно и более призванных существ, все в пределах 30 ф.

*/
/*
Призвать Монстра Ix (Summon Monster Ix)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"clr":9, "sor":9, "wiz":9, Зло 9, Добро 9, Закон 9, Хаос 9

*/
{
    id: "summon-natures-ally-1",
    name: "Призвать Природного Союзника I",
    en: "Summon Nature’s Ally I",
    school: "conj",
    subschool: "Summoning",
    descriptor: "see text",
    level: {"drd":1, "rgr":1},
    components: "В, С, БФ",
    casting_time: "1 полный раунд",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Одно призванное существо",
	duration: "1 раунд/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "summon-natures-ally-2",
    name: "Призвать Природного Союзника II",
    en: "Summon Nature’s Ally II",
    school: "conj",
    subschool: "Summoning",
    descriptor: "see text",
    level: {"drd":2, "rgr":2},
    effect: "Одно и более существ, все в пределах 30 ф."
},
/*
Призвать Природного Союзника Iii (Summon Nature’s Ally Iii)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"drd":3, "rgr":3
effect: "Одно и более существ, все в пределах 30 ф.

*/
/*
Призвать Природного Союзника Iv (Summon Nature’s Ally Iv)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"drd":4, "rgr":4
effect: "Одно и более существ, все в пределах 30 ф.

*/
/*
Призвать Природного Союзника V (Summon Nature’s Ally V)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"drd":5
effect: "Одно и более существ, все в пределах 30 ф.

*/
/*
Призвать Природного Союзника Vi (Summon Nature’s Ally Vi)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"drd":6
effect: "Одно и более существ, все в пределах 30 ф.

*/
/*
Призвать Природного Союзника Vii (Summon Nature’s Ally Vii)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"drd":7
effect: "Одно и более существ, все в пределах 30 ф.

*/
/*
Призвать Природного Союзника Viii (Summon Nature’s Ally Viii)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"drd":8
effect: "Одно и более существ, все в пределах 30 ф.

*/
/*
Призвать Природного Союзника Ix (Summon Nature’s Ally Ix)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {"drd":9
effect: "Одно и более существ, все в пределах 30 ф.

*/
{
    id: "summon-instrument",
    name: "Призвать Инструмент",
    en: "Summon Instrument",
    school: "conj",
    subschool: "Summoning",
    level: {"brd":0},
    components: "В, С",
    asting_time: "1 полный раунд",
    range: "0 ф.",
    effect: "Один музыкальный инструмент в руках",
    duration: "1 минута/уровень (П)",
    savings: "Нет",
    resistance: "Нет",
    text: "Призывает один инструмент по выбору заклинателя."
},
{
    id: "summon-swarm",
    name: "Призвать Рой",
    en: "Summon Swarm",
    school: "conj",
    subschool: "Summoning",
    level: {"brd":2, "drd":2, "sor":2, "wiz":2},
    components: "В, С, М/БФ",
    casting_time: "1 полный раунд",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Рой маленьких существ в радиусе 5 ф.",
	duration: "Концентрация + 2 раунда",
    savings: "Нет",
    resistance: "Нет"
},
/*
Призыв Теней (Shadow Conjuration)
Иллюзии (Тени)
    level: {"sor":4, "wiz":4
	    components: "В, С
    casting_time: "1 действие
	range: "См. текст
effect: "См. текст
	duration: "См. текст
    savings: "Воля неверие (при взаимодействии); разное (см. текст)
    resistance: "Нет (см. текст)

*/
/*
Призматическая Стена (Prismatic Wall)
    school: "abjur",
    level: {"sor":8, "wiz":8
	    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
effect: "Стена 4 ф./уровень шириной х 2 ф./уровень высотой
	duration: "10 минут/уровень
    savings: "См. текст
    resistance: "См. текст

*/
/*
Призматическая Сфера (Prismatic Sphere)
    school: "abjur",
    level: {Защита 9, "sor":9, "wiz":9, Солнце 9
	    components: "В
	range: "10 ф.
effect: "Сфера в 10 ф., вы в центре

*/
/*
Призматический Луч (Prismatic Spray)
    school: "evoc",
    level: {"sor":7, "wiz":7
	    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Конус
	duration: "Мгновенно
    savings: "См. текст
    resistance: "Да

*/
{
    id: "spectral-hand",
    name: "Призрачная Рука",
    en: "Spectral Hand",
    school: "necro",
    level: {"sor":2, "wiz":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    effect: "Одна призрачная рука",
	duration: "1 минута/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "ghost-sound",
    name: "Призрачный Звук",
    en: "Ghost Sound",
    school: "illus",
    subschool: "Phantasm",
    level: {"brd":0, "sor":0, "wiz":0},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Иллюзорные звуки",
	duration: "1 раунд/уровень (П)",
    savings: "Воля неверие (при взаимодействии)",
    resistance: "Нет",
    text: "Воображаемые звуки."
},
{
    id: "command",
    name: "Приказ",
    en: "Command",
    school: "ench",
    subschool: "Compulsion",
    descriptor: ["Language-Dependent", "Mind-Affecting"],
    level: {"clr":1},
    components: "В",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5ф./2 уровня)",
    target: "Одно живое существо",
	duration: "1 раунд",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
/*
Приказывать Растениям (Command Plants)
    school: "ench",     
    subschool: "Compulsion",
(Ментальное Воздействие)
    level: {"drd":8, Растения 8
    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5ф./2 уровня)
    target: Растения и растительные существа
	duration: "1 день/уровень или 1 час/уровень (см. текст)
    savings: "См. текст
    resistance: "См. текст

*/
/*
Прикосновение Вампира (Vampiric Touch)
    school: "necro",
    level: {"sor":3, "wiz":3
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Живое существо
	duration: "Мгновенно/1 час
    savings: "Нет
    resistance: "Да

*/
{
    id: "ghoul-touch",
    name: "Прикосновение Гуля",
    en: "Ghoul Touch",
    school: "necro",
    level: {"sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Живой гуманоид",
	duration: "1d6+2 раунда",
    savings: "Стойкость нейтрализует",
    resistance: "Да"
},
/*
Притворство (Seeming)
    school: "illus",
    subschool: "Glamer",
    level: {"sor":5, "wiz":5
	    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: Одно существо/уровень, все в пределах 30 ф.
	duration: "12 часов
    savings: "Воля нейтрализует или Воля неверие (при взаимодействии)
    resistance: "Да или Нет

*/
/*
Пробуждение (Awaken)
	school: "trans",
	    level: {"drd":5
	    components: "В, С, Ф, ОО
	    casting_time: "Один день
		range: "Касание
	    target: "Животное или дерево
		duration: "Мгновенное
	    savings: "Воля нейтрализует
	    resistance: "Да

*/
/*
Прогулка В Эфир (Ethereal Jaunt)
	school: "trans",
    level: {"clr":5, "sor":7, "wiz":7
	    components: "В, С
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "1 раунд/уровень (П)

*/
/*
Проекция (Project Image)
Иллюзии (Тени)
    level: {"brd":6, "sor":6, "wiz":6
	    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Один теневой двойник
	duration: "1 раунд/уровень (П)
    savings: "Воля неверие (при взаимодействии)
    resistance: "Нет

*/
/*
Прозрение (Vision)
    school: "div",
    level: {"sor":7, "wiz":7
    components: "В, С, М, ОО
    casting_time: "1 действие
*/
{
    id: "pass without trace",
    en: "Pass Without Trace",
    school: "trans",
    level: {"drd":1, "rgr":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Одно существо/уровень",
	duration: "10 минут/уровень",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)",
},
{
    id: "curse-water",
    name: "Проклясть Воду",
    en: "Curse Water",
	school: "trans", 
	descriptor: "Evil",
    level: {"clr":1},
    components: "В, С, М",
    casting_time: "1 минута",
	range: "Касание",
    target: "Фляга с водой",
	duration: "Мгновенно",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)"
},
/*
Прорицание (Divination)
    school: "div",
    level: {"clr":4, Знание 4
    components: "В, С, М
    casting_time: "10 минут
	range: "Персональное
    target: "Вы
	duration: "Мгновенно

*/
/*
Противорастительная Облочка (Antiplant Shell)
    school: "abjur",
    level: {"drd":4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "10 футов
    area: "Эманация с радиусом 10-ф., с центром на вас
	duration: "10 минут/уровень (П)
    savings: Нет
    resistance: "Да

*/
/*
Проход Сквозь Стену (Passwall)
school: "trans",
    level: {"sor":5, "wiz":5
	    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
effect: "Отверстие 5 ф. х 8 ф., глубиной 1 ф./уровень
	duration: "1 час/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
{
    id: "jump",
    name: "Прыжок",
    en: "Jump",
    school:"trans",
    level: {"sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "1 минута/уровень (П)",
    savings: "Нет",
    resistance: "Да"
},
/*
Пустота Разума (Mind Blank)
    school: "abjur",
    level: {Защита 8, "sor":8, "wiz":8
	    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно существо
	duration: "1 день
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
{
    id: "flaming-sphere",
    name: "Пылающая Сфера",
    en: "Flaming Sphere",
    school: "evoc", 
	descriptor: "Fire",
    level: {"drd":2, "sor":2, "wiz":2},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    effect: "Сфера радиусом 3 фута",
	duration: "1 раунд/уровень",
    savings: "Реакция нейтрализует (см. текст)",
    resistance: "Да"
},
{
    id: "burning-hands",
    name: "Пылающие Руки",
    en: "Burning Hands",
    school: "trans",
	descriptor: "Fire",
    level: {"sor":1, "wiz":1},
    domen: {"Fire":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "10 футов",
    area: "Полукруг пламени 10 футов, исходящий из ваших рук",
	duration: "Мгновенно",
    savings: "Реакция наполовину",
    resistance: "Да"
},
/*
Радужный Узор (Rainbow Pattern)
    school: "illus",
    subschool: "Pattern",     
    descriptor: "Mind-Affecting",
    level: {"brd":4, "sor":4, "wiz":4
    components: "(В), С, М, Ф (см. текст)
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Цветные огни в радиусе 15 ф.
	duration: "Концентрация + 1 раунд/уровень (П)
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Развеять Чары (Break Enchantment)
	    school: "abjur",
    level: {"brd":4, "clr":5, Удача 5
    components: "В, С
    casting_time: "1 минута
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно существо за каждый уровень, все в пределах 30 ф.
	duration: "Мгновенно
    savings: "См. ниже
    resistance: "Нет

*/
/*
Размыкание Морденкайнена (Mordenkainen’s Disjunction)
    school: "abjur",
    level: {Магия 9, "sor":9, "wiz":9
	    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Все волшебные предметы и эффекты в пределах взрыва 30 ф.
	duration: "Мгновенно
    savings: "Воля нейтрализует (объект)
    resistance: "Нет

*/
{
    id: "soften-earth-and-stone",
    name: "Размягчить Землю И Камень",
    en: "Soften Earth And Stone",
    school: "trans",
    level: {"drd":2},
    domen: {"Earth":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "квадрат 10 ф./уровень (см. текст)",
	duration: "Мгновенно",
    savings: "Нет",
    resistance: "Нет"
},
/*
Разрушение (Destruction)
    school: "necro",
	descriptor: "Death",
    level: {"clr":7, Смерть 7
    components: "В, С, Ф
    casting_time: "1 действие
    range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно существо
    duration: "Мгновенно
    savings: "Стойкость частично
    resistance: "Да

*/
{
    id: "disrupt-undead",
    name: "Разрушение Нежити",
    en: "Disrupt Undead",
    school: "necro",
    level: {"sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Луч",
	duration: "Мгновенно",
    savings: "Нет",
    resistance: "Да"
},
/*
Разящее Око (Eyebite)
	Превращение (см. текст)
    level: {"brd":6, "sor":6, "wiz":6
    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Вы
	duration: "1 раунд/три уровня (см. текст)
    savings: "См. текст
    resistance: "Да

*/
{
    id: "heat-metal",
    name: "Раскаленный Металл",
    en: "Heat Metal",
    school: "trans",
    level: {"drd":2},
    domen: {"Sun":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Металлическое снаряжение одного существа/уровень, в пределах 30 футов; или 25 фн. металла/уровень, в пределах радиуса 30 ф.",
	duration: "7 раундов",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)"
},
/*
Распад (Disintegrate)
	school: "trans",
    level: {Разрушение 7, "sor":6, "wiz":6
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10ф./уровень)
effect: "Луч
	duration: "Мгновенно
    savings: "Стойкость частично
    resistance: "Да

*/
/*
Распознать Ложь (Discern Lies)
    school: "div",
    level: {"clr":4, "pal":3
    components: "В, С, БФ
    casting_time: "1 действие
    range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: Одно существо/уровень, расстояние между которыми не должно быть более 30 футов
    duration: "Концентрация, до 1 минуты/уровень
    savings: "Воля нейтрализует
    resistance: "Нет

*/
/*
Распознать Местоположение (Discern Location)
    school: "div",
    level: {"clr":8, Знание 8, "sor":8, "wiz":8
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Неограниченное
    target: "Одно существо
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Рассеять Добро (Dispel Good)
    school: "abjur", 
	descriptor: "Evil",
    level: {"clr":5, Зло 5

*/
/*
Рассеять Закон (Dispel Law)
    school: "abjur", 
	descriptor: "Chaotic",
    level: {Хаос 5, "clr":5

*/
/*
Рассеять Зло (Dispel Evil)
    school: "abjur", 
	descriptor: "Good",
    level: {"clr":5, Добро 5, "pal":4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
Цель или     target: Вы и злое существо с другого плана, которого вы коснулись; или вы и чары или злое заклинание на существе или объекте.
	duration: "1 раунд/уровень или пока не будет разряжено, в зависимости от того, что произойдет быстрее.
	    savings: "См. текст
	    resistance: "См. текст

*/
/*
Рассеять Магию (Dispel Magic)
    school: "abjur",
    level: {"brd":3, "clr":3, "drd":4. Магия 3, "pal":3, "sor":3, "wiz":3
    components: "В, С
    casting_time: "1 действие
    range: "Среднее (100 ф. + 10 ф./уровень)
	Цель или Область: Один заклинатель, существо или объект; или взрыв с радиусом 30 ф.
    duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Рассеять Хаос (Dispel Chaos)
	    school: "abjur", 
	descriptor: "Lawful",
	    level: {"clr":5, Закон 5

*/
/*
Регенерация (Regenerate)
    school: "conj",
    subschool: "Healing",

    level: {"clr":7, Лечение 7
	    components: "В, С, БФ
    casting_time: "3 полных раунда
	range: "Касание
    target: "Живое существо
	duration: "Мгновенно
    savings: "Стойкость нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Реинкарнация (Reincarnate)
school: "trans",
    level: {"drd":4
	    components: "В, С, БФ
    casting_time: "10 минут
	range: "Касание
    target: "Мертвое существо
	duration: "Мгновенно
    savings: "Нет (см. текст)
    resistance: "Да (без вреда)

*/
/*
Ржавчина (Rusting Grasp)
school: "trans",
    level: {"drd":4
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: "Один неволшебный железный объект (или несколько объектов в 3-х футах от точки касания) или одно железное существо
	duration: "См. текст
    savings: "Нет
    resistance: "Нет

*/
/*
Рой Элементалей (Elemental Swarm)
    school: "conj",
    subschool: "Summoning",
 (см. текст)
    level: {Воздух 9, "drd":9, Огонь 9, Вода 9
    components: "В, С
    casting_time: "10 минут
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Два или более призванных существ, все в пределах 30 ф.
	duration: "10 минут/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
{
    id: "doom",
    name: "Рок",
    en: "Doom",
    school: "ench",
    subschool: "Compulsion",
    descriptor: ["Fear", "Mind-Affecting"],
    level: {"clr":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10ф./уровень)",
    target: "Одно живое существо",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
/*
Рост Животных (Animal Growth)
school: "trans",
    level: {"drd":5, "sor":5, "wiz":5
	    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    target: До одного животного/уровень, все в пределах 30 ф.
	duration: "1 минута/уровень
    savings: "Нет
    resistance: "Нет

*/
/*
Рост Растений (Plant Growth)
school: "trans",
    level: {"drd":3, Растения 3, "rgr":3
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "См. текст
Цель или     area: "См. текст
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Рост Шипов (Spike Growth)
school: "trans",
    level: {"drd":3
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Один квадрат 20 ф./уровень
	duration: "1 час/уровень (П)
    savings: "Реакция частично
    resistance: "Да

*/
{
    id: "mage-hand",
    name: "Рука Мага",
    en: "Mage Hand",
    school: "trans",
    level: {"brd":0, "sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Немагический, неосязаемый объект весом до 5 фн.",
	duration: "Концентрация",
    savings: "Нет",
    resistance: "Нет",
    text: "Телекинез (5 фунтов)."
},
/*
Рука Помощи (Helping Hand)
    school: "evoc",
    level: {"clr":3
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Пять миль
    area: "Призрачная рука
	duration: ": 1 час/уровень
    savings: "Нет
    resistance: "Нет

*/
{
    id: "guidance",
    name: "Руководство",
    en: "Guidance",
    school: "div",
    level: {"clr":0, "drd":0},
    components: "В, С",
    casting_time: "1 действие",
    range: "Касание",
    target: "Существо",
    duration: "1 минута или пока не разрядится",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "light",
    name: "Свет",
    en: "Light",
    school: "evoc", 
	descriptor: "Light",
    level: {"brd":0, "clr":0, "drd":0, "sor":0, "wiz":0},
    components: "В, М/БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Объект",
	duration: "10 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет",
    text: "Предмет светится, словно факел."
},
/*
Свобода (Freedom)
    school: "abjur",
    level: {"sor":9, "wiz":9
    components: "В, С
    casting_time: "1 действие
	range: "См. текст
    target: "Существо
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да
*/
/*
Свобода Передвижения (Freedom Of Movement)
    school: "abjur",
    level: {"clr":4, "drd":4, Удача 4, "pal":4, "rgr":4
    components: "В, С, М, БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы или существо, которого коснулись
	duration: "10 минут/уровень
    savings: "Нет
    resistance: "Нет или Да (без вреда)
*/
{
    id: "sanctuary",
    name: "Святилище",
    en: "Sanctuary",
    school: "abjur",
    level: {"clr":1},
    domen: {"Protection":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "1 раунд на уровень",
    savings: "Воля нейтрализует",
    resistance: "Нет"
},
/*
Святое Слово (Holy Word)
    school: "evoc", (Добро, Звук)
    level: {"clr":7, Добро 7
    components: "В
    casting_time: "1 действие
	range: "30 ф.
    area: "Существа в радиусе 30 ф.
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да

*/
/*
Святой Удар (Holy Smite)
    school: "evoc", 
	descriptor: "Good",
    level: {"clr":4
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Взрыв радиусом 20 ф.
	duration: "Мгновенно
    savings: "Реакция наполовину
    resistance: "Да

*/
/*
Священное Место (Hallow)
    school: "evoc",
	descriptor: "Good",
    level: {"clr":5, "drd":5
    components: "В, С, М, БФ
    casting_time: "Один день
	range: "Касание
    area: "Эманация радиусом 10 футов/уровень, эманирующий из точки касания
	duration: "Мгновенно
    savings: "Нет
    resistance: "См. текст

*/
/*
Священный Меч (Holy Sword)
    school: "evoc",
    level: {"pal":4
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Оружие
	duration: "1 раунд/уровень
    savings: "Нет
    resistance: "Нет

*/
/*
Сгинь (Vanish)
school: "trans", (Телепортация)
    level: {"sor":7, "wiz":7
	range: "Касание
    target: "Объект до 50 фн./уровень и 3 куб. ф./уровень
    savings: "Воля нейтрализует (объект)
    resistance: "Да (объект)

*/
{
    id: "bane",
    name: "Сглаз",
    en: "Bane",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"clr":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
    range: "50 ф.",
    area: "Все враги в радиусе 50 ф.",
    duration: "1 минута/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
/*
Сдвиг Измерений (Plane Shift)
school: "trans",
    level: {"brd":6, "clr":6
	    components: "В, С, Ф
    casting_time: "1 действие
	range: "Касание
    target: "Существо, которого вы коснулись или до восьми существ, взявшихся за руки
	duration: "Мгновенно
    savings: "Воля нейтрализует
    resistance: "Да

*/
{
    id: "make-whole",
    name: "Сделать Целым",
    en: "Make Whole",
    school: "trans",
    level: {"clr":2},
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Один объект до 10 ф. кб./уровень"
},
/*
Секретная Страница (Secret Page)
school: "trans",
    level: {"sor":3, "wiz":3
	    components: "В, С, М
    casting_time: "10 минут
	range: "Касание
    target: "Страница размером до 3-х кв. ф.
	duration: "Постоянно
    savings: "Нет
    resistance: "Нет

*/
/*
Секретный Сундук Леомунда (Leomund's Secret Chest)
	    school: "conj",
    subschool: "Summoning",
    level: {"sor":5, "wiz":5
	    components: "В, С, Ф
    casting_time: "10 минут
	range: "См. текст
    target: "Один сундук и до 1 куб. фут предметов/уровень заклинателя
	duration: "60 дней или до разряжения
    savings: "Нет
    resistance: "Нет

*/
/*
Сжатый Кулак Бигби (Bigby’s Clenched Fist)
	    school: "evoc",
	    level: {"sor":8, "wiz":8, Сила 8
	    components: "В, С, Ф/БФ

*/
/*
Силовая Клетка (Forcecage)
    school: "evoc",     descriptor: "Force",
    level: {"sor":7, "wiz":7
    components: "В, С, М (см. текст)
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Закрытая клетка (куб 20 ф.) или камера без окон (куб 10 ф.)
	duration: "2 часа/уровень
    savings: "Нет
    resistance: "Нет

*/
{
    id: "snare",
    name: "Силок",
    en: "Snare",
    school: "trans",
    level: {"rgr":2, "drd":3},
    components: "В, С, БФ",
    casting_time: "3 раунда",
	range: "Касание",
    target: "Связанная в петлю немагическая лоза, веревка или ремень, диаметр петли 2 ф. + 2 ф./уровень",
	duration: "Пока не сработает или сломается",
    savings: "Нет",
    resistance: "Нет"
},
/*
Сильная Рука Бигби (Bigby’s Forceful Fist)
    school: "evoc",
    level: {"sor":6, "wiz":6
    components: "В, С, Ф

*/
/*
Символ (Symbol)
Универсальное
    level: {"clr":8, "sor":8, "wiz":8
	    components: "В, С, М/БФ (или В, С, М для гравировок)
    casting_time: "1 действие или 10 минут
	range: "Касание
effect: "Один символ
	duration: "См. текст
    savings: "См. текст
    resistance: "Да

*/
/*
Симпатия (Sympathy)
    school: "ench",     
    subschool: "Compulsion",

    level: {"drd":9, "sor":8, "wiz":8
	    components: "В, С, М
    casting_time: "1 час
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно место (куб до 10 ф./уровень) или один объект
	duration: "1 часа/уровень
    savings: "Воля нейтрализует (см. текст)
    resistance: "Да

*/
/*
Симулякрум (Simulacrum)
Иллюзии (Тени)
    level: {"sor":7, "wiz":7
	    components: "В, С, М, ОО
    casting_time: "12 часов
	range: "Касание
effect: "Один двойник
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
{
    id: "obscure-object",
    name: "Скрыть Объект",
    en: "Obscure Object",
    school: "abjur",
    level: {"brd":2, "clr":3, "sor":2, "wiz":2},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Один объект весом до 100 фн/уровень",
	duration: "8 часов",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)",
    text: "Скрывает предмет от магического наблюдения."
},
/*
Слабоумие (Feeblemind)
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"sor":5, "wiz":5
    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10ф./уровень)
    target: "Одно существо
	duration: "Мгновенно
    savings: "Воля нейтрализует (см. текст)
    resistance: "Да
*/
{
    id: "blindness-deafness",
    name: "Слепота/Глухота",
    en: "Blindness/Deafness",
	school: "trans",
    level: {"brd":2, "clr":3, "sor":2, "wiz":2},
    components: "В",
    casting_time: "1 действие",
	range: "Среднее (100 ф. +10 ф./уровень)",
    target: "Одно живое существо",
	duration: "Постоянно",
    savings: "Стойкость нейтрализует",
    resistance: "Да"
},
/*
Слиться С Камнем (Meld Into Stone)
school: "trans",
    level: {"clr":3, "drd":3
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "10 минут/уровень
*/
/*
Слияние С Природой (Commune With Nature)
	    school: "div",
    level: {Животные 5, "drd":5
	    components: "В, С
    casting_time: "10 минут
	range: "Персональное
    target: "Вы
	duration: "Мгновенно
*/
/*
Слово Возвращения (Word Of Recall)
    school: "conj",
    school: "Teleportation",
    level: {"clr":6, "drd":8
    components: "В
    casting_time: "1 действие
	range: "Неограниченно
    target: "Вы, объекты и/или желающие живые существа в совокупности до 50 фунтов/уровень
	duration: "Постоянно
    savings: "Нет или Воля нейтрализует (без вреда, объект)
    resistance: "Нет или Да (без вреда, объект)

*/
/*
Слово Силы, Контузия (Power Word, Stun)
    school: "conj",
    subschool: "Creation",

    level: {"sor":7, "wiz":7, Война 7
	    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно существо с 150 хитами
	duration: "См. текст
    savings: "Нет
    resistance: "Да

*/
/*
Слово Силы, Слепота (Power Word, Blind)
    school: "conj",
    subschool: "Creation",

    level: {"sor":8, "wiz":8, Война 8
	    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Существа с суммой КХ 200, в радиусе 15 ф.
	duration: "См. текст
    savings: "Нет
    resistance: "Да

*/
/*
Слово Силы, Смерть (Power Word, Kill)
    school: "conj",
    subschool: "Creation",
 
	descriptor: "Death",
    level: {"sor":9, "wiz":9, Война 9
	    components: "В
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
Цель или     area: "Одно живое существо или одно и более существ в радиусе 15 ф.
	duration: "Мгновенно
    savings: "Нет
    resistance: "Да

*/
/*
Слово Хаоса (Word Of Chaos)
    school: "evoc", (Хаоc, Звуковое)
    level: {Хаос 7, "clr":7
    components: "В
    casting_time: "1 действие
	range: "30 ф.
    area: "Существа в радиусе 30 ф., вы в центре
	duration: "Постоянно
    savings: "Нет
Сопротивляемость Да

*/
{
    id: "random-action",
    name: "Случайное Действие",
    en: "Random Action",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"clr":1},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Одно живое существо",
	duration: "1 раунд",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
/*
Смена Формы (Shapechange)
school: "trans",
    level: {Животные 9, "drd":9, "sor":9, "wiz":9
	    components: "В, С, Ф
    casting_time: "1 действие
	range: "Персональное
    target: "Вы
	duration: "10 минут/уровень

*/
/*
Смещение (Displacement)
	    school: "illus",
    subschool: "Glamer",
	    level: {"brd":3, "sor":3, "wiz":3
    components: "В, М
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "1 раунд/уровень
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Сновидение (Dream)
	Иллюзии (Фантазия)
    descriptor: "Mind-Affecting",
    level: {"brd":5, "sor":5, "wiz":5
    components: "В, С
    casting_time: "1 действие
	range: "Неограниченное
    target: "Одно живое существо
	duration: "См. текст
    savings: "Нет
    resistance: "Да

*/
/*
Снять Проклятие (Remove Curse)
    school: "abjur",
    level: {"brd":3, "clr":3, "sor":4, "wiz":4
	    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Существо или предмет
	duration: "Мгновенно
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Создать Большую Нежить (Create Greater Undead)
	    school: "necro", 
	descriptor: "Evil",
    level: {"clr":8, Смерть 8
	    components: "В, С, М
    casting_time: "1 час
	range: "Близкое (25 ф. + 5ф./2 уровня)
    target: "Один труп
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
{
    id: "create-water",
    name: "Создать Воду",
    en: "Create Water",
    school: "conj",
    subschool: "Creation",
    level: {"clr":0, "drd":0, "pal":1},
    components: "В, С",
    casting_time: "1 действие",
    range: "Близкое (25 ф. + 5ф./2 уровня)",
	effect: "До 2 галлонов воды/уровень",
    duration: "Мгновенно",
    savings: "Нет",
    resistance: "Нет"
},
/*
Создать Нежить (Create Undead)
    school: "necro",
	descriptor: "Evil",
    level: {"clr":6, Смерть 6, Зло 6
	components: В, С, М
    casting_time: "1 час
    range: "Близкое (25 ф. + 5ф./2 уровня)
    target: "Один труп
    duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Создать Пищу И Воду (Create Food And Water)
    school: "conj",
    subschool: "Creation",
    level: {"clr":3
    components: "В, С
    casting_time: "10 минут
	range: "Близкое (25 ф. + 5ф./2 уровня)
    effect: "Пища и вода на трех человек или одну лошадь/уровень на один день
		duration: "24 часа (см. текст)
	    savings: "Нет
	    resistance: "Нет

*/
/*
Созидание Теней (Shadow Evocation)
Иллюзии (Тени)
    level: {"sor":5, "wiz":5
	    components: "В, С
    casting_time: "1 действие
	range: "См. текст
effect: "См. текст
	duration: "См. текст
    savings: "Воля неверие (при взаимодействии)
    resistance: "Да

*/
/*
Сокрушающая Рука Бигби (Bigby’s Crushing Fist)
	    school: "evoc",
	    level: {"sor":9, "wiz":9, Сила 9
	    components: "В, С, М, Ф/БФ

*/
/*
Солнечный Взрыв (Sunburst)
    school: "evoc",
    level: {"drd":8, "sor":8, "wiz":8, Солнце 8
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    area: "Радиус взрыва 10 ф./уровень
	duration: "Мгновенно
    savings: "Реакция частично (см. текста)
    resistance: "Да

*/
/*
Солнечный Луч (Sunbeam)
    school: "evoc",
    level: {"drd":7, Солнце 7
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Луч 5 ф. шириной и 100 ф. + 10 ф./уровень, исходящий из точки прямо перед вами
	duration: "1 раунд/уровень или пока все лучи не иссякнут
    savings: "Реакция нейтрализует и наполовину (см. текст)
    resistance: "Да


*/
{
    id: "sleep",
    name: "Сон",
    en: "Sleep",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":1, "rgr":2, "sor":1, "wiz":1},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    area: "Несколько живых существ в радиусе взрыва 15 ф.",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да",
    text: "Погружает 2 КХ существ в магический сон."
},
{
    id: "message",
    name: "Сообщение",
    en: "Message",
    school: "trans",
    level: {"brd":1, "sor":1, "wiz":1},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    target: "Одно существо/уровень",
	duration: "10 минут/уровень",
    savings: "Нет",
    resistance: "Нет",
    text: "Общение шепотом на расстоянии."
},
{
    id: "resistance",
    name: "Сопротивляемость",
    en: "Resistance",
    school: "abjur",
    level: {"brd":0, "clr":0, "drd":0, "pal":1, "sor":0, "wiz":0},
    components: "В, С, М/БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "1 минута",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)",
    text: "Существу дается бонус +1 к спасброскам."
},
/*
Сопротивляемость Заклинаниям (Spell Resistance)
    school: "abjur",
    level: {"clr":5, Магия 5, Защита 5
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "1 минута/уровень
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
{
    id: "resist-elements",
    name: "Сопротивляемость Стихиям",
    en: "Resist Elements",
    school: "abjur",
    level: {"clr":2, "drd":2, "pal":2, "rgr":1, "sor":2, "wiz":2},
    domen: {"Fire":3},
    components: "В, С, БФ",
    casting_time: "1 действие",
	duration: "1 минута/уровень"
},
/*
Сотворение Звуков (Sculpt Sound)
school: "trans",
    level: {"brd":3
	    components: "В, С
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: Одно существо или объект/уровень, все в пределах 30 ф.
	duration: "1 час/уровень (П)
    savings: "Воля нейтрализует (объект)
    resistance: "Да (объект)

*/
{
    id: "produce-flame",
    name: "Сотворение Пламени",
    en: "Produce Flame",
    school: "evoc", 
	descriptor: "Fire",
    level: {"drd":2},
    domen: {"Fire":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Касание",
    effect: "Пламя на вашей ладони",
	duration: "1 раунд/уровень (П)",
    savings: "Нет",
    resistance: "Да"
},
/*
Статус (Status)
    school: "div",
    level: {"clr":4
	    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: Одно существо/три уровня
	duration: "1 час/уровень
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Статуя (Statue)
school: "trans",
    level: {Км 7
	    components: "В, С, М
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "1 час/уровень (П)
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
{
    id: "tree-shape",
    name: "Стать Деревом",
    en: "Tree Shape",
    school: "trans",
    level: {"drd":2, "rgr":3},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "1 час/уровень (П)"
},
/*
Стена Ветра (Wind Wall)
    school: "evoc",
    level: {Воздух 2, "brd":3, "clr":3, "rgr":4, "sor":3, "wiz":3
    components: "В, С, M/БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Стена до 10 футов/уровень длиной и 5 футов/уровень высотой (ИФ)
	duration: "1 раунд/уровень
    savings: "Нет (см. текст)
    resistance: "Да

*/
/*
Стена Железа (Wall Of Iron)
Вызывание (    school: "evoc",)
    level: {"sor":5, "wiz":5
    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Железная стена площадью до 5 кв. ф./уровень (см. текст)
	duration: "Постоянно
    savings: "См. текст
    resistance: "Нет

*/
/*
Стена Камня (Wall Of Stone)
    school: "conj",
    subschool: "Creation",

    level: {"clr":5, "drd":6, Земля 5, "sor":5, "wiz":5
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Каменая стена площадью до 5 кв. ф./уровень (ИФ)
	duration: "Постоянно
    savings: "См. текст
    resistance: "Нет

*/
/*
Стена Льда (Wall Of Ice)
    school: "evoc", 
	descriptor: "Cold",
    level: {"sor":4, "wiz":4
    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Закрепленная стена льда до 10 кв. ф./уровень или ледяная полусфера радиусом до 3 ф. +1 ф./уровень
	duration: "1 минута/уровень
    savings: "См. текст
    resistance: "Да

*/
/*
Стена Огня (Wall Of Fire)
    school: "evoc", 
	descriptor: "Fire",
    level: {"drd":5, Огонь 4, "sor":4, "wiz":4
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Непрозрачная стена пламени до 20 ф. длиной/уровень или кольцо огня радиусом до 5 ф./2 уровня, и стена и круг 20 ф. в высоту.
	duration: "Концентрация + 1 раунд/уровень
    savings: "См. текст
    resistance: "Да

*/
/*
Стена Шипов (Wall Of Thorns)
    school: "conj",
    subschool: "Creation",

    level: {"drd":5, Растения 5
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Стена колючего кустарника до 10 куб. ф./уровень (ИФ)
	duration: "10 минут/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
/*
Стена Энергии (Wall Of Force)
    school: "evoc",     descriptor: "Force",
    level: {"sor":5, "wiz":5
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
effect: "Стена площадью до 10 кв. ф./уровень или сфера или полусфера радиусом до 1 ф./уровень
	duration: "1 минута/уровень (П)
    savings: "Нет
    resistance: "Нет

*/
{
    id: "erase",
    name: "Стирание",
    en: "Erase",
	school: "trans",
    level: {"brd":1, "sor":1, "wiz":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Cвиток или две страницы",
	duration: "Мгновенно",
    savings: "См. текст",
    resistance: "Нет",
    text: "Обычные или магические надписи исчезают."
},
/*
Страх (Fear)
	    school: "necro",     
    descriptor: "Mind-Affecting",
    level: {"brd":3, "sor":4, "wiz":4
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Конус
	duration: "1 раунд/уровень
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Стрела Пламени (Flame Arrow)
	    school: "conj",
    subschool: "Creation", 
	descriptor: "Fire",
    level: {"sor":3, "wiz":3
    components: "В, С, М
    casting_time: "1 действие
	range: "100 футов +10фт./уровень
Цели или effect: "До одного снаряда/уровень, все в пределах 10 футов во время сотворения; или один огненный болт/четыре уровня
	duration: "1 раунд/мгновенно
    savings: "См. текст
    resistance: "Да

*/
/*
Сфера Невидимости (Invisibility Sphere)
    school: "illus",
    subschool: "Glamer",
    level: {"brd":3, "sor":3, "wiz":3
    components: "В, С, М
    area: "Сфера радиусом 10 ф., вы в центре

*/
/*
Тайное Убежище Леомунда (Leomund's Secure Shelter)
    school: "conj",
    subschool: "Creation",
    level: {"brd":4, "sor":4, "wiz":4
	    components: "В, С, М/БФ (см. текст)
    casting_time: "10 минут
	range: "Близкое (25 ф. + 5 ф./2 уровня)
effect: "Строение в 20 футов кв.
	duration: "2 часа/уровень (П)
    savings: "Нет
    resistance: "Нет
*/
{
    id: "dancing-lights",
    name: "Танцующие Огни",
    en: "Dancing Lights",
    school: "illus",
    subschool: "Figment",
    level: {"brd":0, "sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "Среднее (100 ф + 10ф./уровень)",
    effect: "До четырех иллюзорных огней в пределах 10-футов",
	duration: "1 минута",
    savings: "Воля неверие (при взаимодействии)",
    resistance: "Нет",
    text: "Призрачные факелы или другие огни."
},
/*
Телекинез (Telekinesis)
school: "trans",
    level: {"sor":5, "wiz":5
	    components: "В, С
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
Цель или     target: См. текст
	duration: "Концентрация (до 1 раунда/уровень) или мгновенно (см. текст)
    savings: "Воля нейтрализует (объект) (см. текст)
    resistance: "Да (объект) (см. текст)

*/
/*
Телекинетическая Сфера Отилюка (Otiluke’s Telekinetic Sphere)
    school: "evoc",     descriptor: "Force",
    level: {"sor":8, "wiz":8
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
effect: "Сфера диаметром 1 ф./уровень, вокруг существ или объектов
	duration: "1 минута/уровень (П)
    savings: "Реакция нейтрализует (объект)
    resistance: "Да (объект)

*/
/*
Телепатическая Связь Рэри (Rary’s Telepathic Bond)
    school: "div",
    level: {"sor":5, "wiz":5
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно существо/три уровня, все в пределах 30 ф.
	duration: "10 минут/уровень
    savings: "Нет
    resistance: "Нет

*/
/*
Телепорт (Teleport)
    school: "conj",
    school: "Teleportation",
    level: {"sor":5, "wiz":5, Путешествия 5
	    components: "В
    casting_time: "1 действие
	range: "Персональное и касание
    target: "Вы и объекты, которых коснулись или другие добровольные существа весом до 50 фн./уровень
	duration: "Мгновенно
    savings: "Нет или Воля нейтрализует (объект)
    resistance: "Нет или Да (объект)

*/
{
    id: "darkvision",
    name: "Темновидение",
    en: "Darkvision",
	school: "trans",
    level: {"sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо, которого коснулись",
	duration: "1 час/уровень",
    savings: "Нет",
    resistance: "Да (без вреда)"
},
/*
Тени (Shades)
Иллюзии (Тени)
    level: {"sor":6, "wiz":6}

*/
{
    id: "Silence",
    name: "Тишина",
    en: "Silence",
    school: "illus",
    subschool: "Glamer",
    level: {"brd":2, "clr":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Большое (400 ф. + 40 ф./уровень)",
    area: "Эманация радиусом 15 ф., в центре существо, объект или точка пространства",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует или нет (объект)",
    resistance: "Да или нет (объект)"
},
/*
Трансформация Тенсера (Tenser’s Transformation)
school: "trans",
    level: {"sor":6, "wiz":6
	    components: "В, С, М
    casting_time: "1 действие
	range: "Персонально
    target: "Вы
	duration: "1 раунд/уровень

*/
/*
Требование (Demand)
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"sor":8, "wiz":8
    savings: "Воля частично
    resistance: "Да

*/
{
    id: "alarm",
    name: "Тревога",
    en: "Alarm",
    school: "abjur",
    level: {"brd":1, "rgr":1, "sor":1, "wiz":1},
    components: "В, С, Ф/БФ",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Эманация радиусом 25 ф. из точки в пространстве",
	duration: "1 часа/уровень (П)",
    savings: "Нет",
    resistance: "Нет",
    text: "Сторожит территорию 2 часа/уровень."
},
/*
Тропа Теней (Shadow Walk)
Иллюзии (Тени)
    level: {"sor":7, "wiz":7
    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: До одного существа/уровень
	duration: "1 час/уровень (П)
    savings: "Воля нейтрализует
    resistance: "Да

*/
{
    id: "knock",
    name: "Тук-Тук",
    en: "Knock",
    school: "trans",
    level: {"sor":2, "wiz":2},
    components: "В",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    target: "Одна дверь, ящик или сундук в пределах 10 кв. ф./уровень",
	duration: "Мгновенно (см. текст)",
    savings: "Нет",
    resistance: "Нет"
},
/*
Туман В Голове (Mind Fog)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":5, "sor":5, "wiz":5
	    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Туман, распространяющийся на 20 ф. кб.
	duration: "30 минут/+2d6 раундов (см. текст)
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Тушение (Quench)
school: "trans",
    level: {"drd":4
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Один 20-футовый куб на уровень (ИФ) или один огненный волшебный предмет
	duration: "Мгновенно
    savings: "Нет или Воля нейтрализует (объект)
    resistance: "Нет или Да (объект)

*/
{
    id: "darkness",
    name: "Тьма",
    en: "Darkness",
    school: "evoc",
	descriptor: "Darkness",
    level: {"brd":2, "clr":2, "sor":2, "wiz":2},
    components: "В, М/БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "10 минут/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
/*
Убить Живое (Slay Living)
    school: "necro", 
	descriptor: "Death",
    level: {"clr":5, Смерть 5
	    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Живое существо
	duration: "Мгновенно
    savings: "Стойкость частично
    resistance: "Да

*/
/*
Убежище (Refuge)
    school: "conj",
    school: "Teleportation",
    level: {"clr":7, "sor":9, "wiz":9
	    components: "В, С, М
    casting_time: "1 действие
	range: "Касание
    target: "Объект
	duration: "Постоянно или пока не разряжено
    savings: "Нет
    resistance: "Нет

*/
{
    id: "enlarge",
    name: "Увеличение",
    en: "Enlarge",
	school: "trans",
    level: {"sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно существо или один объект размером до 10 куб. ф./уровень.",
	duration: "1 минута/уровень",
    savings: "Стойкость нейтрализует",
    resistance: "Да"
},
{
    id: "enthrall",
    name: "Увлечение",
    en: "Enthrall",
    school: "ench",
    subschool: "Charm",
    descriptor: ["Language-Dependent", "Mind-Affecting", "Sonic"],
    level: {"brd":2, "clr":2},
    components: "В, С",
    casting_time: "1 полный раунд",
	range: "Среднее (100 ф. + 10ф./уровень)",
    target: "Любое число существ",
	duration: "До 1 часа",
    savings: "Воля нейтрализует (см. текст)",
    resistance: "Да"
},
/*
Удар Молнии (Lightning Bolt)
    school: "evoc", 
	descriptor: "Electricity",
    level: {"sor":3, "wiz":3
	    components: "В, С, М
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень) или 50 ф. + 5 ф./уровень
    area: "5 ф. шириной для срденего расстояния; или 10 ф. шириной для 50 ф. + 5 ф./уровень
	duration: "Мгновенно
    savings: "Реакция наполовину
    resistance: "Нет
*/
/*
Удар Пламени (Flame Strike)
    school: "evoc", 
	descriptor: "Fire",
    level: {"clr":5, "drd":4, Солнце 5, Война 5
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
    area: "Цилиндр (радиус 10 ф., высота 40 ф.)
	duration: "Мгновенно
    savings: "Реакция наполовину
    resistance: "Да
*/
{
    id: "hold-animal",
    name: "Удержать Животное",
    en: "Hold Animal",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"drd":2, "rgr":2},
    domen: {"Animal":2},
    components: "В, С",
    target: "Одно животное"
},
/*
Удеражать Монстра (Hold Monster)
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":4, Закон 6, "sor":5, "wiz":5
	    components: "В, С, М/БФ
    target: "Одно живое существо
*/
{
    id: "hold-portal",
    name: "Удержать Портал",
    en: "Hold Portal",
    school: "abjur",
    level: {"sor":1, "wiz":1},
    components: "В",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    target: "Один портал, до 20 кв. ф./уровень",
	duration: "1 минута/уровень",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "hold-person",
    name: "Удержать Существо",
    en: "Hold Person",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":2, "clr":2, "sor":3, "wiz":3},
    components: "В, С, Ф/БФ",
    casting_time: "1 действие",
	range: "Среднее (100 ф. + 10 ф./уровень)",
    target: "Один гуманоид Среднего размера или менее",
	duration: "1 раунд/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
/*
Ужасное Иссушение (Horrid Wilting)
    school: "necro",
    level: {"sor":8, "wiz":8, Вода 8
    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    target: Живые существа, в пределах 60 ф. друг от друга
	duration: "Мгновенно
    savings: "Стойкость наполовину
    resistance: "Да

*/
/*
Узы (Binding)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"sor":8, "wiz":8
    components: "В, С, М
    casting_time: "1 минута
    range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "1 живое существо
    duration: "См. текст
    savings: "Воля нейтрализует (см. текст)
    resistance: "Да

*/
/*
Улучшенная Невидимость (Improved Invisibility)
    school: "illus",
    subschool: "Glamer",
    level: {"brd":4, "sor":4, "wiz":4
	    components: "В, С
	duration: "1 минута/уровень (П)
    savings: "Воля нейтралзует (без вреда)

*/
{
    id: "reduce",
    name: "Уменьшение",
    en: "Reduce",
    school: "trans",
    level: {"sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Одно существо или объект до 10 кб. ф./уровень заклинателя",
	duration: "1 минута/уровень",
    savings: "Стойкость нейтрализует (объект)",
    resistance: "Да (объект)"
},
/*
Уменьшение Предмета (Shrink Item)
school: "trans",
    level: {"sor":3, "wiz":3
	    components: "В, С
    casting_time: "1 действие
	range: "Касание
    target: "Один объект до 2 кб. ф./уровень
	duration: "1 день/уровень (см. текст)
    savings: "Воля нейтрализует (объект)
    resistance: "Да (объект)

*/
/*
Уменьшение Растений (Diminish Plants)
	school: "trans",
    level: {"drd":3, "rgr":3
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "См. текст
Цель или     area: "См. текст
	duration: "Мгновенно
	    savings: "Нет
	    resistance: "Нет

*/
/*
Универсальное Превращение (Polymorph Any Object)
school: "trans",
    level: {"sor":8, "wiz":8, Обман 8
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "Одно существо или объект
	duration: "См. текст
    savings: "Воля нейтрализует (объект) (см. текст)
    resistance: "Да (объект)

*/
/*
Управлять Ветрами (Control Winds)
	school: "trans",
	    level: {Воздух 5, "drd":5
	    components: "В, С
	    casting_time: "1 действие
		range: "40 ф./уровень
	    area: "40ф./уровень, вы – центр
		duration: "10 минут/уровень
	    savings: "Реакция нейтрализует
	    resistance: "Нет

*/
/*
Управлять Водой (Control Water)
	school: "trans",
    level: {Бард 5, "clr":4, "sor":6, "wiz":6, Вода 4
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Большое (400ф. + 40ф./уровень)
    area: "Вода объемом 10 ф./уровень x 10 ф./уровень x 2 ф./уровень (ИФ)
	duration: "10 минут/уровень (П)
	    savings: "Нет
	    resistance: "Нет

*/
/*
Управлять Нежитью (Control Undead)
	    school: "necro",
    level: {"sor":7, "wiz":7
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25ф. + 5ф./2 уровня)
    target: До двух КХ неживых существ/уровень, все в пределах 30 ф.
	duration: "1 минута/уровень
    savings: "Воля нейтрализует
    resistance: "Да

*/
/*
Управлять Погодой (Control Weather)
	school: "trans",
	    level: {Воздух 7, "brd":6, "clr":7, "drd":7, "sor":6, "wiz":6
	    components: "В, С
	    casting_time: "10 минут (см. текст)
		range: "Две мили
	    area: "Круг радиусом 2 мили, вы в центре (см. текст)
		duration: "4d12 часов (см. текст)
	    savings: "Нет
	    resistance: "Нет

*/
/*
Управлять Растениями (Control Plants)
	school: "trans",
	    level: {"drd":4, Растения 4, "rgr":3
	    components: "В, С, БФ
	    casting_time: "1 действие
		range: "Близкое (25 ф. + 5 ф./2 уровня)
		duration: "1 минута/уровень
	    savings: "Воля нейтрализует (см. текст)
	    resistance: "Нет

*/
/*
Упругая Сфера Отилюка (Otiluke’s Resilient Sphere)
    school: "evoc",     descriptor: "Force",
    level: {"sor":4, "wiz":4
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
effect: "Сфера диаметром 1 фут/уровень, вокруг существа
	duration: "1 минута/уровень
    savings: "Спасбросок на Реакцию нейтрализует
Сопротивляемость заклинанию: Да

*/
/*
Ускорение (Haste)
	school: "trans",
    level: {"brd":3, "sor":3, "wiz":3
    components: "В, С, М
    casting_time: "1 действие
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    target: "Одно существо
	duration: "1 раунд/уровень
    savings: "Стойкость нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
{
    id: "calm-animals",
    name: "Успокоить Животное",
    en: "Calm Animals",
    school: "ench",
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"drd":1},
    domen: {"Animal":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровеня)",
    target: "Животные, бестии или волшебные бестии с интеллектом 1, 2 в радиусе 30 ф.",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует (см. текст)",
    resistance: "Да"
},
{
    id: "calm-emotions",
    name: "Успокоить Эмоции",
    en: "Calm Emotions",
    school: "ench",
    subschool: "Compulsion",
    level: {"clr":2},
    domen: {"Law":2},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Среднее (100 ф + 10 ф./уровень)",
    target: "1d6 существ/уровень, все в пределах 30 футов",
	duration: "Концентрация, до 1 раунда/уровень",
    savings: "Воля нейтрализует",
    resistance: "Да"
},
{
    id: "cause-fear",
    name: "Устрашение",
    en: "Cause Fear",
    school: "necro",
    descriptor: ["Fear", "Mind-Affecting"],
    level: {"brd":1, "clr":1, "sor":1, "wiz":1},
    domen: {"Death":1},
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    target: "Одно живое существо",
	duration: "1d4 раундов",
    savings: "Воля нейтрализует",
    resistance: "Да",
    text: "Одно существо с КХ 5 и ниже убегает на 1d4 раунда."
},
{
    id: "endure-elements",
    name: "Устойчивость К Стихиям",
    en: "Endure Elements",
    school: "abjur",
    level: {"clr":1, "drd":1, "pal":1, "sor":1, "wiz":1},
    domen: {"Strength" :1, "Sun" :1},
    components: "В, С",
    casting_time: "1 действие",
    range: "Касание",
    target: "Существо, которого коснулись",
    duration: "24 часа",
    savings: "Нет",
    resistance: "Да"
},
/*
Устойчивый Образ (Persistent Image)
    school: "illus",
    subschool: "Figment",
    level: {"brd":5, "sor":5, "wiz":5
	duration: "1 минута/уровень (П)

*/
/*
Фазовая Дверь (Phase Door)
    school: "conj",
    subschool: "Creation",

    level: {"sor":7, "wiz":7, Путешествие 8
	    components: "В
    casting_time: "1 действие
	range: "Касание
effect: "Эфирное отверстие 15 ф. х 8 ф., 1ф./уровень глубиной
	duration: "Одно использование/два уровня
    savings: "Нет
    resistance: "Нет

*/
{
    id: "rope-trick",
    name: "Фокус С Веревкой",
    en: "Rope Trick",
    school: "trans",
    level: {"sor":2, "wiz":2},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Один кусок веревки от 5 до 30 ф. длиной",
	duration: "1 час/уровень (П)",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "prestidigitation",
    name: "Фокусы",
    en: "Prestidigitation",
    school: "univ",
    level: {"brd":0, "sor":0, "wiz":0},
    components: "В, С",
    casting_time: "1 действие",
	range: "10 ф.",
	target_or_effect_or_area: "См. текст",
	duration: "1 час",
    savings: "См. текст",
    resistance: "Нет",
    text: "Показывает простые фокусы."
},
{
    id: "wood-shape",
    name: "Форма Дерева",
    en: "Wood Shape",
    school: "trans",
    level: {"drd":2},
    components: "В, С, БФ",
    casting_time: "1 действие",
	range: "Касание",
    target: "Кусок древесины не более 10 куб. ф. +1 куб.ф./уровень",
	duration: "Постоянно",
    savings: "Воля нейтрализует (объект)",
    resistance: "Да (объект)"
},
/*
Форма Камня (Stone Shape)
school: "trans",
    level: {"clr":3, "drd":3, Земля 3, "sor":5, "wiz":5
	    components: "В, С, М/БФ
    casting_time: "1 действие
	range: "Касание
    target: "Камень или каменный объект, до 10 кб. ф. + 1 кб. ф./уровень
	duration: "Мгновенно
    savings: "Нет
    resistance: "Нет

*/
/*
Хватающая Рука Бигби (Bigby’s Grasping Hand)
    school: "evoc",
    level: {"sor":7, "wiz":7, Сила 7
    components: "В, С, Ф/БФ

*/
/*
Хождение По Ветру (Wind Walk)
school: "trans",
    level: {"clr":6, "drd":7
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: Вы и одно существо/3 уровняь
	duration: "1 час/уровень (П)
    savings: "Нет и Воля нейтрализует (без вреда)
    resistance: "Нет и Да (без вреда)

*/
/*
Хождение По Воздуху (Air Walk)
school: "trans",
    level: {Воздух 4, "clr":4
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: "Существо (от Гигантского и меньше)
	duration: "10 минут/уровень
    savings: "Нет
    resistance: "Да (без вреда)

*/
/*
Хождение По Воде (Water Walk)
school: "trans",
    level: {"clr":3, "rgr":3
    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: Одно существо/уровень
	duration: "10 минут/уровень
    savings: "Воля нейтрализует (без вреда)
    resistance: "Да (без вреда)

*/
/*
Холмоброд (Shambler)
    school: "conj",
    subschool: "Creation",

    level: {"drd":9, Растения 9
	    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10 ф./уровень)
effect: "Три и более холмобродов, все в пределах 30 ф. (см. текст)
	duration: "Семь дней или семь месяцев (П) (см. текст)
    savings: "Нет
    resistance: "Нет

*/
/*{
    id: "color-spray",
    name: "Цветная Струя",
    en: "Color Spray",
	school: "illus",
    subschool: "Pattern",
    descriptor: "Mind-Affecting",
    level: {"sor":1, "wiz":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5ф./2 уровня)",
    area: "Конус",
	duration: "Мгновенно (см. текст)",
    savings: "Воля нейтрализует",
    resistance: "Да"
},*/
/*
Целебный Круг (Healing Circle)
    school: "conj",
    subschool: "Healing",

    level: {"brd":5, "clr":5, "drd":6, Лечение 6
	    components: "В, С
    casting_time: "1 действие
	range: "20 футов
    area: "Все живые союзники и нежить в пределах взрыва радиусом 20 футов, вы в центре
	duration: "Мгновенно
    savings: "Стойкость наполовину (без вреда)
    resistance: "Да (без вреда)
*/
/*
Цепная Молния (Chain Lightning)
	    school: "evoc", 
	descriptor: "Electricity",
    level: {Воздух 6, "sor":6, "wiz":6
    components: "В, С, Ф
    casting_time: "1 действие
	range: "Большое (400 ф. + 40 ф./уровень)
    target: "Выбранное существо плюс одно/уровень, все в пределах 30 ф.
	duration: "Мгновенно
    savings: "Реакция наполовину
	    resistance: "Да
*/
/*
Черные Щупальца Эварда (Evard’s Black Tentacles)
	    school: "conj",
    subschool: "Creation",
	    level: {"sor":4, "wiz":4
	    components: "В, С, М
	    casting_time: "1 действие
		range: "Среднее (100 ф. + 10 ф./уровень)
	effect: "1d4 щупальцев + одно щупальце/уровень, все в радиусе 15 ф.
		duration: "1 час/уровень
	    savings: "Нет
	    resistance: "Нет
*/
{
    id: "ventriloquism",
    name: "Чревовещание",
    en: "Ventriloquism",
    school: "illus",
    subschool: "Figment",
    level: {"brd":1, "sor":1, "wiz":1},
    components: "В, Ф",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    effect: "Понятный звук, обычно речь",
	duration: "1 минута/уровень (П)",
    savings: "Воля неверие (при взаимодействии)",
    resistance: "Нет",
    text: "Позволяет исходить голосу или звуку из какого-либо места в течение 1 минуты/уровень."
},
{
    id: "read-magic",
    name: "Чтение Магии",
    en: "Read Magic",
    school: "univ",
    level: {"brd":0, "clr":0, "drd":0, "pal":1, "rgr":1, "sor":0, "wiz":0},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "10 минут/уровень",
    text: "Чтение Магии"
},
/*
Чудо (Miracle)
    school: "evoc",
    level: {"clr":9, Удача 9
	    components: "В, С, ОО (см. текст)
    casting_time: "1 действие
	range: "См. текст
Цель, Эффект или     area: "См. текст
	duration: "См. текст
    savings: "См. текст
    resistance: "Да

*/
/*
Шар Неуязвимости (Globe Of Invulnerability)
    school: "abjur",
    level: {"sor":6, "wiz":6
*/
{
    id: "whispering-wind",
    name: "Шепчущий Ветер",
    en: "Whispering Wind",
    school: "trans",
    level: {"brd":2, "sor":2, "wiz":2},
    components: "В, С",
    casting_time: "1 действие",
	range: "Одна миля/уровень",
    area: "Радиус 10 ф.",
	duration: "Пока не разряжено (не достигута точка назначения) или не больше 1 часа/уровень",
    savings: "Нет",
    resistance: "Нет"
},
{
    id: "shield",
    name: "Щит",
    en: "Shield",
    school: "abjur",
    descriptor: "Force",
    level: {"sor":1, "wiz":1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "1 минута/уровень (П)"
},
{
    id: "shield-of-faith",
    name: "Щит Веры",
    en: "Shield Of Faith",
    school: "abjur",
    level: {"clr":1},
    components: "В, С, М",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо",
	duration: "1 минута/уровень",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
{
    id: "shield-other",
    name: "Щит Для Другого",
    en: "Shield Other",
    school: "abjur",
    level: {"clr":2, "pal":2},
    domen: {"Protection":2},
    components: "В, С, Ф",
    casting_time: "1 действие",
	range: "Близкое (25 ф. + 5 ф./2 уровня)",
    area: "Одно существо",
	duration: "1 час/уровень (П)",
    savings: "Воля нейтрализует (без вреда)",
    resistance: "Да (без вреда)"
},
/*
Щит Закона (Shield Of Law)
    school: "abjur", 
	descriptor: "Lawful",
    level: {"clr":8, Закон 8
    components: "В, С, Ф
    casting_time: "1 действие
	range: "20 ф.
    target: Одно существо/уровень в радиусе взрыва 20 ф., вы в центре
	duration: "1 раунд/уровень (П)
    savings: "См. текст
    resistance: "Да (без вреда)
*/
{
    id: "entropic-shield",
    name: "Щит Энтропии",
    en: "Entropic Shield",
    school: "abjur",
    level: {"clr":1},
    domen: {"Luck": 1},
    components: "В, С",
    casting_time: "1 действие",
	range: "Персональное",
    target: "Вы",
	duration: "1 минута/уровень"
},
/*
Экран (Screen)
    school: "illus",
    subschool: "Glamer",
    level: {"sor":8, "wiz":8, Обман 7
    components: "В, С
    casting_time: "10 минут
	range: "Близкое (25 ф. + 5 ф./2 уровня)
    area: "30-футовый куб/уровень (ИФ)
	duration: "1 день
    savings: "Нет или Воля неверие (при взаимодействии) (см. текст)
    resistance: "Нет
*/
{
    id: "shocking-grasp",
    name: "Электрошок",
    en: "Shocking Grasp",
    school: "trans", 
	descriptor: "Electricity",
    level: {"sor":1, "wiz":1},
	components: "В, С",
    casting_time: "1 действие",
	range: "Касание",
    target: "Существо или объект",
	duration: "До разряжения",
    savings: "Нет",
    resistance: "Да (объект)"
}
/*
Эмоция (Emotion)
    school: "ench",     
    subschool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: {"brd":3, "sor":4, "wiz":4
    components: "В, С
    casting_time: "1 действие
	range: "Среднее (100 ф. + 10ф./уровень)
    target: Все живые существа в радиусе 15 футов.
	duration: "Концентрация
    savings: "Воля нейтрализует
    resistance: "Да
*/
/*
Эфирность (Etherealness)
	school: "trans",
    level: {"clr":6, "sor":8, "wiz":8
    range: "Касание (см. текст)
    target: Вы и одно существо/три уровня
    duration: "1 минута/уровень (П)
    resistance: "Да
*/
/*
Яд (Poison)
    school: "necro",
    level: {"clr":4, "drd":3
	    components: "В, С, БФ
    casting_time: "1 действие
	range: "Касание
    target: "Живое существо
	duration: "Мгновенно (см. текст)
    savings: "Стойкость нейтрализует (см. текст)
    resistance: "Да
*/
/*
Языки (Tongues)
    school: "div",
    level: {"brd":2, "clr":4, "sor":3, "wiz":3
    components: "В, М/БФ
    casting_time: "1 действие
	range: "Касание
    target: "Существо
	duration: "10 минут/уровень
    savings: "Нет
    resistance: "Нет
*/
/*
Яснослышание/Ясновидение (Clairaudience/Clairvoyance)
    school: "div",
    level: {"brd":3, Знание 3, "sor":3, "wiz":3
    components: "В, С, Ф/БФ
    casting_time: "1 действие
	range: "См. текст
    effect: "Магический сенсор
	duration: "1 минута/уровень (П)
    savings: "Нет
    resistance: "Нет
*/

];

module.exports = _spells
