let altTar = 6;
let unaList = true;
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
                if (p.innerText.length == 0) {p.innerText = "Nueva tarea..."}
                else if (p.innerText.length >= 18 && window.innerWidth <= 350) {document.getElementsByClassName("contenedor")[0].style.height = altTar + 1.1 + "rem"; altTar = altTar + 1.1}
                else if (p.innerText.length >= 49 && window.innerWidth >= 1080) {document.getElementsByClassName("contenedor")[0].style.height = altTar + .45 + "rem"; altTar = altTar + .45};

                let listBot = [bot1=undefined,bot2=undefined,bot3=undefined,botSvg1=undefined,botSvg2=undefined,botSvg3=undefined,"icon1-a.svg","icon2-a.svg","icon3-a.svg","icon1-b.svg","icon2-b.svg","icon3-b.svg"];
                for (i = 0; i <= 2; i++) {
                    listBot[i] = document.createElement("button");
                    listBot[i].setAttribute("class", "botonesAcciones");
                    div3.appendChild(listBot[i])
                    listBot[i+3] = document.createElement("img");
                    window.innerWidth <= 350 ? listBot[i+3].setAttribute("src", listBot[i+6]) : listBot[i+3].setAttribute("src", listBot[i+9]);
                    listBot[i].appendChild(listBot[i+3])};

                listBot[0].addEventListener("click", () => {
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
                    
                listBot[1].addEventListener("click", () => {div2.lastChild.style.textDecoration == "none" ? div2.lastChild.style = "text-decoration: line-through; color: grey" : div2.lastChild.style = "text-decoration: none"});

                listBot[2].addEventListener("click", () => {
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
                p.setAttribute("class", "parrafos");
                div2.replaceChild(p, newTar)}})}, 0700)}

let cambiarTema = () => {document.body.classList.toggle("cambioTema")}