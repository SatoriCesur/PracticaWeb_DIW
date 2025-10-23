let btn = document.querySelector(".btn_seccion1")
let mostrar = document.querySelector(".canvas")
let sombra = document.querySelector(".sombra")

btn.addEventListener("click",()=>{
    mostrar.classList.add("show")
    sombra.classList.add("activada")
})

mostrar.addEventListener("click",()=>{
    mostrar.classList.remove("show")
    sombra.classList.remove("activada")
})