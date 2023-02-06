let altTar = 6
crearTarea = () => {
    altTar = altTar + 2
    document.getElementsByClassName("contenedor")[0].style.height = altTar + "rem";
    setTimeout(() => {
        let contenedor = document.getElementsByClassName("contenedor")[0];
        listTar = document.createElement("ol");
        let newTar = document.createElement("textArea");
        newTar.setAttribute("class", "tarea");
        newTar.setAttribute("placeHolder", "Nueva tarea...");
        newTar.setAttribute("rows", "1");
        contenedor.appendChild(listTar);
        listTar.appendChild(newTar);
        newTar.focus();
    }, 0500);
};