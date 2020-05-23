let s = window.location.search;
let p = s.substr(1).split("/");
let l = p.length;
let term = _index.find(o => o.id === p[0]);
let termBox = document.getElementById("term_by_id")
if (l === 1 && term != null) {
    document.location = term.link;
    // document.addEventListener('DOMContentLoaded', () => {
    //     let scriptFile = document.createElement('script');
    //     scriptFile.setAttribute("src", "js/spells/" + term.id + ".js");
    //     document.head.insertAdjacentElement("beforeend",scriptFile);
    // })
    // window.addEventListener('load', () => {
    //     document.title = term.name
    //     spellBox.innerHTML = eval(term.id.replace(/-/g, '_'))
    // })
}