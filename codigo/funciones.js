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
