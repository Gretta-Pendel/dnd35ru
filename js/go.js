let loc = location;
let s = loc.search;
let p = s.substr(1).split("/");
let l = p.length;
let _parent = index[0]["items"].find(o => o.id === p[0]);
if (l === 1 && _parent != null && _parent["link"] !== "") {
    loc.replace(_parent["link"]);
}
else if (l === 2 && _parent != null && _parent["link"] !== "") {
    let _child = _parent["sub"].find(c => c.id === p[1]);
    if (_child != null && _child["link"] !== "") {
        loc.replace(_parent["link"] + "#" + _child["link"]);
    }
}