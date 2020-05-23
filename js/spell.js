let s = window.location.search;
let p = s.substr(1).split("/");
let l = p.length;
let spell = _spells.find(o => o.id === p[0]);
let spellBox = document.getElementById("spell_by_id")
if (l === 1 && spell != null) {
    document.addEventListener('DOMContentLoaded', () => {
        let scriptFile = document.createElement('script');
        scriptFile.setAttribute("src", "js/spells/" + spell.id + ".js");
        document.head.insertAdjacentElement("beforeend",scriptFile);
    })
    window.addEventListener('load', () => {
        document.title = spell.name
        spellBox.innerHTML = eval(spell.id.replace(/-/g, '_'))
        //let tableName = document.createElement('h3')
        //tableName.innerText = "Таблица " + spell.id.replace("table_","").replace(/_/g, '-') + ": " +  spell.name
        //spellBox.insertAdjacentElement("afterbegin",tableName);
    })

}