
function home() {
   
    document.getElementById('home').style.display = "block";    
    document.getElementById('sobre').style.display = "none";
    document.getElementById('galeria').style.display = "none";
    document.getElementById('agenda').style.display = "none";
    document.getElementById('contato').style.display = "none";

    document.getElementById('bnt-home').style.backgroundColor="black";
    document.getElementById('bnt-sobre').style.backgroundColor="white";
    document.getElementById('bnt-galeria').style.backgroundColor="white";
    document.getElementById('bnt-agenda').style.backgroundColor="white";
    document.getElementById('bnt-contato').style.backgroundColor="white";
}