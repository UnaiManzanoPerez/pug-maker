let tankArray = []
let dpsArray = []
let supportArray = []

let okTank = false;
let okDPS = false;
let okSupport = false;

function addTank() {
    if (document.getElementById("inputTank").value) {
        let tankToAdd = document.getElementById("inputTank").value
        tankArray.push(tankToAdd)

        let tankList = document.getElementById("tankList")
        tankList.innerHTML += tankToAdd + "<br>"

        document.getElementById("inputTank").value = ""
        enoughPlayers()
    } else {
        return
    }
}

function addDPS() {
    if (document.getElementById("inputDPS").value) {
        let dpsToAdd = document.getElementById("inputDPS").value
        dpsArray.push(dpsToAdd)

        let dpsList = document.getElementById("dpsList")
        dpsList.innerHTML += dpsToAdd + "<br>"

        document.getElementById("inputDPS").value = ""
        enoughPlayers()
    } else {
        return
    }
}

function addSupport() {
    if (document.getElementById("inputSupport").value) {
        let supportToAdd = document.getElementById("inputSupport").value
        supportArray.push(supportToAdd)

        let supportList = document.getElementById("supportList")
        supportList.innerHTML += supportToAdd + "<br>"

        document.getElementById("inputSupport").value = ""
        enoughPlayers()
    } else {
        return
    }

}

function enoughPlayers() {
    if (tankArray.length >= 2) { okTank = true; }
    if (dpsArray.length >= 4) { okDPS = true; }
    if (supportArray.length >= 4) { okSupport = true; }

    if (okTank == true && okDPS == true && okSupport == true) {
        document.getElementById("makeTeamButton").disabled = false
    }
}

function makeTeam() {
    // TEAM 1
    let divTeam1 = document.getElementById("team1")

    let rand = Math.floor(Math.random() * tankArray.length)
    let randomTank1A = tankArray[rand]
    divTeam1.innerHTML += randomTank1A + "<br>"
    tankArray.splice(rand, 1)

    rand = Math.floor(Math.random() * dpsArray.length)
    let randomDPS1A = dpsArray[rand]
    divTeam1.innerHTML += randomDPS1A + "<br>"
    dpsArray.splice(rand, 1)

    rand = Math.floor(Math.random() * dpsArray.length)
    let randomDPS2A = dpsArray[rand]
    divTeam1.innerHTML += randomDPS2A + "<br>"
    dpsArray.splice(rand, 1)

    rand = Math.floor(Math.random() * supportArray.length)
    let randomSupport1A = supportArray[rand]
    divTeam1.innerHTML += randomSupport1A + "<br>"
    supportArray.splice(rand, 1)

    rand = Math.floor(Math.random() * supportArray.length)
    let randomSupport2A = supportArray[rand]
    divTeam1.innerHTML += randomSupport2A + "<br><hr>"
    supportArray.splice(rand, 1)
    //////////////////////////////////////////

    // TEAM 2


    let divTeam2 = document.getElementById("team2")

    rand = Math.floor(Math.random() * tankArray.length)
    let randomTank1B = tankArray[rand]
    divTeam2.innerHTML += randomTank1B + "<br>"
    tankArray.splice(rand, 1)

    rand = Math.floor(Math.random() * dpsArray.length)
    let randomDPS1B = dpsArray[rand]
    divTeam2.innerHTML += randomDPS1B + "<br>"
    dpsArray.splice(rand, 1)

    rand = Math.floor(Math.random() * dpsArray.length)
    let randomDPS2B = dpsArray[rand]
    divTeam2.innerHTML += randomDPS2B + "<br>"
    dpsArray.splice(rand, 1)

    rand = Math.floor(Math.random() * supportArray.length)
    let randomSupport1B = supportArray[rand]
    divTeam2.innerHTML += randomSupport1B + "<br>"
    supportArray.splice(rand, 1)

    rand = Math.floor(Math.random() * supportArray.length)
    let randomSupport2B = supportArray[rand]
    divTeam2.innerHTML += randomSupport2B + "<br><hr>"
    supportArray.splice(rand, 1)

    removeSelectedPlayers()
}

function removeSelectedPlayers() {
    console.log(tankArray)
    console.log(dpsArray)
    console.log(supportArray)

    tankList.innerHTML = ""
    dpsList.innerHTML = ""
    supportList.innerHTML = ""

    for (let i = 0; i < tankArray.length; i++) {
        tankList.innerHTML += tankArray[i] + "<br>"
    }

    for (let i = 0; i < dpsArray.length; i++) {
        dpsList.innerHTML += dpsArray[i] + "<br>"
    }

    for (let i = 0; i < supportArray.length; i++) {
        supportList.innerHTML += supportArray[i] + "<br>"
    }
}


function darkMode() {
    const css = `html {
        -webkit-filter: invert(100%);
        -moz-filter: invert(100%);
        -o-filter: invert(100%);
        -ms-filter: invert(100%);
      }`
    const head = document.head
    const style = document.createElement('style')
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}


//https://ow-api.com/v1/stats/PC/EU/Saker-21640/profile
var players = ["Saker-21640", "YZNSA2-2421", "Chasetorch-2588", "Jarew-2385", "ADE-22814"];

let player = "";
const saltoLinea = "<br>";
const role = ["Tank", "DPS", "Support"];

const divInfo = document.getElementById("data");

let titulos = "<table class='tablaDatos'>\n" +
    "<tr class='tablaTitulos' id='tablaTitulos'>\n" +
    "<td id='name'><b>Name</b></td>\n" +
    "<td><b>Level</b></td>\n" +
    "<td><b>DMG x 10</b></td>\n" +
    "<td><b>SR</b></td>\n" +
    "</tr>"

let datos = "";

for (let i = 0; i < players.length; i++) {
    const request = async () => {
        const response = await fetch('https://ow-api.com/v1/stats/PC/EU/' + players[i] + '/complete');
        const playerData = await response.json();

        datos +=
            "<tr><td>" + playerData.name + "</td>\n" +
            "<td>" + playerData.prestige + playerData.level + "</td>\n" +
            "<td>" + playerData.competitiveStats.careerStats.allHeroes.average.allDamageDoneAvgPer10Min + "</td>\n" +
            "<td>" + playerData.rating + "</td></tr>"

        divInfo.innerHTML = titulos + datos + "</table>";
        document.getElementById("tablaTitulos").style.backgroundColor ="#218ffe";
    }
    request();
}



// SENS CALCULATOR
const sensXdpiCalc = 0.003;

function calculateSens(){
    var sens = document.getElementById("sens").value
    var dpi = document.getElementById("dpi").value
    console.log(sens*dpi)
    var sensInCm = (sens*dpi)*sensXdpiCalc;
    console.log(sensInCm)

}