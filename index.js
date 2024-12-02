function alerta(){
    alert("Ainda não disponível!")
}

<<<<<<< HEAD
window.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;

    const text = document.querySelector("p, h1");

    const section = document.querySelector(".main-container");

    text.style.transform = `translate(-${x * 0.05}px, -${y * 0.05}px)`;  // Corrigido aqui
    section.style.backgrounPOsitionX = `-${x * 0.09}px`;
    section.style.backgrounPOsitionY = `-${x * 0.09}px`;

=======
    const rain = document.querySelectorAll(".rain");
    const getRandomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}
    rain.forEach(rain =>{
    rain.style = `--rain-delay:${getRandomNumber(0, 1000)}ms`;
>>>>>>> 49c17c0 (Final)
})