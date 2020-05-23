let table_7_6 = `
<table class="td1-left odd">
<tr><th rowspan="2">Броня</th><th rowspan="2">Цена</th><th rowspan="2">Бонус Щита/Доспеха</th><th rowspan="2">Макс. Бонус Лов</th>
<th rowspan="2">Штраф за Доспех</th><th rowspan="2">Шанс на Провал Заклинания</th><th colspan="3">Скорость</th></tr>
<tr><th>(30 ф)</th><th>(20 ф)</th><th>Вес<sup>1</sup></th></tr>
<tr><td colspan="9" class="subheader"><b>Легкий доспех</b></td></tr>
<tr><td>Стеганый</td><td>5 зм</td><td>+1</td><td>+8</td><td>0</td><td>5%</td><td>30 ф</td><td>20 ф</td><td>10 фн</td></tr>
<tr><td>Кожаный</td><td>10 зм</td><td>+2</td><td>+6</td><td>0</td><td>10%</td><td>30 ф</td><td>20 ф</td><td>15 фн</td></tr>
<tr><td>Клепаный кожаный</td><td>25 зм</td><td>+3</td><td>+5</td><td>–1</td><td>15%</td><td>30 ф</td><td>20 ф</td><td>20 фн</td></tr>
<tr><td>Кольчужная рубаха</td><td>100 зм</td><td>+4</td><td>+4</td><td>–2</td><td>20%</td><td>30 ф</td><td>20 ф</td><td>25 фн</td></tr>
<tr><td colspan="9" class="subheader"><b>Средний доспех</b></td></tr>
<tr><td>Шкуры</td><td>15 зм</td><td>+3</td><td>+4</td><td>–3</td><td>20%</td><td>20 ф</td><td>15 ф</td><td>25 фн</td></tr>
<tr><td>Чешуйчатый</td><td>50 зм</td><td>+4</td><td>+3</td><td>–4</td><td>25%</td><td>20 ф</td><td>15 ф</td><td>30 фн</td></tr>
<tr><td>Кольчуга</td><td>150 зм</td><td>+5</td><td>+2</td><td>–5</td><td>30%</td><td>20 ф</td><td>15 ф</td><td>40 фн</td></tr>
<tr><td>Панцирь+</td><td>200 зм</td><td>+5</td><td>+3</td><td>–4</td><td>25%</td><td>20 ф</td><td>15 ф</td><td>30 фн</td></tr>
<tr><td colspan="9" class="subheader"><b>Тяжелый доспех</b></td></tr>
<tr><td>Бригантина</td><td>200 зм</td><td>+6</td><td>+0</td><td>–7</td><td>40%</td><td>20 ф<sup>2</sup></td><td>15 ф<sup>2</sup></td><td>45 фн</td></tr>
<tr><td>Пластинчатый</td><td>250 зм</td><td>+6</td><td>+1</td><td>–6</td><td>35%</td><td>20 ф<sup>2</sup></td><td>15 ф<sup>2</sup></td><td>35 фн</td></tr>
<tr><td>Полу-латы</td><td>600 зм</td><td>+7</td><td>+0</td><td>–7</td><td>40%</td><td>20 ф<sup>2</sup></td><td>15 ф<sup>2</sup></td><td>50 фн</td></tr>
<tr><td>Полные латы</td><td>1500 зм</td><td>+8</td><td>+1</td><td>–6</td><td>35%</td><td>20 ф<sup>2</sup></td><td>15 ф<sup>2</sup></td><td>50 фн</td></tr>
<tr><td colspan="9" class="subheader"><b>Щиты</b></td></tr>
<tr><td>Баклер</td><td>15 зм</td><td>+1</td><td>––</td><td>–1</td><td>5%</td><td>––</td><td>––</td><td>5 фн</td></tr>
<tr><td>Щит, легкий дерев.</td><td>3 зм</td><td>+1</td><td>––</td><td>–1</td><td>5%</td><td>––</td><td>––</td><td>5 фн</td></tr>
<tr><td>Щит, легкий стал.</td><td>9 зм</td><td>+1</td><td>––</td><td>–1</td><td>5%</td><td>––</td><td>––</td><td>6 фн</td></tr>
<tr><td>Щит, тяжелый дерев.</td><td>7 зм</td><td>+2</td><td>––</td><td>–2</td><td>15%</td><td>––</td><td>––</td><td>10 фн</td></tr>
<tr><td>Щит, тяжелый стал.</td><td>20 зм</td><td>+2</td><td>––</td><td>–2</td><td>15%</td><td>––</td><td>––</td><td>15 фн</td></tr>
<tr><td>Щит, башенный</td><td>30 зм</td><td>+4<sup>3</sup></td><td>+2</td><td>–10</td><td>50%</td><td>––</td><td>––</td><td>45 фн</td></tr>
<tr><td colspan="9" class="subheader"><b>Дополнения</b></td></tr>
<tr><td>Шипы доспешные</td><td>+50 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>––</td><td>––</td><td>+10 фн</td></tr>
<tr><td>Шипы щитовые</td><td>+10 зм</td><td>––</td><td>––</td><td>––</td><td>––</td><td>––</td><td>––</td><td>+5 фн</td></tr>
<tr><td>Рукавица латная закр.</td><td>8 зм</td><td>––</td><td>––</td><td>спец.</td><td><sup>4</sup></td><td>––</td><td>––</td><td>+5 фн</td></tr>
</table>
<p><small><sup>1</sup>Вес указан для доспеха на Среднего персонажа. Для Маленьких персонажей вес уменьшается вдвое, для
    Больших он
    увеличивается вдвое.</small></p>
<p><small><sup>2</sup>При беге в тяжелом доспехе, вы передвигаетесь только с трехкратной базовой скоростью, а не с
    четырехкратной.</small></p>
<b><small><sup>3</sup>Башенный щит может предоставить вам укрытие. См. описание.</small></b>
<b><small><sup>4</sup>Нельзя кастовать заклинание с соматическим компонентом.</small></b>
`