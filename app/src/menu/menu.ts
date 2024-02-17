export function criarElementoMenu(): HTMLElement{
    const menuNavegacao = document.createElement('nav')
    menuNavegacao.classList.add('menu')
    menuNavegacao.innerHTML = `
        <img src="../../../public/assets/images/Logo-01.png" alt="Logo" />
        <ul class="menu__nav">
            <li onclick="active(this)"><a href="#" title="Vá para o topo da página" onclick="scrollElemento('.container__geral', event)">Home</a></li>
            <li onclick="active(this)"><a href="#" title="Uma preve apresentação sobre mim" onclick="scrollElemento('.container__sobre', event)">Sobre</a></li>
            <!-- <li onclick="active(this)"><a href="#" title="Minhas experiências profissionais" onclick="scrollElemento('.container__sobre', event)">Experiências</a></li> -->
            <li onclick="active(this)"><a href="#" title="Meus projetos pessoais" onclick="scrollElemento('.container__projetos', event)">Projetos</a></li>
            <li onclick="active(this)"><a href="#" title="Minhas formações e cursos" onclick="scrollElemento('.container__educacao', event)">Educação</a></li>
            <li onclick="active(this)"><a href="#" title="Entre em contato" onclick="scrollElemento('.container__sobre', event)">Contato</a></li>
        <ul>
    `

    return menuNavegacao
}