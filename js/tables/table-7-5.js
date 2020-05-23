let table_7_5 = `
<table class="odd">
<tr><th>Простое оружие</th><th>Цена</th><th>Урон (S)</th><th>Урон (M)</th><th>Крит.</th><th>Расст.</th><th>Вес<sup>1</sup></th><th>Тип<sup>2</sup></th></tr>
<tr><td colspan="8" class="subheader"><b>Безоружная атака</b></td></tr>
<tr><td>Рукавица латная</td><td>2 зм</td><td>1d2</td><td>1d3</td><td>x2</td><td>––</td><td>1 фн</td><td>Ударное</td></tr>
<tr><td>Безоружный удар</td><td>––</td><td>1d2<sup>3</sup></td><td>1d3<sup>3</sup></td><td>x2</td><td>––</td><td>––</td><td>Ударное</td></tr>
<tr><td colspan="8" class="subheader"><b>Легкое</b></td></tr>
<tr><td>Кинжал</td><td>2 зм</td><td>1d3</td><td>1d4</td><td>19-20/x2</td><td>10 ф</td><td>1 фн</td><td>Колющее или Режущее</td></tr>
<tr><td>Катар</td><td>2 зм</td><td>1d3</td><td>1d4</td><td>x3</td><td>––</td><td>1 фн</td><td>Колющее</td></tr>
<tr><td>Рукавица с шипами</td><td>5 зм</td><td>1d3</td><td>1d4</td><td>x2</td><td>––</td><td>1 фн</td><td>Колющее</td></tr>
<tr><td>Булава, легкая</td><td>5 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>––</td><td>4 фн</td><td>Ударное</td></tr>
<tr><td>Серп</td><td>6 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>––</td><td>2 фн</td><td>Рубящее</td></tr>
<tr><td colspan="8" class="subheader"><b>Одноручное</b></td></tr>
<tr><td>Дубинка</td><td>––</td><td>1d4</td><td>1d6</td><td>x2</td><td>10 ф</td><td>3 фн</td><td>Ударное</td></tr>
<tr><td>Булава, тяжелая</td><td>12 зм</td><td>1d6</td><td>1d8</td><td>x2</td><td>––</td><td>8 фн</td><td>Ударное</td></tr>
<tr><td>Моргенштерн</td><td>8 зм</td><td>1d6</td><td>1d8</td><td>x2</td><td>––</td><td>6 фн</td><td>Ударное и Колющее</td></tr>
<tr><td>Копье, короткое</td><td>1 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>20 ф</td><td>3 фн</td><td>Колющее</td></tr>
<tr><td colspan="8" class="subheader"><b>Двуручное</b></td></tr>
<tr><td>Копье, длинное<sup>4</sup></td><td>5 зм</td><td>1d6</td><td>1d8</td><td>x3</td><td>––</td><td>9 фн</td><td>Колющее</td></tr>
<tr><td>Посох<sup>3</sup></td><td>––</td><td>1d4/1d4</td><td>1d6/1d6</td><td>x2</td><td>––</td><td>4 фн</td><td>Ударное</td></tr>
<tr><td>Копье</td><td>2 зм</td><td>1d6</td><td>1d8</td><td>x3</td><td>20 ф</td><td>6 фн</td><td>Колющее</td></tr>
<tr><td colspan="8" class="subheader"><b>Дистанционное</b></td></tr>
<tr><td>Арбалет, тяжелый</td><td>50 зм</td><td>1d8</td><td>1d10</td><td>19-20/x2</td><td>120 ф</td><td>8 фн</td><td>Колющее</td></tr>
<tr><td>Болты (10)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>1 фн</td><td>––</td></tr>
<tr><td>Арбалет, легкий</td><td>35 зм</td><td>1d6</td><td>1d8</td><td>19-20/x2</td><td>80 ф</td><td>4 фн</td><td>Колющее</td></tr>
<tr><td>Болты (10)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>1 фн</td><td>––</td></tr>
<tr><td>Дротик</td><td>5 см</td><td>1d3</td><td>1d4</td><td>x2</td><td>20 ф</td><td>1/2 фн</td><td>Колющее</td></tr>
<tr><td>Сулица</td><td>1 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>30 ф</td><td>2 фн</td><td>Колющее</td></tr>
<tr><td>Праща</td><td>––</td><td>1d3</td><td>1d4</td><td>x2</td><td>50 ф</td><td>0 фн</td><td>Ударное</td></tr>
<tr><td>Пули (10)</td><td>1 см</td><td>––</td><td>––</td><td>––</td><td>––</td><td>5 фн</td><td>––</td></tr>
<tr><th>Воинское оружие</th><th>Цена</th><th>Урон (S)</th><th>Урон (M)</th><th>Крит.</th><th>Расст.</th><th>Вес<sup>1</sup></th><th>Тип<sup>2</sup></th></tr>
<tr><td colspan="8" class="subheader"><b>Легкое</b></td></tr>
<tr><td>Топорик, метательный</td><td>8 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>10 ф</td><td>2 фн</td><td>Рубящее</td></tr>
<tr><td>Молот, легкий</td><td>1 зм</td><td>1d3</td><td>1d4</td><td>x2</td><td>20 ф</td><td>2 фн</td><td>Ударное</td></tr>
<tr><td>Топор, ручной</td><td>6 зм</td><td>1d4</td><td>1d6</td><td>x3</td><td>––</td><td>3 фн</td><td>Рубящее</td></tr>
<tr><td>Кукри</td><td>8 зм</td><td>1d3</td><td>1d4</td><td>18-20/x2</td><td>––</td><td>2 фн</td><td>Рубящее</td></tr>
<tr><td>Чекан, легкий</td><td>4 зм</td><td>1d3</td><td>1d4</td><td>x4</td><td>––</td><td>3 фн</td><td>Колющее</td></tr>
<tr><td>Гирька</td><td>1 зм</td><td>1d4<sup>3</sup></td><td>1d6<sup>3</sup></td><td>x2</td><td>––</td><td>2 фн</td><td>Ударное</td></tr>
<tr><td>Щит, легкий</td><td>спец.</td><td>1d2</td><td>1d3</td><td>x2</td><td>––</td><td>спец.</td><td>Ударное</td></tr>
<tr><td>Доспех с шипами</td><td>спец.</td><td>1d4</td><td>1d6</td><td>x2</td><td>––</td><td>спец.</td><td>Колющее</td></tr>
<tr><td>Щит с шипами, легкий</td><td>спец.</td><td>1d3</td><td>1d4</td><td>x2</td><td>––</td><td>спец.</td><td>Колющее</td></tr>
<tr><td>Меч, короткий</td><td>10 зм</td><td>1d4</td><td>1d6</td><td>19-20/x2</td><td>––</td><td>2 фн</td><td>Колющее</td></tr>
<tr><td colspan="8" class="subheader"><b>Одноручное</b></td></tr>
<tr><td>Секира</td><td>10 зм</td><td>1d6</td><td>1d8</td><td>x3</td><td>––</td><td>6 фн</td><td>Рубящее</td></tr>
<tr><td>Цеп</td><td>8 зм</td><td>1d6</td><td>1d8</td><td>x2</td><td>––</td><td>5 фн</td><td>Ударное</td></tr>
<tr><td>Меч, длинный</td><td>15 зм</td><td>1d6</td><td>1d8</td><td>19-20/x2</td><td>––</td><td>4 фн</td><td>Рубящее</td></tr>
<tr><td>Чекан, тяжелый</td><td>8 зм</td><td>1d4</td><td>1d6</td><td>x4</td><td>––</td><td>6 фн</td><td>Колющее</td></tr>
<tr><td>Рапира</td><td>20 зм</td><td>1d4</td><td>1d6</td><td>18-20/x2</td><td>––</td><td>2 фн</td><td>Колющее</td></tr>
<tr><td>Сабля</td><td>15 зм</td><td>1d4</td><td>1d6</td><td>18-20/x2</td><td>––</td><td>4 фн</td><td>Рубящее</td></tr>
<tr><td>Щит, тяжелый</td><td>спец.</td><td>1d3</td><td>1d4</td><td>x2</td><td>––</td><td>спец.</td><td>Ударное</td></tr>
<tr><td>Щит с шипами, тяжелый</td><td>спец.</td><td>1d4</td><td>1d6</td><td>x2</td><td>––</td><td>спец.</td><td>Колющее</td></tr>
<tr><td>Трезубец</td><td>15 зм</td><td>1d6</td><td>1d8</td><td>x2</td><td>10 ф</td><td>4 фн</td><td>Колющее</td></tr>
<tr><td>Молот, боевой</td><td>12 зм</td><td>1d6</td><td>1d8</td><td>x3</td><td>––</td><td>5 фн</td><td>Ударное</td></tr>
<tr><td colspan="8" class="subheader"><b>Двуручное</b></td></tr>
<tr><td>Фальшион</td><td>75 зм</td><td>1d6</td><td>2d4</td><td>18-20/x2</td><td>––</td><td>8 фн</td><td>Рубящее</td></tr>
<tr><td>Глефа<sup>4</sup></td><td>8 зм</td><td>1d8</td><td>1d10</td><td>x3</td><td>––</td><td>10 фн</td><td>Рубящее</td></tr>
<tr><td>Секира</td><td>20 зм</td><td>1d10</td><td>1d12</td><td>x3</td><td>––</td><td>12 фн</td><td>Рубящее</td></tr>
<tr><td>Палица</td><td>5 зм</td><td>1d8</td><td>1d10</td><td>x2</td><td>––</td><td>8 фн</td><td>Ударное</td></tr>
<tr><td>Цеп, тяжелый</td><td>15 зм</td><td>1d8</td><td>1d10</td><td>19-20/x2</td><td>––</td><td>10 фн</td><td>Ударное</td></tr>
<tr><td>Меч, двуручный</td><td>50 зм</td><td>1d10</td><td>2d6</td><td>19-20/x2</td><td>––</td><td>8 фн</td><td>Рубящее</td></tr>
<tr><td>Гизарма<sup>4</sup></td><td>9 зм</td><td>1d6</td><td>2d4</td><td>x3</td><td>––</td><td>12 фн</td><td>Рубящее</td></tr>
<tr><td>Алебарда</td><td>10 зм</td><td>1d8</td><td>1d10</td><td>x3</td><td>––</td><td>12 фн</td><td>Колющее или Ударное</td></tr>
<tr><td>Копье, рыцарское 4</td><td>10 зм</td><td>1d6</td><td>1d8</td><td>x3</td><td>––</td><td>10 фн</td><td>Колющее</td></tr>
<tr><td>Рансор<sup>4</sup></td><td>10 зм</td><td>1d6</td><td>2d4</td><td>x3</td><td>––</td><td>12 фн</td><td>Колющее</td></tr>
<tr><td>Коса, боевая</td><td>18 зм</td><td>1d6</td><td>2d4</td><td>x4</td><td>––</td><td>10 фн</td><td>Колющее или Рубящее</td></tr>
<tr><td colspan="8" class="subheader"><b>Дистанционное</b></td></tr>
<tr><td>Лук, длинный</td><td>75 зм</td><td>1d6</td><td>1d8</td><td>x3</td><td>100 ф</td><td>3 фн</td><td>Колющее</td></tr>
<tr><td>Стрелы (20)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>3 фн</td><td>––</td></tr>
<tr><td>Лук, длинный составной</td><td>100 зм</td><td>1d6</td><td>1d8</td><td>x3</td><td>110 ф</td><td>3 фн</td><td>Колющее</td></tr>
<tr><td>Стрелы (20)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>3 фн</td><td>––</td></tr>
<tr><td>Лук, короткий</td><td>30 зм</td><td>1d4</td><td>1d6</td><td>x3</td><td>60 ф</td><td>2 фн</td><td>Колющее</td></tr>
<tr><td>Стрелы (20)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>3 фн</td><td>––</td></tr>
<tr><td>Лук, короткий составной</td><td>75 зм</td><td>1d4</td><td>1d6</td><td>x3</td><td>70 ф</td><td>2 фн</td><td>Колющее</td></tr>
<tr><td>Стрелы (20)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>3 фн</td><td>––</td></tr>
<tr><th>Экзотическое оружие</th><th>Цена</th><th>Урон (S)</th><th>Урон (M)</th><th>Крит.</th><th>Расст.</th><th>Вес<sup>1</sup></th><th>Тип<sup>2</sup></th></tr>
<tr><td colspan="8" class="subheader"><b>Легкое</b></td></tr>
<tr><td>Кама</td><td>2 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>––</td><td>2 фн</td><td>Рубящее</td></tr>
<tr><td>Нунчаки</td><td>2 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>––</td><td>2 фн</td><td>Ударное</td></tr>
<tr><td>Сай</td><td>1 зм</td><td>1d3</td><td>1d4</td><td>x2</td><td>10 ф</td><td>1 фн</td><td>Ударное</td></tr>
<tr><td>Сиангам</td><td>3 зм</td><td>1d4</td><td>1d6</td><td>x2</td><td>––</td><td>1 фн</td><td>Колющее</td></tr>
<tr><td colspan="8" class="subheader"><b>Одноручное</b></td></tr>
<tr><td>Меч, полуторный</td><td>35 зм</td><td>1d8</td><td>1d10</td><td>19-20/x2</td><td>––</td><td>6 фн</td><td>Рубящее</td></tr>
<tr><td>Топор, боевой дварфийский</td><td>30 зм</td><td>1d8</td><td>1d10</td><td>x3</td><td>––</td><td>8 фн</td><td>Рубящее</td></tr>
<tr><td>Плеть, боевая<sup>4</sup></td><td>1 зм</td><td>1d2<sup>3</sup></td><td>1d3<sup>3</sup></td><td>x2</td><td>––</td><td>2 фн</td><td>Рубящее</td></tr>
<tr><td colspan="8" class="subheader"><b>Двуручное</b></td></tr>
<tr><td>Топор, двойной орочий 5</td><td>60 зм</td><td>1d6/1d6</td><td>1d8/1d8</td><td>x3</td><td>––</td><td>15 фн</td><td>Рубящее</td></tr>
<tr><td>Цепь с шипами<sup>4</sup></td><td>25 зм</td><td>1d6</td><td>2d4</td><td>x2</td><td>––</td><td>10 фн</td><td>Колющее</td></tr>
<tr><td>Цеп, двойной<sup>5</sup></td><td>90 зм</td><td>1d6/1d6</td><td>1d8/1d8</td><td>x2</td><td>––</td><td>10 фн</td><td>Ударное</td></tr>
<tr><td>Клевец, гномий<sup>3</sup></td><td>20 зм</td><td>1d6/1d4</td><td>1d8/1d6</td><td>x3/x4</td><td>––</td><td>6 фн</td><td>Ударное и Колющее</td></tr>
<tr><td>Меч, двухлезвийный<sup>5</sup></td><td>100 зм</td><td>1d6/1d6</td><td>1d8/1d8</td><td>19-20/x2</td><td>––</td><td>10 фн</td><td>Рубящее</td></tr>
<tr><td>Ургрош, дварфийский<sup>5</sup></td><td>50 зм</td><td>1d6/1d4</td><td>1d8/1d6</td><td>x3</td><td>––</td><td>12 фн</td><td>Рубящее или Колющее</td></tr>
<tr><td colspan="8" class="subheader"><b>Дистанционное</b></td></tr>
<tr><td>Боло</td><td>5 зм</td><td>1d3<sup>3</sup></td><td>1d4<sup>3</sup></td><td>x2</td><td>10 ф</td><td>2 фн</td><td>Ударное</td></tr>
<tr><td>Арбалет, ручной</td><td>100 зм</td><td>1d3</td><td>1d4</td><td>19-20/x2</td><td>30 ф</td><td>2 фн</td><td>Колющее</td></tr>
<tr><td>Болты (10)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>1 фн</td><td>––</td></tr>
<tr><td>Арбалет, многозарядный тяжелый</td><td>400 зм</td><td>1d8</td><td>1d10</td><td>19-20/x2</td><td>120 ф</td><td>12 фн</td><td>Колющее</td></tr>
<tr><td>Болты (5)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>1 фн</td><td>––</td></tr>
<tr><td>Арбалет, многозарядный легкий</td><td>250 зм</td><td>1d6</td><td>1d8</td><td>19-20/x2</td><td>80 ф</td><td>6 фн</td><td>Колющее</td></tr>
<tr><td>Болты (5)</td><td>1 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>1 фн</td><td>––</td></tr>
<tr><td>Сеть</td><td>20 зм</td><td>––</td><td>––</td><td>––</td><td>10 ф</td><td>6 фн</td><td>––</td></tr>
<tr><td>Сюрикен (5)</td><td>1 зм</td><td>1</td><td>1d2</td><td>x2</td><td>10 ф</td><td>1/2 фн</td><td>Колющее</td></tr>
</table>
<p><small><sup>1</sup>Вес указан для Среднего оружия. Маленькое оружие весит половину указанного числа, Большое – двойное
    указанное
    число.</small></p>
<p><small><sup>2</sup>Если указано два типа, то оружие наносит одновременно два урона, если указано "и", если же указано
    "или" – оружие наносит либо первый тип урона, либо второй, по выбору персонажа.</small></p>
<p><small><sup>3</sup>Оружие наносит стрессовый урон вместо нормального.</small></p>
<p><small><sup>4</sup>Длинное оружие</small></p>
<p><small><sup>5</sup>Двойное оружие</small></p>
`