let table_3_4 = `
<table class="td1-left odd">
<tr>
    <th rowspan="2" style="vertical-align: bottom">Осн.<br/>Ур.</th>
    <th rowspan="2" style="vertical-align: bottom">Бонус<br/>Атаки</th>
    <th colspan="3" style="vertical-align: bottom">Спасбросок</th>
    <th rowspan="2" style="vertical-align: bottom">Особенности</th>
    <th colspan="7">Заклинаний в день *</th>
</tr>
<tr>
    <th>Ст.</th><th>Реак.</th><th>Воля</th>
    <th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th>
</tr>
<tr><td>1</td><td>+0</td><td>+0</td><td>+2</td><td>+2</td><td>музыка и знание барда, ответная песня, очарование, вселить отвагу +1</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>2</td><td>+1</td><td>+0</td><td>+3</td><td>+3</td><td></td><td>3</td><td>0</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>3</td><td>+2</td><td>+1</td><td>+3</td><td>+3</td><td>Вдохновление</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>4</td><td>+3</td><td>+1</td><td>+4</td><td>+4</td><td></td><td>3</td><td>2</td><td>0</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>5</td><td>+3</td><td>+1</td><td>+4</td><td>+4</td><td></td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>6</td><td>+4</td><td>+2</td><td>+5</td><td>+5</td><td>Внушение</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>7</td><td>+5</td><td>+2</td><td>+5</td><td>+5</td><td></td><td>3</td><td>3</td><td>2</td><td>0</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>8</td><td>+6/+1</td><td>+2</td><td>+6</td><td>+6</td><td>Внушить отвагу +2</td><td>3</td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>9</td><td>+6/+1</td><td>+3</td><td>+6</td><td>+6</td><td>Поднять боевой дух</td><td>3</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>10</td><td>+7/+2</td><td>+3</td><td>+7</td><td>+7</td><td></td><td>3</td><td>3</td><td>3</td><td>2</td><td>0</td><td>—</td><td>—</td></tr>
<tr><td>11</td><td>+8/+3</td><td>+3</td><td>+7</td><td>+7</td><td></td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td></tr>
<tr><td>12</td><td>+9/+4</td><td>+4</td><td>+8</td><td>+8</td><td>Песнь свободы</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>—</td><td>—</td></tr>
<tr><td>13</td><td>+9/+4</td><td>+4</td><td>+8</td><td>+8</td><td></td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>0</td><td>—</td></tr>
<tr><td>14</td><td>+10/+5</td><td>+4</td><td>+9</td><td>+9</td><td>Вселить отвагу +3</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>—</td></tr>
<tr><td>15</td><td>+11/+6/+1</td><td>+5</td><td>+9</td><td>+9</td><td>Вдохновить на подвиг</td><td>4</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>—</td></tr>
<tr><td>16</td><td>+12/+7/+2</td><td>+5</td><td>+10</td><td>+10</td><td></td><td>4</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>0</td></tr>
<tr><td>17</td><td>+12/+7/+2</td><td>+5</td><td>+10</td><td>+10</td><td></td><td>4</td><td>4</td><td>4</td><td>4</td><td>3</td><td>3</td><td>1</td></tr>
<tr><td>18</td><td>+13/+8/+3</td><td>+6</td><td>+11</td><td>+11</td><td>Массовое внушение</td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td><td>3</td><td>2</td></tr>
<tr><td>19</td><td>+14/+9/+4</td><td>+6</td><td>+11</td><td>+11</td><td></td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td><td>3</td></tr>
<tr><td>20</td><td>+15/+10/+5</td><td>+6</td><td>+12</td><td>+12</td><td>Вселить отвагу +4</td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td></tr>
</table>
`