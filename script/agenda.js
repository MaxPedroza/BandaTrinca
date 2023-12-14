function agenda() {
    document.getElementById('musicos').style.display = "none";
    document.getElementById('home').style.display = "none";
    document.getElementById('sobre').style.display = "none";
    document.getElementById('galeria').style.display = "none";
    document.getElementById('agenda').style.display = "block";
    document.getElementById('contato').style.display = "none";

    document.getElementById('bnt-home').style.backgroundColor = "white";
    document.getElementById('bnt-sobre').style.backgroundColor = "white";
    document.getElementById('bnt-galeria').style.backgroundColor = "white";
    /*document.getElementById('titulo-bnt-agenda').style.webkitTextFillColor = "#002A00";*/
    document.getElementById('bnt-agenda').style.backgroundColor = "#ABABAA";
    document.getElementById('bnt-contato').style.backgroundColor = "white";
}