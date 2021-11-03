function envio() {
  var peso= document.getElementById("weight").value;
  var peso1=document.getElementById("prim").value;
  var peso2=document.getElementById("seg").value;
  var peso4=document.getElementById("cuart").value;
  var porc1=(peso1*100)/peso;
  var porc2=(peso2*100)/peso;
  var porc4=(peso4*100)/peso;
  
  var fecha=document.getElementById("date").value;
  var hora=document.getElementById("hora").value;
  var lote=document.getElementById("lote").value;
  var variedad=(document.getElementById("var").value)+"\n"+(document.getElementById("productor").value);

 //* document.getElementById('porc1').innerHTML = porc1;
 //* document.getElementById('porc2').innerHTML = porc2;
  //*document.getElementById('porc4').innerHTML = porc4;
  
  var color=document.getElementById("color").value;
  var calibre=document.getElementById("calibre").value;
  var brix=document.getElementById("brix1").value +"\n"+ document.getElementById("brix2").value +"\n"+ document.getElementById("brix3").value
  var presion=document.getElementById("presion").value;
  var ting=document.getElementById("ting").value;
  var defectos=document.getElementById("def").value;
  var veh=document.getElementById("veh").value;
  var firmaresp="";
  var firmaver="";

  formulario=[fecha, hora, lote, variedad, porc1, porc2, porc4, color, calibre, brix, presion, ting, defectos, veh, firmaresp, firmaver]
  if ((porc1+porc2+porc4)>100) {
    alert("revisar peso")
  }
 else{
    var row = document.createElement("tr");
    for (var j = 0; j <formulario.length; j++) {
      var celda = document.createElement("td");
      var elemento = document.createTextNode(formulario[j]);
      celda.appendChild(elemento);
      row.appendChild(celda);
    }
    var celda10 = document.createElement("td");
    celda10.innerHTML='<button type="button" name="remove" id="quitar" onclick="borrar(this)" class="btn btn-danger">Quitar</button>';
    row.appendChild(celda10);                
    document.getElementById("tbody").appendChild(row);
  }
  
    
}
function borrar(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("tabla").deleteRow(i);
}


var tableToExcel = (function () {


 var uri = 'data:application/vnd.ms-excel;base64,',
 template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
 base64 = function(s) {
   return window.btoa(unescape(encodeURIComponent(s)))
 },
 format = function(s, c) {
   return s.replace(/{(\w+)}/g, function(m, p) {
     return c[p];
   })
 }
 return function(table, name) {
  var size= document.getElementById(table).rows.length;
  if (size>1) {


   if (!table.nodeType) table = document.getElementById(tabla)
     var ctx = {
       worksheet: name || 'Worksheet',
       table: tabla.innerHTML
     }
     window.location.href = uri + base64(format(template, ctx))
   }
   
   
   else{
    document.getElementById("alerta").innerHTML='<div class="alert alert-danger alert-dismissible fade show" role="alert">Debe haber al menos un registro para exportar!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
 
    }
}
})()

var unidad = 5;
var decena = 6;
var centena = 7;
var int=0;

function adivinar() {
  
 var alertC="";
 var alertD="";
 var alertU="";
 
  var centenaF = document.getElementById('centena').value;
  var decenaF = document.getElementById('decena').value;
  var unidadF = document.getElementById('unidad').value;

  if ((centenaF == '') || (decenaF == '') || (unidadF == '')) {
    alert('ningun valor puede estar vacio o no ser numero');
  } else if ((centenaF == decenaF) || (centenaF == unidadF) || (decenaF == unidadF)) {
    alert('ningun valor puede estar repetido');
  } else {
    if ((unidad == unidadF) && (decena == decenaF) && (centena == centenaF)) {

      document.getElementById('alerta').innerHTML = '<p style="color: green; font-size: 40px;">' + centena + decena + unidad + ' contraseña correcta  </p>';
      document.getElementById('cen').innerHTML = "";
      document.getElementById('dec').innerHTML = "";
      document.getElementById('un').innerHTML = "";
    } else {

      if (centena == centenaF) {
        alertC += centenaF + ' en centena es correcto <br>';
      } else {
        alertC += centenaF + ' en centena es incorrecto <br>';
      }

      if (decena == decenaF) {
        alertD += decenaF + ' en decena es correcto <br>';
      } else {
        alertD += decenaF + ' en decena es incorrecto <br>';
      }


      if (unidad == unidadF) {
        alertU += unidadF + ' en unidad es correcto <br>';
      } else {
        alertU += unidadF + ' en unidad es incorrecto <br>';
      }
      document.getElementById('cen').innerHTML = alertC;
      document.getElementById('dec').innerHTML = alertD;
      document.getElementById('un').innerHTML = alertU;
     document.getElementById('alerta').innerHTML = "";

    }
     int++;
     document.getElementById('intento').innerHTML = int;
  }
   
  }
  function erase(){
    document.getElementById('cen').innerHTML = "";
      document.getElementById('dec').innerHTML = "";
      document.getElementById('un').innerHTML = "";
     document.getElementById('alerta').innerHTML = "";
     int=0;
     document.getElementById('intento').innerHTML = int;
  }
 


