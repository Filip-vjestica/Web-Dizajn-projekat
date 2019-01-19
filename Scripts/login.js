function ucitavanjeKorisnika(){
    if(localStorage.getItem("korisnici")===null){
        let listaKorisnika = [
            {
                "ime": "Filip",
                "prezime": "Vjestica",
                "lozinka": "123456a",
                "tipKorisnika": "Administrator",
                "korisnickoIme": "Filip123456a"
            },
            {
                "ime": "Vlastimir",
                "prezime" : "Veskovic",
                "lozinka" : "654321a",
                "tipKorisnika" : "Kupac",
                "korisnickoIme" : "Vlastimir654321a"
            }
        ];
        window.localStorage.setItem("korisnici",JSON.stringify(listaKorisnika));
    }
    let praznaKorpa = [];
    let izlogovanjeTrenutnogKorisnika = [];

    window.localStorage.setItem("trenutniKorisnik",JSON.stringify(izlogovanjeTrenutnogKorisnika));
    window.localStorage.setItem("korpa",JSON.stringify(praznaKorpa));
}



function proveraInformacija(){
    
    let lista = JSON.parse(window.localStorage.getItem("korisnici"));
    let korisnickoIme = document.getElementById("username").value;
    let lozinka = document.getElementById("password").value;

    if(!korisnickoIme || !lozinka){
        alert("Sva polja moraju biti popunjena!");
        window.location.reload;
    }
    else{
        for(let korisnik of lista){
            if(korisnickoIme == korisnik.korisnickoIme && lozinka == korisnik.lozinka){
                let trenutniKorisnik = {
                    "ime": korisnik.ime,
                    "prezime": korisnik.prezime,
                    "lozinka": korisnik.lozinka,
                    "tipKorisnika": korisnik.tipKorisnika,
                    "korisnickoIme": korisnik.korisnickoIme};
                window.localStorage.setItem("trenutniKorisnik",JSON.stringify(trenutniKorisnik));
                window.location.href = "pocetnaStrana.html"
            }
            
        };
        alert("Korisnicko ime ili lozinka netacni!");
    }
}

function proveri(e){
    if (e.keyCode == 13) {
        proveraInformacija();
    }
}
