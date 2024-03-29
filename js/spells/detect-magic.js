let detect_magic = `
<h1>Обнаружить Магию (Detect Magic)</h1>
<div><b>Школа:</b> Прорицание</div>
<div><b>Уровень:</b> Бард: 0, Клирик: 0, Друид: 0, Колдун: 0, Маг: 0</div>
<div><b>Компоненты:</b> В, С</div>
<div><b>Время Сотворения:</b> 1 действие</div>
<div><b>Расстояние:</b> 60 ф.</div>
<div><b>Область воздействия:</b> Конус эманация</div>
<div><b>Длительность:</b> Концентрация, до 1 мин/уровень (П)</div>
<div><b>Спасброски:</b> Нет</div>
<div><b>Сопротивляемость:</b> Нет</div>
<div><b>Кратко:</b> Обнаруживает заклинания и магические предметы в радиусе 60 ф.</div>
<div><p>Вы обнаруживаете ауру магии. Количество информации зависит от длительности изучения отдельной области или субъекта:</p>
<p><i>1 Раунд:</i> Присутствие или отсутствие магических аурю</p>
<p><i>2 Раунд:</i> Число различных аур магии и сила самой мощной ауры. </p>
<p><i>3 Раунд:</i> Мощность и местоположение каждой ауры. Если предметы или существа в зоне видимости, вы можете сделать проверку <a href="skills.html#spellcraft">Основ Магии</a>, чтобы определить школу магии для каждой цели. (Делайте одну проверку за ауру; УС 15 + уровень заклинания, или 15 + 1/2 уровня заклинателя для незаклинательных эффектов).</p>
<p>Магические области, множественные типы магии или сильные местные магические эманации могут мешать или подавлять более слабые ауры. </p>
<p><b>Мощность Ауры:</b> Сила ауры зависит от уровня действующего заклинания или уровня заклинателя предмета. Если аура попадает в более чем одну категорию, обнаружение магии указывает на более сильную из двух.</p>
<table class="odd">
<tr><th rowspan="2">Заклинание или объект</th><th colspan="4">Мощность ауры</th></tr>
<tr><th>Слабая</th><th>Средняя</th><th>Сильная</th><th>Подавляющая</th></tr>
<tr><td>Действующее Заклинание (уровень заклинания)</td><td>3 или меньше</td><td>4 - 6</td><td>7 - 9</td><td>10 и более (уровень божества)</td></tr>
<tr><td>Магический предмет (уровень заклинателя)</td><td>5 или менее</td><td>6 - 11</td><td>12 - 20</td><td>21 и более (артифакт)</td></tr>
</table>
<p><b>Длина Следа:</b> Магическая аура сохраняется после того, как ее изначальный источник рассеивается (в случае заклинания) или разрушается (в случае магического предмета). Если магия обнаружения наложена и направлена в такое место, заклинание указывает силу тусклой ауры (даже слабее, чем тусклая аура). Как долго аура сохраняется на этом тусклом уровне, зависит от ее первоначальной силы:</p>
<table>
<tr><th>Исходная Мощность</th><th>Длительность следа</th></tr>
<tr><td>Слабая</td><td>1d6 раундов</td></tr>
<tr><td>Средняя</td><td>1d6 минут</td></tr>
<tr><td>Сильная</td><td>1d6 х 10 минут</td></tr>
<tr><td>Подавляющая</td><td>1d6 дней</td></tr>
</table>
<p>Пришельцы и элементали сами по себе не обладают магией, но если они вызваны, заклинание заклинания регистрируется.</p><p>Каждый раунд вы можете повернуться, чтобы обнаружить магию в новой области. Заклинание может проникать сквозь преграды, но 1 фт камня, 1 дюйм обычного металла, тонкий лист свинца или 3 фт дерева или грязи блокируют его.</p><p>Обнаружение магии можно сделать постоянным с помощью заклинания <a href="spell.html?permanency">постоянства</a>.</p>
</div>
`