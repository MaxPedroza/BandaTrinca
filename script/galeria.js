function galeria() {
    document.getElementById('musicos').style.display = "none";
    document.getElementById('home').style.display = "none";
    document.getElementById('sobre').style.display = "none";
    document.getElementById('galeria').style.display = "block";
    document.getElementById('agenda').style.display = "none";
    document.getElementById('contato').style.display = "none";

    document.getElementById('bnt-home').style.backgroundColor = "white";
    document.getElementById('bnt-sobre').style.backgroundColor = "white";
    document.getElementById('bnt-galeria').style.backgroundColor = "black";
    document.getElementById('bnt-agenda').style.backgroundColor = "white";
    document.getElementById('bnt-contato').style.backgroundColor = "white";
}