let altTar = 6
let unaList = true
let colPar = "white"
let tareaTerminada = false

crearTarea = () => {

    altTar = altTar + 1.65
    document.getElementsByClassName("contenedor")[0].style.height = altTar + "rem";

    setTimeout(() => {

        const contenedor = document.getElementsByClassName("contenedor")[0];
        if (unaList) {listTar = document.createElement("ol"); listTar.setAttribute("id", "listaTareas"); unaList = false};
        contenedor.appendChild(listTar);

        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        div1.setAttribute("class", "contenedorTarea");
        div2.setAttribute("class", "contenedorTextoTarea");
        div3.setAttribute("class", "contenedorBotonesAcciones");
        listTar.appendChild(div1)
        div1.appendChild(div2)
        div1.appendChild(div3)

        let newTar = document.createElement("textArea");
        newTar.setAttribute("class", "tarea");
        newTar.setAttribute("placeHolder", "Nueva tarea...");
        newTar.setAttribute("rows", "1");
        div2.appendChild(newTar);

        newTar.focus();
        
        newTar.addEventListener("blur", () => {
            if (newTar.parentNode) {
                console.log("desenfocado");
                let p = document.createElement("p");
                p.setAttribute("class", "parrafos");
                p.innerText = newTar.value;
                p.style = "color: " + colPar;
                if (p.innerText.length == 0) {p.innerText = "Nueva tarea..."}
                else if (p.innerText.length >= 18 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar + 1.1 + "rem"; altTar = altTar + 1.1};

                const bot = document.createElement("button");
                const bot2 = document.createElement("button");
                const bot3 = document.createElement("button");
                bot.setAttribute("class", "botonesAcciones");
                bot2.setAttribute("class", "botonesAcciones");
                bot3.setAttribute("class", "botonesAcciones");
                div3.appendChild(bot);
                div3.appendChild(bot2);
                div3.appendChild(bot3);

                const botsvg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                botsvg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                botsvg1.setAttribute("width", "16");
                botsvg1.setAttribute("height", "16");
                botsvg1.setAttribute("viewBox", "-1.5 2.5 25 20");
                const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                polygon.setAttribute("points", "16 3 21 8 8 21 3 21 3 16 16 3");
                polygon.setAttribute("fill", "none");
                polygon.setAttribute("stroke", "#ffffff");
                polygon.setAttribute("stroke-width", "2");
                polygon.setAttribute("stroke-linecap", "butt");
                polygon.setAttribute("stroke-linejoin", "arcs");
                botsvg1.appendChild(polygon);
                bot.appendChild(botsvg1); 

                const botsvg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                botsvg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                botsvg2.setAttribute("width", "16");
                botsvg2.setAttribute("height", "16");
                botsvg2.setAttribute("viewBox", "0 0 24 24");
                const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                polyline.setAttribute("points", "20 6 9 17 4 12");
                polyline.setAttribute("fill", "none");
                polyline.setAttribute("stroke", "#ffffff");
                polyline.setAttribute("stroke-width", "2");
                polyline.setAttribute("stroke-linecap", "butt");
                polyline.setAttribute("stroke-linejoin", "arcs");
                botsvg2.appendChild(polyline);
                bot2.appendChild(botsvg2);

                const botsvg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                botsvg3.setAttributeNS(null, "width", "16");
                botsvg3.setAttributeNS(null, "height", "16");
                botsvg3.setAttributeNS(null, "viewBox", "-1.2 0 26 24");
                botsvg3.setAttributeNS(null, "fill", "none");
                botsvg3.setAttributeNS(null, "stroke", "#ffffff");
                botsvg3.setAttributeNS(null, "stroke-width", "2");
                botsvg3.setAttributeNS(null, "stroke-linecap", "butt");
                botsvg3.setAttributeNS(null, "stroke-linejoin", "arcs");
                const polyline2 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                polyline2.setAttributeNS(null, "points", "3 6 5 6 21 6");
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttributeNS(null, "d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");
                const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line1.setAttributeNS(null, "x1", "10");
                line1.setAttributeNS(null, "y1", "11");
                line1.setAttributeNS(null, "x2", "10");
                line1.setAttributeNS(null, "y2", "17");
                const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line2.setAttributeNS(null, "x1", "14");
                line2.setAttributeNS(null, "y1", "11");
                line2.setAttributeNS(null, "x2", "14");
                line2.setAttributeNS(null, "y2", "17");
                botsvg3.appendChild(polyline2);
                botsvg3.appendChild(path);
                botsvg3.appendChild(line1);
                botsvg3.appendChild(line2);
                bot3.appendChild(botsvg3);

                bot.addEventListener("click", () => {
                    let textArea = document.createElement("textarea");
                    textArea.setAttribute("class", "tarea");
                    textArea.setAttribute("rows", "1");
                    textArea.value = div2.lastChild.innerText;
                    div2.removeChild(div2.lastChild)
                    div2.appendChild(textArea);
                    textArea.focus();
                    textArea.setSelectionRange(textArea.value.length, textArea.value.length);

                    textArea.addEventListener("blur", () => {
                        let parrafo = document.createElement("p");
                        parrafo.innerText = textArea.value;
                        parrafo.setAttribute("class", "parrafos");
                        parrafo.style.color = colPar
                        div2.removeChild(div2.lastChild)
                        div2.appendChild(parrafo)});

                    textArea.addEventListener("keydown", function(event){
                        if (event.key === "Enter") {
                            let parrafo = document.createElement("p");
                            parrafo.innerText = textArea.value;
                            parrafo.setAttribute("class", "parrafos");
                            div2.removeChild(div2.lastChild);
                            div2.appendChild(parrafo)}})})
                    
                bot2.addEventListener("click", () => {
                    if (div2.lastChild.style.color == "grey") {
                        if (colPar == "white"){
                            div2.lastChild.style = "text-decoration: none; color: white;"}
                        else
                            div2.lastChild.style = "text-decoration: none; color: rgb(61, 81, 139);"
                            }
                    else {
                        div2.lastChild.style = "text-decoration: line-through; color: grey;"}});

                bot3.addEventListener("click", () => {
                    listTar.removeChild(div1)
                    document.getElementsByClassName("contenedor")[0].style.height = altTar - 1.65 + "rem"; altTar = altTar - 1.65
                    if (p.innerText.length >= 18 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar - 1.1 + "rem"; altTar = altTar - 1.1};
                })


                div2.replaceChild(p, newTar)}});

        newTar.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                console.log("presiono enter")
                let text = newTar.value;
                let p = document.createElement("p");
                p.innerText = text;
                p.style = "color: " + colPar
                p.setAttribute("class", "parrafos");
                div2.replaceChild(p, newTar)}})}, 0700)}

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
            textDecoration = window.getComputedStyle(parrafos[i]);
            console.log(textDecoration)
            if (textDecoration.getPropertyValue("text-decoration") === "none solid rgb(255, 255, 255)") {
                parrafos[i].style = "color: rgb(61, 81, 139);"}}}
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
            textDecoration = window.getComputedStyle(parrafos[i]);
            console.log(textDecoration)
            if (textDecoration.getPropertyValue("text-decoration") === "none solid rgb(61, 81, 139)") {
                parrafos[i].style = "color: white;"}}}}