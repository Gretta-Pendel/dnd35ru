const fs = require("fs");
const readline = require('readline');
const spells = require("./js/spells.js");
const spelldata = require("./js/spell_data.js");
const lists = require("./js/spell-lists.js")
const dictionaries = require("./js/dictionaries.js");
const tables = require("./js/tables.js");
const skills = require("./js/skills.js");
const feats = require("./js/feats.js");
const magic = require("./js/magic.js");
const stream = require('stream');

let work_list = [];

function getList(level) {
    for(b in level) {
        let name = spells.find(v => v.name.toUpperCase() === level[b][0].toUpperCase())
        //work_list.push([name.id, level[b][0], name.text, level[b][1]]);
        //work_list.push(name.id);
        if(!name) {
            console.log("----> " + level[b][0])
            work_list.push(level[b][0]);
        } else {
            let text = name.text && name.text.length ? "" : " <------"
            console.log(name.id + text)
            work_list.push(name.id);
        }
    }
}

function capitalize(str) {
    return str ? str.substring(0,1).toUpperCase() + str.substring(1) : ""
}

//getList(lists.wiz[1])
//console.log(work_list)

function makeSpells() {
    for(f in spells) {
        let name = spells[f].id.replace(/-/g,"_")
        let school = magic.schools[spells[f].school] ? magic.schools[spells[f].school][1] : magic.schools[spells[f].school]
        let subschool = magic.subschools[spells[f].subschool] ? " (" + magic.subschools[spells[f].subschool] + ")" : ""
        let descriptor = ""
        let level = ""
        let domen = ""
        if(Array.isArray(spells[f].descriptor)) {
            let descriptorArr = []
            for (var d in spells[f].descriptor) {
                let dd = magic.descriptors[spells[f].descriptor[d]] ? magic.descriptors[spells[f].descriptor[d]] : ""
                descriptorArr.push(dd)
            }
            descriptor = " [" + descriptorArr.join(", ") + "]"
        } else {
            let ddd = magic.descriptors[spells[f].descriptor] ? " [" + magic.descriptors[spells[f].descriptor] + "]" : ""
            descriptor = ddd
        }
        let levelArr = []
        if(spells[f].level) {
            for (var l in Object.keys(spells[f].level)) {
                let ll = dictionaries.classes[Object.keys(spells[f].level)[l]] ? capitalize(dictionaries.classes[Object.keys(spells[f].level)[l]][1]) : dictionaries.classes[Object.keys(spells[f].level)[l]]
                levelArr.push(ll + ": " + spells[f].level[Object.keys(spells[f].level)[l]])
            }
            level = levelArr.join(", ")
        }
        let domenArr = []
        if(spells[f].domen) {
            for (var d in Object.keys(spells[f].domen)) {
                let dd = magic.domens[Object.keys(spells[f].domen)[d]] ? capitalize(magic.domens[Object.keys(spells[f].domen)[d]]) : magic.domens[Object.keys(spells[f].domen)[d]]
                domenArr.push(dd + ": " + spells[f].domen[Object.keys(spells[f].domen)[d]])
            }
            domen = domenArr.join(", ")
        }
        let data = "let " + name + " = `\n" +                            "<h1>" + spells[f].name + " (" + spells[f].en + ")</h1>\n"
        data += school && (school.length || subschool.length || descriptor.length) ? "<div><b>Школа:</b> " + school + subschool + descriptor + "</div>\n" : "";
        data += level.length ?                                           "<div><b>Уровень:</b> " + level + "</div>\n" : "";
        data += domen.length ?                                           "<div><b>Домен:</b> " + domen + "</div>\n" : "";
        data += spells[f].components ?                                   "<div><b>Компоненты:</b> " + spells[f].components + "</div>\n" : "";
        data += spells[f].casting_time ?                                 "<div><b>Время Сотворения:</b> " + spells[f].casting_time + "</div>\n" : "";
        data += spells[f].range ?                                        "<div><b>Расстояние:</b> " + spells[f].range + "</div>\n" : "";
        data += spells[f].area ?                                         "<div><b>Область воздействия:</b> " + spells[f].area + "</div>\n" : "";
        data += spells[f].target_or_area ?                               "<div><b>Цель или область:</b> " + spells[f].target_or_area + "</div>\n" : "";
        data += spells[f].target_or_effect ?                             "<div><b>Цель или эффект:</b> " + spells[f].target_or_effect + "</div>\n" : "";
        data += spells[f].target_or_effect_or_area ?                     "<div><b>Цель или эффект или область:</b> " + spells[f].target_or_effect_or_area + "</div>\n" : "";
        data += spells[f].effect ?                                       "<div><b>Эффект:</b> " + spells[f].effect + "</div>\n" : "";
        data += spells[f].target ?                                       "<div><b>Цель:</b> " + spells[f].target + "</div>\n" : "";
        data += spells[f].duration ?                                     "<div><b>Длительность:</b> " + spells[f].duration + "</div>\n" : "";
        data += spells[f].savings ?                                      "<div><b>Спасброски:</b> " + spells[f].savings + "</div>\n" : "";
        data += spells[f].resistance ?                                   "<div><b>Сопротивляемость:</b> " + spells[f].resistance + "</div>\n" : "";
        data += spells[f].text ?                                         "<div><b>Кратко:</b> " + spells[f].text + "</div>\n" : "";
        data += "`";
        console.log(name)
        fs.writeFile('./js/spells/' + spells[f].id +'.js', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
}

const path = "./js/spells";
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

let files;
try {
    files = fs.readdirSync(path)
} catch (err) {
    return mkdir.mkdirsSync(path)
}

//for(f in files) {
let sss = [files[0], files[1], files[2], files[3]];
let print = [];

files.forEach(file => {
    let filePath = path + '/' + file;
    var lines = fs.readFileSync(filePath).toString().split("\n");
    spellText(file,lines);
});
for (let p in print) {
    console.log(p + ": " + print[p])
}

function spellText(file,arr) {
    let strings=[];
    arr.forEach(line => {
        if(line.indexOf('<b>') == -1 && line.indexOf('let ') == -1 && line.indexOf('<h1>') == -1 && line.length > 1) {
            strings.push(line);
        }
    })
    if (strings.length === 0) {
        let spellname = file.substring(0,file.length-3);
        let spellitem = spells.filter(item => item.id === spellname)[0];
        if(!spellitem) {
            console.log("error: " + spellname + " no spellitem");
            return;
        }
        let level = spellitem.level ? spellitem.level : "";
        let levelstr = "";
        let flag = false;
        for (var l in level) {
            if (level[l] < 4) {
                flag = true;
            }
            //levelstr += level[l];
        }
        if (flag) {
            print.push(file + " " + levelstr);
            //console.log(c + ": " + file + " " + levelstr);
        }
    }
}


// lines = [1,2,3]
// lines.push(4);
// lines.forEach(line => {
//     console.log("---> "+line);
// })


// --------------------------------------------------------------------------------------------------

// for(f in feats) {
//     let name = feats[f].id.replace(/-/g,"_")
//     let h2 = feats[f].type === "general" ? "Общий" : feats[f].type === "item-creation" ? "Создание Предмета" : feats[f].type === "metamagic" ? "Метамагия" : ""
//     h2 += Object.values(feats[f].options).indexOf("fighter-feat") > -1 ? ", Воинский" : ""
//     h2 += Object.values(feats[f].options).indexOf("multiple-new") > -1 ? ", Многоразовый" : ""
//     let data = "let " + name + " = `\n" +
//         "<h1>" + feats[f].name + " (" + feats[f].en + ")</h1>\n" +
//         "<h2>" + h2 + "</h2>\n`"
//     console.log(name)
//     fs.writeFile('./js/feats/' + feats[f].id+'.js', data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// }

// --------------------------------------------------------------------------------------------------
// for(f in skills) {
//     let name = skills[f].id.replace(/-/g,"_")
//     let ab = dictionaries.abilities[skills[f].ability] ? dictionaries.abilities[skills[f].ability][1] : dictionaries.abilities[skills[f].ability]
//     ab = capitalize(ab)
//     let h2 = skills[f].untrained ? "; Только тренировка" : ""
//     h2 += skills[f].ac_penalty > 0 ? "; Штраф за ношение доспеха" : ""
//     let clsArr = []
//     for (var c in skills[f].classes) {
//         let cl = dictionaries.classes[skills[f].classes[c]] ? dictionaries.classes[skills[f].classes[c]][1] : ""
//         clsArr.push(capitalize(cl))
//     }
//     let cls = clsArr.join(", ")
//     let data = "let " + name + " = `\n" +
//         "<h1>" + skills[f].name + " (" + skills[f].en + ")</h1>\n" +
//         "<h2>" + ab + h2 + "</h2>\n" +
//         "<p><b>" + cls + "</b></p>\n`"
//     console.log(name)
//     fs.writeFile('./js/skills__/'+skills[f].id+'.js', data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// }
// --------------------------------------------------------------------------------------------------
// let spell_list = ""
// for (let s in spelldata) {
//     let name = spelldata[s].name.toUpperCase()
//     let en = ""
//     for (let a in spells) {
//         if(spells[a].en) {
//             if (spells[a].en.toUpperCase() === name) {
//                 en = spells[a].en
//                 break
//             }
//         }
//     }
//     if (en !== "") spell_list += "\n" + en
//     else spell_list += "\n -----> " + name
// }
// fs.writeFile('spells-report.js',  spell_list, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });
// fs.writeFile('spells-report.js',  JSON.stringify(spell_list, null, 2), (err) => {
//     if (err) throw err;
//         console.log('The file has been saved!');
// });


// --------------------------------------------------------------------------------------------------
// fs.writeFile('work.js',  JSON.stringify(work_list, null, 2), (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

//for(s in spells) {
    //console.log(spells[s].id)
    // let data = "<!DOCTYPE html>\n" +  "<html lang=\"en\">\n" +  "<head>\n" +
    //     "    <meta charset=\"UTF-8\">\n" +
    //     "    <title>" + _skills[f].name + " < Глава 4: Умения</title>\n" + "\n" +
    //     "    <link href=\"../css/index.css\" type=\"text/css\" rel=\"stylesheet\">\n" +
    //     "</head>\n" +
    //     "<body class=\"frame\">\n" +  "\n" +
    //     "<h1>" + _skills[f].name + "  (" + _skills[f].en + ")</h1>\n" +
    //     "<h2>" + ab + h2 + "</h2>\n" + "<p><b>" + cls + "</b></p>\n" +
    //     "<p></p>\n" + "\n" + "<table class=\"odd\">\n" +
    //     "<tr><th></th><th></th></tr>\n" + "<tr><td></td><td></td></tr>\n" +
    //     "</table>\n" + "\n" + "</body>\n" + "</html>"


    // fs.writeFile('./skills/'+_skills[f].id+'.html', data, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });
//}



