export function criarElementoContato(){
    const sectionContato = document.createElement('section')
    sectionContato.classList.add('container__contato')

    const cardContato = document.createElement('div')
    cardContato.classList.add('card__contato')

    sectionContato.innerHTML = `
        <h1 class="titulo__secao">Contato</h1>
    `

    cardContato.innerHTML = `
        <div class="div__titulo-contato">
            <h1 class="titulo__contato">Entre em contato!</h1>
            <p>Envie um feedback, anônimo ou não, sobre este portfólio ou sobre qualquer assunto.</p>
        </div>
        <form action="https://formspree.io/f/xleqnedy" method="POST" accept-charset="utf-8">
            <label class="form-group" for="name">
                <span>
                    Nome
                </span>
                <input type="text" id="name" name="nome" placeholder="Nome" required>
            </label>
            <label class="form-group" for="email">
                <span>
                    Email (opcional)
                </span>
                <input type="email" id="email" name="email" placeholder="e-mail@dominio.etc">
            </label>

            <label class="form-group" for="assunto">
                <span>
                    Assunto
                </span>
                <div>
                    <select id="tag" name="tag" required>
                        <option value="" disabled selected hidden class="option-desabled">Propósito</option>
                        <option value="Contato">Contato</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                    <input type="text" id="assunto" name="assunto" placeholder="Assunto da mensagem" required>
                </div>
            </label>

            <label class="form-group" for="mensagem">
            <span id="mensagem">
            Mensagem
            </span>
            <textarea id="mensagem" name="mensagem" rows="5" placeholder="Mensagem..." required></textarea>      
            </label>
            <div class="buttons-container">
                <button type="reset" id="limpar">Limpar</button>
                <button type="submit" id="enviar">Enviar</button>
            </div>
        </form>
    `

    sectionContato.appendChild(cardContato)

    return sectionContato
}