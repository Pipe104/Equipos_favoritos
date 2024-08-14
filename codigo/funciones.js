function validar(){
	if(document.getElementById('nombre1').value==""){
		alert('Debes decir el nombre del primer jugador');
		return;
	}
	if(document.getElementById('nombre2').value==""){
		alert('Debes decir el nombre del segundo jugador');
		return;
	}
	if(document.getElementById('nombre3').value==""){
		alert('Debes decir el nombre del tercer jugador');
		return;
	}
	if(document.getElementById('equipo1').value==""){
		alert('Debes decir el nombre del primer jugador');
		return;
	}
	if(document.getElementById('equipo2').value==""){
		alert('Debes decir el equipo del segundo jugador');
		return;
	}
	if(document.getElementById('equipo3').value==""){
		alert('Debes decir el equipo del tercer jugador');
		return;
	}
	alert("Formulario completo");
}

function guardarDatos() {
	const nombre1 = document.getElementById("nombre1").value;
	const nombre2 = document.getElementById("nombre2").value;
	const nombre3 = document.getElementById("nombre3").value;
	const equipo1 = document.getElementById("equipo1").value;
	const equipo2 = document.getElementById("equipo2").value;
	const equipo3 = document.getElementById("equipo3").value;
	
	sessionStorage.setItem("nombre1", nombre1);
	sessionStorage.setItem("nombre2", nombre2);
	sessionStorage.setItem("nombre3", nombre3);
	sessionStorage.setItem("equipo1", equipo1);
	sessionStorage.setItem("equipo2", equipo2);
	sessionStorage.setItem("equipo3", equipo3);

	
}
