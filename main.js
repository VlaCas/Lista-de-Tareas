let altTar = 6
unaList = true
crearTarea = () => {

    altTar = altTar + 1.4
    document.getElementsByClassName("contenedor")[0].style.height = altTar + "rem";

    setTimeout(() => {

        let contenedor = document.getElementsByClassName("contenedor")[0];
        if (unaList) {listTar = document.createElement("ol"); listTar.setAttribute("id", "listaTareas"); unaList = false};

        let newTar = document.createElement("textArea");
        newTar.setAttribute("class", "tarea");
        newTar.setAttribute("placeHolder", "Nueva tarea...");
        newTar.setAttribute("rows", "1");
        contenedor.appendChild(listTar);
        document.getElementById("listaTareas").appendChild(newTar);
        newTar.focus();
        

        newTar.addEventListener("blur", () => {
            if (newTar.parentNode) {
                console.log("desenfocado");
                let p = document.createElement("p");
                p.setAttribute("class", "parrafos");
                listTar.replaceChild(p, newTar);
                p.innerText = newTar.value;
                if (p.innerText.length == 0) {p.innerText = "Nueva Tarea..."} 
                else if (p.innerText.length >= 23 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar + 1 + "rem"; altTar = altTar + 1}
                console.log(p.innerText.length)}});

        newTar.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                console.log("presiono enter")
                let text = newTar.value;
                if (text.length >= 23 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar + 1 + "rem"}
                let p = document.createElement("p");
                p.innerText = text;
                p.setAttribute("class", "parrafos");
                let bot = document.createElement("button");
                let bot2 = document.createElement("button");
                let bot3 = document.createElement("button");
                bot.setAttribute("class", "botonesAcciones");


                listTar.replaceChild(p, newTar)}})}, 0700)}

let cambiarTema = () => {
    document.body.style = "background: radial-gradient(at center bottom, rgb(191,211,232) -35%, rgb(126,170,199) 70%); transition: background 1s ease;"
}