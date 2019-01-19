function generisanjeKorpe(){
    let korpa = JSON.parse(localStorage.getItem("korpa"));
    let knjige = JSON.parse(localStorage.getItem("knjige"));
    let zavrsnoDeo = document.getElementById("zavrsno");
    let brojac = 0;

    if(korpa.length==0){
        alert("Vasa korpa je prazna!");
        window.location.href = "pocetnaStrana.html";
    }

    let div = document.getElementById("container");
    div.innerHTML = "";

    for(let knjiga of knjige){
        for(let item of korpa){
            brojac+=1;
            if(parseInt(item.idKnjige,10) == knjiga.id){
                let kolicina = item.kolicina;
                let knjigeAll = napraviKnjigu(knjiga,kolicina,brojac);
                div.appendChild(knjigeAll);
            }
        }
    }
    let ukupnaCena = 0;
    for(let item of korpa){
        for(let knjiga of knjige){
            if(knjiga.id == parseInt(item.idKnjige,10)){
                let cenaKnjiga = parseInt(item.kolicina,10)*parseInt(knjiga.cena,10);
                ukupnaCena +=cenaKnjiga;
                let a = document.createElement("h2");
                a.innerHTML = `Cena svih ${knjiga.naziv} knjiga je: ${cenaKnjiga} Dinara!`;
                zavrsnoDeo.appendChild(a);

                
            }
        }
    }
    let zavrsnaCena = document.getElementById("zavrsnaCena");
    zavrsnaCena.innerHTML = `Ukupna cena svih knjiga je: ${ukupnaCena} Dinara!`;

}

function napraviKnjigu(knjiga,kolicina,id){
    let br = document.createElement("br");
    let div = document.createElement("div");
    div.classList.add("knjiga");

    let img = document.createElement("img");
    img.src = knjiga.slikaOmota;
    img.style.height = "300px";
    img.style.width = "200px";

    let naziv = document.createElement("p");
    naziv.innerHTML = `Naziv knjige: ${knjiga.naziv} `;

    let autor = document.createElement("p");
    autor.innerHTML = `Autor:${knjiga.autor}`;

    let cena = document.createElement("p");
    cena.innerHTML = `Cena(Dinari): ${knjiga.cena}`;

    let brojPrimeraka = document.createElement("p");
    brojPrimeraka.innerHTML = `Broj slobodnih primeraka:${knjiga.brojPrimeraka}`;

    let trenutnoUKorpi = document.createElement("p");
    trenutnoUKorpi.innerHTML = `Broj primeraka trenutno u korpi:${kolicina}`;

    let brisanjeIzKorpe = document.createElement("button");
    brisanjeIzKorpe.innerHTML = "Brisanje iz korpe";
    brisanjeIzKorpe.onclick = function(){brisanjeKnjigeIzKorpe(knjiga)};
    brisanjeIzKorpe.style.padding = "10px 20px";
    brisanjeIzKorpe.style.position = "relative";
    brisanjeIzKorpe.style.top = "0";
    brisanjeIzKorpe.style.right = "0";

    let knjige = JSON.parse(localStorage.getItem("knjige"));
    let korpa = JSON.parse(localStorage.getItem("korpa"));

    let promenaKolicine = document.createElement("input");
    promenaKolicine.id = `input${id}`;
    promenaKolicine.placeholder = "...";
    promenaKolicine.type = "number";

    for(let knjiga of knjige){
        for(let item of korpa){
            if(knjiga.id == parseInt(item.idKnjige)){
                promenaKolicine.value = item.kolicina;
            }
        }
    }

    let p = document.createElement("p");
    p.innerHTML = "Unesite novu kolicinu:"

    let potvrdaNoveKolicine = document.createElement("button");
    potvrdaNoveKolicine.innerHTML = "Potvrdite novu Kolicinu"
    potvrdaNoveKolicine.style.padding = "10px 20px";
    potvrdaNoveKolicine.style.position = "relative";
    potvrdaNoveKolicine.style.top = "0";
    potvrdaNoveKolicine.style.right = "0";
    potvrdaNoveKolicine.onclick = function(){promenaKolicineDugme(knjiga,kolicina,id)};

    div.appendChild(img);
    div.appendChild(naziv);
    div.appendChild(autor);
    div.appendChild(cena);
    div.appendChild(brojPrimeraka);
    div.appendChild(trenutnoUKorpi);
    div.appendChild(brisanjeIzKorpe);
    div.appendChild(br);
    div.appendChild(p);
    div.appendChild(promenaKolicine);
    div.appendChild(br);
    div.appendChild(potvrdaNoveKolicine);
    return div;
}

function nadjiIndex(lista,key,value){
    for(var i = 0;i < lista.length;i++){
        if(lista[i][key]==value){
            return i;
        }
    }
    return null;
}

function brisanjeKnjigeIzKorpe(knjiga){
    let korpa = JSON.parse(localStorage.getItem("korpa"));
    let idKnjige = knjiga.id;

    for(let item of korpa){
        if(parseInt(item.idKnjige,10)==idKnjige){
            let index = nadjiIndex(korpa,"idKnjige",idKnjige);
            korpa.splice(index,1);
            window.localStorage.setItem("korpa",JSON.stringify(korpa));
            window.alert("Knjiga je uspesno izbrisana!");
        }
    }
    location.reload();
}

function promenaKolicineDugme(knjiga,kolicina,id){
    let novaKolicina = document.getElementById(`input${id}`).value;
    let korpa = JSON.parse(localStorage.getItem("korpa"));

    if(parseInt(novaKolicina,10) > parseInt(knjiga.brojPrimeraka,10)){
        window.alert("Nema dovoljno primeraka!");
        return;
    }
    if(!novaKolicina){
        window.alert("Polja moraju biti popunjena pravilno!");
        return;
    }

        for(let item of korpa){
            if(knjiga.id == parseInt(item.idKnjige)){
                item.kolicina = novaKolicina;
            }
        }
    window.localStorage.setItem("korpa",JSON.stringify(korpa));
    window.alert("Nova kolicina potvrdjena!");
    window.location.reload();
}

function zavrsavanjeKupovine(){
    let knjige = JSON.parse(localStorage.getItem("knjige"));
    let korpa = JSON.parse(localStorage.getItem("korpa"));
    let racuni = JSON.parse(localStorage.getItem("racuni"));
    let trenutniKorisnik = JSON.parse(localStorage.getItem("trenutniKorisnik"));
    let ukupnaCena = 0;


    for(let knjiga of knjige){
        for(let item of korpa){
            if(knjiga.id == parseInt(item.idKnjige,10)){
                let cenaKnjiga = parseInt(item.kolicina,10)*parseInt(knjiga.cena,10);
                ukupnaCena +=cenaKnjiga;
                let noviBrojPrimeraka = parseInt(knjiga.brojPrimeraka)-parseInt(item.kolicina);
                knjiga.brojPrimeraka = String(noviBrojPrimeraka);
            }
        }
    }
    window.localStorage.setItem("knjige",JSON.stringify(knjige));

    if(localStorage.getItem("racuni")===null){
        let racuni = [];

        let noviRacun = {
            "imeKupca" : trenutniKorisnik.ime,
            "prezimeKupca" : trenutniKorisnik.prezime,
            "korisnickoImeKupca" : trenutniKorisnik.korisnickoIme,
            "listaKupljenihStvari" : korpa,
            "ukupnaCena" : ukupnaCena
        };
        racuni.push(noviRacun);
        window.localStorage.setItem("racuni",JSON.stringify(racuni));
        let praznaKorpa = [];
        window.localStorage.setItem("korpa",JSON.stringify(praznaKorpa));
        window.alert("Racun uspesno napravljen!");
        window.location.href = "pocetnaStrana.html";
    }
    else{
        let noviRacun = {
            "imeKupca" : trenutniKorisnik.ime,
            "prezimeKupca" : trenutniKorisnik.prezime,
            "korisnickoImeKupca" : trenutniKorisnik.korisnickoIme,
            "listaKupljenihStvari" : korpa,
            "ukupnaCena" : ukupnaCena
        };
        racuni.push(noviRacun);
        window.localStorage.setItem("racuni",JSON.stringify(racuni));
        let praznaKorpa = [];
        window.localStorage.setItem("korpa",JSON.stringify(praznaKorpa));
        window.alert("Racun uspesno napravljen!");
        window.location.href = "pocetnaStrana.html";
    }
}

