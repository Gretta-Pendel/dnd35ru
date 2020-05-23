// if(window.frames.length > 0) {
//     for (var i = 0; i < document.querySelectorAll("iframe").length; i++) {
//         window.frames[i].onload = function() { this.frameElement.setAttribute("height",this.document.body.scrollHeight); };
//     }
// }

let tableBoxes = document.getElementsByClassName("insert-table")
let skillBoxes = document.getElementsByClassName("insert-skill")
let featBoxes = document.getElementsByClassName("insert-feat")

document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < tableBoxes.length; i++) {
        let scriptFile = document.createElement('script');
        scriptFile.setAttribute("src", "../js/tables/" + tableBoxes[i].id.replace(/_/g, '-') + ".js");
        document.head.insertAdjacentElement("beforeend",scriptFile);
    }
    for (i = 0; i < skillBoxes.length; i++) {
        let scriptFile = document.createElement('script');
        scriptFile.setAttribute("src", "js/skills/" + skillBoxes[i].id.replace(/_/g, '-') + ".js");
        document.head.insertAdjacentElement("beforeend",scriptFile);
    }
    for (i = 0; i < featBoxes.length; i++) {
        let scriptFile = document.createElement('script');
        scriptFile.setAttribute("src", "js/feats/" + featBoxes[i].id.replace(/_/g, '-') + ".js");
        document.head.insertAdjacentElement("beforeend",scriptFile);
    }
})

window.addEventListener('load', () => {
    let tableBox = document.getElementById("tables")
    for (i = 0; i < tableBoxes.length; i++) {
        let tableTitle = _tables.find(f => f.id === tableBoxes[i].id.replace(/_/g, '-'))
        // let tableDiv = document.createElement('div');
        // tableDiv.setAttribute("id", _tables[t].id)
        tableBoxes[i].innerHTML = eval(tableBoxes[i].id)
        let tableName = document.createElement('h3')
        tableName.innerText = "Таблица " + tableBoxes[i].id.replace("table_","").replace(/_/g, '-') + ": " +  tableTitle.name
        tableBoxes[i].insertAdjacentElement("afterbegin",tableName);
        //tableBox.insertAdjacentElement("beforeend",tableDiv);
    }
    for (i = 0; i < skillBoxes.length; i++) {
        skillBoxes[i].innerHTML = eval(skillBoxes[i].id)
    }
    for (i = 0; i < featBoxes.length; i++) {
        featBoxes[i].innerHTML = eval(featBoxes[i].id)
    }
})