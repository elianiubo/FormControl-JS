function diaSetmana(data) {
    let d = new Date(data);
    let month = ["GENER","FEBRER","MARÇ","ABRIL","MAIG","JUNY","JULIOL","AGOST","SETEMBRE","OCTUBRE","NOVEMBRE","DESEMBRE"];
    let weekday = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];
    return [month[d.getMonth()],weekday[d.getUTCDay()],d.getDate()];
}

window.onload = function(){
    /******************** 1. Hexadecimal a Decimal ********************/
    //Assignem l'esdeveniment de clic al botó
    let formulari = document.getElementById("formulari");
    formulari.addEventListener("submit", function(e){
        // Prevenim l'esdeveniment per defecte d'enviament
        e.preventDefault();
        //Agarem el número introduït
        let numHex = document.getElementById("conv-input").value;
        //El convertim a decimal
        let numDec = parseInt(numHex, 16);
        //Posem el resultat al <div> de la dreta
        document.getElementById("div-hex").textContent = numDec;
    })

    /******************** 2. Binari a Decimal ********************/
    //Assignem l'esdeveniment de clic al botó
    let boto2 = document.getElementById("bot-bin");
    boto2.addEventListener("click", function(e){
        // Prevenim l'esdeveniment per defecte d'enviament
        e.preventDefault();
        //Agafem els valors dels checkbox
        let valors = [];
        valors.push(document.getElementById("conv-input-1").checked);
        valors.push(document.getElementById("conv-input-2").checked);
        valors.push(document.getElementById("conv-input-3").checked);
        valors.push(document.getElementById("conv-input-4").checked);
        //Convertim a decimal
        let suma = 0;
        valors.forEach(num => {
                                suma*=2;
                                suma+=num;
                              });
        //Posem el resultat al <div>
        document.getElementById("div-bin").textContent = suma;
    });

    /******************** 3. Data ********************/
    //Assignem l'esdeveniment corresponent a l'element de la data
    let data = document.getElementById("data-input");
    data.addEventListener("change",function(){
        //Agafem el valor de la data i el passem a la funció predefinida
        let valors = diaSetmana(data.value)
        //Posem els valors als elements corresponents
        document.getElementById("mes").textContent = valors[0];
        document.getElementById("dia-set").textContent = valors[1];
        document.getElementById("dia-mes").textContent = valors[2];
    });

    /******************** 4. Color ********************/
    //Assignem l'esdeveniment corresponent a l'element del color
    let color = document.getElementById("color-input");
    color.addEventListener("change",function(){
        //Agafem el valor de la data i el passem a la funció predefinida
        let valor = color.value;
        //Posem el color de fons al div corresponent
        document.getElementById("div-color").style.backgroundColor = valor;
    });

    /******************** 5. Contrasenya ********************/
    //Assignem l'esdeveniment de clic al botó
    let boto3 = document.getElementById("bot-pass");
    boto3.addEventListener("click", function(e){
        // Prevenim l'esdeveniment per defecte d'enviament
        e.preventDefault();
        //Agarem el valor introduït
        let contrasenya = document.getElementById("pass-input").value;
        //Definim l'expressió regular
        let regExp = /^[A-Z]{2}\.[3-8]{3}(SPC|CTR|SHT)\$$/;
        //Comprovem si la contrasenya introduïda compleix l'expressió
        if(regExp.test(contrasenya)){
            document.getElementById("div-pass").textContent = "OK";
        } else {
            document.getElementById("div-pass").textContent = "Error";
        }     
    });

    /******************** 6. Rang ********************/
    //Assignem l'esdeveniment de clic al botó
    let rang = document.getElementById("rang-input");
    rang.addEventListener("change", function(e){
        //Posem el valor corresponent del rang al <div>
        document.getElementById("div-rang").textContent = rang.value;
    });

    /******************** 7. Teclat ********************/
    //Definim l'expressió regular
    let exp = /^[$_\-*?#]$/;
    //Assignem l'esdeveniment de polsació de tecles
    window.addEventListener("keypress",function(e){
        //Agafem la lletra polsada
        let lletra = e.key;
        //Si la lletra compleix l'expressió, l'escrivim al <div>
        if(exp.test(lletra)){
            let contingut = document.getElementById("div-tec").textContent;
            contingut += lletra;
            document.getElementById("div-tec").textContent = contingut;
        }
    });

    /******************** 8. Botons ratolí ********************/
    //Assignem l'esdeveniment de clic al div
    let divRatoli = document.getElementById("div-rat");
    divRatoli.addEventListener("mouseup",function(e){
        if (e.button == 0) {
            divRatoli.textContent = "Esquerre";
        } else if (e.button == 1) {
            divRatoli.textContent = "Central";
        } else if (e.button == 2) {
            divRatoli.textContent = "Dret";
        }
    });

    //Prevenim l'esdeveniment per defecte al polsar el botó dret
    divRatoli.addEventListener("contextmenu", (e) => e.preventDefault());

    /******************** 9. Dins i fora ********************/
    //Assignem l'esdeveniment als div
    let divs = document.getElementsByClassName("dins-fora");
    for(let i=0; i<divs.length;i++){
        divs[i].addEventListener('mouseover',function(){
            this.style.backgroundColor = color.value;
        });
        divs[i].addEventListener('mouseout',function(){
            this.style.backgroundColor = "";
        });
    }

    /******************** 10. Selecció ********************/
    //Assignem l'esdeveniment a la llista desplegable
    let llista = document.getElementById("seleccio");
    llista.addEventListener("change",function(){
        //Assignem els valors corresponents als divs
        document.getElementById('div-sel-id').textContent = llista.value;
        document.getElementById('div-sel-text').textContent = llista.options[llista.selectedIndex].text;
    });
};
