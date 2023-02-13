let altTar = 6;
let unaList = true;
let colPar = "white";
let tareaTerminada = false;

crearTarea = () => {

    if (window.innerWidth <= 350) {
        altTar = altTar + 2.85;
        document.getElementsByClassName("contenedor")[0].style.height = altTar + "rem";
    }
    else {
        altTar = altTar + 4.2;
        document.getElementsByClassName("contenedor")[0].style.height = altTar + "rem";
    }; 

    setTimeout(() => {

        const contenedor = document.getElementsByClassName("contenedor")[0];
        if (unaList) {
            listTar = document.createElement("ol"); 
            listTar.setAttribute("id", "listaTareas"); 
            unaList = false;
        };

        contenedor.appendChild(listTar);
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        div1.setAttribute("class", "contenedorTarea");
        div2.setAttribute("class", "contenedorTextoTarea");
        div3.setAttribute("class", "contenedorBotonesAcciones");
        let hr1 = document.createElement("hr");
        listTar.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
        listTar.appendChild(hr1);

        let newTar = document.createElement("textArea");
        newTar.setAttribute("class", "tarea");
        newTar.setAttribute("placeHolder", "Nueva tarea...");
        newTar.setAttribute("rows", "1");
        div2.appendChild(newTar);

        newTar.focus();
        
        newTar.addEventListener("blur", () => {
            if (newTar.parentNode) {
                let p = document.createElement("p");
                p.setAttribute("class", "parrafos");
                p.innerText = newTar.value;
                p.style = "color: " + colPar;
                if (p.innerText.length == 0) {p.innerText = "Nueva tarea..."}
                else if (p.innerText.length >= 18 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar + 1.1 + "rem"; altTar = altTar + 1.1}
                else if (p.innerText.length >= 49 && window.innerWidth >= 1080) {document.getElementsByClassName("contenedor")[0].style.height = altTar + .45 + "rem"; altTar = altTar + .45};

                const bot = document.createElement("button");
                const bot2 = document.createElement("button");
                const bot3 = document.createElement("button");
                bot.setAttribute("class", "botonesAcciones");
                bot2.setAttribute("class", "botonesAcciones");
                bot3.setAttribute("class", "botonesAcciones");
                div3.appendChild(bot);
                div3.appendChild(bot2);
                div3.appendChild(bot3);

                const botsvg1 = document.createElement("img");
                window.innerWidth <= 350 ? botsvg1.setAttribute("src", "icon1-a.svg") : botsvg1.setAttribute("src", "icon1-b.svg");
                bot.appendChild(botsvg1);
                const botsvg2 = document.createElement("img");
                window.innerWidth <= 350 ? botsvg2.setAttribute("src", "icon2-a.svg") : botsvg2.setAttribute("src", "icon2-b.svg");
                bot2.appendChild(botsvg2);
                const botsvg3 = document.createElement("img");
                window.innerWidth <= 350 ? botsvg3.setAttribute("src", "icon3-a.svg") : botsvg3.setAttribute("src", "icon3-b.svg");
                bot3.appendChild(botsvg3);

                bot.addEventListener("click", () => {
                    let textArea = document.createElement("textarea");
                    textArea.setAttribute("class", "tarea");
                    textArea.setAttribute("rows", "1");
                    textArea.style = "padding-top: 0"
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
                        if (parrafo.innerText.length >= 49 && window.innerWidth >= 1080) {document.getElementsByClassName("contenedor")[0].style.height = altTar + .4 + "rem"; altTar = altTar + .4};
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
                    listTar.removeChild(hr1)
                    if (window.innerWidth <= 350) {
                        document.getElementsByClassName("contenedor")[0].style.height = altTar - 2.85 + "rem"; altTar = altTar - 2.85;
                        if (p.innerText.length >= 18 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar - 1.1 + "rem"; altTar = altTar - 1.1};
                    }
                    else {
                        document.getElementsByClassName("contenedor")[0].style.height = altTar - 4.2 + "rem"; altTar = altTar - 4.2;
                        if (p.innerText.length >= 49 && window.innerWidth >= 1080) {document.getElementsByClassName("contenedor")[0].style.height = altTar - .4 + "rem"; altTar = altTar - .4};
                    }})


                div2.replaceChild(p, newTar)}});

        newTar.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
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
        hr = document.querySelectorAll("hr");
        for (i = 0; i < hr.length; i++) {
            hr[i].style = "background-color: rgb(128, 151, 203)"}
        parrafos = document.querySelectorAll("p");
        for (i = 0; i < parrafos.length; i++) {
            textDecoration = window.getComputedStyle(parrafos[i]);
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
        hr = document.querySelectorAll("hr");
        for (i = 0; i < hr.length; i++) {
            hr[i].style = "background-color: rgba(255, 255, 255, .1)"}
        parrafos = document.querySelectorAll("p");
        for (i = 0; i < parrafos.length; i++) {
            textDecoration = window.getComputedStyle(parrafos[i]);
            if (textDecoration.getPropertyValue("text-decoration") === "none solid rgb(61, 81, 139)") {
                parrafos[i].style = "color: white;"}}}}