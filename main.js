let altTar = 6
crearTarea = () => {
    altTar = altTar + 1.65
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
        newTar.addEventListener("blur", () => {
            let p = document.createElement("p");
            p.innerText = newTar.value;
            newP.setAttribute("class", "parrafos")
            listTar.replaceChild(p, newTar);
            
        });
        newTar.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
              let text = this.value;
              let newP = document.createElement("p");
              newP.innerText = text;
              this.replaceWith(newP);
              newP.setAttribute("class", "parrafos")
            }
        
        });
        
    }, 0500);
};