function showList(n) {
    var i;
    var pallino = document.getElementsByClassName("pallino");
    var nomi = document.getElementsByClassName("nomi");
    var separatore = document.getElementsByClassName("separatore");
    for (i = 0; i < nomi.length; i++) {
        pallino[i].style.opacity = "1";
        nomi[i].style.display = "none";
        separatore[n].style.display = "none";
    }
    pallino[n].style.opacity = "0.5";
    nomi[n].style.display = "initial";
    separatore[n].style.display = "none";
}

function showAll() {
    var i;
    var nomi = document.getElementsByClassName("nomi");
    var separatore = document.getElementsByClassName("separatore");
    var pallino = document.getElementsByClassName("pallino");
    for (i = 0; i < nomi.length; i++) {
        pallino[i].style.opacity = "1";
        nomi[i].style.display = "none";
        separatore[i].style.display = "none";
    }
    for (i = 0; i < nomi.length; i++) {
        nomi[i].style.display = "initial";
        separatore[i].style.display = "block";
    }
}