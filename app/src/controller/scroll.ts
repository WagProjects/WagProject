function scrollElemento(seletor: string, event: MouseEvent){
    // Impede o comportamento padrão do link (navegação)
    event.preventDefault(); 
    
    const targetElement = document.querySelector(seletor)

    if (targetElement) {
        targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    } else {
        console.error(`Elemento ${seletor} não encontrado.`);
    }
}