// Main Contents
let page_path = location.pathname.split("/");
let page_root = location.protocol.indexOf('http') > -1 ? page_path[1] : 'dnd35ru';
let page_rootLevel = page_path.indexOf(page_root);
let page_pathlen = page_path.length - 1;
let page_delta = page_pathlen - page_rootLevel;
let page_url = page_delta === 1 ? '' : page_delta === 2 ? '../' : page_delta === 3 ? '../../' : '';

let tc = document.createElement("div");
tc.setAttribute("id","topContents");


let content = `
<a href="` + page_url + `index.html">🏡</a>&nbsp; 
<a href="` + page_url + `terms.html">📑</a> ║ 
<a href="` + page_url + `tables.html">📈tables</a> ║
<a href="` + page_url + `skills.html">🔎skills</a> ║
<a href="` + page_url + `feats.html">⚔️feats</a> ║
<a href="` + page_url + `spells.html">📜spells</a> ║
<a href="` + page_url + `pdf.html">spell list (pdf)</a> ║
<a href="` + page_url + `shop.html">shop (pdf)</a> ║
<a href="` + page_url + `contents/dmg8_conditions.html">conditions</a> ║
<a href="` + page_url + `contents/dmg8_abilities.html">abilities</a> ║
`
tc.innerHTML = content;
document.body.prepend(tc);

// Page Contents
let pc = document.createElement("div");
pc.setAttribute("id","pageContents");
let headers = [], n = 0;
for(var i = 0; i < document.body.children.length; i++) {
    var e = document.body.children[i];
    if(~e.tagName.toUpperCase().indexOf("H")) {
        e.setAttribute("id",e.tagName.toLowerCase() + "n" + n);
        n++;
        headers.push(e);
    }
}
if (headers.length > 1) {
    document.body.prepend(pc);
    for(var i = 0; i < headers.length; i ++) {
        item = document.createElement("a");
        item.setAttribute("class",headers[i].tagName.toLowerCase());
        item.setAttribute("href","#" + headers[i].tagName.toLowerCase() + "n" + i);
        item.textContent = headers[i].textContent;
        pc.append(item);
    }
}

let s = window.location.hash;
console.log(s)