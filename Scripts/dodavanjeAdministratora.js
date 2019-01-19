function dodavanjeAdministratora(){
    let korisnici = JSON.parse(window.localStorage.getItem("korisnici"));
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let korisIme = document.getElementById("korisnickoIme").value;
    let korisLozinka = document.getElementById("lozinka").value;

    if(!ime || !prezime || !korisIme || !korisLozinka){
        alert("Sva polja moraju biti popunjena!");
        return;
    }

    for(let korisnik of korisnici){
        if(korisnik.korisnickoIme == korisIme){
            alert("Ovo korisnicko ime je vec zauzeto!");
            return;
        }
    }

    let noviKorisnik = {
        "ime" : ime,
        "prezime" : prezime,
        "lozinka" : korisLozinka,
        "tipKorisnika" : "Administrator",
        "korisnickoIme" : korisIme
    }

    korisnici.push(noviKorisnik);
    window.localStorage.setItem("korisnici",JSON.stringify(korisnici));
    alert("Novi administrator uspesno dodat!");
    window.location.href = "pocetnaStrana.html";
}