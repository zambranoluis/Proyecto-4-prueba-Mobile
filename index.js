// Reloj y Calendario - inicio

function showClock(){
    let date = new Date();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    let clock = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock").textContent = clock;
}

function showCalendar(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let calendar = `${day}/${month}/${year}`;
    document.getElementById("calendar").textContent = calendar;
}

function formatTime(time){
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

setInterval(showClock, 1000);
setInterval(showCalendar, 1000);

// Reloj y Calendario - fin

// Cambio de Categoria - Inicio


// Cambio de Categoria - Fin