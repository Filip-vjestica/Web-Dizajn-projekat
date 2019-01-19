function korisnikPostoji(){
    let lista = JSON.parse(window.localStorage.getItem("korisnici"));
    let username = document.getElementById("username").value;
    for(let korisnik of lista){
        if(username == korisnik.korisnickoIme){
            return true;
        }
    }
    return false;
}

function proveriDaLiPostojiKorisnik(){
    let lista = JSON.parse(window.localStorage.getItem("korisnici"));
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;

    if(!username || !password || !ime || !prezime){
        alert("Sva polja moraju biti popunjena");
        return;
    }
    else if (korisnikPostoji()){
        alert("Ovo korisnicko ime je vec zauzeto, pokusajte drugo!")
        return;
    }
    let noviKupac = {
        "ime" : ime,
        "prezime" : prezime,
        "lozinka" : password,
        "tipKorisnika" : "Kupac",
        "korisnickoIme" : username
    }
    lista.push(noviKupac);
    window.localStorage.setItem("korisnici",JSON.stringify(lista));
    window.location.href = "login.html";
}
