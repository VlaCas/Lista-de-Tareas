let altTar = 6
let unaList = true
let colPar = "white"

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
                p.style = "color: " + colPar
                if (p.innerText.length == 0) {p.innerText = "Nueva tarea..."} 
                else if (p.innerText.length >= 23 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar + 1 + "rem"; altTar = altTar + 1}
                console.log(p.innerText.length)}});

        newTar.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                console.log("presiono enter")
                let text = newTar.value;
                if (text.length >= 23 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar + 1 + "rem"}
                let p = document.createElement("p");
                p.innerText = text;
                p.style = "color: " + colPar
                p.setAttribute("class", "parrafos");
                let bot = document.createElement("button");
                let bot2 = document.createElement("button");
                let bot3 = document.createElement("button");
                bot.setAttribute("class", "botonesAcciones");


                listTar.replaceChild(p, newTar)}})}, 0700)}

let cambiarTema = () => {
    if (colPar == "white") { 
        colPar = "rgb(61, 81, 139)";
        document.body.style.background = "radial-gradient(at center bottom, rgb(191,211,232) -35%, rgb(126,170,199) 70%)";
        document.getElementsByTagName("div")[0].style.background = "rgba(255, 255, 255, .25)";
        document.getElementsByTagName("h1")[0].style = "color: #5370a7 ";
        document.getElementsByTagName("button")[0].style = "background: rgba(255, 255, 255, 0.40)";
        document.getElementsByTagName("svg")[0].style = "fill: none; stroke: #5370a7;";
        document.getElementsByTagName("button")[1].style = "background: rgba(255, 255, 255, 0.40)";
        svg2 = document.getElementsByTagName("svg")[1];
        svg2line1 = svg2.getElementsByTagName("line")[0];
        svg2line2 = svg2.getElementsByTagName("line")[1];
        svg2line1.setAttribute("stroke", "#5370a7");
        svg2line2.setAttribute("stroke", "#5370a7");
        document.querySelector("hr").style = "background-color: rgb(128, 151, 203)";
        parrafos = document.querySelectorAll("p");
        for (i = 0; i < parrafos.length; i++) {
            parrafos[i].style = "color: rgb(61, 81, 139);"}}
    else {
        colPar = "white";
        document.body.style.background = "radial-gradient(at center bottom, rgb(0, 63, 205) -35%, rgb(1, 2, 8) 70%)";
        document.getElementsByTagName("div")[0].style.background = "rgba(0, 0, 0, .4)";
        document.getElementsByTagName("h1")[0].style = "color: white";
        document.getElementsByTagName("button")[0].style = "background: rgba(255, 255, 255, .08)";
        document.getElementsByTagName("svg")[0].style = "fill: #fff; stroke: #fff;";
        document.getElementsByTagName("button")[1].style = "background: rgba(255, 255, 255, .08)";
        svg2 = document.getElementsByTagName("svg")[1];
        svg2line1 = svg2.getElementsByTagName("line")[0];
        svg2line2 = svg2.getElementsByTagName("line")[1];
        svg2line1.setAttribute("stroke", "#fff");
        svg2line2.setAttribute("stroke", "#fff");
        document.querySelector("hr").style = "background-color: rgba(255, 255, 255, .1)";
        parrafos = document.querySelectorAll("p");
        for (i = 0; i < parrafos.length; i++) {
            parrafos[i].style = "color: white; background"}}}