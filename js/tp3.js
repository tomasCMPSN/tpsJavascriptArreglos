let resultados = [];

let sumaResultado = 0;

let contador2 = 0;

let contador3 = 0;

let contador4 = 0;

let contador5 = 0;

let contador6 = 0;

let contador7 = 0;

let contador8 = 0;

let contador9 = 0;

let contador10 = 0;

let contador11 = 0;

let contador12 = 0;

do{
    sumaResultado = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    resultados.push(sumaResultado);
}while(resultados.length <= 49);

for(let posicion = 0; posicion < resultados.length; posicion++){
    if(resultados[posicion] == 2){
        contador2++;
    }
    if(resultados[posicion] == 3){
        contador3++;
    }
    if(resultados[posicion] == 4){
        contador4++;
    }
    if(resultados[posicion] == 5){
        contador5++;
    }
    if(resultados[posicion] == 6){
        contador6++;
    }
    if(resultados[posicion] == 7){
        contador7++;
    }
    if(resultados[posicion] == 8){
        contador8++;
    }
    if(resultados[posicion] == 9){
        contador9++;
    }
    if(resultados[posicion] == 10){
        contador10++;
    }
    if(resultados[posicion] == 11){
        contador11++;
    }
    if(resultados[posicion] == 12){
        contador12++;
    }
}

document.write("<br>El número 2, apareció "+contador2+" veces.");
document.write("<br>El número 3, apareció "+contador3+" veces.");
document.write("<br>El número 4, apareció "+contador4+" veces.");
document.write("<br>El número 5, apareció "+contador5+" veces.");
document.write("<br>El número 6, apareció "+contador6+" veces.");
document.write("<br>El número 7, apareció "+contador7+" veces.");
document.write("<br>El número 8, apareció "+contador8+" veces.");
document.write("<br>El número 9, apareció "+contador9+" veces.");
document.write("<br>El número 10, apareció "+contador10+" veces.");
document.write("<br>El número 11, apareció "+contador11+" veces.");
document.write("<br>El número 12, apareció "+contador12+" veces.");