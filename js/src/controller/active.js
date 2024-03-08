function active(elementoClicado) {
    // Obtém todos os elementos <li> dentro da lista
    const itensLista = document.querySelectorAll('.menu__nav li');
    if (elementoClicado) {
        // Remove a classe 'active' de todos os itens
        itensLista.forEach((item) => {
            item.classList.remove('active');
        });
        // Adiciona a classe 'active' apenas ao elemento clicado
        elementoClicado.classList.add('active');
    }
    else {
        console.error(`Elemento ${elementoClicado} não encontrado.`);
    }
}
