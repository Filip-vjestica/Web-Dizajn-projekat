function check(){
    let ulogovanKorisnik = JSON.parse(localStorage.getItem("trenutniKorisnik"));

    if(ulogovanKorisnik.length==0){
        alert("Niste ulogovani!");
        window.location.href = "login.html"
    }
}

function pretraziKnjige(){
    let pretragaK = document.getElementById("pretraga").value.toLowerCase();

    let knjige = JSON.parse(localStorage.getItem("knjige"));

    let trazeneKnjige = [];

    for (let knjiga of knjige){
        if(knjiga.naziv.toString().toLowerCase().includes(pretragaK)){
            trazeneKnjige.push(knjiga);
        }
    }
    if(pretragaK.length == 0){
        alert("Polje mora biti popunjeno!");
    }
    if(!trazeneKnjige.length){
        alert("Trazena knjiga nije pronadjena!");
    }
    else{
        prikaziListuKnjiga(trazeneKnjige);
    }
}

function prikaziListuKnjiga(lista){
    let div = document.getElementById("container");
    div.innerHTML = "";

    for(let knjiga of lista){
        let knjigeAll = napraviKnjigu(knjiga);
        div.appendChild(knjigeAll);
    }
}

function ucitavanjeKnjiga(){
    let listaKnjiga = [
        {
            "id" : 1,
            "naziv" : "Lord of the Rings",
            "autor" : "John Tolkien",
            "godinaIzdavanja" : "1954",
            "cena" : "1000",
            "brojPrimeraka" : "5",
            "slikaOmota" : "Data/LOTR.jpg"
        },
        {
            "id" : 2,
            "naziv" : "Da Vinci Code",
            "autor" : "Dan Brown",
            "godinaIzdavanja" : "2006",
            "cena" : "1200",
            "brojPrimeraka" : "10",
            "slikaOmota" : "Data/DaVinciCode.jpg"
        },
        {
            "id" : 3,
            "naziv" : "Hobbit",
            "autor" : "John Tolkien",
            "godinaIzdavanja" : "1937",
            "cena" : "1000",
            "brojPrimeraka" : "8",
            "slikaOmota" : "Data/Hobbit.jpg"
        },
        {
            "id" : 4,
            "naziv" : "Memoirs of a Geisha",
            "autor" : "Arthur Golden",
            "godinaIzdavanja" : "1997",
            "cena" : "800",
            "brojPrimeraka" : "5",
            "slikaOmota" : "Data/MoaG.jpg"
        }
    ];
    if(localStorage.getItem("knjige")===null){
        window.localStorage.setItem("knjige",JSON.stringify(listaKnjiga));
    }
}


function ucitavanjeAutora(){
    let listaAutora = [
        {
            "ime" : "John",
            "prezime" : "Tolkien"
        },
        {
            "ime" : "Dan",
            "prezime" : "Brown"
        },
        {
            "ime" : "Arthur",
            "prezime" : "Golden"
        },
    ];
    if(localStorage.getItem("autori")===null){
        window.localStorage.setItem("autori",JSON.stringify(listaAutora));
    }
}

function napraviKnjigu(knjiga){
    let div = document.createElement("div");
    div.classList.add("knjiga");

    let a = document.createElement("a");
    a.href = `./detaljiKnjige.html?${knjiga.id}`;

    let img = document.createElement("img");
    img.src = knjiga.slikaOmota;
    a.appendChild(img);

    let naziv = document.createElement("p");
    naziv.innerHTML = knjiga.naziv;
    a.appendChild(naziv);

    let autor = document.createElement("p");
    autor.innerHTML = knjiga.autor;
    a.appendChild(autor);
    div.appendChild(a);
    div.onclick = function(){
        window.location = `./detaljiKnjige.html?${knjiga.id}`
    }
    return div;
}

function load(){
    ucitavanjeKnjiga();
    ucitavanjeAutora();

    let knjige = JSON.parse(window.localStorage.getItem("knjige"));
    let div = document.getElementById("container");
    div.innerHTML = "";
    for(let knjiga of knjige){
        let knjigeAll = napraviKnjigu(knjiga);
        div.appendChild(knjigeAll);
    }

}

function pretragaDugme(e){
    if(e.keyCode == 13){
        pretraziKnjige();
    }
}

function generisanjeNavBar(){
    let korisnik = JSON.parse(localStorage.getItem("trenutniKorisnik"));
    if (korisnik.tipKorisnika=="Administrator"){

        let bar = document.getElementById("navBar");

        let pocetnaA = document.createElement("a");
        pocetnaA.href = "pocetnaStrana.html";
        pocetnaA.innerHTML = "Pocetna";

        let poAutoru = document.createElement("a");
        poAutoru.href = "knjigePoAutoru.html";
        poAutoru.innerHTML = "Knjige po autoru";

        let dodAutora = document.createElement("a");
        dodAutora.href = "dodavanjeAutora.html";
        dodAutora.innerHTML = "Dodavanje autora";

        let dodKnjige = document.createElement("a");
        dodKnjige.href = "dodavanjeKnjige.html";
        dodKnjige.innerHTML = "Dodavanje knjige";

        let dodAdmin = document.createElement("a");
        dodAdmin.href = "dodavanjeAdministratora.html";
        dodAdmin.innerHTML = "Dodavanje administratora";

        let prikazProf = document.createElement("a");
        prikazProf.href = "prikazProfila.html";
        prikazProf.innerHTML = "Moj profil";
        
        let logout = document.createElement("a");
        logout.href = "login.html";
        logout.innerHTML = "Log out";

        bar.appendChild(pocetnaA);
        bar.appendChild(poAutoru);
        bar.appendChild(dodAutora);
        bar.appendChild(dodKnjige);
        bar.appendChild(dodAdmin);
        bar.appendChild(prikazProf);
        bar.appendChild(logout);
    }else{
        let bar = document.getElementById("navBar");

        let pocetnaA = document.createElement("a");
        pocetnaA.href = "pocetnaStrana.html";
        pocetnaA.innerHTML = "Pocetna";

        let poAutoru = document.createElement("a");
        poAutoru.href = "knjigePoAutoru.html";
        poAutoru.innerHTML = "Knjige po autoru";

        let prikazKorpe = document.createElement("a");
        prikazKorpe.href = "prikazKorpe.html";
        prikazKorpe.innerHTML = "Prikaz korpe";

        let prosleKup = document.createElement("a");
        prosleKup.href = "prosleKupovine.html";
        prosleKup.innerHTML = "Prosle kupovine";

        let prikazProf = document.createElement("a");
        prikazProf.href = "prikazProfila.html";
        prikazProf.innerHTML = "Moj profil";

        let logout = document.createElement("a");
        logout.href = "login.html";
        logout.innerHTML = "Log out";

        bar.appendChild(pocetnaA);
        bar.appendChild(poAutoru);
        bar.appendChild(prikazKorpe);
        bar.appendChild(prosleKup);
        bar.appendChild(prikazProf);
        bar.appendChild(logout);

    }
}

