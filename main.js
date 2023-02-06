crearTarea = () => {
    let contenedor = document.getElementsByClassName("contenedor")[0];
    listTar = document.createElement("ol");
    let newTar = document.createElement("textArea");
    newTar.setAttribute("class", "tarea");
    newTar.setAttribute("placeHolder", "Nueva tarea...")
    contenedor.appendChild(listTar);
    listTar.appendChild(newTar);
}