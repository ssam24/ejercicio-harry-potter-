
const casas = [];

let registrarCasas = (e) => {
	var valor = document.getElementById("txt_casa").value; 
    if(valor.trim() != "" && valor.trim() != null && valor.length == 1){
        if(casas.length < 16){
            casas.push(valor.toLocaleUpperCase());
            document.getElementById("txt_casa").value = "";
            //alert("Facción registrada.");
        }else{
            alert("Ya se registro el total de personas");
        }
    }else{
        alert("Debe ingresar un valor de casa valido");
    }
}
let calcularTotalCasas = (e) => {
	let contadores_casas = [0,0,0,0,0];
    let porcentajes_casas = [0,0,0,0,0];
	let Contador_Gryffindor = 0, Contador_Slytherin = 0, Contador_Hufflepuf = 0, Contador_Ravenclaw = 0, Contador_Otra = 0; 
    let porcentaje1 = 0;
    var HTML_TOTAL = ''; 

    casas.forEach((element, index) => {
        //console.log(element);
        if(element == "G"){ 
            contadores_casas[0] = contadores_casas[0] + 1
        }else if(element == 'S'){
            Contador_Slytherin++;
        }else if(element == 'H'){
            Contador_Hufflepuf++;
        }else if(element == 'R'){
            Contador_Ravenclaw++;
        }
    }); 


 porcentajes_casas[0] = (contadores_casas[0]/casas.length) * 100 ;
 HTML_TOTAL = `<table border=1>
 <tr>
     <td>Gryffindor (G)</td>
     <td>${contadores_casas[0]}</td>
     <td>${porcentajes_casas[0]}%</td>
 </tr>
 <tr>
     <td>Slytherin (S)</td>
     <td>${Contador_Slytherin}</td>
     <td>${(Contador_Slytherin/casas.length)*100}%</td>
 </tr>
 <tr>
     <td>Hufflepuf (F)</td>
     <td>${Contador_Hufflepuf}</td>
     <td>${(Contador_Hufflepuf/casas.length)*100}%</td>
 </tr>
 <tr>
     <td>Ravenclaw (R)</td>
     <td>${Contador_Ravenclaw}</td>
     <td>${(Contador_Ravenclaw/casas.length)*100}%</td>
 </tr>
 <tr>
 </table>`; 

 document.getElementById('ctn_totalcasas').innerHTML = HTML_TOTAL;
}
document.getElementById('btn_enviar_casa').addEventListener('click', registrarCasas);
document.getElementById('calcular_total_casas').addEventListener('click', calcularTotalCasas)
