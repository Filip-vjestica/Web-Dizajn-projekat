function dodajAutora(){
    let autori = JSON.parse(localStorage.getItem("autori"));

    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;

    let imeZaProveru = ime.toLowerCase();
    let prezimeZaProveru = prezime.toLowerCase();

    if(!ime || !prezime){
        alert("Sva polja moraju biti popunjena!");
        return;
    }

    for(let autor of autori){
        if(autor.ime.toLowerCase()==imeZaProveru && autor.prezime.toLowerCase()==prezimeZaProveru){
            alert("Ovaj autor vec postoji!");
             return;
        }
    }
    let noviAutor = {
        "ime" : ime,
        "prezime" : prezime
    }

    autori.push(noviAutor);
    window.localStorage.setItem("autori",JSON.stringify(autori));
    alert("Novi autor uspesno dodat!");
    window.location.href = "pocetnaStrana.html";

}