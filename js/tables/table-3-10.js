let table_3_10 = `
<table class="td1-left odd">
<tr>
<th rowspan="2" style="vertical-align: bottom">Осн.<br/>Ур.</th>
<th rowspan="2" style="vertical-align: bottom">Бонус<br/>Атаки</th>
<th colspan="3" style="vertical-align: bottom">Спасбросок</th>
<th rowspan="2" style="vertical-align: bottom">Особенности</th>
<th rowspan="2" style="vertical-align: bottom">Шквал<br/>Ударов</th>
<th rowspan="2" style="vertical-align: bottom">Безоруж.<br/>Урон *</th>
<th rowspan="2" style="vertical-align: bottom">Бонус<br/>КЗ</th>
<th rowspan="2" style="vertical-align: bottom">Бездосп. Бонус<br/>к Скорости</th>
</tr>
<tr><th>Ст.</th><th>Реак.</th><th>Воля</th></tr>
<tr><td>1</td><td>+0</td><td>+2</td><td>+2</td><td>+2</td><td>Бон. навык, шквал ударов, безоруж. удар</td><td>-2/-2</td><td>1d6</td><td>+0</td><td>+0 ф</td></tr>
<tr><td>2</td><td>+1</td><td>+3</td><td>+3</td><td>+3</td><td>Бон. навык, увертливость</td><td>-1/-1</td><td>1d6</td><td>+0</td><td>+0 ф</td></tr>
<tr><td>3</td><td>+2</td><td>+3</td><td>+3</td><td>+3</td><td>Неподвижный разум</td><td>+0/+0</td><td>1d6</td><td>+0</td><td>+10 ф</td></tr>
<tr><td>4</td><td>+3</td><td>+4</td><td>+4</td><td>+4</td><td>Удар ки (+1), медленное падение (20ф)</td><td>+1/+1</td><td>1d8</td><td>+0</td><td>+10 ф</td></tr>
<tr><td>5</td><td>+3</td><td>+4</td><td>+4</td><td>+4</td><td>Чистота тела</td><td>+2/+2</td><td>1d8</td><td>+1</td><td>+10 ф</td></tr>
<tr><td>6</td><td>+4</td><td>+5</td><td>+5</td><td>+5</td><td>Бон. навык, медленное падение (30ф)</td><td>+3/+3</td><td>1d8</td><td>+1</td><td>+20 ф</td></tr>
<tr><td>7</td><td>+5</td><td>+5</td><td>+5</td><td>+5</td><td>Невредимое тело</td><td>+4/+4</td><td>1d8</td><td>+1</td><td>+20 ф</td></tr>
<tr><td>8</td><td>+6/+1</td><td>+6</td><td>+6</td><td>+6</td><td>Медленное падение (40ф)</td><td>+5/+5/+0</td><td>1d10</td><td>+1</td><td>+20 ф</td></tr>
<tr><td>9</td><td>+6/+1</td><td>+6</td><td>+6</td><td>+6</td><td>Улучш. увертливость</td><td>+6/+6/+1</td><td>1d10</td><td>+1</td><td>+30 ф</td></tr>
<tr><td>10</td><td>+7/+2</td><td>+7</td><td>+7</td><td>+7</td><td>Удар ки (+2), медленное падение (50ф)</td><td>+7/+7/+2</td><td>1d10</td><td>+2</td><td>+30 ф</td></tr>
<tr><td>11</td><td>+8/+3</td><td>+7</td><td>+7</td><td>+7</td><td>Алмазное тело, исключительный шквал</td><td>+8/+8/+8/+3</td><td>1d10</td><td>+2</td><td>+30 ф</td></tr>
<tr><td>12</td><td>+9/+4</td><td>+8</td><td>+8</td><td>+8</td><td>Широкий шаг, медленное падение (60ф)</td><td>+9/+9/+9/+4</td><td>2d6</td><td>+2</td><td>+40 ф</td></tr>
<tr><td>13</td><td>+9/+4</td><td>+8</td><td>+8</td><td>+8</td><td>Алмазная душа</td><td>+9/+9/+9/+4</td><td>2d6</td><td>+2</td><td>+40 ф</td></tr>
<tr><td>14</td><td>+10/+5</td><td>+9</td><td>+9</td><td>+9</td><td>Медленное падение (70ф)</td><td>+10/+10/+10/+5</td><td>2d6</td><td>+2</td><td>+40 ф</td></tr>
<tr><td>15</td><td>+11/+6/+1</td><td>+9</td><td>+9</td><td>+9</td><td>Дрожащая ладонь</td><td>+11/+11/+11/+6/+1</td><td>2d6</td><td>+3</td><td>+50 ф</td></tr>
<tr><td>16</td><td>+12/+7/+2</td><td>+10</td><td>+10</td><td>+10</td><td>Удар ки (+3), медленное падение (80ф)</td><td>+12/+12/+12/+7/+2</td><td>2d8</td><td>+3</td><td>+50 ф</td></tr>
<tr><td>17</td><td>+12/+7/+2</td><td>+10</td><td>+10</td><td>+10</td><td>Тело вне времени, язык солнца и луны</td><td>+12/+12/+12/+7/+2</td><td>2d8</td><td>+3</td><td>+50 ф</td></tr>
<tr><td>18</td><td>+13/+8/+3</td><td>+11</td><td>+11</td><td>+11</td><td>Медленное падение (90ф)</td><td>+13/+13/+13/+8/+3</td><td>2d8</td><td>+3</td><td>+60 ф</td></tr>
<tr><td>19</td><td>+14/+9/+4</td><td>+11</td><td>+11</td><td>+11</td><td>Пустое тело</td><td>+14/+14/+14/+9/+4</td><td>2d8</td><td>+3</td><td>+60 ф</td></tr>
<tr><td>20</td><td>+15/+10/+5</td><td>+12</td><td>+12</td><td>+12</td><td>Совершенство, медленное падение (любая высота)</td><td>+15/+15/+15/+10/+5</td><td>2d10</td><td>+4</td><td>+60 ф</td></tr>
</table>
<p><small>* Значение показано для Среднего монаха. См. таблицу 3-11: Урон Маленького и Большого Монаха.</small></p>
`