let s = window.location.search;
let p = s.substr(1).split("/");
let l = p.length;
let table = _tables.find(o => o.id === p[0]);
let tableBox = document.getElementById("table_by_id")
if (l === 1 && table != null) {
    document.addEventListener('DOMContentLoaded', () => {
        let scriptFile = document.createElement('script');
        scriptFile.setAttribute("src", "js/tables/" + table.id + ".js");
        document.head.insertAdjacentElement("beforeend",scriptFile);
    })
    window.addEventListener('load', () => {
        tableBox.innerHTML = eval(table.id.replace(/-/g, '_'))
        //tableBox.innerHTML = table.id.replace(/-/g, '_')
        let tableName = document.createElement('h3')
        tableName.innerText = "Таблица " + table.id.replace("table_","").replace(/_/g, '-') + ": " +  table.name
        tableBox.insertAdjacentElement("afterbegin",tableName);
    })

}