var spells = [
  {
    "name": "Control Winds",
    "level": { "druid": "5" },
    "school": "Transmutation",
    "descriptor": "Air",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Cylinder"
    ],
    "save": "Fortitude",
    "sr": "No",
    "url": "/srd/spells/controlWinds.htm"
  },
  {
    "name": "Cloudkill",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "Fortitude",
    "sr": "No",
    "url": "/srd/spells/cloudkill.htm"
  },
  {
    "name": "Stinking Cloud",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "Fortitude",
    "sr": "No",
    "url": "/srd/spells/stinkingCloud.htm"
  },
  {
    "name": "Control Weather",
    "level": {
      "cleric": "7",
      "druid": "7",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Hours",
    "aiming": "Area",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/controlWeather.htm"
  },
  {
    "name": "Forcecage",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Area",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/forcecage.htm"
  },
  {
    "name": "Soften Earth and Stone",
    "level": { "druid": "2" },
    "school": "Transmutation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Area",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/softenEarthAndStone.htm"
  },
  {
    "name": "Locate Object",
    "level": {
      "bard": "2",
      "cleric": "3",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Long",
    "duration": "Minutes",
    "aiming": "Area",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/locateObject.htm"
  },
  {
    "name": "Locate Creature",
    "level": {
      "assassin": "4",
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Long",
    "duration": "Minutes",
    "aiming": "Area",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/locateCreature.htm"
  },
  {
    "name": "Detect Magic",
    "level": {
      "adept": "0",
      "bard": "0",
      "cleric": "0",
      "druid": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectMagic.htm"
  },
  {
    "name": "Detect Secret Doors",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectSecretDoors.htm"
  },
  {
    "name": "Detect Snares and Pits",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectSnaresAndPits.htm"
  },
  {
    "name": "Detect Chaos",
    "level": {
      "adept": "1",
      "cleric": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectChaos.htm"
  },
  {
    "name": "Detect Evil",
    "level": {
      "adept": "1",
      "cleric": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectEvil.htm"
  },
  {
    "name": "Detect Good",
    "level": {
      "adept": "1",
      "cleric": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectGood.htm"
  },
  {
    "name": "Detect Law",
    "level": {
      "adept": "1",
      "cleric": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectLaw.htm"
  },
  {
    "name": "Detect Undead",
    "level": {
      "cleric": "1",
      "paladin": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectUndead.htm"
  },
  {
    "name": "Detect Animals or Plants",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectAnimalsOrPlants.htm"
  },
  {
    "name": "Deathwatch",
    "level": { "cleric": "1" },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S"
    ],
    "range": "30 ft.",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/deathwatch.htm"
  },
  {
    "name": "Sleet Storm",
    "level": {
      "druid": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Long",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Cylinder"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/sleetStorm.htm"
  },
  {
    "name": "Permanency",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Universal",
    "components": [
      "V",
      "S",
      "XP"
    ],
    "range": "Special",
    "duration": "Permanent",
    "aiming": [
      "Area",
      "Effect",
      "Target"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/permanency.htm"
  },
  {
    "name": "Detect Scrying",
    "level": {
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "40 ft.",
    "duration": "Hours",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectScrying.htm"
  },
  {
    "name": "Consecrate",
    "level": { "cleric": "2" },
    "school": "Evocation",
    "descriptor": "Good",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/consecrate.htm"
  },
  {
    "name": "Alarm",
    "level": {
      "bard": "1",
      "ranger": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/alarm.htm"
  },
  {
    "name": "Zone of Silence",
    "level": { "bard": "4" },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/zoneOfSilence.htm"
  },
  {
    "name": "False Vision",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/falseVision.htm"
  },
  {
    "name": "Globe of Invulnerability",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "10 ft.",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation",
      "Sphere"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/globeOfInvulnerability.htm"
  },
  {
    "name": "Globe of Invulnerability, Lesser",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "10 ft.",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation",
      "Sphere"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/globeOfInvulnerabilityLesser.htm"
  },
  {
    "name": "Repel Metal or Stone",
    "level": { "druid": "8" },
    "school": "Abjuration",
    "descriptor": "Earth",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Line"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/repelMetalOrStone.htm"
  },
  {
    "name": "Repel Wood",
    "level": { "druid": "6" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Line",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/repelWood.htm"
  },
  {
    "name": "Mage's Private Sanctum",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/magesPrivateSanctum.htm"
  },
  {
    "name": "Move Earth",
    "level": {
      "druid": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/moveEarth.htm"
  },
  {
    "name": "Control Water",
    "level": {
      "cleric": "4",
      "druid": "4",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "descriptor": "Water",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Long",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/controlWater.htm"
  },
  {
    "name": "Reverse Gravity",
    "level": {
      "druid": "8",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/reverseGravity.htm"
  },
  {
    "name": "Whispering Wind",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "descriptor": "Air",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Hours",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/whisperingWind.htm"
  },
  {
    "name": "Black Tentacles",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/blackTentacles.htm"
  },
  {
    "name": "Detect Poison",
    "level": {
      "assassin": "1",
      "cleric": "0",
      "druid": "0",
      "paladin": "1",
      "ranger": "1",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Target"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/detectPoison.htm"
  },
  {
    "name": "Diminish Plants",
    "level": {
      "druid": "3",
      "ranger": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Target"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/diminishPlants.htm"
  },
  {
    "name": "Plant Growth",
    "level": {
      "druid": "3",
      "ranger": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Target"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/plantGrowth.htm"
  },
  {
    "name": "Dispel Magic",
    "level": {
      "bard": "3",
      "cleric": "3",
      "druid": "4",
      "paladin": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Target",
      "Burst"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/dispelMagic.htm"
  },
  {
    "name": "Dispel Magic, Greater",
    "level": {
      "bard": "5",
      "cleric": "6",
      "druid": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Target",
      "Burst"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/dispelMagicGreater.htm"
  },
  {
    "name": "Summon Swarm",
    "level": {
      "bard": "2",
      "druid": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonSwarm.htm"
  },
  {
    "name": "Shambler",
    "level": { "druid": "9" },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/shambler.htm"
  },
  {
    "name": "Ironwood",
    "level": { "druid": "6" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/ironwood.htm"
  },
  {
    "name": "Create Food and Water",
    "level": { "cleric": "3" },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/createFoodAndWater.htm"
  },
  {
    "name": "Heroes' Feast",
    "level": {
      "bard": "6",
      "cleric": "6"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Creation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/heroesFeast.htm"
  },
  {
    "name": "Floating Disk",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/floatingDisk.htm"
  },
  {
    "name": "Unseen Servant",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/unseenServant.htm"
  },
  {
    "name": "Helping Hand",
    "level": { "cleric": "3" },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Special",
    "duration": "Hours",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/helpingHand.htm"
  },
  {
    "name": "Mount",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/mount.htm"
  },
  {
    "name": "Secure Shelter",
    "level": {
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/secureShelter.htm"
  },
  {
    "name": "Phantom Steed",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/phantomSteed.htm"
  },
  {
    "name": "Minor Creation",
    "level": {
      "adept": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/minorCreation.htm"
  },
  {
    "name": "Prying Eyes",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/pryingEyes.htm"
  },
  {
    "name": "Prying Eyes, Greater",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/pryingEyesGreater.htm"
  },
  {
    "name": "Passwall",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/passwall.htm"
  },
  {
    "name": "Acid Splash",
    "level": {
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Acid",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/acidSplash.htm"
  },
  {
    "name": "Create Water",
    "level": {
      "adept": "0",
      "cleric": "0",
      "druid": "0",
      "paladin": "1"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Water",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/createWater.htm"
  },
  {
    "name": "Planar Ally",
    "level": { "cleric": "6" },
    "school": "Conjuration",
    "subschool": "Calling",
    "components": [
      "V",
      "S",
      "DF",
      "XP"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/planarAlly.htm"
  },
  {
    "name": "Planar Ally, Greater",
    "level": { "cleric": "8" },
    "school": "Conjuration",
    "subschool": "Calling",
    "components": [
      "V",
      "S",
      "DF",
      "XP"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/planarAllyGreater.htm"
  },
  {
    "name": "Planar Ally, Lesser",
    "level": { "cleric": "4" },
    "school": "Conjuration",
    "subschool": "Calling",
    "components": [
      "V",
      "S",
      "DF",
      "XP"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/planarAllyLesser.htm"
  },
  {
    "name": "Clone",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/clone.htm"
  },
  {
    "name": "Simulacrum",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S",
      "M",
      "XP"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/simulacrum.htm"
  },
  {
    "name": "Gate",
    "level": {
      "cleric": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Conjuration",
    "subschool": [
      "Calling",
      "Creation"
    ],
    "components": [
      "V",
      "S",
      "XP"
    ],
    "range": "Medium",
    "duration": [
      "Instantaneous",
      "Rounds",
      "Concentration"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/gate.htm"
  },
  {
    "name": "Creeping Doom",
    "level": { "druid": "7" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/creepingDoom.htm"
  },
  {
    "name": "Insect Plague",
    "level": {
      "cleric": "5",
      "druid": "5"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Long",
    "duration": "Minutes",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/insectPlague.htm"
  },
  {
    "name": "Clairaudience/Clairvoyance",
    "level": {
      "assassin": "4",
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Divination",
    "subschool": "Scrying",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Long",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/clairaudienceClairvoyance.htm"
  },
  {
    "name": "Dancing Lights",
    "level": {
      "bard": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Evocation",
    "descriptor": "Light",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/dancingLights.htm"
  },
  {
    "name": "Spectral Hand",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/spectralHand.htm"
  },
  {
    "name": "Elemental Swarm",
    "level": { "druid": "9" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/elementalSwarm.htm"
  },
  {
    "name": "Summon Instrument",
    "level": { "bard": "0" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonInstrument.htm"
  },
  {
    "name": "Arcane Eye",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Divination",
    "subschool": "Scrying",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/arcaneEye.htm"
  },
  {
    "name": "Phase Door",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": "V",
    "range": "Special",
    "duration": "Permanent",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/phaseDoor.htm"
  },
  {
    "name": "Arcane Mark",
    "level": {
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Universal",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Permanent",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/arcaneMark.htm"
  },
  {
    "name": "Acid Arrow",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Acid",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Long",
    "duration": "Rounds",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/acidArrow.htm"
  },
  {
    "name": "Summon Nature's Ally I",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyI.htm"
  },
  {
    "name": "Summon Nature's Ally II",
    "level": {
      "druid": "2",
      "ranger": "2"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyII.htm"
  },
  {
    "name": "Summon Nature's Ally III",
    "level": {
      "druid": "3",
      "ranger": "3"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyIII.htm"
  },
  {
    "name": "Summon Nature's Ally IV",
    "level": {
      "druid": "4",
      "ranger": "4"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyIV.htm"
  },
  {
    "name": "Summon Nature's Ally IX",
    "level": { "druid": "9" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyIX.htm"
  },
  {
    "name": "Summon Nature's Ally V",
    "level": { "druid": "5" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyV.htm"
  },
  {
    "name": "Summon Nature's Ally VI",
    "level": { "druid": "6" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyVI.htm"
  },
  {
    "name": "Summon Nature's Ally VII",
    "level": { "druid": "7" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyVII.htm"
  },
  {
    "name": "Summon Nature's Ally VIII",
    "level": { "druid": "8" },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonNaturesAllyVIII.htm"
  },
  {
    "name": "Summon Monster I",
    "level": {
      "bard": "1",
      "blackguard": "1",
      "cleric": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterI.htm"
  },
  {
    "name": "Summon Monster II",
    "level": {
      "bard": "2",
      "blackguard": "2",
      "cleric": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterII.htm"
  },
  {
    "name": "Summon Monster III",
    "level": {
      "bard": "3",
      "blackguard": "3",
      "cleric": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterIII.htm"
  },
  {
    "name": "Summon Monster IV",
    "level": {
      "bard": "4",
      "blackguard": "4",
      "cleric": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterIV.htm"
  },
  {
    "name": "Summon Monster IX",
    "level": {
      "cleric": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterIX.htm"
  },
  {
    "name": "Summon Monster V",
    "level": {
      "bard": "5",
      "cleric": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterV.htm"
  },
  {
    "name": "Summon Monster VI",
    "level": {
      "bard": "6",
      "cleric": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterVI.htm"
  },
  {
    "name": "Summon Monster VII",
    "level": {
      "cleric": "7",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterVII.htm"
  },
  {
    "name": "Summon Monster VIII",
    "level": {
      "cleric": "8",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "descriptor": [
      "Air",
      "Chaotic",
      "Earth",
      "Evil",
      "Fire",
      "Good",
      "Lawful",
      "Water"
    ],
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/summonMonsterVIII.htm"
  },
  {
    "name": "Wall of Force",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/wallOfForce.htm"
  },
  {
    "name": "Mage's Faithful Hound",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Hours"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/magesFaithfulHound.htm"
  },
  {
    "name": "Major Creation",
    "level": {
      "adept": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Minutes",
      "Hours"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/majorCreation.htm"
  },
  {
    "name": "Mage's Magnificent Mansion",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/magesMagnificentMansion.htm"
  },
  {
    "name": "Wall of Thorns",
    "level": { "druid": "5" },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/wallOfThorns.htm"
  },
  {
    "name": "Tiny Hut",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "20 ft.",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Sphere"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/tinyHut.htm"
  },
  {
    "name": "Obscuring Mist",
    "level": {
      "adept": "1",
      "assassin": "1",
      "cleric": "1",
      "druid": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S"
    ],
    "range": "20 ft.",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/obscuringMist.htm"
  },
  {
    "name": "Fog Cloud",
    "level": {
      "druid": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/fogCloud.htm"
  },
  {
    "name": "Solid Fog",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/solidFog.htm"
  },
  {
    "name": "Acid Fog",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Acid",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/acidFog.htm"
  },
  {
    "name": "Mage Hand",
    "level": {
      "bard": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Concentration",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/mageHand.htm"
  },
  {
    "name": "Contact Other Plane",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Divination",
    "components": "V",
    "range": "Personal",
    "duration": "Concentration",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/contactOtherPlane.htm"
  },
  {
    "name": "Secret Chest",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Special",
    "duration": "Days",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/secretChest.htm"
  },
  {
    "name": "Contingency",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Personal",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/contingency.htm"
  },
  {
    "name": "Deeper Darkness",
    "level": {
      "adept": "3",
      "assassin": "3",
      "blackguard": "3",
      "cleric": "3"
    },
    "school": "Evocation",
    "descriptor": "Darkness",
    "components": [
      "V",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/deeperDarkness.htm"
  },
  {
    "name": "Liveoak",
    "level": { "druid": "6" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/liveoak.htm"
  },
  {
    "name": "Magic Aura",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/magicAura.htm"
  },
  {
    "name": "Moment of Prescience",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Hours",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/momentOfPrescience.htm"
  },
  {
    "name": "Tree Stride",
    "level": {
      "druid": "5",
      "ranger": "4"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Personal",
    "duration": "Hours",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/treeStride.htm"
  },
  {
    "name": "False Life",
    "level": {
      "assassin": "3",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Personal",
    "duration": "Hours",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/falseLife.htm"
  },
  {
    "name": "Tree Shape",
    "level": {
      "druid": "2",
      "ranger": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Personal",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/treeShape.htm"
  },
  {
    "name": "Longstrider",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Personal",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/longstrider.htm"
  },
  {
    "name": "Reduce Animal",
    "level": {
      "druid": "2",
      "ranger": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/reduceAnimal.htm"
  },
  {
    "name": "Changestaff",
    "level": { "druid": "7" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/changestaff.htm"
  },
  {
    "name": "Rope Trick",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/ropeTrick.htm"
  },
  {
    "name": "Create Greater Undead",
    "level": {
      "cleric": "8",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/createGreaterUndead.htm"
  },
  {
    "name": "Create Undead",
    "level": {
      "cleric": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/createUndead.htm"
  },
  {
    "name": "Fabricate",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/fabricate.htm"
  },
  {
    "name": "Knock",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": "V",
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/knock.htm"
  },
  {
    "name": "Commune with Nature",
    "level": {
      "druid": "5",
      "ranger": "4"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/communeWithNature.htm"
  },
  {
    "name": "Know Direction",
    "level": {
      "bard": "0",
      "druid": "0"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/knowDirection.htm"
  },
  {
    "name": "Mage's Lucubration",
    "level": { "wizard": "6" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/magesLucubration.htm"
  },
  {
    "name": "Divination",
    "level": { "cleric": "4" },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/divination.htm"
  },
  {
    "name": "Augury",
    "level": { "cleric": "2" },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/augury.htm"
  },
  {
    "name": "Legend Lore",
    "level": {
      "bard": "4",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/legendLore.htm"
  },
  {
    "name": "Mnemonic Enhancer",
    "level": { "wizard": "4" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/mnemonicEnhancer.htm"
  },
  {
    "name": "Vision",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "XP"
    ],
    "range": "Personal",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/vision.htm"
  },
  {
    "name": "Discern Location",
    "level": {
      "cleric": "8",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/discernLocation.htm"
  },
  {
    "name": "Rusting Grasp",
    "level": { "druid": "4" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/rustingGrasp.htm"
  },
  {
    "name": "Animate Dead",
    "level": {
      "adept": "3",
      "cleric": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/animateDead.htm"
  },
  {
    "name": "Stone Shape",
    "level": {
      "cleric": "3",
      "druid": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Transmutation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/stoneShape.htm"
  },
  {
    "name": "Identify",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/identify.htm"
  },
  {
    "name": "Flame Arrow",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/flameArrow.htm"
  },
  {
    "name": "Message",
    "level": {
      "bard": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Transmutation",
    "descriptor": "Language-Dependent",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/message.htm"
  },
  {
    "name": "Find Traps",
    "level": { "cleric": "2" },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/findTraps.htm"
  },
  {
    "name": "Speak with Animals",
    "level": {
      "bard": "3",
      "druid": "1",
      "ranger": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/speakWithAnimals.htm"
  },
  {
    "name": "Speak with Plants",
    "level": {
      "druid": "3",
      "ranger": "2"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/speakWithPlants.htm"
  },
  {
    "name": "Meld into Stone",
    "level": {
      "cleric": "3",
      "druid": "3"
    },
    "school": "Transmutation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/meldIntoStone.htm"
  },
  {
    "name": "Stone Tell",
    "level": { "druid": "6" },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/stoneTell.htm"
  },
  {
    "name": "Divine Favor",
    "level": {
      "cleric": "1",
      "paladin": "1"
    },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/divineFavor.htm"
  },
  {
    "name": "Read Magic",
    "level": {
      "adept": "0",
      "bard": "0",
      "cleric": "0",
      "druid": "0",
      "paladin": "1",
      "ranger": "1",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/readMagic.htm"
  },
  {
    "name": "Spell Turning",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/spellTurning.htm"
  },
  {
    "name": "Comprehend Languages",
    "level": {
      "adept": "1",
      "bard": "1",
      "cleric": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Personal",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/comprehendLanguages.htm"
  },
  {
    "name": "Bless Weapon",
    "level": { "paladin": "1" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/blessWeapon.htm"
  },
  {
    "name": "Levitate",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/levitate.htm"
  },
  {
    "name": "Telepathic Bond",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/telepathicBond.htm"
  },
  {
    "name": "Hold Portal",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "components": "V",
    "range": "Medium",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/holdPortal.htm"
  },
  {
    "name": "Glibness",
    "level": {
      "assassin": "4",
      "bard": "3"
    },
    "school": "Transmutation",
    "components": "S",
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/glibness.htm"
  },
  {
    "name": "Shield",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "descriptor": "Force",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/shield.htm"
  },
  {
    "name": "Mirror Image",
    "level": {
      "adept": "2",
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/mirrorImage.htm"
  },
  {
    "name": "Disguise Self",
    "level": {
      "assassin": "1",
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/disguiseSelf.htm"
  },
  {
    "name": "Entropic Shield",
    "level": { "cleric": "1" },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/entropicShield.htm"
  },
  {
    "name": "Arcane Sight",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/arcaneSight.htm"
  },
  {
    "name": "Arcane Sight, Greater",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/arcaneSightGreater.htm"
  },
  {
    "name": "Invisibility Purge",
    "level": { "cleric": "3" },
    "school": "Evocation",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/invisibilityPurge.htm"
  },
  {
    "name": "Alter Self",
    "level": {
      "assassin": "2",
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/alterSelf.htm"
  },
  {
    "name": "Expeditious Retreat",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/expeditiousRetreat.htm"
  },
  {
    "name": "Shapechange",
    "level": {
      "druid": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/shapechange.htm"
  },
  {
    "name": "See Invisibility",
    "level": {
      "adept": "2",
      "bard": "3",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/seeInvisibility.htm"
  },
  {
    "name": "Iron Body",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Personal",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/ironBody.htm"
  },
  {
    "name": "Gaseous Form",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/gaseousForm.htm"
  },
  {
    "name": "Darkness",
    "level": {
      "adept": "2",
      "assassin": "2",
      "bard": "2",
      "blackguard": "2",
      "cleric": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Evocation",
    "descriptor": "Darkness",
    "components": [
      "V",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/darkness.htm"
  },
  {
    "name": "Light",
    "level": {
      "adept": "0",
      "bard": "0",
      "cleric": "0",
      "druid": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Evocation",
    "descriptor": "Light",
    "components": [
      "V",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/light.htm"
  },
  {
    "name": "Daylight",
    "level": {
      "adept": "3",
      "bard": "3",
      "cleric": "3",
      "druid": "3",
      "paladin": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Evocation",
    "descriptor": "Light",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/daylight.htm"
  },
  {
    "name": "Polymorph",
    "level": {
      "adept": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/polymorph.htm"
  },
  {
    "name": "Instant Summons",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/instantSummons.htm"
  },
  {
    "name": "Snare",
    "level": {
      "druid": "3",
      "ranger": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/snare.htm"
  },
  {
    "name": "Continual Flame",
    "level": {
      "adept": "3",
      "cleric": "3",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Evocation",
    "descriptor": "Light",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/continualFlame.htm"
  },
  {
    "name": "Arcane Lock",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/arcaneLock.htm"
  },
  {
    "name": "Secret Page",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/secretPage.htm"
  },
  {
    "name": "Refuge",
    "level": {
      "cleric": "7",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/refuge.htm"
  },
  {
    "name": "Phantom Trap",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/phantomTrap.htm"
  },
  {
    "name": "Animate Objects",
    "level": {
      "bard": "6",
      "cleric": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/animateObjects.htm"
  },
  {
    "name": "Animate Rope",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/animateRope.htm"
  },
  {
    "name": "Time Stop",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Transmutation",
    "components": "V",
    "range": "Personal",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/timeStop.htm"
  },
  {
    "name": "True Strike",
    "level": {
      "assassin": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Divination",
    "components": [
      "V",
      "F"
    ],
    "range": "Personal",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/trueStrike.htm"
  },
  {
    "name": "Divine Power",
    "level": { "cleric": "4" },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Personal",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/divinePower.htm"
  },
  {
    "name": "Transformation",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Personal",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/transformation.htm"
  },
  {
    "name": "Commune",
    "level": {
      "adept": "5",
      "cleric": "5"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "DF",
      "XP"
    ],
    "range": "Personal",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/commune.htm"
  },
  {
    "name": "Transport via Plants",
    "level": { "druid": "6" },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/transportViaPlants.htm"
  },
  {
    "name": "Sending",
    "level": {
      "cleric": "4",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Special",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/sending.htm"
  },
  {
    "name": "Holy Sword",
    "level": { "paladin": "4" },
    "school": "Evocation",
    "descriptor": "Good",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/holySword.htm"
  },
  {
    "name": "Blink",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/blink.htm"
  },
  {
    "name": "Ethereal Jaunt",
    "level": {
      "cleric": "7",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/etherealJaunt.htm"
  },
  {
    "name": "Righteous Might",
    "level": { "cleric": "5" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Personal",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/righteousMight.htm"
  },
  {
    "name": "Fire Shield",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Personal",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/fireShield.htm"
  },
  {
    "name": "Animate Plants",
    "level": { "druid": "7" },
    "school": "Transmutation",
    "components": "V",
    "range": "Close",
    "duration": [
      "Rounds",
      "Hours"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/animatePlants.htm"
  },
  {
    "name": "Fire Seeds",
    "level": { "druid": "6" },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": [
      "None",
      "Reflex"
    ],
    "sr": "No",
    "url": "/srd/spells/fireSeeds.htm"
  },
  {
    "name": "Screen",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": "No",
    "url": "/srd/spells/screen.htm"
  },
  {
    "name": "Mislead",
    "level": {
      "bard": "5",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Illusion",
    "subschool": [
      "Figment",
      "Glamer"
    ],
    "components": "S",
    "range": "Close",
    "duration": [
      "Concentration",
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Target"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": "No",
    "url": "/srd/spells/mislead.htm"
  },
  {
    "name": "Misdirection",
    "level": {
      "assassin": "3",
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": "No",
    "url": "/srd/spells/misdirection.htm"
  },
  {
    "name": "Analyze Dweomer",
    "level": {
      "bard": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": "No",
    "url": "/srd/spells/analyzeDweomer.htm"
  },
  {
    "name": "Prestidigitation",
    "level": {
      "bard": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Universal",
    "components": [
      "V",
      "S"
    ],
    "range": "10 ft.",
    "duration": "Hours",
    "aiming": [
      "Area",
      "Effect",
      "Target"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/prestidigitation.htm"
  },
  {
    "name": "Transmute Mud to Rock",
    "level": {
      "druid": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Permanent",
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/transmuteMudToRock.htm"
  },
  {
    "name": "Transmute Rock to Mud",
    "level": {
      "druid": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Permanent",
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/transmuteRockToMud.htm"
  },
  {
    "name": "Earthquake",
    "level": {
      "cleric": "8",
      "druid": "8"
    },
    "school": "Evocation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Long",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Shapeable",
      "Spread"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/earthquake.htm"
  },
  {
    "name": "Grease",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Target"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/grease.htm"
  },
  {
    "name": "Wall of Iron",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/wallOfIron.htm"
  },
  {
    "name": "Wall of Stone",
    "level": {
      "adept": "5",
      "cleric": "5",
      "druid": "6",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/wallOfStone.htm"
  },
  {
    "name": "Break Enchantment",
    "level": {
      "adept": "5",
      "bard": "4",
      "cleric": "5",
      "paladin": "4",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/breakEnchantment.htm"
  },
  {
    "name": "Erase",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/erase.htm"
  },
  {
    "name": "Entangle",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Long",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Reflex",
    "sr": "No",
    "url": "/srd/spells/entangle.htm"
  },
  {
    "name": "Web",
    "level": {
      "adept": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "Reflex",
    "sr": "No",
    "url": "/srd/spells/web.htm"
  },
  {
    "name": "Incendiary Cloud",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "Reflex",
    "sr": "No",
    "url": "/srd/spells/incendiaryCloud.htm"
  },
  {
    "name": "Sepia Snake Sigil",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Days"
    ],
    "aiming": "Target",
    "save": "Reflex",
    "sr": "No",
    "url": "/srd/spells/sepiaSnakeSigil.htm"
  },
  {
    "name": "Mage's Disjunction",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Abjuration",
    "components": "V",
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/magesDisjunction.htm"
  },
  {
    "name": "Detect Thoughts",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Divination",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "60 ft.",
    "duration": [
      "Concentration",
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Cone",
      "Emanation"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/detectThoughts.htm"
  },
  {
    "name": "Magic Circle against Law",
    "level": {
      "cleric": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "descriptor": "Chaotic",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/magicCircleAgainstLaw.htm"
  },
  {
    "name": "Magic Circle against Good",
    "level": {
      "assassin": "3",
      "cleric": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/magicCircleAgainstGood.htm"
  },
  {
    "name": "Magic Circle against Evil",
    "level": {
      "cleric": "3",
      "paladin": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "descriptor": "Good",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/magicCircleAgainstEvil.htm"
  },
  {
    "name": "Magic Circle against Chaos",
    "level": {
      "cleric": "3",
      "paladin": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "descriptor": "Lawful",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/magicCircleAgainstChaos.htm"
  },
  {
    "name": "Mirage Arcana",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": [
      "Concentration",
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/mirageArcana.htm"
  },
  {
    "name": "Hallucinatory Terrain",
    "level": {
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Long",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/hallucinatoryTerrain.htm"
  },
  {
    "name": "Glitterdust",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/glitterdust.htm"
  },
  {
    "name": "Ventriloquism",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "F"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/ventriloquism.htm"
  },
  {
    "name": "Illusory Wall",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Permanent",
    "aiming": "Effect",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/illusoryWall.htm"
  },
  {
    "name": "Ghost Sound",
    "level": {
      "adept": "0",
      "assassin": "1",
      "bard": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/ghostSound.htm"
  },
  {
    "name": "Project Image",
    "level": {
      "bard": "6",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/projectImage.htm"
  },
  {
    "name": "Silent Image",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": "Concentration",
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/silentImage.htm"
  },
  {
    "name": "Major Image",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/majorImage.htm"
  },
  {
    "name": "Minor Image",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/minorImage.htm"
  },
  {
    "name": "Persistent Image",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/persistentImage.htm"
  },
  {
    "name": "Permanent Image",
    "level": {
      "bard": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/permanentImage.htm"
  },
  {
    "name": "Programmed Image",
    "level": {
      "bard": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Illusion",
    "subschool": "Figment",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": [
      "Rounds",
      "Permanent"
    ],
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/programmedImage.htm"
  },
  {
    "name": "Discern Lies",
    "level": {
      "cleric": "4",
      "paladin": "3"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/discernLies.htm"
  },
  {
    "name": "Mage Armor",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Conjuration",
    "subschool": "Creation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/mageArmor.htm"
  },
  {
    "name": "Speak with Dead",
    "level": { "cleric": "3" },
    "school": "Necromancy",
    "descriptor": "Language-Dependent",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "10 ft.",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/speakWithDead.htm"
  },
  {
    "name": "Control Plants",
    "level": { "druid": "8" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/controlPlants.htm"
  },
  {
    "name": "Tongues",
    "level": {
      "adept": "3",
      "bard": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Divination",
    "components": [
      "V",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/tongues.htm"
  },
  {
    "name": "Protection from Law",
    "level": {
      "adept": "1",
      "cleric": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "descriptor": "Chaotic",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/protectionFromLaw.htm"
  },
  {
    "name": "Protection from Good",
    "level": {
      "adept": "1",
      "cleric": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/protectionFromGood.htm"
  },
  {
    "name": "Protection from Evil",
    "level": {
      "adept": "1",
      "cleric": "1",
      "paladin": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "descriptor": "Good",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/protectionFromEvil.htm"
  },
  {
    "name": "Protection from Chaos",
    "level": {
      "adept": "1",
      "cleric": "1",
      "paladin": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "descriptor": "Lawful",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/protectionFromChaos.htm"
  },
  {
    "name": "Soul Bind",
    "level": {
      "cleric": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/soulBind.htm"
  },
  {
    "name": "Sanctuary",
    "level": { "cleric": "1" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "No",
    "url": "/srd/spells/sanctuary.htm"
  },
  {
    "name": "Pyrotechnics",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Long",
    "duration": "Rounds",
    "aiming": "Target",
    "save": [
      "Fortitude",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/pyrotechnics.htm"
  },
  {
    "name": "Silence",
    "level": {
      "bard": "2",
      "cleric": "2"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/silence.htm"
  },
  {
    "name": "Quench",
    "level": { "druid": "3" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Target",
      "Shapeable"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/quench.htm"
  },
  {
    "name": "Sequester",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/sequester.htm"
  },
  {
    "name": "Wind Walk",
    "level": {
      "cleric": "6",
      "druid": "7"
    },
    "school": "Transmutation",
    "descriptor": "Air",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/windWalk.htm"
  },
  {
    "name": "Dimension Door",
    "level": {
      "assassin": "4",
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": "V",
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/dimensionDoor.htm"
  },
  {
    "name": "Teleport",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": "V",
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/teleport.htm"
  },
  {
    "name": "Teleport, Greater",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": "V",
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/teleportGreater.htm"
  },
  {
    "name": "Word of Recall",
    "level": {
      "cleric": "6",
      "druid": "8"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": "V",
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/wordOfRecall.htm"
  },
  {
    "name": "Find the Path",
    "level": {
      "bard": "6",
      "cleric": "6",
      "druid": "6"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/findThePath.htm"
  },
  {
    "name": "Foresight",
    "level": {
      "druid": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/foresight.htm"
  },
  {
    "name": "Glyph of Warding",
    "level": { "cleric": "3" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Target"
    ],
    "save": "None",
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/glyphOfWarding.htm"
  },
  {
    "name": "Glyph of Warding, Greater",
    "level": { "cleric": "6" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Target"
    ],
    "save": "None",
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/glyphOfWardingGreater.htm"
  },
  {
    "name": "Seeming",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/seeming.htm"
  },
  {
    "name": "Planar Binding",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Conjuration",
    "subschool": "Calling",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/planarBinding.htm"
  },
  {
    "name": "Planar Binding, Greater",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Conjuration",
    "subschool": "Calling",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/planarBindingGreater.htm"
  },
  {
    "name": "Planar Binding, Lesser",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Conjuration",
    "subschool": "Calling",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": [
      "No",
      "Yes"
    ],
    "url": "/srd/spells/planarBindingLesser.htm"
  },
  {
    "name": "Antimagic Field",
    "level": {
      "cleric": "8",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "10 ft.",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/antimagicField.htm"
  },
  {
    "name": "Unhallow",
    "level": {
      "cleric": "5",
      "druid": "5"
    },
    "school": "Evocation",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/unhallow.htm"
  },
  {
    "name": "Hallow",
    "level": {
      "cleric": "5",
      "druid": "5"
    },
    "school": "Evocation",
    "descriptor": "Good",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/hallow.htm"
  },
  {
    "name": "Guards and Wards",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Special",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/guardsAndWards.htm"
  },
  {
    "name": "Prismatic Wall",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/prismaticWall.htm"
  },
  {
    "name": "Prismatic Sphere",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Abjuration",
    "components": "V",
    "range": "10 ft.",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Sphere"
    ],
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/prismaticSphere.htm"
  },
  {
    "name": "Dispel Law",
    "level": { "cleric": "5" },
    "school": "Abjuration",
    "descriptor": "Chaotic",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/dispelLaw.htm"
  },
  {
    "name": "Dispel Good",
    "level": { "cleric": "5" },
    "school": "Abjuration",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/dispelGood.htm"
  },
  {
    "name": "Dispel Evil",
    "level": {
      "cleric": "5",
      "paladin": "4"
    },
    "school": "Abjuration",
    "descriptor": "Good",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/dispelEvil.htm"
  },
  {
    "name": "Dispel Chaos",
    "level": {
      "cleric": "5",
      "paladin": "4"
    },
    "school": "Abjuration",
    "descriptor": "Lawful",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "No",
    "url": "/srd/spells/dispelChaos.htm"
  },
  {
    "name": "Circle of Death",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Necromancy",
    "descriptor": "Death",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/circleOfDeath.htm"
  },
  {
    "name": "Wail of the Banshee",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Necromancy",
    "descriptor": [
      "Death",
      "Sonic"
    ],
    "components": "V",
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/wailOfTheBanshee.htm"
  },
  {
    "name": "Sound Burst",
    "level": {
      "bard": "2",
      "cleric": "2"
    },
    "school": "Evocation",
    "descriptor": "Sonic",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/soundBurst.htm"
  },
  {
    "name": "Symbol of Death",
    "level": {
      "cleric": "8",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Necromancy",
    "descriptor": "Death",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": "Permanent",
    "aiming": "Effect",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfDeath.htm"
  },
  {
    "name": "Symbol of Weakness",
    "level": {
      "cleric": "7",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Necromancy",
    "descriptor": "Death",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Permanent",
      "Minutes"
    ],
    "aiming": "Effect",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfWeakness.htm"
  },
  {
    "name": "Symbol of Pain",
    "level": {
      "cleric": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Permanent",
      "Rounds"
    ],
    "aiming": "Effect",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfPain.htm"
  },
  {
    "name": "Flare",
    "level": {
      "bard": "0",
      "druid": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Evocation",
    "descriptor": "Light",
    "components": "V",
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Burst"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/flare.htm"
  },
  {
    "name": "Gust of Wind",
    "level": {
      "druid": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Evocation",
    "descriptor": "Air",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": "Rounds",
    "aiming": [
      "Effect",
      "Line",
      "Emanation"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/gustOfWind.htm"
  },
  {
    "name": "Energy Drain",
    "level": {
      "cleric": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/energyDrain.htm"
  },
  {
    "name": "Disintegrate",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/disintegrate.htm"
  },
  {
    "name": "Ray of Exhaustion",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/rayOfExhaustion.htm"
  },
  {
    "name": "Implosion",
    "level": { "cleric": "9" },
    "school": "Evocation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/implosion.htm"
  },
  {
    "name": "Delay Poison",
    "level": {
      "adept": "2",
      "bard": "2",
      "cleric": "2",
      "druid": "2",
      "paladin": "2",
      "ranger": "1"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/delayPoison.htm"
  },
  {
    "name": "Finger of Death",
    "level": {
      "druid": "8",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Necromancy",
    "descriptor": "Death",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/fingerOfDeath.htm"
  },
  {
    "name": "Destruction",
    "level": { "cleric": "7" },
    "school": "Necromancy",
    "descriptor": "Death",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/destruction.htm"
  },
  {
    "name": "Horrid Wilting",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/horridWilting.htm"
  },
  {
    "name": "Flesh to Stone",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/fleshToStone.htm"
  },
  {
    "name": "Slay Living",
    "level": { "cleric": "5" },
    "school": "Necromancy",
    "descriptor": "Death",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/slayLiving.htm"
  },
  {
    "name": "Contagion",
    "level": {
      "adept": "3",
      "blackguard": "3",
      "cleric": "3",
      "druid": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/contagion.htm"
  },
  {
    "name": "Remove Blindness/Deafness",
    "level": {
      "cleric": "3",
      "paladin": "3"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/removeBlindnessDeafness.htm"
  },
  {
    "name": "Remove Disease",
    "level": {
      "adept": "3",
      "cleric": "3",
      "druid": "3",
      "ranger": "3"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/removeDisease.htm"
  },
  {
    "name": "Regenerate",
    "level": {
      "cleric": "7",
      "druid": "9"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/regenerate.htm"
  },
  {
    "name": "Blight",
    "level": {
      "druid": "4",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/blight.htm"
  },
  {
    "name": "Poison",
    "level": {
      "assassin": "4",
      "blackguard": "4",
      "cleric": "4",
      "druid": "3"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/poison.htm"
  },
  {
    "name": "Animal Growth",
    "level": {
      "druid": "5",
      "ranger": "4",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/animalGrowth.htm"
  },
  {
    "name": "Protection from Energy",
    "level": {
      "blackguard": "3",
      "cleric": "3",
      "druid": "3",
      "ranger": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/protectionFromEnergy.htm"
  },
  {
    "name": "Resist Energy",
    "level": {
      "adept": "2",
      "cleric": "2",
      "druid": "2",
      "paladin": "2",
      "ranger": "1",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/resistEnergy.htm"
  },
  {
    "name": "Virtue",
    "level": {
      "cleric": "0",
      "druid": "0",
      "paladin": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/virtue.htm"
  },
  {
    "name": "Enlarge Person",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/enlargePerson.htm"
  },
  {
    "name": "Enlarge Person, Mass",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/enlargePersonMass.htm"
  },
  {
    "name": "Reduce Person",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/reducePerson.htm"
  },
  {
    "name": "Reduce Person, Mass",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/reducePersonMass.htm"
  },
  {
    "name": "Polymorph Any Object",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Hours",
      "Days",
      "Permanent"
    ],
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/polymorphAnyObject.htm"
  },
  {
    "name": "Temporal Stasis",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/temporalStasis.htm"
  },
  {
    "name": "Blindness/Deafness",
    "level": {
      "bard": "2",
      "cleric": "3",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Necromancy",
    "components": "V",
    "range": "Medium",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/blindnessDeafness.htm"
  },
  {
    "name": "Eyebite",
    "level": {
      "bard": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/eyebite.htm"
  },
  {
    "name": "Haste",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/haste.htm"
  },
  {
    "name": "Ghoul Touch",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/ghoulTouch.htm"
  },
  {
    "name": "Touch of Fatigue",
    "level": {
      "adept": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/touchOfFatigue.htm"
  },
  {
    "name": "Stone to Flesh",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Target",
      "Cylinder"
    ],
    "save": "Fortitude",
    "sr": "Yes",
    "url": "/srd/spells/stoneToFlesh.htm"
  },
  {
    "name": "Shout",
    "level": {
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Evocation",
    "descriptor": "Sonic",
    "components": "V",
    "range": "30 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": [
      "Fortitude",
      "Reflex"
    ],
    "sr": "Yes",
    "url": "/srd/spells/shout.htm"
  },
  {
    "name": "Shout, Greater",
    "level": {
      "bard": "6",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "60 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": [
      "Fortitude",
      "Reflex"
    ],
    "sr": "Yes",
    "url": "/srd/spells/shoutGreater.htm"
  },
  {
    "name": "Shatter",
    "level": {
      "bard": "2",
      "blackguard": "2",
      "cleric": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Evocation",
    "descriptor": "Sonic",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Target",
      "Spread"
    ],
    "save": [
      "Fortitude",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/shatter.htm"
  },
  {
    "name": "Phantasmal Killer",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Illusion",
    "subschool": "Phantasm",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": [
      "Fortitude",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/phantasmalKiller.htm"
  },
  {
    "name": "Weird",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Illusion",
    "subschool": "Phantasm",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": [
      "Fortitude",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/weird.htm"
  },
  {
    "name": "Chill Touch",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": [
      "Fortitude",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/chillTouch.htm"
  },
  {
    "name": "Baleful Polymorph",
    "level": {
      "adept": "5",
      "druid": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Permanent",
    "aiming": "Target",
    "save": [
      "Fortitude",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/balefulPolymorph.htm"
  },
  {
    "name": "Transmute Metal to Wood",
    "level": { "druid": "7" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/transmuteMetalToWood.htm"
  },
  {
    "name": "Bless",
    "level": {
      "adept": "1",
      "cleric": "1",
      "paladin": "1"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "50 ft.",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/bless.htm"
  },
  {
    "name": "Faerie Fire",
    "level": { "druid": "1" },
    "school": "Evocation",
    "descriptor": "Light",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Long",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/faerieFire.htm"
  },
  {
    "name": "Prayer",
    "level": {
      "cleric": "3",
      "paladin": "3"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "40 ft.",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/prayer.htm"
  },
  {
    "name": "Waves of Fatigue",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "30 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/wavesOfFatigue.htm"
  },
  {
    "name": "Waves of Exhaustion",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/wavesOfExhaustion.htm"
  },
  {
    "name": "Ice Storm",
    "level": {
      "druid": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Evocation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Long",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Cylinder"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/iceStorm.htm"
  },
  {
    "name": "Limited Wish",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Universal",
    "components": [
      "V",
      "S",
      "XP"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": [
      "Area",
      "Effect",
      "Target"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/limitedWish.htm"
  },
  {
    "name": "Dimensional Lock",
    "level": {
      "cleric": "8",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Days",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/dimensionalLock.htm"
  },
  {
    "name": "Desecrate",
    "level": { "cleric": "2" },
    "school": "Evocation",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/desecrate.htm"
  },
  {
    "name": "Antilife Shell",
    "level": {
      "cleric": "6",
      "druid": "6"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "10 ft.",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/antilifeShell.htm"
  },
  {
    "name": "Antiplant Shell",
    "level": { "druid": "4" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "10 ft.",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/antiplantShell.htm"
  },
  {
    "name": "Wall of Fire",
    "level": {
      "adept": "4",
      "druid": "5",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/wallOfFire.htm"
  },
  {
    "name": "Teleportation Circle",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": [
      "V",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/teleportationCircle.htm"
  },
  {
    "name": "Produce Flame",
    "level": { "druid": "1" },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/produceFlame.htm"
  },
  {
    "name": "Flame Blade",
    "level": { "druid": "2" },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Special",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/flameBlade.htm"
  },
  {
    "name": "Mage's Sword",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/magesSword.htm"
  },
  {
    "name": "Spiritual Weapon",
    "level": { "cleric": "2" },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/spiritualWeapon.htm"
  },
  {
    "name": "Forceful Hand",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/forcefulHand.htm"
  },
  {
    "name": "Interposing Hand",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/interposingHand.htm"
  },
  {
    "name": "Clenched Fist",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/clenchedFist.htm"
  },
  {
    "name": "Grasping Hand",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/graspingHand.htm"
  },
  {
    "name": "Crushing Hand",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M",
      "F",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/crushingHand.htm"
  },
  {
    "name": "Ray of Frost",
    "level": {
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Evocation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/rayOfFrost.htm"
  },
  {
    "name": "Scorching Ray",
    "level": {
      "adept": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/scorchingRay.htm"
  },
  {
    "name": "Disrupt Undead",
    "level": {
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/disruptUndead.htm"
  },
  {
    "name": "Enervation",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/enervation.htm"
  },
  {
    "name": "Polar Ray",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Evocation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/polarRay.htm"
  },
  {
    "name": "Searing Light",
    "level": { "cleric": "3" },
    "school": "Evocation",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/searingLight.htm"
  },
  {
    "name": "Ray of Enfeeblement",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/rayOfEnfeeblement.htm"
  },
  {
    "name": "Dimensional Anchor",
    "level": {
      "cleric": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Ray"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/dimensionalAnchor.htm"
  },
  {
    "name": "Wind Wall",
    "level": {
      "cleric": "3",
      "druid": "3",
      "ranger": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Evocation",
    "descriptor": "Air",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Effect",
      "Shapeable"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/windWall.htm"
  },
  {
    "name": "Scintillating Pattern",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Illusion",
    "subschool": "Pattern",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/scintillatingPattern.htm"
  },
  {
    "name": "Rage",
    "level": {
      "bard": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Concentration",
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/rage.htm"
  },
  {
    "name": "Animal Messenger",
    "level": {
      "bard": "2",
      "druid": "2",
      "ranger": "1"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Days",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/animalMessenger.htm"
  },
  {
    "name": "Goodberry",
    "level": { "druid": "1" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Days",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/goodberry.htm"
  },
  {
    "name": "Geas/Quest",
    "level": {
      "bard": "6",
      "cleric": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "components": "V",
    "range": "Close",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/geasQuest.htm"
  },
  {
    "name": "Animal Shapes",
    "level": { "druid": "8" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/animalShapes.htm"
  },
  {
    "name": "Power Word Kill",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": [
      "Death",
      "Mind-Affecting"
    ],
    "components": "V",
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/powerWordKill.htm"
  },
  {
    "name": "Magic Missile",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/magicMissile.htm"
  },
  {
    "name": "Shocking Grasp",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Evocation",
    "descriptor": "Electricity",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/shockingGrasp.htm"
  },
  {
    "name": "Raise Dead",
    "level": {
      "adept": "5",
      "cleric": "5"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/raiseDead.htm"
  },
  {
    "name": "Resurrection",
    "level": { "cleric": "7" },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/resurrection.htm"
  },
  {
    "name": "True Resurrection",
    "level": { "cleric": "9" },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/trueResurrection.htm"
  },
  {
    "name": "Reincarnate",
    "level": { "druid": "4" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/reincarnate.htm"
  },
  {
    "name": "Atonement",
    "level": {
      "cleric": "5",
      "druid": "5"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "F",
      "DF",
      "XP"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/atonement.htm"
  },
  {
    "name": "Vampiric Touch",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Instantaneous",
      "Hours"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/vampiricTouch.htm"
  },
  {
    "name": "Giant Vermin",
    "level": {
      "cleric": "4",
      "druid": "4"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/giantVermin.htm"
  },
  {
    "name": "Dream",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Illusion",
    "subschool": "Phantasm",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/dream.htm"
  },
  {
    "name": "Touch of Idiocy",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/touchOfIdiocy.htm"
  },
  {
    "name": "Air Walk",
    "level": {
      "cleric": "4",
      "druid": "4"
    },
    "school": "Transmutation",
    "descriptor": "Air",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/airWalk.htm"
  },
  {
    "name": "Aid",
    "level": {
      "adept": "2",
      "cleric": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/aid.htm"
  },
  {
    "name": "Barkskin",
    "level": {
      "druid": "2",
      "ranger": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/barkskin.htm"
  },
  {
    "name": "Etherealness",
    "level": {
      "cleric": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/etherealness.htm"
  },
  {
    "name": "Mark of Justice",
    "level": {
      "cleric": "5",
      "paladin": "4"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/markOfJustice.htm"
  },
  {
    "name": "Power Word Stun",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": "V",
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/powerWordStun.htm"
  },
  {
    "name": "Irresistible Dance",
    "level": {
      "bard": "6",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": "V",
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/irresistibleDance.htm"
  },
  {
    "name": "Sympathetic Vibration",
    "level": { "bard": "6" },
    "school": "Evocation",
    "descriptor": "Sonic",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/sympatheticVibration.htm"
  },
  {
    "name": "Maze",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Minutes"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/maze.htm"
  },
  {
    "name": "Power Word Blind",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": "V",
    "range": "Close",
    "duration": [
      "Rounds",
      "Minutes",
      "Permanent"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/powerWordBlind.htm"
  },
  {
    "name": "Astral Projection",
    "level": {
      "cleric": "9",
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Special",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/astralProjection.htm"
  },
  {
    "name": "Meteor Swarm",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": [
      "None",
      "Reflex"
    ],
    "sr": "Yes",
    "url": "/srd/spells/meteorSwarm.htm"
  },
  {
    "name": "Repel Vermin",
    "level": {
      "bard": "4",
      "cleric": "4",
      "druid": "4",
      "ranger": "3"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "10 ft.",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/repelVermin.htm"
  },
  {
    "name": "Word of Chaos",
    "level": { "cleric": "7" },
    "school": "Evocation",
    "descriptor": [
      "Chaotic",
      "Sonic"
    ],
    "components": "V",
    "range": "40 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/wordOfChaos.htm"
  },
  {
    "name": "Blasphemy",
    "level": { "cleric": "7" },
    "school": "Evocation",
    "descriptor": [
      "Evil",
      "Sonic"
    ],
    "components": "V",
    "range": "40 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/blasphemy.htm"
  },
  {
    "name": "Holy Word",
    "level": { "cleric": "7" },
    "school": "Evocation",
    "descriptor": [
      "Good",
      "Sonic"
    ],
    "components": "V",
    "range": "40 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/holyWord.htm"
  },
  {
    "name": "Dictum",
    "level": { "cleric": "7" },
    "school": "Evocation",
    "descriptor": [
      "Lawful",
      "Sonic"
    ],
    "components": "V",
    "range": "40 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": [
      "None",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/dictum.htm"
  },
  {
    "name": "Telekinesis",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": [
      "Instantaneous",
      "Concentration"
    ],
    "aiming": "Target",
    "save": [
      "None",
      "Will"
    ],
    "sr": "Yes",
    "url": "/srd/spells/telekinesis.htm"
  },
  {
    "name": "Prismatic Spray",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Evocation",
    "components": [
      "V",
      "S"
    ],
    "range": "60 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/prismaticSpray.htm"
  },
  {
    "name": "Wish",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Universal",
    "components": [
      "V",
      "XP"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": [
      "Area",
      "Effect",
      "Target"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/wish.htm"
  },
  {
    "name": "Forbiddance",
    "level": { "cleric": "6" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Permanent",
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/forbiddance.htm"
  },
  {
    "name": "Storm of Vengeance",
    "level": {
      "cleric": "9",
      "druid": "9"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": [
      "Concentration",
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/stormOfVengeance.htm"
  },
  {
    "name": "Trap the Soul",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Conjuration",
    "subschool": "Summoning",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Close",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/trapTheSoul.htm"
  },
  {
    "name": "Explosive Runes",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "descriptor": "Force",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/explosiveRunes.htm"
  },
  {
    "name": "Cloak of Chaos",
    "level": { "cleric": "8" },
    "school": "Abjuration",
    "descriptor": "Chaotic",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "20 ft.",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Target",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/cloakOfChaos.htm"
  },
  {
    "name": "Unholy Aura",
    "level": { "cleric": "8" },
    "school": "Abjuration",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "20 ft.",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Target",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/unholyAura.htm"
  },
  {
    "name": "Holy Aura",
    "level": { "cleric": "8" },
    "school": "Abjuration",
    "descriptor": "Good",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "20 ft.",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Target",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/holyAura.htm"
  },
  {
    "name": "Shield of Law",
    "level": { "cleric": "8" },
    "school": "Abjuration",
    "descriptor": "Lawful",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "20 ft.",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Target",
      "Burst"
    ],
    "save": "None",
    "sr": "Yes",
    "url": "/srd/spells/shieldOfLaw.htm"
  },
  {
    "name": "Spike Stones",
    "level": { "druid": "4" },
    "school": "Transmutation",
    "descriptor": "Earth",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Area",
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/spikeStones.htm"
  },
  {
    "name": "Spike Growth",
    "level": {
      "druid": "3",
      "ranger": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Area",
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/spikeGrowth.htm"
  },
  {
    "name": "Sunburst",
    "level": {
      "druid": "8",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Evocation",
    "descriptor": "Light",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/sunburst.htm"
  },
  {
    "name": "Cone of Cold",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Evocation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "60 ft.",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/coneOfCold.htm"
  },
  {
    "name": "Burning Hands",
    "level": {
      "adept": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/burningHands.htm"
  },
  {
    "name": "Flame Strike",
    "level": {
      "cleric": "5",
      "druid": "4"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cylinder"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/flameStrike.htm"
  },
  {
    "name": "Freezing Sphere",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Evocation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": [
      "Instantaneous",
      "Rounds"
    ],
    "aiming": [
      "Area",
      "Effect",
      "Target"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/freezingSphere.htm"
  },
  {
    "name": "Lightning Bolt",
    "level": {
      "adept": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Evocation",
    "descriptor": "Electricity",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Line"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/lightningBolt.htm"
  },
  {
    "name": "Sunbeam",
    "level": { "druid": "7" },
    "school": "Evocation",
    "descriptor": "Light",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "60 ft.",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Line"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/sunbeam.htm"
  },
  {
    "name": "Fire Storm",
    "level": {
      "cleric": "8",
      "druid": "7"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Shapeable"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/fireStorm.htm"
  },
  {
    "name": "Fireball",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/fireball.htm"
  },
  {
    "name": "Delayed Blast Fireball",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Long",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/delayedBlastFireball.htm"
  },
  {
    "name": "Blade Barrier",
    "level": { "cleric": "6" },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/bladeBarrier.htm"
  },
  {
    "name": "Whirlwind",
    "level": { "druid": "8" },
    "school": "Evocation",
    "descriptor": "Air",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Long",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Effect",
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/whirlwind.htm"
  },
  {
    "name": "Call Lightning Storm",
    "level": { "druid": "5" },
    "school": "Evocation",
    "descriptor": "Electricity",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Line"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/callLightningStorm.htm"
  },
  {
    "name": "Call Lightning",
    "level": { "druid": "3" },
    "school": "Evocation",
    "descriptor": "Electricity",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Line"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/callLightning.htm"
  },
  {
    "name": "Wall of Ice",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Evocation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": [
      "Effect",
      "Sphere"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/wallOfIce.htm"
  },
  {
    "name": "Resilient Sphere",
    "level": {
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Sphere"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/resilientSphere.htm"
  },
  {
    "name": "Telekinetic Sphere",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Evocation",
    "descriptor": "Force",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Sphere"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/telekineticSphere.htm"
  },
  {
    "name": "Flaming Sphere",
    "level": {
      "druid": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Evocation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Effect",
      "Sphere"
    ],
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/flamingSphere.htm"
  },
  {
    "name": "Chain Lightning",
    "level": {
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Evocation",
    "descriptor": "Electricity",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Long",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/chainLightning.htm"
  },
  {
    "name": "Fire Trap",
    "level": {
      "druid": "2",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Abjuration",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Reflex",
    "sr": "Yes",
    "url": "/srd/spells/fireTrap.htm"
  },
  {
    "name": "Miracle",
    "level": { "cleric": "9" },
    "school": "Evocation",
    "descriptor": "Special",
    "components": [
      "V",
      "S",
      "XP"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": "Special",
    "save": "Special",
    "sr": "Yes",
    "url": "/srd/spells/miracle.htm"
  },
  {
    "name": "Bane",
    "level": { "cleric": "1" },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "50 ft.",
    "duration": "Minutes",
    "aiming": "Area",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/bane.htm"
  },
  {
    "name": "Hypnotism",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Area",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/hypnotism.htm"
  },
  {
    "name": "Lullaby",
    "level": { "bard": "0" },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Concentration",
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/lullaby.htm"
  },
  {
    "name": "Undeath to Death",
    "level": {
      "cleric": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Necromancy",
    "descriptor": "Death",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/undeathToDeath.htm"
  },
  {
    "name": "Chaos Hammer",
    "level": { "chaos": "4" },
    "school": "Evocation",
    "descriptor": "Chaotic",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Instantaneous",
      "Rounds"
    ],
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/chaosHammer.htm"
  },
  {
    "name": "Holy Smite",
    "level": { "good": "4" },
    "school": "Evocation",
    "descriptor": "Good",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Instantaneous",
      "Rounds"
    ],
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/holySmite.htm"
  },
  {
    "name": "Order's Wrath",
    "level": { "law": "4" },
    "school": "Evocation",
    "descriptor": "Lawful",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Instantaneous",
      "Rounds"
    ],
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/ordersWrath.htm"
  },
  {
    "name": "Deep Slumber",
    "level": {
      "assassin": "3",
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/deepSlumber.htm"
  },
  {
    "name": "Sleep",
    "level": {
      "adept": "1",
      "assassin": "1",
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/sleep.htm"
  },
  {
    "name": "Color Spray",
    "level": {
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Illusion",
    "subschool": "Pattern",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/colorSpray.htm"
  },
  {
    "name": "Crushing Despair",
    "level": {
      "bard": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "30 ft.",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/crushingDespair.htm"
  },
  {
    "name": "Fear",
    "level": {
      "bard": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Necromancy",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "30 ft.",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Cone",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/fear.htm"
  },
  {
    "name": "Zone of Truth",
    "level": {
      "cleric": "2",
      "paladin": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/zoneOfTruth.htm"
  },
  {
    "name": "Invisibility Sphere",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/invisibilitySphere.htm"
  },
  {
    "name": "Repulsion",
    "level": {
      "cleric": "7",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Special",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Emanation"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/repulsion.htm"
  },
  {
    "name": "Calm Emotions",
    "level": {
      "bard": "2",
      "cleric": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Concentration",
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/calmEmotions.htm"
  },
  {
    "name": "Unholy Blight",
    "level": { "evil": "4" },
    "school": "Evocation",
    "descriptor": "Evil",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Instantaneous",
      "Rounds"
    ],
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/unholyBlight.htm"
  },
  {
    "name": "Song of Discord",
    "level": { "bard": "5" },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": [
      "Mind-Affecting",
      "Sonic"
    ],
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Area",
      "Spread"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/songOfDiscord.htm"
  },
  {
    "name": "Shades",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shades.htm"
  },
  {
    "name": "Shadow Conjuration",
    "level": {
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shadowConjuration.htm"
  },
  {
    "name": "Shadow Conjuration, Greater",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shadowConjurationGreater.htm"
  },
  {
    "name": "Shadow Evocation",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shadowEvocation.htm"
  },
  {
    "name": "Shadow Evocation, Greater",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Special",
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shadowEvocationGreater.htm"
  },
  {
    "name": "Scrying, Greater",
    "level": {
      "bard": "6",
      "cleric": "7",
      "druid": "7",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Divination",
    "subschool": "Scrying",
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Hours",
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/scryingGreater.htm"
  },
  {
    "name": "Scrying",
    "level": {
      "bard": "3",
      "cleric": "5",
      "druid": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Divination",
    "subschool": "Scrying",
    "components": [
      "V",
      "S",
      "M",
      "DF",
      "F"
    ],
    "range": "Special",
    "duration": "Minutes",
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/scrying.htm"
  },
  {
    "name": "Symbol of Persuasion",
    "level": {
      "cleric": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Enchantment",
    "subschool": "Charm",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Permanent",
      "Minutes"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfPersuasion.htm"
  },
  {
    "name": "Symbol of Insanity",
    "level": {
      "cleric": "8",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Permanent",
      "Minutes"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfInsanity.htm"
  },
  {
    "name": "Symbol of Sleep",
    "level": {
      "cleric": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Permanent",
      "Minutes"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfSleep.htm"
  },
  {
    "name": "Symbol of Fear",
    "level": {
      "cleric": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Necromancy",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Permanent",
      "Minutes",
      "Rounds"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfFear.htm"
  },
  {
    "name": "Symbol of Stunning",
    "level": {
      "cleric": "7",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Special",
    "duration": [
      "Permanent",
      "Rounds"
    ],
    "aiming": "Effect",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/symbolOfStunning.htm"
  },
  {
    "name": "Hypnotic Pattern",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Pattern",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": [
      "Concentration",
      "Rounds"
    ],
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/hypnoticPattern.htm"
  },
  {
    "name": "Rainbow Pattern",
    "level": {
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Illusion",
    "subschool": "Pattern",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Medium",
    "duration": [
      "Concentration",
      "Rounds",
      "Dismissible"
    ],
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/rainbowPattern.htm"
  },
  {
    "name": "Mind Fog",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Minutes"
    ],
    "aiming": [
      "Effect",
      "Spread"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/mindFog.htm"
  },
  {
    "name": "Animal Trance",
    "level": {
      "adept": "2",
      "bard": "2",
      "druid": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": [
      "Mind-Affecting",
      "Sonic"
    ],
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Concentration",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/animalTrance.htm"
  },
  {
    "name": "Veil",
    "level": {
      "bard": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Long",
    "duration": [
      "Concentration",
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/veil.htm"
  },
  {
    "name": "Charm Monster, Mass",
    "level": {
      "bard": "6",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Charm",
    "components": "V",
    "range": "Close",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/charmMonsterMass.htm"
  },
  {
    "name": "Command Plants",
    "level": {
      "druid": "4",
      "ranger": "3"
    },
    "school": "Transmutation",
    "components": "V",
    "range": "Close",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/commandPlants.htm"
  },
  {
    "name": "Charm Monster",
    "level": {
      "bard": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Enchantment",
    "subschool": "Charm",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/charmMonster.htm"
  },
  {
    "name": "Dominate Monster",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/dominateMonster.htm"
  },
  {
    "name": "Dominate Person",
    "level": {
      "bard": "4",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/dominatePerson.htm"
  },
  {
    "name": "Command Undead",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/commandUndead.htm"
  },
  {
    "name": "Shrink Item",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shrinkItem.htm"
  },
  {
    "name": "Gentle Repose",
    "level": {
      "cleric": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Days",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/gentleRepose.htm"
  },
  {
    "name": "Geas, Lesser",
    "level": {
      "bard": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "components": "V",
    "range": "Close",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/geasLesser.htm"
  },
  {
    "name": "Illusory Script",
    "level": {
      "assassin": "2",
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Illusion",
    "subschool": "Phantasm",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Days",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/illusoryScript.htm"
  },
  {
    "name": "Binding",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Days",
      "Permanent",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/binding.htm"
  },
  {
    "name": "Suggestion",
    "level": {
      "bard": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "M"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/suggestion.htm"
  },
  {
    "name": "Charm Animal",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Enchantment",
    "subschool": "Charm",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/charmAnimal.htm"
  },
  {
    "name": "Charm Person",
    "level": {
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Enchantment",
    "subschool": "Charm",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/charmPerson.htm"
  },
  {
    "name": "Mind Blank",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/mindBlank.htm"
  },
  {
    "name": "Undetectable Alignment",
    "level": {
      "assassin": "2",
      "bard": "1",
      "cleric": "2",
      "paladin": "2"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/undetectableAlignment.htm"
  },
  {
    "name": "Magic Fang, Greater",
    "level": {
      "druid": "3",
      "ranger": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicFangGreater.htm"
  },
  {
    "name": "Magic Weapon, Greater",
    "level": {
      "cleric": "4",
      "paladin": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicWeaponGreater.htm"
  },
  {
    "name": "Suggestion, Mass",
    "level": {
      "bard": "5",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "components": [
      "V",
      "M"
    ],
    "range": "Medium",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/suggestionMass.htm"
  },
  {
    "name": "Enthrall",
    "level": {
      "bard": "2",
      "cleric": "2"
    },
    "school": "Enchantment",
    "subschool": "Charm",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/enthrall.htm"
  },
  {
    "name": "Magic Jar",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Medium",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicJar.htm"
  },
  {
    "name": "Overland Flight",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Personal",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/overlandFlight.htm"
  },
  {
    "name": "Endure Elements",
    "level": {
      "adept": "1",
      "cleric": "1",
      "druid": "1",
      "paladin": "1",
      "ranger": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/endureElements.htm"
  },
  {
    "name": "Status",
    "level": { "cleric": "2" },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/status.htm"
  },
  {
    "name": "Magic Vestment",
    "level": { "cleric": "3" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicVestment.htm"
  },
  {
    "name": "Protection from Arrows",
    "level": {
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/protectionFromArrows.htm"
  },
  {
    "name": "Nondetection",
    "level": {
      "assassin": "3",
      "ranger": "4",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/nondetection.htm"
  },
  {
    "name": "Darkvision",
    "level": {
      "ranger": "3",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/darkvision.htm"
  },
  {
    "name": "Water Breathing",
    "level": {
      "cleric": "3",
      "druid": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Hours",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/waterBreathing.htm"
  },
  {
    "name": "Sculpt Sound",
    "level": { "bard": "3" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/sculptSound.htm"
  },
  {
    "name": "Shield Other",
    "level": {
      "cleric": "2",
      "paladin": "2"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shieldOther.htm"
  },
  {
    "name": "Sympathy",
    "level": {
      "druid": "9",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/sympathy.htm"
  },
  {
    "name": "Antipathy",
    "level": {
      "druid": "9",
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/antipathy.htm"
  },
  {
    "name": "Shadow Walk",
    "level": {
      "bard": "5",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Illusion",
    "subschool": "Shadow",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shadowWalk.htm"
  },
  {
    "name": "Pass without Trace",
    "level": {
      "assassin": "2",
      "druid": "1",
      "ranger": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/passWithoutTrace.htm"
  },
  {
    "name": "Statue",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/statue.htm"
  },
  {
    "name": "Obscure Object",
    "level": {
      "bard": "1",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Hours",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/obscureObject.htm"
  },
  {
    "name": "Mending",
    "level": {
      "adept": "0",
      "bard": "0",
      "cleric": "0",
      "druid": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "10 ft.",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/mending.htm"
  },
  {
    "name": "Purify Food and Drink",
    "level": {
      "adept": "0",
      "cleric": "0",
      "druid": "0"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "10 ft.",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/purifyFoodAndDrink.htm"
  },
  {
    "name": "Cure Critical Wounds, Mass",
    "level": {
      "cleric": "8",
      "druid": "9"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureCriticalWoundsMass.htm"
  },
  {
    "name": "Cure Light Wounds, Mass",
    "level": {
      "bard": "5",
      "cleric": "5",
      "druid": "6"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureLightWoundsMass.htm"
  },
  {
    "name": "Cure Moderate Wounds, Mass",
    "level": {
      "bard": "6",
      "cleric": "6",
      "druid": "7"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureModerateWoundsMass.htm"
  },
  {
    "name": "Cure Serious Wounds, Mass",
    "level": {
      "cleric": "7",
      "druid": "8"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureSeriousWoundsMass.htm"
  },
  {
    "name": "Heal, Mass",
    "level": { "cleric": "9" },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/healMass.htm"
  },
  {
    "name": "Remove Paralysis",
    "level": {
      "cleric": "2",
      "paladin": "2"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/removeParalysis.htm"
  },
  {
    "name": "Freedom",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/freedom.htm"
  },
  {
    "name": "Inflict Critical Wounds, Mass",
    "level": { "cleric": "8" },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictCriticalWoundsMass.htm"
  },
  {
    "name": "Inflict Light Wounds, Mass",
    "level": { "cleric": "5" },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictLightWoundsMass.htm"
  },
  {
    "name": "Inflict Moderate Wounds, Mass",
    "level": { "cleric": "6" },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictModerateWoundsMass.htm"
  },
  {
    "name": "Inflict Serious Wounds, Mass",
    "level": { "cleric": "7" },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictSeriousWoundsMass.htm"
  },
  {
    "name": "Make Whole",
    "level": { "cleric": "2" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/makeWhole.htm"
  },
  {
    "name": "Warp Wood",
    "level": { "druid": "2" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/warpWood.htm"
  },
  {
    "name": "Dismissal",
    "level": {
      "cleric": "4",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/dismissal.htm"
  },
  {
    "name": "Banishment",
    "level": {
      "cleric": "6",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/banishment.htm"
  },
  {
    "name": "Open/Close",
    "level": {
      "bard": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Close",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/openClose.htm"
  },
  {
    "name": "Insanity",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/insanity.htm"
  },
  {
    "name": "Feeblemind",
    "level": {
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/feeblemind.htm"
  },
  {
    "name": "Nightmare",
    "level": {
      "bard": "5",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Illusion",
    "subschool": "Phantasm",
    "descriptor": [
      "Evil",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S"
    ],
    "range": "Special",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/nightmare.htm"
  },
  {
    "name": "Teleport Object",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": "V",
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/teleportObject.htm"
  },
  {
    "name": "Cure Critical Wounds",
    "level": {
      "adept": "4",
      "bard": "4",
      "blackguard": "4",
      "cleric": "4",
      "druid": "5"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureCriticalWounds.htm"
  },
  {
    "name": "Cure Light Wounds",
    "level": {
      "adept": "1",
      "bard": "1",
      "blackguard": "1",
      "cleric": "1",
      "druid": "1",
      "paladin": "1",
      "ranger": "2"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureLightWounds.htm"
  },
  {
    "name": "Cure Minor Wounds",
    "level": {
      "adept": "0",
      "cleric": "0",
      "druid": "0"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureMinorWounds.htm"
  },
  {
    "name": "Cure Moderate Wounds",
    "level": {
      "adept": "2",
      "bard": "2",
      "blackguard": "2",
      "cleric": "2",
      "druid": "3",
      "paladin": "3",
      "ranger": "3"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureModerateWounds.htm"
  },
  {
    "name": "Cure Serious Wounds",
    "level": {
      "adept": "3",
      "bard": "3",
      "blackguard": "3",
      "cleric": "3",
      "druid": "4",
      "paladin": "4",
      "ranger": "4"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/cureSeriousWounds.htm"
  },
  {
    "name": "Heal",
    "level": {
      "adept": "5",
      "cleric": "6",
      "druid": "7"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/heal.htm"
  },
  {
    "name": "Heal Mount",
    "level": { "paladin": "3" },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/healMount.htm"
  },
  {
    "name": "Restoration, Lesser",
    "level": {
      "cleric": "2",
      "druid": "2",
      "paladin": "1"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/restorationLesser.htm"
  },
  {
    "name": "Imprisonment",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/imprisonment.htm"
  },
  {
    "name": "Remove Curse",
    "level": {
      "adept": "3",
      "bard": "3",
      "cleric": "3",
      "paladin": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/removeCurse.htm"
  },
  {
    "name": "Harm",
    "level": { "cleric": "6" },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/harm.htm"
  },
  {
    "name": "Inflict Critical Wounds",
    "level": {
      "blackguard": "4",
      "cleric": "4"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictCriticalWounds.htm"
  },
  {
    "name": "Inflict Light Wounds",
    "level": {
      "blackguard": "1",
      "cleric": "1"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictLightWounds.htm"
  },
  {
    "name": "Inflict Minor Wounds",
    "level": { "cleric": "0" },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictMinorWounds.htm"
  },
  {
    "name": "Inflict Moderate Wounds",
    "level": {
      "blackguard": "2",
      "cleric": "2"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictModerateWounds.htm"
  },
  {
    "name": "Inflict Serious Wounds",
    "level": {
      "blackguard": "3",
      "cleric": "3"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/inflictSeriousWounds.htm"
  },
  {
    "name": "Wood Shape",
    "level": { "druid": "2" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/woodShape.htm"
  },
  {
    "name": "Awaken",
    "level": { "druid": "5" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF",
      "XP"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/awaken.htm"
  },
  {
    "name": "Plane Shift",
    "level": {
      "cleric": "5",
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Conjuration",
    "subschool": "Teleportation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/planeShift.htm"
  },
  {
    "name": "Curse Water",
    "level": { "cleric": "1" },
    "school": "Necromancy",
    "descriptor": "Evil",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/curseWater.htm"
  },
  {
    "name": "Bless Water",
    "level": {
      "cleric": "1",
      "paladin": "1"
    },
    "school": "Transmutation",
    "descriptor": "Good",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/blessWater.htm"
  },
  {
    "name": "Restoration",
    "level": {
      "adept": "4",
      "cleric": "4",
      "paladin": "4"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/restoration.htm"
  },
  {
    "name": "Restoration, Greater",
    "level": { "cleric": "7" },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "XP"
    ],
    "range": "Touch",
    "duration": "Instantaneous",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/restorationGreater.htm"
  },
  {
    "name": "Death Knell",
    "level": {
      "blackguard": "2",
      "cleric": "2"
    },
    "school": "Necromancy",
    "descriptor": [
      "Death",
      "Evil"
    ],
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Instantaneous",
      "Minutes"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/deathKnell.htm"
  },
  {
    "name": "Calm Animals",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/calmAnimals.htm"
  },
  {
    "name": "Remove Fear",
    "level": {
      "bard": "1",
      "cleric": "1"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/removeFear.htm"
  },
  {
    "name": "Keen Edge",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/keenEdge.htm"
  },
  {
    "name": "Bear's Endurance, Mass",
    "level": {
      "cleric": "6",
      "druid": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/bearsEnduranceMass.htm"
  },
  {
    "name": "Control Undead",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/controlUndead.htm"
  },
  {
    "name": "Cat's Grace, Mass",
    "level": {
      "bard": "6",
      "druid": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/catsGraceMass.htm"
  },
  {
    "name": "Bull's Strength, Mass",
    "level": {
      "cleric": "6",
      "druid": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/bullsStrengthMass.htm"
  },
  {
    "name": "Eagle's Splendor, Mass",
    "level": {
      "bard": "6",
      "cleric": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/eaglesSplendorMass.htm"
  },
  {
    "name": "Fox's Cunning, Mass",
    "level": {
      "bard": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/foxsCunningMass.htm"
  },
  {
    "name": "Owl's Wisdom, Mass",
    "level": {
      "cleric": "6",
      "druid": "6",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Close",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/owlsWisdomMass.htm"
  },
  {
    "name": "Good Hope",
    "level": { "bard": "3" },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/goodHope.htm"
  },
  {
    "name": "Doom",
    "level": {
      "blackguard": "1",
      "cleric": "1"
    },
    "school": "Necromancy",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Medium",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/doom.htm"
  },
  {
    "name": "Heroism",
    "level": {
      "bard": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/heroism.htm"
  },
  {
    "name": "Heroism, Greater",
    "level": {
      "bard": "5",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/heroismGreater.htm"
  },
  {
    "name": "Guidance",
    "level": {
      "adept": "0",
      "cleric": "0",
      "druid": "0"
    },
    "school": "Divination",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/guidance.htm"
  },
  {
    "name": "Spell Immunity",
    "level": { "cleric": "4" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/spellImmunity.htm"
  },
  {
    "name": "Spell Immunity, Greater",
    "level": { "cleric": "8" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/spellImmunityGreater.htm"
  },
  {
    "name": "Spell Resistance",
    "level": { "cleric": "5" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/spellResistance.htm"
  },
  {
    "name": "Death Ward",
    "level": {
      "cleric": "4",
      "druid": "5",
      "paladin": "4"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/deathWard.htm"
  },
  {
    "name": "Align Weapon",
    "level": { "cleric": "2" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/alignWeapon.htm"
  },
  {
    "name": "Bear's Endurance",
    "level": {
      "adept": "2",
      "blackguard": "2",
      "cleric": "2",
      "druid": "2",
      "paladin": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/bearsEndurance.htm"
  },
  {
    "name": "Magic Fang",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicFang.htm"
  },
  {
    "name": "Magic Stone",
    "level": {
      "cleric": "1",
      "druid": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicStone.htm"
  },
  {
    "name": "Magic Weapon",
    "level": {
      "blackguard": "1",
      "cleric": "1",
      "paladin": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicWeapon.htm"
  },
  {
    "name": "Shillelagh",
    "level": { "druid": "1" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shillelagh.htm"
  },
  {
    "name": "Fly",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/fly.htm"
  },
  {
    "name": "Shield of Faith",
    "level": { "cleric": "1" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/shieldOfFaith.htm"
  },
  {
    "name": "Stoneskin",
    "level": {
      "adept": "4",
      "druid": "5",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/stoneskin.htm"
  },
  {
    "name": "True Seeing",
    "level": {
      "adept": "5",
      "cleric": "5",
      "sorcerer": "6",
      "wizard": "6"
    },
    "school": "Divination",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/trueSeeing.htm"
  },
  {
    "name": "Cat's Grace",
    "level": {
      "adept": "2",
      "assassin": "2",
      "bard": "2",
      "druid": "2",
      "ranger": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/catsGrace.htm"
  },
  {
    "name": "Spider Climb",
    "level": {
      "assassin": "2",
      "druid": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/spiderClimb.htm"
  },
  {
    "name": "Neutralize Poison",
    "level": {
      "adept": "3",
      "bard": "4",
      "cleric": "4",
      "druid": "3",
      "paladin": "4",
      "ranger": "3"
    },
    "school": "Conjuration",
    "subschool": "Healing",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/neutralizePoison.htm"
  },
  {
    "name": "Freedom of Movement",
    "level": {
      "assassin": "4",
      "bard": "4",
      "blackguard": "4",
      "cleric": "4",
      "druid": "4",
      "ranger": "4"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/freedomOfMovement.htm"
  },
  {
    "name": "Resistance",
    "level": {
      "bard": "0",
      "cleric": "0",
      "druid": "0",
      "paladin": "1",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/resistance.htm"
  },
  {
    "name": "Bull's Strength",
    "level": {
      "adept": "2",
      "blackguard": "2",
      "cleric": "2",
      "druid": "2",
      "paladin": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/bullsStrength.htm"
  },
  {
    "name": "Eagle's Splendor",
    "level": {
      "bard": "2",
      "blackguard": "2",
      "cleric": "2",
      "paladin": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/eaglesSplendor.htm"
  },
  {
    "name": "Fox's Cunning",
    "level": {
      "assassin": "2",
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/foxsCunning.htm"
  },
  {
    "name": "Owl's Wisdom",
    "level": {
      "cleric": "2",
      "druid": "2",
      "paladin": "2",
      "ranger": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/owlsWisdom.htm"
  },
  {
    "name": "Protection from Spells",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "M",
      "F"
    ],
    "range": "Touch",
    "duration": "Minutes",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/protectionFromSpells.htm"
  },
  {
    "name": "Invisibility, Mass",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Long",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/invisibilityMass.htm"
  },
  {
    "name": "Hide from Animals",
    "level": {
      "druid": "1",
      "ranger": "1"
    },
    "school": "Abjuration",
    "components": [
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/hideFromAnimals.htm"
  },
  {
    "name": "Blur",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": "V",
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/blur.htm"
  },
  {
    "name": "Hide from Undead",
    "level": { "cleric": "1" },
    "school": "Abjuration",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/hideFromUndead.htm"
  },
  {
    "name": "Water Walk",
    "level": {
      "cleric": "3",
      "ranger": "3"
    },
    "school": "Transmutation",
    "descriptor": "Water",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/waterWalk.htm"
  },
  {
    "name": "Jump",
    "level": {
      "assassin": "1",
      "druid": "1",
      "ranger": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/jump.htm"
  },
  {
    "name": "Invisibility",
    "level": {
      "adept": "2",
      "assassin": "2",
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Minutes",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/invisibility.htm"
  },
  {
    "name": "Modify Memory",
    "level": {
      "assassin": "4",
      "bard": "4"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/modifyMemory.htm"
  },
  {
    "name": "Magic Mouth",
    "level": {
      "bard": "1",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/magicMouth.htm"
  },
  {
    "name": "Bestow Curse",
    "level": {
      "adept": "3",
      "cleric": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Permanent",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/bestowCurse.htm"
  },
  {
    "name": "Imbue with Spell Ability",
    "level": { "cleric": "4" },
    "school": "Evocation",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/imbueWithSpellAbility.htm"
  },
  {
    "name": "Spellstaff",
    "level": { "druid": "6" },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "F"
    ],
    "range": "Touch",
    "duration": [
      "Permanent",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/spellstaff.htm"
  },
  {
    "name": "Command",
    "level": {
      "adept": "1",
      "cleric": "1"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": [
      "Language-Dependent",
      "Mind-Affecting"
    ],
    "components": "V",
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/command.htm"
  },
  {
    "name": "Command, Greater",
    "level": { "cleric": "5" },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "components": "V",
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/commandGreater.htm"
  },
  {
    "name": "Feather Fall",
    "level": {
      "assassin": "1",
      "bard": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Transmutation",
    "components": "V",
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/featherFall.htm"
  },
  {
    "name": "Cause Fear",
    "level": {
      "adept": "1",
      "bard": "1",
      "blackguard": "1",
      "cleric": "1",
      "sorcerer": "1",
      "wizard": "1"
    },
    "school": "Necromancy",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/causeFear.htm"
  },
  {
    "name": "Dominate Animal",
    "level": { "druid": "3" },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/dominateAnimal.htm"
  },
  {
    "name": "Chill Metal",
    "level": { "druid": "2" },
    "school": "Transmutation",
    "descriptor": "Cold",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/chillMetal.htm"
  },
  {
    "name": "Heat Metal",
    "level": { "druid": "2" },
    "school": "Transmutation",
    "descriptor": "Fire",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/heatMetal.htm"
  },
  {
    "name": "Confusion, Lesser",
    "level": { "bard": "1" },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "components": [
      "V",
      "S",
      "DF"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/confusionLesser.htm"
  },
  {
    "name": "Daze",
    "level": {
      "bard": "0",
      "sorcerer": "0",
      "wizard": "0"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/daze.htm"
  },
  {
    "name": "Hideous Laughter",
    "level": {
      "bard": "1",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/hideousLaughter.htm"
  },
  {
    "name": "Slow",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Transmutation",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Close",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/slow.htm"
  },
  {
    "name": "Scare",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Necromancy",
    "descriptor": [
      "Fear",
      "Mind-Affecting"
    ],
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/scare.htm"
  },
  {
    "name": "Daze Monster",
    "level": {
      "bard": "2",
      "sorcerer": "2",
      "wizard": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/dazeMonster.htm"
  },
  {
    "name": "Halt Undead",
    "level": {
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Necromancy",
    "components": [
      "V",
      "S",
      "M"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/haltUndead.htm"
  },
  {
    "name": "Demand",
    "level": {
      "sorcerer": "8",
      "wizard": "8"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Special",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/demand.htm"
  },
  {
    "name": "Disrupting Weapon",
    "level": { "cleric": "5" },
    "school": "Transmutation",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": "Rounds",
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/disruptingWeapon.htm"
  },
  {
    "name": "Hold Animal",
    "level": {
      "druid": "2",
      "ranger": "2"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/holdAnimal.htm"
  },
  {
    "name": "Hold Person",
    "level": {
      "bard": "2",
      "cleric": "2",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/holdPerson.htm"
  },
  {
    "name": "Hold Person, Mass",
    "level": {
      "sorcerer": "7",
      "wizard": "7"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "components": [
      "V",
      "S",
      "F",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/holdPersonMass.htm"
  },
  {
    "name": "Hold Monster",
    "level": {
      "bard": "4",
      "sorcerer": "5",
      "wizard": "5"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/holdMonster.htm"
  },
  {
    "name": "Hold Monster, Mass",
    "level": {
      "sorcerer": "9",
      "wizard": "9"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/holdMonsterMass.htm"
  },
  {
    "name": "Displacement",
    "level": {
      "bard": "3",
      "sorcerer": "3",
      "wizard": "3"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "M"
    ],
    "range": "Touch",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/displacement.htm"
  },
  {
    "name": "Invisibility, Greater",
    "level": {
      "assassin": "4",
      "bard": "4",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Illusion",
    "subschool": "Glamer",
    "components": [
      "V",
      "S"
    ],
    "range": "Touch",
    "duration": [
      "Rounds",
      "Dismissible"
    ],
    "aiming": "Target",
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/invisibilityGreater.htm"
  },
  {
    "name": "Confusion",
    "level": {
      "bard": "3",
      "sorcerer": "4",
      "wizard": "4"
    },
    "school": "Enchantment",
    "subschool": "Compulsion",
    "descriptor": "Mind-Affecting",
    "components": [
      "V",
      "S",
      "M",
      "DF"
    ],
    "range": "Medium",
    "duration": "Rounds",
    "aiming": [
      "Target",
      "Burst"
    ],
    "save": "Will",
    "sr": "Yes",
    "url": "/srd/spells/confusion.htm"
  }
];
module.exports = spells;
