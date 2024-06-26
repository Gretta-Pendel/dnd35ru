var index0 = []
/**
name: "",
en: "",
book: "phb" "dmg"
page: "", (page number in book)
ru: "",
reference: "", (See ...)
link:"contents/dmg8_conditions.html#", (URL)
sub:""     */
var _index = [
    { id:"ability_damaged", name:"Урон характеристике", en:"Ability Damaged",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#ability_damaged",sub:"" },
    { id:"ability_drained", name:"Откачана характеристика", en:"Ability Drained",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#ability_drained",sub:"" },
    { id:"blinded", name:"Слепой", en:"Blinded",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#blinded",sub:"" },
    { id:"blown_away", name:"Сбит ветром", en:"Blown Away",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#blown_away",sub:"" },
    { id:"checked", name:"Задержан", en:"Checked",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#checked",sub:"" },
    { id:"concealment", name:"Маскировка", en:"Concealment",book:"phb",page:"152",reference: "",link:"contents/phb8_Combat-Modifiers.html#concealment",sub:"" },
    { id:"confused", name:"Смущен", en:"Confused",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#confused",sub:"" },
    { id:"cowering", name:"Съежившийся", en:"Cowering",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#cowering",sub:"" },
    { id:"dazed", name:"Изумлен", en:"Dazed",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#dazed",sub:"" },
    { id:"dazzled", name:"Ослеплен (вспышкой)", en:"Dazzled",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#dazzled",sub:"" },
    { id:"dead", name:"Мертв", en:"Dead",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#dead",sub:"" },
    { id:"deafened", name:"Глухой", en:"Deafened",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#deafened",sub:"" },
    { id:"disabled", name:"Недееспособный", en:"Disabled",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#disabled",sub:"" },
    { id:"dying", name:"Умирающий", en:"Dying",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#dying",sub:"" },
    { id:"energy_drained", name:"Откачана энергия", en:"Energy Drained",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#energy_drained",sub:"" },
    { id:"entangled", name:"Опутан", en:"Entangled",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#entangled",sub:"" },
    { id:"exhausted", name:"Обессилен", en:"Exhausted",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#exhausted",sub:"" },
    { id:"fascinated", name:"Очарованный", en:"Fascinated",book:"dmg",page:"300",reference: "",link:"contents/dmg8_conditions.html#fascinated",sub:"" },
    { id:"fatigued", name:"Уставший", en:"Fatigued",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#fatigued",sub:"" },
    { id:"flat_footed", name:"Неподготовленный", en:"Flat-Footed",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#flat_footed",sub:"" },
    { id:"frightened", name:"Испуган", en:"Frightened",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#frightened",sub:"" },
    { id:"grappling", name:"Захвачен", en:"Grappling",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#grappling",sub:"" },
    { id:"helpless", name:"Беспомощный", en:"Helpless",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#helpless",sub:"" },
    { id:"incorporeal", name:"Бестелесный", en:"Incorporeal",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#incorporeal",sub:"" },
    { id:"invisible", name:"Невидимый", en:"Invisible",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#invisible",sub:"" },
    { id:"knocked_down", name:"Опрокинут", en:"Knocked Down",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#knocked_down",sub:"" },
    { id:"nauseated", name:"Тошнота", en:"Nauseated",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#nauseated",sub:"" },
    { id:"panicked", name:"Паникующий", en:"Panicked",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#panicked",sub:"" },
    { id:"paralyzed", name:"Парализован", en:"Paralyzed",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#paralyzed",sub:"" },
    { id:"petrified", name:"Окаменевший", en:"Petrified",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#petrified",sub:"" },
    { id:"pinned", name:"Удерживаемый", en:"Pinned",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#pinned",sub:"" },
    { id:"prone", name:"Сбит с ног", en:"Prone",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#prone",sub:"" },
    { id:"shaken", name:"Потрясен", en:"Shaken",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#shaken",sub:"" },
    { id:"sickened", name:"Болен", en:"Sickened",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#sickened",sub:"" },
    { id:"stable", name:"Стабилен", en:"Stable",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#stable",sub:"" },
    { id:"staggered", name:"Ошеломленный", en:"Staggered",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#staggered",sub:"" },
    { id:"stunned", name:"Оглушен", en:"Stunned",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#stunned",sub:"" },
    { id:"turned", name:"Изгнан", en:"Turned",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#turned",sub:"" },
    { id:"unconscious", name:"Без сознания", en:"Unconscious",book:"dmg",page:"301",reference: "",link:"contents/dmg8_conditions.html#unconscious",sub:"" },
    { id:"extraordinary_abilities", name:"Экстраординарные способности", en:"Extraordinary Abilities",book:"dmg",page:"289",reference: "",link:"contents/dmg8_abilities.html#extraordinary_abilities",sub:"" },
    { id:"supernatural_abilities", name:"Сверхъестественные способности", en:"Supernatural Abilities",book:"dmg",page:"289",reference: "",link:"contents/dmg8_abilities.html#supernatural_abilities",sub:"" },
    { id:"spell_like_abilities", name:"Заклинательные способности", en:"Spell-like Abilities",book:"dmg",page:"289",reference: "",link:"contents/dmg8_abilities.html#spell_like_abilities",sub:"" },
    { id:"ability_score_loss", name:"Уменьшение характеристики", en:"Ability Score Loss",book:"dmg",page:"289",reference: "",link:"contents/dmg8_abilities.html#ability_score_loss",sub:"" },
    { id:"ability_damage", name:"Урон способности", en:"Ability Damage",book:"dmg",page:"289",reference: "",link:"contents/dmg8_abilities.html#ability_damage",sub:"" },
    { id:"ability_drain", name:"Высасывание способностей", en:"Ability Drain",book:"dmg",page:"289",reference: "",link:"contents/dmg8_abilities.html#ability_drain",sub:"" },
    { id:"alternate_form", name:"Альтернативная форма", en:"Alternate Form",book:"dmg",page:"?",reference: "",link:"contents/dmg8_abilities.html#alternate_form",sub:"" },
    { id:"antimagic", name:"Антимагия", en:"Antimagic",book:"dmg",page:"290",reference: "",link:"contents/dmg8_abilities.html#antimagic",sub:"" },
    { id:"breath_weapon", name:"Оружие дыхания", en:"Breath Weapon",book:"dmg",page:"291",reference: "",link:"contents/dmg8_abilities.html#breath_weapon",sub:"" },
    { id:"change_shape", name:"Смена формы", en:"Change Shape",book:"dmg",page:"?",reference: "",link:"contents/dmg8_abilities.html#change_shape",sub:"" },
    { id:"cold_immunity", name:"Иммунитет к холоду", en:"Cold Immunity",book:"dmg",page:"291",reference: "",link:"contents/dmg8_abilities.html#cold_immunity",sub:"" },
    { id:"constrict", name:"Сжимает", en:"Constrict",book:"dmg",page:"?",reference: "",link:"contents/dmg8_abilities.html#constrict",sub:"" },
    { id:"damage_reduction", name:"Снижение урона", en:"Damage Reduction",book:"dmg",page:"291",reference: "",link:"contents/dmg8_abilities.html#damage_reduction",sub:"" },
    { id:"darkvision", name:"Темновидение", en:"Darkvision",book:"dmg",page:"292",reference: "",link:"contents/dmg8_abilities.html#darkvision",sub:"" },
    { id:"death_attacks", name:"Смертельная атака", en:"Death Attacks",book:"dmg",page:"292",reference: "",link:"contents/dmg8_abilities.html#death_attacks",sub:"" },
    { id:"disease", name:"Болезнь", en:"Disease",book:"dmg",page:"292",reference: "",link:"contents/dmg8_abilities.html#disease",sub:"" },
    { id:"etherealness", name:"Эфирность", en:"Etherealness",book:"dmg",page:"293",reference: "",link:"contents/dmg8_abilities.html#etherealness",sub:"" },
    { id:"evasion_improved_evasion", name:"Уклонение И Улучшенное Уклонение", en:"Evasion And Improved Evasion",book:"dmg",page:"293",reference: "",link:"contents/dmg8_abilities.html#evasion_improved_evasion",sub:"" },
    { id:"fast_healing", name:"Быстрое лечение", en:"Fast Healing",book:"dmg",page:"293",reference: "",link:"contents/dmg8_abilities.html#fast_healing",sub:"" },
    { id:"fear", name:"Страх", en:"Fear",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#fear",sub:"" },
    { id:"fire_immunity", name:"Иммунитет к огню", en:"Fire Immunity",book:"dmg",page:"294",reference: "",link:"contents/dmg8_abilities.html#fire_immunity",sub:"" },
    { id:"gaseous_form", name:"Газообразная форма", en:"Gaseous Form",book:"dmg",page:"294",reference: "",link:"contents/dmg8_abilities.html#gaseous_form",sub:"" },
    { id:"gaze_attacks", name:"Атака взглядом", en:"Gaze Attacks",book:"dmg",page:"294",reference: "",link:"contents/dmg8_abilities.html#gaze_attacks",sub:"" },
    { id:"improved_grab", name:"Улучшенный захват", en:"Improved Grab",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#improved_grab",sub:"" },
    { id:"invisibility", name:"Невидимость", en:"Invisibility",book:"dmg",page:"295",reference: "",link:"contents/dmg8_abilities.html#invisibility",sub:"" },
    { id:"level_loss", name:"Потеря уровня", en:"Level Loss",book:"dmg",page:"296",reference: "",link:"contents/dmg8_abilities.html#level_loss",sub:"" },
    { id:"low_light_vision", name:"Ночное зрение", en:"Low-Light Vision",book:"dmg",page:"296",reference: "",link:"contents/dmg8_abilities.html#low_light_vision",sub:"" },
    { id:"poison", name:"Яд", en:"Poison",book:"dmg",page:"296",reference: "",link:"contents/dmg8_abilities.html#poison",sub:"" },
    { id:"grapple", name:"Борьба", en:"Grapple",book:"phb",page:"155",reference: "",link:"contents/phb8_Special-Attacks.html#grapple",sub:"" },
    /*{ id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
    { id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
    { id:"pounce", name:"Наброситься", en:"Pounce",book:"dmg",page:"?",reference: "",link:"contents/dmg8_abilities.html#pounce",sub:"" },
    { id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
    { id:"rake", name:"Царапать", en:"Rake",book:"dmg",page:"?",reference: "",link:"contents/dmg8_abilities.html#rake",sub:"" },
    { id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
    { id:"regeneration", name:"Регенерация", en:"Regeneration",book:"dmg",page:"298",reference: "",link:"contents/dmg8_abilities.html#regeneration",sub:"" },
    { id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
    { id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
    { id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
    */
    { id:"tremorsense", name:"Чувство вибрации", en:"Tremorsense",book:"dmg",page:"299",reference: "",link:"contents/dmg8_abilities.html#tremorsense",sub:"" },
    { id:"turn_resistance", name:"Сопротивляемость изгнанию", en:"Turn Resistance",book:"dmg",page:"299",reference: "",link:"contents/dmg8_abilities.html#turn_resistance",sub:"" },
    { id:"vulnerability_to_energy", name:"Уязвимость к энергии", en:"Vulnerability to Energy",book:"dmg",page:"?",reference: "",link:"contents/dmg8_abilities.html#vulnerability_to_energy",sub:"" },
    { id:"coup_de_grace", name:"Добивающий удар", en:"Coup de Grace",book:"dmg",page:"",reference: "",link:"contents/phb8_Combat-Modifiers.html#coup_de_grace",sub:"" },

    { id:"aid_another", name:"Помощь другим", en:"Aid Another",book:"phb",page:"154",reference: "",link:"contents/phb8_Special-Attacks.html#aid_another",sub:"" },
    { id:"bull_rush", name:"Натиск", en:"Bull rush",book:"phb",page:"154",reference: "",link:"contents/phb8_Special-Attacks.html#bull_rush",sub:"" },
    { id:"charge", name:"Стремительная атака", en:"Charge",book:"phb",page:"154",reference: "",link:"contents/phb8_Special-Attacks.html#charge",sub:"" },
    { id:"disarm", name:"Обезоруживание", en:"Disarm",book:"phb",page:"155",reference: "",link:"contents/phb8_Special-Attacks.html#disarm",sub:"" },
    { id:"feint", name:"Финт", en:"Feint",book:"phb",page:"155",reference: "",link:"contents/phb8_Special-Attacks.html#feint",sub:"" },
    { id:"grapple", name:"Борьба", en:"Grapple",book:"phb",page:"155",reference: "",link:"contents/phb8_Special-Attacks.html#grapple",sub:"" },
    { id:"mounted_combat", name:"Верховой бой", en:"Mounted Combat",book:"phb",page:"157",reference: "",link:"contents/phb8_Special-Attacks.html#mounted_combat",sub:"" },
    { id:"overrun", name:"Прорыв", en:"Overrun",book:"phb",page:"157",reference: "",link:"contents/phb8_Special-Attacks.html#overrun",sub:"" },
    { id:"sunder", name:"Удар по оружию", en:"Sunder",book:"phb",page:"158",reference: "",link:"contents/phb8_Special-Attacks.html#sunder",sub:"" },
    { id:"throw_splash_weapon", name:"Метание взрывного оружия", en:"Throw splash weapon",book:"phb",page:"158",reference: "",link:"contents/phb8_Special-Attacks.html#throw_splash_weapon",sub:"" },
    { id:"trip", name:"Подсечка", en:"Trip",book:"phb",page:"158",reference: "",link:"contents/phb8_Special-Attacks.html#trip",sub:"" },
    { id:"turn_rebuke_undead", name:"Изгнание или устрашение нежити", en:"Turn (rebuke) undead",book:"phb",page:"159",reference: "",link:"contents/phb8_Special-Attacks.html#turn_rebuke_undead",sub:"" },
    { id:"two_weapon_fighting", name:"Бой с оружием в обеих руках", en:"Two-weapon fighting",book:"phb",page:"159",reference: "",link:"contents/phb8_Special-Attacks.html#two_weapon_fighting",sub:"" },

    { id:"alchemical_bonus", name:"Бонус Алхимический", en:"Alchemical",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"inherent_bonus", name:"Бонус Врождённый", en:"Inherent",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"armor_bonus", name:"Бонус Доспеха", en:"Armor",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"insight_bonus", name:"Бонус Интуитивный", en:"Insight",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"competence_bonus", name:"Бонус Компетентности", en:"Competence",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"morale_bonus", name:"Бонус Морали", en:"Morale",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"profane_bonus", name:"Бонус Осквернения", en:"Profane",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"sacred_bonus", name:"Бонус Освящения", en:"Sacred",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"deflection_bonus", name:"Бонус Отклонения", en:"Deflection",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"natural_armor_bonus", name:"Бонус Природного Доспеха", en:"Natural Armor",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"size_bonus", name:"Бонус Размера", en:"Size",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"racial_bonus", name:"Бонус Расовый", en:"Racial",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"dodge_bonus", name:"Бонус Уворачивания", en:"Dodge",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"luck_bonus", name:"Бонус Удачи", en:"Luck",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"enhancement_bonus", name:"Бонус Улучшения", en:"Enhancement",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"circumstance_bonus", name:"Бонус Условный", en:"Circumstance",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"resistance_bonus", name:"Бонус Устойчивости", en:"Resistance",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    { id:"shield_bonus", name:"Бонус Щита", en:"Shield",book:"dmg",page:"21",reference: "",link:"contents/dmg2_bonus-types.html#",sub:"" },
    /*{ id:"", name:"", en:"",book:"dmg",page:"",reference: "",link:"contents/dmg8_abilities.html#",sub:"" },
*/

];
