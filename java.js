function slrValtozo() {
document.getElementById("sliderErteke").innerHTML = document.getElementById("slider").value *1;
}

function btnKiszamol(){
    let kapacitas = document.getElementById("kapacitas").value*1;
    let kapacitasElemek = document.getElementById("kivalasztas");
    let ksebessegek = document.getElementById("ksebesseg");
    let slrErtek = document.getElementById("slider").value*1;

    kapSzamok = (kapacitas * (kapacitasElemek.value*1))
    atvSebessegek = (slrErtek * (ksebessegek.value*1))
    var eredmeny = kapSzamok / atvSebessegek;
    let adat = eredmeny;
    let ora = Math.floor(adat / 3600);
    adat = adat - ora * 3600;
    let perc = Math.floor(adat / 60);
    adat = adat - perc * 60;
    let masodperc = Math.round(adat,3);
    document.getElementById("eredM").innerHTML = `${ora} óra ${perc} perc ${masodperc} másodperc`;
    let ell = document.forms["urlap"]["kapacitas"].value;
    if(ell == "" || Number.isInteger(ell)){
       alert("Hibás adat")
    }
   
}
