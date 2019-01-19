function prikazi(){
    let trenutniKorisnik = JSON.parse(window.localStorage.getItem("trenutniKorisnik"));

    document.getElementById("ime").innerHTML = trenutniKorisnik.ime;
    document.getElementById("prezime").innerHTML = trenutniKorisnik.prezime;
    document.getElementById("korisnickoIme").innerHTML = trenutniKorisnik.korisnickoIme;
    document.getElementById("lozinka").innerHTML = trenutniKorisnik.lozinka;


}

function izmeniProfil(){
    window.location.href = "izmenaProfila.html"; 
}

function proveriIzmenu(){
    let trenutniKorisnik = JSON.parse(window.localStorage.getItem("trenutniKorisnik"));
    let korisnici = JSON.parse(window.localStorage.getItem("korisnici"));

    let novoIme = document.getElementById("imePromena").value;
    let novoPrezime = document.getElementById("prezimePromena").value;
    let novaLozinka = document.getElementById("lozinkaPromena").value;

    if(!novoIme || !novoPrezime || !novaLozinka){
        window.alert("Sva polja moraju biti popunjena!");
        return;
    }

    trenutniKorisnik.ime = novoIme;
    trenutniKorisnik.prezime = novoPrezime;
    trenutniKorisnik.lozinka = novaLozinka;

    for(let korisnik of korisnici){
        if(korisnik.korisnickoIme == trenutniKorisnik.korisnickoIme){
            korisnik.ime = novoIme;
            korisnik.prezime = novoPrezime;
            korisnik.lozinka = novaLozinka;
        }
    }

    window.localStorage.setItem("trenutniKorisnik",JSON.stringify(trenutniKorisnik));
    window.localStorage.setItem("korisnici",JSON.stringify(korisnici));

    window.alert("Novi podaci sacuvani!");
    window.location.href = "pocetnaStrana.html";


}