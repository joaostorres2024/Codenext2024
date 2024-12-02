function alerta(){
    alert("Ainda não disponível!")
}

window.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;

    const text = document.querySelector("p, h1");

    const section = document.querySelector(".main-container");

    text.style.transform = `translate(-${x * 0.05}px, -${y * 0.05}px)`;  // Corrigido aqui
    section.style.backgrounPOsitionX = `-${x * 0.09}px`;
    section.style.backgrounPOsitionY = `-${x * 0.09}px`;

})