let sp=document.getElementById("spn")
let b1=()=>{
      document.getElementById("bsckground").style.backgroundColor="#e0e0e0"
      sp.textContent="#e0e0e0"
}
let b2=()=>{
    document.getElementById("bsckground").style.backgroundColor="#6fcf97"
    sp.textContent="#6fcf97"
}
let b3=()=>{
    document.getElementById("bsckground").style.backgroundColor="#56ccf2"
    sp.textContent="#56ccf2"
}
let b4=()=>{
    document.getElementById("bsckground").style.backgroundColor="#bb6bd9"
    sp.textContent="#bb6bd9"
}


document.getElementById("c1").addEventListener("click",b1)
document.getElementById("c2").addEventListener("click",b2)
document.getElementById("c3").addEventListener("click",b3)
document.getElementById("c4").addEventListener("click",b4)