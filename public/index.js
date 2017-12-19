var OGP = OGP || {};

OGP.pressedInput = (keycode) => {
    if(13 === keycode){ // press enter key
        OGP.getOGP();
    }
}

OGP.getOGP = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            OGP.createOgpDom(this.responseText);
        }
    };
    xhttp.open("GET", "./ogp?url=" + document.getElementById("url").value, true);
    xhttp.send();
}

OGP.createOgpDom = (ogpJson) => {
    var ogp = JSON.parse(ogpJson);

    var x = document.querySelectorAll(".ogp");
    var last = x[x.length - 1];
    var child = document.createElement("div");

    var dom = "";
    Object.keys(ogp).forEach(function(key) {
        if(key !== "ogImage"){ dom += "<p>"+ key +" : "+ ogp[key] +"</p>"; }
        else { dom += "<p>"+ key +" : <img src="+ ogp[key] +"/></p>"; }

    });

    child.innerHTML = dom;
    child.className = "ogp";

    last.parentNode.insertBefore(child, last.nextSibling);
}
