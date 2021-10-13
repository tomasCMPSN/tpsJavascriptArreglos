var resultado = [];

do{
    var ciudades = prompt("Ingrese ciudades");
    resultado.push(`${ciudades}<br>`);
}while(confirm("¿Desea seguir?"));

document.write(resultado+"<br>");

document.write("Longitud: "+resultado.length+"<br>");

document.write("<br>Primer ciudad: "+resultado[0]+"<br>");

document.write("Tercer ciudad: "+resultado[2]+"<br>");

document.write("Última ciudad: "+resultado[resultado.length - 1]+"<br>");

resultado.push("París");

document.write("Segunda ciudad: "+resultado[1]+"<br>");

resultado.splice(1, 0, "Barcelona");