// Основное оглавление
let mc = document.createElement("div");
mc.setAttribute("id","mainContents");
document.body.prepend(mc);

var mainContents = new Vue({
    data: {
        contents: _contents,
        current: '',
        url:''
    },
    beforeMount: function() {
        let loc = location.pathname;
        let s = loc.split('/');
        let p = s[s.length-1];
        this.current = p.length ? p : '';
        let main_path = location.pathname.split("/");
        let main_root = location.protocol.indexOf('http') > -1 ? main_path[1] : 'dnd3.5';
        let main_rootLevel = main_path.indexOf(main_root);
        let main_pathlen = main_path.length - 1;
        let main_delta = main_pathlen - main_rootLevel;
        this.url = main_delta === 1 ? 'contents/' : main_delta === 2 ? '../contents/' : main_delta === 3 ? '../../contents/' : '';
    },
    template:
        '<div id="mainContents">' +
        '<div v-for="lvl1 in contents" :class="lvl1.url === current ? \'active\': \'\'">' +
        '   <a class="h2" v-if="lvl1.url" :href="url + lvl1.url">{{lvl1.title}}</a>' +
        '   <span class="h2" v-else>{{lvl1.title}}</span>' +
        '   <div v-for="lvl2 in lvl1.level2" :class="lvl2.url === current ? \'active\': \'\'">' +
        '       <a class="h3" v-if="lvl2.url" :href="url + lvl2.url">{{lvl2.title}}</a>' +
        '       <span class="h3" v-else>{{lvl2.title}}</span>' +
        '       <div v-for="lvl3 in lvl2.level3" :class="lvl3.url === current ? \'active\': \'\'">' +
        '           <a class="h4" v-if="lvl3.url" :href="url + lvl3.url">{{lvl3.title}}</a>' +
        '           <span class="h4" v-else>{{lvl3.title}}</span>' +
        '       </div>' +
        '   </div>' +
        '</div>' +
        '</div>',
    mounted: function () {
        let el = document.getElementById('mainContents');
        let cur = el.getElementsByClassName('active')[0];
        if (cur)
            el.scrollTop=cur.offsetTop;
    }
}).$mount('#mainContents');
