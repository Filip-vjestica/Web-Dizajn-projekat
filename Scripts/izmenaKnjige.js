function idKnjige(){
    let id = window.location.search.substring(1);
    let knjige = JSON.parse(window.localStorage.getItem("knjige"));
    document.getElementById("id").value = id; 

    let naziv1 = document.getElementById("naziv1");
    let godinaIzdavanja = document.getElementById("godinaIzd");
    let cena1 = document.getElementById("cena1");
    let brojPrimeraka1 = document.getElementById("brojPrimeraka1");
    for(let knjiga of knjige){
        if(knjiga.id == id){
            naziv1.value = knjiga.naziv;
            godinaIzdavanja.value = knjiga.godinaIzdavanja;
            cena1.value = knjiga.cena;
            brojPrimeraka1.value = knjiga.brojPrimeraka;

        }
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

function nadji(){
    let id = window.location.search.substring(1);

    let knjige = JSON.parse(window.localStorage.getItem("knjige"));

    for(let knjiga of knjige){
        if(knjiga.id == id){
            prikazi(knjiga);
            break;
        }
    }
}

function prikazi(knjiga){
    document.getElementById("img").src = knjiga.slikaOmota;
    document.getElementById("naziv").innerHTML = knjiga.naziv;
    document.getElementById("autor").innerHTML = knjiga.autor;
    document.getElementById("godina").innerHTML = knjiga.godinaIzdavanja;
    document.getElementById("cena").innerHTML = knjiga.cena;
    document.getElementById("brojPrimeraka").innerHTML = knjiga.brojPrimeraka;
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

function izmeniKnjigu(){
    let id = window.location.search.substring(1);
    let knjige = JSON.parse(window.localStorage.getItem("knjige"));
    let naziv = document.getElementById("naziv1").value;
    let godinaIzd = document.getElementById("godinaIzd").value;
    let cena = document.getElementById("cena1").value;
    let brojPrim = document.getElementById("brojPrimeraka1").value;
    let slikaOmota = document.getElementById("slikaOmota").value;
    let autor = document.getElementById("izborAutora").value;
    if(!naziv || !godinaIzd || !cena || !brojPrim || !slikaOmota || !autor){
        alert("Sva polja moraju biti popunjena!");
        return;
    }
    if(parseInt(godinaIzd,10) > new Date().getFullYear()){
        alert("Ne mozete staviti vecu godinu od trenutne!");
        return;
    }
    for(let knjiga of knjige){
        if(knjiga.id == id){
            knjiga.naziv = naziv;
            knjiga.godinaIzdavanja = godinaIzd;
            knjiga.cena = cena;
            knjiga.brojPrimeraka = brojPrim;
            knjiga.slikaOmota = napraviPath();
            knjiga.autor = autor; 
        }
    }
    window.localStorage.setItem("knjige",JSON.stringify(knjige));
}

function napraviPath(){
    let val = document.getElementById("slikaOmota").value.split("\\").pop();
    return `Data/${val}`;
}