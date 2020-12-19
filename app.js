
//obteniendo acceso al evento listerner al enviar la tarea mediante la funcion  salvarTarea
document.getElementById('Formulario_tareas').addEventListener('submit', salvarTarea);
//Funcion salvarTarea 
function salvarTarea() {
    let tarea = document.getElementById('entradaTarea').value;
    //se optiene la entrada de la tarea del texto a una variable local tarea 
    //se almacena en un objeto la variable anterior con la tarea. 
    const objetoTarea = {

        tarea

};

//si no hay tareas en el local store
if(localStorage.getItem('tareas') === null) {
    let tareas = [];//se inicializa el arreglo  tareas 
    tareas.push(tarea);//se agrega el valor de la tarea actual 
    localStorage.setItem('tareas', JSON.stringify(tareas));//se agrega a un json 
  } else { // si ya exitiese alguna tarea 
    let tareas = JSON.parse(localStorage.getItem('tareas'));//se agrega la tarea a un json 
    tareas.push(tarea);//se agrega al store
    localStorage.setItem('tareas', JSON.stringify(tareas)); //de json a texto para presenar 
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
  
  function getTareas() {  ///opteniendo los items. 
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let tareasView = document.getElementById('descripcionTarea');
    tareasView.innerHTML = '';
    for(let i = 0; i < tareas.length; i++) {//recorriendo el arreglo 
      let listaTareas = tareas[i]
     
  

    //mostrando y esperando el clic. 
      tareasView.innerHTML += `<div ">
      ${listaTareas}
      <button id='eliminar'  onclick=eliminarTarea('${listaTareas}')  class = 'delete-item' > Eliminar </button>

       
        </div>
        
        
        `;         

    }
  }  
  getTareas();
  
 
  