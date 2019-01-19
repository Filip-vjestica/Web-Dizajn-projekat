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

function dodatneOpcije(){
    let korisnik = JSON.parse(localStorage.getItem("trenutniKorisnik"));
    if(korisnik.tipKorisnika=="Administrator"){
        let div = document.getElementById("dodatni");

        let brisanjeK = document.createElement("button");
        brisanjeK.innerHTML = "Brisanje knjige";
        brisanjeK.id = "brisanjeK";
        brisanjeK.onclick = function(){brisanjeKnjige()};

        let izmenaK = document.createElement("button");
        izmenaK.innerHTML = "Izmena knjige";
        izmenaK.id = "izmenaK";
        izmenaK.onclick = function(){preusmeri()};

        div.appendChild(brisanjeK);
        div.appendChild(izmenaK);


    }
    else{
        let div = document.getElementById("dodatni");

        let kolicina = document.createElement("input");
        kolicina.id = "kolicinaKnjige";
        kolicina.placeholder = "Unesite kolicinu.";
        let br = document.createElement("br");

        let dodajuKorpu = document.createElement("button");
        dodajuKorpu.innerHTML = "Dodaj u korpu";
        dodajuKorpu.id = "dodajUKorpuDugme";
        div.appendChild(kolicina);
        div.appendChild(br);
        div.appendChild(dodajuKorpu);
        dodajuKorpu.onclick = function(){dodajUKorpu1()};
    }
}

function preusmeri(){
    let id = window.location.search.substring(1);

    let knjige = JSON.parse(window.localStorage.getItem("knjige"));

    for(let knjiga of knjige){
        if(knjiga.id == id){
            window.location = `./izmenaKnjige.html?${knjiga.id}`;
            break;
        }
    } 
}

function brisanjeKnjige(){
    let knjige = JSON.parse(localStorage.getItem("knjige"));
    let id = window.location.search.substring(1);
    let index = nadjiIndex(knjige,"id",id);

    knjige.splice(index,1);
    window.localStorage.setItem("knjige",JSON.stringify(knjige));
    window.alert("Knjiga je uspesno izbrisana!");
    window.location.href = "pocetnaStrana.html";

}

function nadjiIndex(lista,key,value){
    for(var i = 0;i < lista.length;i++){
        if(lista[i][key]==value){
            return i;
        }
    }
    return null;
}

function dodajUKorpu1(){
    let kolicina = document.getElementById("kolicinaKnjige").value;
    let knjige = JSON.parse(window.localStorage.getItem("knjige"));
    let id = window.location.search.substring(1);

    if(!kolicina){
        alert("Ovo polje ne moze biti prazno!");
        return;
    }

    for(let knjiga of knjige){
        if(knjiga.id == id){
            if(parseInt(kolicina,10) > parseInt(knjiga.brojPrimeraka)){
                alert("Ova kolicina nije dostupna!");
                return;
            }
        }
    }
    
    if(localStorage.getItem("korpa")===null){
        let korpa = [
            {
                "idKnjige" : id,
                "kolicina" : kolicina
            }
        ];
        window.localStorage.setItem("korpa",JSON.stringify(korpa));
        alert("Proizvod uspesno dodat u korpu!");
        window.location.href = "pocetnaStrana.html";
    }else{
        let korpa = JSON.parse(window.localStorage.getItem("korpa"));
        let noviProizvod = {
            "idKnjige" : id,
            "kolicina" : kolicina
        };
        korpa.push(noviProizvod);
        window.localStorage.setItem("korpa",JSON.stringify(korpa));
        alert("Proizvod uspesno dodat u korpu");
        window.location.href = "pocetnaStrana.html";
    }
}






