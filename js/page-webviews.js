// Detect url for frames, create frames
let loc = location,
    s = loc.search,
    p = s.substr(1).split("/"),
    l = p.length;
if (l > 0) {
    if ( _contents.find(o => o.url === p[0])) {
        let page = _contents.find(o => o.url === p[0]);
        makeIframes(page.url);
    }
    else {
        let subPage;
        _contents.forEach(function (e) {
            if (e.level2 && e.level2.length > 0 && e.level2.find(o => o.url === p[0])) {
                subPage = e.level2.find(o => o.url === p[0]);
            }
        });
        if(subPage && subPage.url) {
            document.title = subPage.url;
            makeIframes(subPage.url);
        }
        else {
            console.log("No page such" + p[0]);
            let err = document.createElement("div");
            err.setAttribute("class", "err");
            document.body.append(err);
            err.textContent = "No page such " + p[0];
        }
    }
}

function makeIframes(uri) {
    let box = document.getElementById("frames");

    // Создаем фреймы для rus и eng страниц по урлу
    if (box) {
        let rus = document.createElement("webview");
        rus.setAttribute("id", "rus");
        rus.setAttribute("src", "contents/rus/" + uri);
        rus.setAttribute("width", "50%");
        rus.setAttribute("height", "100%");
        box.append(rus);

        let eng = document.createElement("webview");
        eng.setAttribute("id", "eng");
        eng.setAttribute("src", "contents/eng/" + uri);
        eng.setAttribute("width", "50%");
        eng.setAttribute("height", "100%");
        box.append(eng);
    }
    let rusFrameHeight, engFrameHeight, rusHeight, engHeight, rusScroll, engScroll;

    // высота фреймов
    rusFrameHeight = rus.offsetHeight;
    engFrameHeight = eng.offsetHeight;

    rus.addEventListener ("dom-ready", function () {
        // высота содержимого фрейма
        rusHeight = rus.contentWindow.document.documentElement.scrollHeight;
        // по клику на оглавлении страницы - прокручиваем оба фрейма к анкорам, не задействуем синхронную прокрутку.
        let rusPC = rus.contentWindow.document.getElementById("pageContents");
        let rusLinks = rusPC ? rusPC.getElementsByTagName("A") : null;
        if (rusLinks && rusLinks.length > 0) {
            for (let i = 0; i < rusLinks.length; i++) {
                let id = rusLinks[i].getAttribute("href").substr(1);
                let rusTo = rus.contentWindow.document.getElementById(id);
                let engTo = eng.contentWindow.document.getElementById(id);
                console.log("rusLinks: " + rusTo + " / " + engTo)
                if (rusTo) {
                    rusLinks[i].addEventListener("click", function () {
                        rus.contentWindow.scrollTo(0, rusTo.offsetTop);
                        engScroll = true;
                        rusScroll = true;
                    });
                    if (engTo) {
                        rusLinks[i].addEventListener("click", function () {
                            eng.contentWindow.scrollTo(0, engTo.offsetTop);
                            engScroll = true;
                            rusScroll = true;
                        });
                    }
                }
            }
        }
    });
    eng.addEventListener ("dom-ready", function () {
        // высота содержимого фрейма
        engHeight = eng.contentWindow.document.documentElement.scrollHeight;
        // по клику на оглавлении страницы - прокручиваем оба фрейма к анкорам, не задействуем синхронную прокрутку.
        let engPC = eng.contentWindow.document.getElementById("pageContents");
        let engLinks = engPC ? engPC.getElementsByTagName("A") : null;
        if (engLinks && engLinks.length > 0) {
            for (let i = 0; i < engLinks.length; i++) {
                let id = engLinks[i].getAttribute("href").substr(1);
                let rusTo = rus.contentWindow.document.getElementById(id);
                let engTo = eng.contentWindow.document.getElementById(id);
                console.log("engLinks: " + rusTo + " / " + engTo)
                if (engTo) {
                    engLinks[i].addEventListener("click", function () {
                        eng.contentWindow.scrollTo(0, engTo.offsetTop);
                        engScroll = true;
                        rusScroll = true;
                    });
                    if (rusTo) {
                        engLinks[i].addEventListener("click", function () {
                            rus.contentWindow.scrollTo(0, rusTo.offsetTop);
                            engScroll = true;
                            rusScroll = true;
                        });
                    }
                }
            }
        }
    });

    // синхронизация прокруток фреймов
    // rus.onscroll = function () {
    //     if (engScroll === true) {
    //         engScroll = false;
    //         return;
    //     }
    //     rusScroll = true;
    //     let rusPcSt = rus.contentWindow.document.documentElement.scrollTop * 100 / (rusHeight - rusFrameHeight);
    //     let engSt = rusPcSt * (engHeight - engFrameHeight) / 100;
    //     eng.contentWindow.scrollTo(0, engSt);
    // };
    // eng.onscroll = function () {
    //     if (rusScroll === true) {
    //         rusScroll = false;
    //         return;
    //     }
    //     engScroll = true;
    //     let engPcSt = eng.contentWindow.document.documentElement.scrollTop * 100 / (engHeight - engFrameHeight);
    //     let rusSt = engPcSt * (rusHeight - rusFrameHeight) / 100;
    //     rus.contentWindow.scrollTo(0, rusSt);
    // };

}