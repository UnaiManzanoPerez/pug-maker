let tank = []
let dps = []
let support = []

function addTank(){
    let tankToAdd = document.getElementById("inputTank").value
    console.log(tankToAdd)
    let tankList = document.getElementById("tankList")

    tankList.innerHTML += tankToAdd +"<br>"
    document.getElementById("inputTank").value=""
}

function addDPS(){
    let dpsToAdd = document.getElementById("inputDPS").value
    let dpsList = document.getElementById("dpsList")

    dpsList.innerHTML += dpsToAdd +"<br>"
}

function addSupport(){
    let supportToAdd = document.getElementById("inputSupport").value
    let supportList = document.getElementById("supportList")

    supportList.innerHTML += supportToAdd +"<br>"
}