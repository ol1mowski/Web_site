//TimerSettings
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

//FormChecking

let sprawdz = (form) => {
    if (form.email.value == '') {
        alert("Pole email nie może być puste!");
        form.email.focus();
        return false;
    }
    if (form.name.value == '') {
        alert("Treść nie może być pusta!");
        form.name.focus();
        return false;
    }
}

//Drak Mode 
const button_Switch = document.querySelector('button');
let theme = localStorage.getItem('theme');

button_Switch.addEventListener('click', () => {
    if (theme == 'dark') {
        document.querySelector('body').classList.remove('dark');
        document.querySelector('body').classList.add('light');
        theme = 'light';
    }else {
        document.querySelector('body').classList.remove('light');
        document.querySelector('body').classList.add('dark');
        theme = 'dark';
    }
    localStorage.setItem('theme', theme)
});

if (theme == 'dark') {
    document.querySelector('body').classList.add('light');
    theme = 'light';
}

if (theme == 'light') {
    document.querySelector('body').classList.add('dark');
    theme = 'dark';
}