
let runsEl = document.getElementById('runs')
let saveEl = document.getElementById('end-runs')
let count = 0

function countRuns() {
    count = count + 1
    runsEl.innerText = count
}


function saveRuns() {
    let saveStr = count + ' - '
    saveEl.textContent += saveStr
    count = 0
    runsEl.innerText = 0
}



// loggin means the consol log (save) a certain data pr info 
// Strings: data values stored in variaboles (i.e.: let username = 'Alain')
