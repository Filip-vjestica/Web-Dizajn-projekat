function dodajKnjigu(){
    let knjige = JSON.parse(window.localStorage.getItem("knjige"));
    let idKnjige = document.getElementById("idKnjige").value;
    let nazivKnjige = document.getElementById("nazivKnjige").value;
    let godinaIzdavanja = document.getElementById("godinaIzdavanjaKnjige").value;
    let cenaKnjige = document.getElementById("cenaKnjige").value;
    let brojPrimeraka = document.getElementById("brojPrimerakaKnjige").value;
    let slikaOmota = document.getElementById("slikaOmotaKnjige").value;
    let autor = document.getElementById("izborAutora").value;
    let idKnjigeKaoBroj = parseInt(idKnjige,10);

    if(!idKnjige || !nazivKnjige || !godinaIzdavanja || !cenaKnjige || !brojPrimeraka || !slikaOmota || !autor){
        alert("Sva polja moraju biti popunjena!");
        return;
    }
    if(parseInt(godinaIzdavanja,10) > new Date().getFullYear()){
        alert("Ne mozete staviti vecu godinu od trenutne!");
        return;
    }
    for(let knjiga of knjige){
        if(knjiga.id == idKnjigeKaoBroj){
            alert("Vec postoji knjiga sa ovim id-em!");
            return;
        }
    }
    let novaKnjiga = {
        "id" : idKnjigeKaoBroj,
        "naziv" : nazivKnjige,
        "autor" : autor,
        "godinaIzdavanja" : godinaIzdavanja,
        "cena" : cenaKnjige,
        "brojPrimeraka" : brojPrimeraka,
        "slikaOmota" : napraviPath()
    }
    knjige.push(novaKnjiga);
    window.localStorage.setItem("knjige",JSON.stringify(knjige));
    alert("Nova knjiga uspesno dodata!");
    window.location.href = "pocetnaStrana.html";
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

function napraviPath(){
    let val = document.getElementById("slikaOmotaKnjige").value.split("\\").pop();
    return `Data/${val}`;
}

