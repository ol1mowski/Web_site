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