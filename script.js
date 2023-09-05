//for Average-------------------------

function avg(){

let matches = document.getElementById("matches").value

let runs = document.getElementById("runs").value

let nouts = document.getElementById("NO").value

let avg = (runs/(matches-nouts))-0.01

let average = avg.toFixed(2)

let oput =document.getElementById("pg").innerHTML= `Average is [ ${average} ]`
}

//for StrikeRate---------------

function Srate(){
 
  let runs = document.getElementById("runs").value
  
 let balls = document.getElementById("balls").value
 
 let skrt = (runs/balls)*100
 
 let sr = skrt.toFixed(2)
 
 document.getElementById("pg").innerHTML =`Strike Rate is [ ${sr} ]`
  
}

//for Balls Played---------------

function bp(){
  let runs = document.getElementById("runs").value
    
  let SR = document.getElementById("SR").value
  
  let balls = (runs/SR)*100
  
  let bp = Math.round(balls)
  
  document.getElementById("pg").innerHTML= `[ ${bp} ] Balls Played`

}

// for Not Outs-----------------

function no(){
  let inn = document.getElementById("matches").value

  let runs = document.getElementById("runs").value
  
  let avg = document.getElementById("average").value

let NO = Math.round(inn-(runs/avg))

  document.getElementById("pg").innerHTML= `[ ${NO} ] Not Outs`

}


