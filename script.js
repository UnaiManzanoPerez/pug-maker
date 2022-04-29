let tankArray = []
let dpsArray = []
let supportArray = []

let okTank = false;
let okDPS = false;
let okSupport = false;

function addTank() {
    let tankToAdd = document.getElementById("inputTank").value
    tankArray.push(tankToAdd)

    let tankList = document.getElementById("tankList")
    tankList.innerHTML += tankToAdd + "<br>"

    document.getElementById("inputTank").value = ""
    enoughPlayers()
}

function addDPS() {
    let dpsToAdd = document.getElementById("inputDPS").value
    dpsArray.push(dpsToAdd)

    let dpsList = document.getElementById("dpsList")
    dpsList.innerHTML += dpsToAdd + "<br>"

    document.getElementById("inputDPS").value = ""
    enoughPlayers()
}

function addSupport() {
    let supportToAdd = document.getElementById("inputSupport").value
    supportArray.push(supportToAdd)

    let supportList = document.getElementById("supportList")
    supportList.innerHTML += supportToAdd + "<br>"

    document.getElementById("inputSupport").value = ""
    enoughPlayers()
}

function enoughPlayers(){
    if (tankArray.length >= 2) {
        okTank = true;
    }

    if (dpsArray.length >= 4) {
        okDPS = true;
    }

    if (supportArray.length >= 4) {
        okSupport = true;
    }

    if (okTank == true && okDPS == true && okSupport == true) {
        document.getElementById("makeTeamButton").disabled = false
    }
}

function makeTeam() {
    // TEAM 1
    let divTeam1 = document.getElementById("team1")

    let randomTank1A = tankArray[Math.floor(Math.random() * tankArray.length)]
    divTeam1.innerHTML+=randomTank1A + "<br>"
    tankArray.splice(randomTank1A, 1)

    let randomDPS1A = dpsArray[Math.floor(Math.random() * dpsArray.length)]
    divTeam1.innerHTML+=randomDPS1A + "<br>"
    dpsArray.splice(randomDPS1A, 1)

    let randomDPS2A = dpsArray[Math.floor(Math.random() * dpsArray.length)]
    divTeam1.innerHTML+=randomDPS2A + "<br>"
    dpsArray.splice(randomDPS2A, 1)

    let randomSupport1A = supportArray[Math.floor(Math.random() * supportArray.length)]
    divTeam1.innerHTML+=randomSupport1A + "<br>"
    supportArray.splice(randomSupport1A, 1)

    let randomSupport2A = supportArray[Math.floor(Math.random() * supportArray.length)]
    divTeam1.innerHTML+=randomSupport2A + "<br>"
    supportArray.splice(randomSupport2A, 1)

    // TEAM 2
    let divTeam2 = document.getElementById("team2")

    let randomTank1B = tankArray[Math.floor(Math.random() * tankArray.length)]
    divTeam2.innerHTML+=randomTank1B + "<br>"
    tankArray.splice(randomTank1B, 1)

    let randomDPS1B = dpsArray[Math.floor(Math.random() * dpsArray.length)]
    divTeam2.innerHTML+=randomDPS1B + "<br>"
    dpsArray.splice(randomDPS1B, 1)

    let randomDPS2B = dpsArray[Math.floor(Math.random() * dpsArray.length)]
    divTeam2.innerHTML+=randomDPS2B + "<br>"
    dpsArray.splice(randomDPS2B, 1)

    let randomSupport1B = supportArray[Math.floor(Math.random() * supportArray.length)]
    divTeam2.innerHTML+=randomSupport1B + "<br>"
    supportArray.splice(randomSupport1B, 1)

    let randomSupport2B = supportArray[Math.floor(Math.random() * supportArray.length)]
    divTeam2.innerHTML+=randomSupport2B + "<br>"
    supportArray.splice(randomSupport2B, 1)
}


function darkMode(){
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
