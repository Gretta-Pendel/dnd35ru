let summon_monster_5 = `
<h1>Призвать Монстра V (Summon Monster V)</h1>
<div><b>Школа:</b> Вызывание (призывание)</div>
<div><b>Уровень:</b> Бард: 5, Клирик: 5, Колдун: 5, Маг: 5</div>
<div><b>Эффект:</b> Одно и более призванных существ, все в пределах 30 ф.</div>
<div><b>Кратко:</b> Призывает пришельца, который будет сражаться на вашей стороне.</div>
<div><p>Как <a href="spell.html?summon-monster-1">призвать монстра I</a>, за исключением того, что вы можете призвать одного пришельца из списка монстров 5-го уровня или 1d3 пришельца того же самого типа из списка 4-го уровня или 1d4+1 пришельца того же самого типа из списка низшего уровня.</p>
<table class="odd">
<tr><th colspan="2">5-й Уровень</th></tr>
<tr><td>Небесный медведь, бурый (животное)</td><td>ОД</td></tr>
<tr><td>Пес архон (небесный)</td><td>ОД</td></tr>
<tr><td>Небесный орка, кит (животное)</td><td>НД</td></tr>
<tr><td>Небесный пегас</td><td>ХД</td></tr>
<tr><td>Небесный ужасный лев</td><td>ХД</td></tr>
<tr><td>Формианец воин</td><td>ОН</td></tr>
<tr><td>Элементаль, Средний </td><td>Н</td></tr>
<tr><td>Мефит, любой</td><td>Н</td></tr>
<tr><td>Стрелоястреб, Средний </td><td>Н</td></tr>
<tr><td>Тоянида, Средняя</td><td>Н</td></tr>
<tr><td>Ахейрай</td><td>ОЗ</td></tr>
<tr><td>Дьявольский гриффон</td><td>ОЗ</td></tr>
<tr><td>Дьвольская змея, гигантский удав (животное)</td><td>ОЗ</td></tr>
<tr><td>Пес Йет</td><td>НЗ</td></tr>
<tr><td>Дьявольский ужасный вепрь</td><td>НЗ</td></tr>
<tr><td>Дьявольский носорог (животое)</td><td>НЗ</td></tr>
<tr><td>Дьявольская акула, Большая (животное)</td><td>НЗ</td></tr>
<tr><td>Саламандра, Средняя </td><td>НЗ</td></tr>
<tr><td>Тень мастифа</td><td>НЗ</td></tr>
<tr><td>Дьвольская гадюка, Большая (животное)</td><td>ХЗ</td></tr>
<tr><td>Квазит</td><td>ХЗ</td></tr>
<tr><td>Дьвольская ужасная росомаха</td><td>ХЗ</td></tr>
<tr><td>Дьваольский ужасный крокодил (жиовтное)</td><td>ХЗ</td></tr>
<tr><td>Дьвольский тигр (животное)</td><td>ХЗ</td></tr>
<tr><td>Дьвольский гираллон</td><td>ХЗ</td></tr>
</table>
<table class="odd">
<tr><th>Monster</th><th>Alignment</th></tr>
<tr><td><a href="d20srd/srd/monsters/archon.htm#houndArchon">Archon, hound</a></td><td>LG</td></tr>
<tr><td><a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/bearBrown.htm">brown bear</a></td><td>LG</td></tr>
<tr><td><a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/giantStagBeetle.htm">giant stag beetle</a></td><td>NG</td></tr>
<tr><td><a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/seaCat.htm">sea cat</a><sup>1</sup></td><td>NG</td></tr>
<tr><td><a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/griffon.htm">griffon</a></td><td>CG</td></tr>
<tr><td><a href="d20srd/srd/monsters/elemental.htm">Elemental, Medium</a> (any)</td><td>N</td></tr>
<tr><td><a href="d20srd/srd/monsters/achaierai.htm">Achaierai</a></td><td>LE</td></tr>
<tr><td><a href="d20srd/srd/monsters/devil.htm#beardedDevilBarbazu">Devil, bearded</a></td><td>LE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/dinosaur.htm#deinonychus">deinonychus</a></td><td>LE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/direApe.htm">dire ape</a></td><td>LE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/direBoar.htm">dire boar</a></td><td>NE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/shark.htm">shark, Huge</a></td><td>NE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/monstrousScorpion.htm">monstrous scorpion, Large</a></td><td>NE</td></tr>
<tr><td><a href="d20srd/srd/monsters/shadowMastiff.htm">Shadow mastiff</a></td><td>NE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/direWolverine.htm">dire wolverine</a></td><td>CE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/crocodileGiant.htm">giant crocodile</a></td><td>CE</td></tr>
<tr><td><a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/tiger.htm">tiger</a></td><td>CE</td></tr>
</table>
<p><small><sup>1</sup> Можно призывать только в воде.</small></p>
</div>`