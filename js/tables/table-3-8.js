let table_3_8 = `
<table class="td1-left odd">
<tr>
    <th rowspan="2" style="vertical-align: bottom">Осн.<br/>Ур.</th>
    <th rowspan="2" style="vertical-align: bottom">Бонус<br/>Атаки</th>
    <th colspan="3" style="vertical-align: bottom">Спасбросок</th>
    <th rowspan="2" style="vertical-align: bottom">Особенности</th>
    <th colspan="10">Заклинаний в день</th>
</tr>
<tr>
    <th>Ст.</th><th>Реак.</th><th>Воля</th>
    <th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>
</tr>
<tr><td>1</td><td>0</td><td>+2</td><td>+0</td><td>+2</td><td>Животное-спутник, чувство природы, сопереживание дикой природе</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>2</td><td>+1</td><td>+3</td><td>+0</td><td>+3</td><td>Продираться сквозь чащу</td><td>4</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>3</td><td>+2</td><td>+3</td><td>+1</td><td>+3</td><td>Передвижение без следов</td><td>4</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>4</td><td>+3</td><td>+4</td><td>+1</td><td>+4</td><td>Устойчивость к природным соблазнам</td><td>5</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>5</td><td>+3</td><td>+4</td><td>+1</td><td>+4</td><td>Природный образ (1/день)</td><td>5</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>6</td><td>+4</td><td>+5</td><td>+2</td><td>+5</td><td>Природный образ (2/день)</td><td>5</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>7</td><td>+5</td><td>+5</td><td>+2</td><td>+5</td><td>Природный образ (3/день)</td><td>6</td><td>4</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>8</td><td>+6/+1</td><td>+6</td><td>+2</td><td>+6</td><td>Природный образ (Большое)</td><td>6</td><td>4</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>9</td><td>+6/+1</td><td>+6</td><td>+3</td><td>+6</td><td>Иммунитет к ядам</td><td>6</td><td>4</td><td>4</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>10</td><td>+7/+2</td><td>+7</td><td>+3</td><td>+7</td><td>Природный образ (4/день)</td><td>6</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>11</td><td>+8/+3</td><td>+7</td><td>+3</td><td>+7</td><td>Природный образ (Миниатюрное)</td><td>6</td><td>5</td><td>4</td><td>4</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>12</td><td>+9/+4</td><td>+8</td><td>+4</td><td>+8</td><td>Природный образ (растение)</td><td>6</td><td>5</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>13</td><td>+9/+4</td><td>+8</td><td>+4</td><td>+8</td><td>Тысяча лиц</td><td>6</td><td>5</td><td>5</td><td>4</td><td>4</td><td>3</td><td>2</td><td>1</td><td>—</td><td>—</td></tr>
<tr><td>14</td><td>+10/+5</td><td>+9</td><td>+4</td><td>+9</td><td>Природный образ (5/день)</td><td>6</td><td>5</td><td>5</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td></tr>
<tr><td>15</td><td>+11/+6/+1</td><td>+9</td><td>+5</td><td>+9</td><td>Природный образ (Огромный), вечное тело</td><td>6</td><td>5</td><td>5</td><td>4</td><td>4</td><td>4</td><td>3</td><td>2</td><td>1</td><td>—</td></tr>
<tr><td>16</td><td>+12/+7/+2</td><td>+10</td><td>+5</td><td>+10</td><td>Природный образ (элементаль 1/день)</td><td>6</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>—</td></tr>
<tr><td>17</td><td>+12/+7/+2</td><td>+10</td><td>+5</td><td>+10</td><td></td><td>6</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
<tr><td>18</td><td>+13/+8/+3</td><td>+11</td><td>+6</td><td>+11</td><td>Природный образ (6/день, элементаль 2/день)</td><td>6</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td></tr>
<tr><td>19</td><td>+14/+9/+4</td><td>+11</td><td>+6</td><td>+11</td><td></td><td>6</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>3</td><td>3</td></tr>
<tr><td>20</td><td>+15/+10/+5</td><td>+12</td><td>+6</td><td>+12</td><td>Природный образ (элементаль 3/день, Огромный элементаль)</td><td>6</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>4</td><td>4</td></tr>
</table>
`