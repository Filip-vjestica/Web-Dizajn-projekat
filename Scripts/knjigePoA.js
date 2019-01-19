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

function pretraga(){   
    let izborAutora = document.getElementById("izborAutora").value;

    let knjige = JSON.parse(localStorage.getItem("knjige"));

    let div = document.getElementById("container");

    div.innerHTML = "";
    for(let knjiga of knjige){
        if(knjiga.autor == izborAutora){
            let knjigeAll = napraviKnjigu(knjiga);
            div.appendChild(knjigeAll);
        }
    }
}

function generisanjeIzborAutora(){
    let select = document.getElementById("izborAutora");
    let autori = JSON.parse(window.localStorage.getItem("autori"));

    for(let autor of autori){
        let opcija = document.createElement("option");
        let punAutor = autor.ime + " " + autor.prezime;
        opcija.value = opcija.text = punAutor;
        select.add(opcija);
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