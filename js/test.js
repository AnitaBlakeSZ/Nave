var n = 1;

function startTest() {
    var bottoni = document.getElementById("bottoni");
    var inizio = document.getElementById("box_bottone");
    inizio.style.display = "none";
    bottoni.style.display = "flex";
    var dom = document.getElementsByClassName("dom" + n);
    showDom(dom);
}

function canc() {
    var dom = document.getElementsByClassName("dom" + n);
    for (i=0; i<dom.length; i++) {
        dom[i].style.display = "none";
    }
}

function next() {
    canc();
    n = n + 1;
    if (n != 7) {
        var dom = document.getElementsByClassName("dom" + n);
        showDom(dom);
    } else {
        window.location.assign("risultato.html");
    }
}

function prev() {
    canc();
    n = n - 1;
    if (n != 0) {
        var dom = document.getElementsByClassName("dom" + n);
        showDom(dom);
    } else {
        window.location.reload();
    }
}

function showDom(dom) {
    var i;
    for (i=0; i<dom.length; i++) {
        dom[i].style.display = "flex";
    }
}

function clicked(el) {
    if (el.style.backgroundColor != "rgb(166, 219, 239)") {
        el.style.backgroundColor = "rgb(166, 219, 239)";
        console.log(el.style.backgroundColor);
    } else {
        el.style.backgroundColor = "white";
    }   
}

