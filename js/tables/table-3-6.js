let table_3_6 = `
<table class="td1-left odd">
<tr>
    <th rowspan="2" style="vertical-align: bottom">Осн.<br/>Ур.</th>
    <th rowspan="2" style="vertical-align: bottom">Бонус<br/>Атаки</th>
    <th colspan="3" style="vertical-align: bottom">Спасбросок</th>
    <th rowspan="2" style="vertical-align: bottom">Особенности</th>
    <th colspan="10">Заклинаний в день *</th>
</tr>
<tr>
    <th>Ст.</th><th>Реак.</th><th>Воля</th>
    <th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>
</tr>
<tr><td>1</td><td>+0</td><td>+0</td><td>+2</td><td>+2</td><td>Изгнание нежити</td><td>3</td><td>1+1</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr>
<tr><td>2</td><td>+1</td><td>+0</td><td>+3</td><td>+3</td><td></td><td>4</td><td>2+1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>3</td><td>+2</td><td>+1</td><td>+3</td><td>+3</td><td></td><td>4</td><td>2+1</td><td>1+1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>4</td><td>+3</td><td>+1</td><td>+4</td><td>+4</td><td></td><td>5</td><td>3+1</td><td>2+1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>5</td><td>+3</td><td>+1</td><td>+4</td><td>+4</td><td></td><td>5</td><td>3+1</td><td>2+1</td><td>1+1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>6</td><td>+4</td><td>+2</td><td>+5</td><td>+5</td><td></td><td>5</td><td>3+1</td><td>3+1</td><td>2+1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>7</td><td>+5</td><td>+2</td><td>+5</td><td>+5</td><td></td><td>6</td><td>4+1</td><td>3+1</td><td>2+1</td><td>1+1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>8</td><td>+6/+1</td><td>+2</td><td>+6</td><td>+6</td><td></td><td>6</td><td>4+1</td><td>3+1</td><td>3+1</td><td>2+1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>9</td><td>+6/+1</td><td>+3</td><td>+6</td><td>+6</td><td></td><td>6</td><td>4+1</td><td>4+1</td><td>3+1</td><td>2+1</td><td>1+1</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>10</td><td>+7/+2</td><td>+3</td><td>+7</td><td>+7</td><td></td><td>6</td><td>4+1</td><td>4+1</td><td>3+1</td><td>3+1</td><td>2+1</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>11</td><td>+8/+3</td><td>+3</td><td>+7</td><td>+7</td><td></td><td>6</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>2+1</td><td>1+1</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>12</td><td>+9/+4</td><td>+4</td><td>+8</td><td>+8</td><td></td><td>6</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>3+1</td><td>2+1</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>13</td><td>+9/+4</td><td>+4</td><td>+8</td><td>+8</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>2+1</td><td>1+1</td><td>—</td><td>—</td></tr>
<tr><td>14</td><td>+10/+5</td><td>+4</td><td>+9</td><td>+9</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>3+1</td><td>2+1</td><td>—</td><td>—</td></tr>
<tr><td>15</td><td>+11/+6/+1</td><td>+5</td><td>+9</td><td>+9</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>2+1</td><td>1+1</td><td>—</td></tr>
<tr><td>16</td><td>+12/+7/+2</td><td>+5</td><td>+10</td><td>+10</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>3+1</td><td>2+1</td><td>—</td></tr>
<tr><td>17</td><td>+12/+7/+2</td><td>+5</td><td>+10</td><td>+10</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>2+1</td><td>1+1</td></tr>
<tr><td>18</td><td>+13/+8/+3</td><td>+6</td><td>+11</td><td>+11</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>3+1</td><td>2+1</td></tr>
<tr><td>19</td><td>+14/+9/+4</td><td>+6</td><td>+11</td><td>+11</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>5+1</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>3+1</td><td>3+1</td></tr>
<tr><td>20</td><td>+15/+10/+5</td><td>+6</td><td>+12</td><td>+12</td><td></td><td>6</td><td>5+1</td><td>5+1</td><td>5+1</td><td>5+1</td><td>5+1</td><td>4+1</td><td>4+1</td><td>4+1</td><td>4+1</td></tr>
</table>
<p><small>*В дополнение к указанному числу заклинаний в день с 1-го по 9-й уровень заклинаний, клирик получает одно заклинание из домена за каждый уровень заклинаний. В таблице это представлено в виде "+1". Эти заклинания добавляются ко всем дополнительным заклинаниям за высокую мудрость.</small></p>
`