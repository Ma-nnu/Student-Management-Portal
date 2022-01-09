function openStudentModal(){
    document.getElementById('pi').value = "";
    document.getElementById('ei').value = "";
    document.getElementById('modal').style.display = 'block';
    document.getElementById('one').style.display = 'none';
 }
 function closeStudentModal(){
   if(!document.getElementById('pi').value == ""){
     if(!document.getElementById('ei').value == ""){
       document.getElementById('modal').style.display = 'none';
       document.getElementById('one').style.display = 'block';
           let id = document.getElementById('table').rows.length + 1;
           let pi = document.getElementById('pi').value;
           let ei = document.getElementById('ei').value;
           let tr = `
                <tr class="tr" data-id="${id}">
                   <td>${id}</td>
                   <td id="data${id}">${pi}<br/>${ei}</td>
                   <td><button id="edit">Edit</button></td>
               </tr>`
             document.querySelector('table').innerHTML += tr;
     }
     else{
       alert("Educational Information is required");
     }
   }
   else{
     alert("Personal Information is required");
   }
 }
