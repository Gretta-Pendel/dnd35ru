let summon_monster_3 = `
<h1>Призвать Монстра iii (Summon Monster III)</h1>
<div><b>Школа:</b> Вызывание (призывание)</div>
<div><b>Уровень:</b> Бард: 3, Клирик: 3, Колдун: 3, Маг: 3</div>
<div><b>Эффект:</b> Одно и более призванных существ, все в пределах 30 ф.</div>
<div><b>Кратко:</b> Призывает пришельца, который будет сражаться на вашей стороне.</div>
<div><p>Как <a href="spell.html?summon-monster-1">призвать монстра I</a>, за исключением того, что вы можете призвать одного пришельца из списка монстров 3-го уровня или 1d3 пришельца того же самого типа из списка 2-го уровня или 1d4+1 пришельца того же самого типа из списка 1-го уровня.</p>
<table class="odd">
<tr><th colspan="2">3-й Уровень</th></tr>
<tr><td>Небесный медведь, черный (животное)</td><td>ОД</td></tr>
<tr><td>Небесный бизон (животное)</td><td>НД</td></tr>
<tr><td>Тритон</td><td>НД</td></tr>
<tr><td>Небесный ужасный барсук</td><td>ХД</td></tr>
<tr><td>Эзер</td><td>ОН</td></tr>
<tr><td>Элементаль, Маленький </td><td>Н</td></tr>
<tr><td>Тхоккуа</td><td>Н</td></tr>
<tr><td>Дьвольская ужасная ласка</td><td>ОЗ</td></tr>
<tr><td>Дьвольская горилла (животное)</td><td>ОЗ</td></tr>
<tr><td>Дьвольская змея, удав (животное)</td><td>ОЗ</td></tr>
<tr><td>Дьявольский вепрь</td><td>НЗ</td></tr>
<tr><td>Дьявольская ужасная летучая мышь</td><td>НЗ</td></tr>
<tr><td>Дьявольская ящерица, гигантская (животное)</td><td>НЗ</td></tr>
<tr><td>Саламандра, Маленькая </td><td>НЗ</td></tr>
<tr><td>Дьвольская акула, Большая (животное)</td><td>НЗ</td></tr>
<tr><td>Дьвольская гадюка (животное) </td><td>ХЗ</td></tr>
<tr><td>Дьявольский крокодил (животное)</td><td>ХЗ</td></tr>
<tr><td>Дреч</td><td>ХЗ</td></tr>
<tr><td>Дьявольский леопард (животное)</td><td>ХЗ</td></tr>
<tr><td>Дьвольская росомаха (животное)</td><td>ХЗ</td></tr>
</table>
<table class="odd">
<tr><th>Monster</th><th>Alignment</th></tr>
<tr><td>Небесный медведь, черный <a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/bearBlack.htm">black bear</a></td><td>LG</td></tr>
<tr><td>Небесный бизон <a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/bison.htm">bison</a></td><td>NG</td></tr>
<tr><td>Небесный ужасный барсук <a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/direBadger.htm">dire badger</a></td><td>CG</td></tr>
<tr><td>Небесный гиппогриф <a href="d20srd/srd/monsters/celestialCreature.htm">Celestial</a> <a href="d20srd/srd/monsters/hippogriff.htm">hippogriff</a></td><td>CG</td></tr>
<tr><td>Элементаль, Маленький <a href="d20srd/srd/monsters/elemental.htm">Elemental, Small</a> (any)</td><td>N</td></tr>
<tr><td>Дьвольская горилла <a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/ape.htm">ape</a></td><td>LE</td></tr>
<tr><td>Дьвольская ужасная ласка <a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/direWeasel.htm">dire weasel</a></td><td>LE</td></tr>
<tr><td>Адская гончая <a href="d20srd/srd/monsters/hellHound.htm">Hell hound</a></td><td>LE</td></tr>
<tr><td>Дьвольская змея, удав <a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/snake.htm#constrictorSnake">snake, constrictor</a></td><td>LE</td></tr>
<tr><td>Дьявольский вепрь <a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/boar.htm">boar</a></td><td>NE</td></tr>
<tr><td>Дьявольская ужасная летучая мышь <a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/direBat.htm">dire bat</a></td><td>NE</td></tr>
<tr><td>Дьявольская сороконожка, Огромная<a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/monstrousCentipede.htm">monstrous centipede, Huge</a></td><td>NE</td></tr>
<tr><td>Дьявольский крокодил <a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/crocodile.htm">crocodile</a></td><td>CE</td></tr>
<tr><td>Дреч (демон) <a href="d20srd/srd/monsters/demon.htm#dretch">Dretch</a> (demon)</td><td>CE</td></tr>
<tr><td>Дьявольская змея, гадюка Большая<a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/snake.htm#viperSnake">snake, Large viper</a></td><td>CE</td></tr>
<tr><td>Дьвольская росомаха <a href="d20srd/srd/monsters/fiendishCreature.htm">Fiendish</a> <a href="d20srd/srd/monsters/wolverine.htm">wolverine</a></td><td>CE</td></tr>
</table>
<p><small><sup>1</sup> Можно призывать только в воде.</small></p>
</div>`