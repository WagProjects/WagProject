export function corpo(){
    const corpo = document.querySelector("body") as HTMLBodyElement
    return (
        corpo.innerHTML = `
            <nav class="menu">
                <img src="../../public/assets/Logo.png" alt="Logo" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Experiências</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Educação</a></li>
                    <li><a href="#">Contato</a></li>
                <ul>
            </nav>
        `
    )
}