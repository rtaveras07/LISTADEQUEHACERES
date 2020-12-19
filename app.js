 document.getElementById('Formulario_tareas').addEventListener('submit', salvarTarea);

function salvarTarea() {
    let tarea = document.getElementById('entradaTarea').value;
    


    
    const objetoTarea = {

        tarea

};
if(localStorage.getItem('tareas') === null) {
    let tareas = [];
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  } else {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  getTareas();
  document.getElementById('Formulario_tareas').reset();

}



function eliminarTarea(elementoEliminar) {
  eliminar=confirm("¿Deseas eliminar este registro?");
    if (eliminar)
     
  
          {

  
            let arreglo ='';
            arreglo = JSON.parse(localStorage.getItem('tareas'));
          for(let i = 0; i < arreglo.length; i++) {
            
            if(arreglo[i]== elementoEliminar) {
              arreglo.splice(i,1);
   
            
            }
          }
          
         localStorage.setItem('tareas', JSON.stringify(arreglo));
          getTareas();
          }
  
  
  }
  
  function getTareas() {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let tareasView = document.getElementById('descripcionTarea');
    tareasView.innerHTML = '';
    for(let i = 0; i < tareas.length; i++) {
      let listaTareas = tareas[i]
     
  
      tareasView.innerHTML += `<div ">
      ${listaTareas}

      <button id='eliminar'  onclick=eliminarTarea('${listaTareas}')  class = 'delete-item' > Eliminar </button>

       
        </div>
        
        
        `;         

    }
  }  
  getTareas();
  
 
  