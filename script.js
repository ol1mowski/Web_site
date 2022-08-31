let pokazGodzine = () => {
    let data = new Date();

    let sekunda = data.getSeconds();
    let minuta = data.getMinutes();
    let godzina = data.getHours();

    if (sekunda < 10) {
        sekunda = '0' + sekunda;
    }

    if (minuta < 10) {
        minuta = '0' + minuta;
    }

    if (godzina < 10) {
        godzina = '0' + godzina;
    }

    let czas = godzina + ':' + minuta + ':' + sekunda;
    document.getElementById('czas').innerHTML = czas;
};

pokazGodzine();
setInterval("pokazGodzine()", 1000);

let sprawdz = (form) => {
    if (form.email.value == '') {
        alert("Pole email nie może być puste!");
        form.email.focus();
        return false;
    }
    if (form.imie.value == '') {
        alert("Treść nie może być pusta!");
        form.comment.focus();
        return false;
    }
}