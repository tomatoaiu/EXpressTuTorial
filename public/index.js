var OGP = OGP || {};

OGP.colCount = {
    count : 0,
    get latest () {
        return this.count;
    },
    set latest (count) {
        this.count = count;
    }
}

OGP.init = () => {
    OGP.colCount.latest = 0;
    console.log(OGP.colCount.latest);
}

OGP.getColCount = () => {
    return colCount;
}

OGP.getColCount = () => {
    return colCount;
}

OGP.pressedInput = (keycode) => {
    if (13 === keycode) { // press enter key
        OGP.getOGP();
    }
}

OGP.getOGP = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            OGP.createOgpDom(this.responseText);
        }
    };
    xhttp.open("GET", "./ogp?url=" + document.getElementById("url").value, true);
    xhttp.send();
}

OGP.createOgpDom = (ogpJson) => {
    var ogp = JSON.parse(ogpJson);

    var x = document.querySelectorAll(".card-deck");
    var last = x[x.length - 1];
    child = document.createElement("div");

    let card = `\
    <img class="card-img-top" src="${ ogp.ogImage }" alt="Card image cap">\
    <div class="card-body">\
        <h5 class="card-title">${ ogp.ogTitle }</h5>\
        <p class="card-text">${ ogp.ogDescription }</p>\
        <a href="${ ogp.ogUrl }" class="btn btn-primary">go</a>\
    </div>`;

    child.innerHTML = card;
    child.classList.add(`card`, `ogp`);
    child.style.width = `18rem`;
    child.style.maxWidth = `18rem`;
    child.style.maxHeight = `25rem`;
    child.style.overflow = `scroll`;

    if((OGP.colCount.latest) % 3 !== 0){
        last.appendChild(child);
    } else {
        let middleHead = document.createElement(`div`);
        middleHead.classList.add(`card-deck`);
        middleHead.appendChild(child);
        console.log(middleHead);
        last.parentNode.insertBefore(middleHead, last.nextSibling);
    }
    OGP.colCount.latest += 1;
}

OGP.init();