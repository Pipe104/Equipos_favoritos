window.onload = function() {
    const nombre1 = sessionStorage.getItem("nombre1");
    const nombre2 = sessionStorage.getItem("nombre2");
    const nombre3 = sessionStorage.getItem("nombre3");
    const equipo1 = sessionStorage.getItem("equipo1");
    const equipo2 = sessionStorage.getItem("equipo2");
    const equipo3 = sessionStorage.getItem("equipo3");

    document.getElementById("nombre1").textContent = nombre1;
    document.getElementById("nombre2").textContent = nombre2;
    document.getElementById("nombre3").textContent = nombre3;

    document.getElementById("equipo1").textContent = equipo1;
    document.getElementById("equipo2").textContent = equipo2;
    document.getElementById("equipo3").textContent = equipo3;
}