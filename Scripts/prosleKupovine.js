function generisanjeRacuna(){
    let knjige = JSON.parse(localStorage.getItem("knjige"));
    let racuni = JSON.parse(localStorage.getItem("racuni"));
    let trenutniKorisnik = JSON.parse(localStorage.getItem("trenutniKorisnik"));
    let flag = false;
    let brojRacuna = 0;

    if(localStorage.getItem("racuni")===null){
        window.alert("Nema napravljenih racuna!");
        window.location.href = "pocetnaStrana.html";
    }


    for(let item of racuni){
        if(item.korisnickoImeKupca == trenutniKorisnik.korisnickoIme){
            flag = true;
        }
    }
    if(!flag){
        alert("Nemate prosle kupovine!");
        window.location.href = "pocetnaStrana.html";
    }

    let div = document.getElementById("container");


    for(let item of racuni){
        if(item.korisnickoImeKupca == trenutniKorisnik.korisnickoIme){
            brojRacuna +=1;
            let noviDiv = napraviDiv(item,brojRacuna);
            div.appendChild(noviDiv);
        }
    }

}

function napraviDiv(racun,brRacuna){
    let div = document.createElement("div");

    let naslov = document.createElement("h2");
    naslov.innerHTML = `Racun ${brRacuna}`;
    div.appendChild(naslov);
    div.classList.add("knjiga");
    for(let item of racun.listaKupljenihStvari){
        let noviDiv = napraviDetaljeKnjige(item);
        div.appendChild(noviDiv);
    }
    let ukupnaCena = document.createElement("h3");
    ukupnaCena.innerHTML = `Ukupna cena racuna je ${racun.ukupnaCena} Dinara`;

    div.appendChild(ukupnaCena);
    return div;
    


    
}

function napraviDetaljeKnjige(knjigaPodaci){
    let knjige = JSON.parse(localStorage.getItem("knjige"));
    let div = document.createElement("div");
    div.classList.add("knjiga");

    for(let knjiga of knjige){
        if(knjiga.id == parseInt(knjigaPodaci.idKnjige)){
            let img = document.createElement("img");
            img.src = knjiga.slikaOmota;
            img.style.height = "300px";
            img.style.width = "200px";

            let naziv = document.createElement("p");
            naziv.innerHTML = `Naziv knjige je ${knjiga.naziv}`;

            let cena = parseInt(knjiga.cena,10);
            let cenaSvih = cena*parseInt(knjigaPodaci.kolicina);
            let cenaSvihString = String(cenaSvih);

            let cenaU = document.createElement("p");
            cenaU.innerHTML = `Cena svih knjiga je:${cenaSvihString} Dinara`;

            let brojKupljenihPrimeraka = document.createElement("p");
            brojKupljenihPrimeraka.innerHTML = `Broj kupljenih primeraka : ${knjigaPodaci.kolicina}`;

            div.appendChild(img);
            div.appendChild(naziv);
            div.appendChild(cenaU);
            div.appendChild(brojKupljenihPrimeraka);
            return div;
        }
    }
}