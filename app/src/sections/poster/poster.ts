export function criarElementoPoster(){
    const sectionPoster = document.createElement('section')
    sectionPoster.classList.add('container__poster')

    sectionPoster.innerHTML = `
        <video class="video__intro" loop="loop" muted="muted" autoplay>
            <source src="../public/assets/images/backgrounds/background-banner.mp4" type="video/mp4">
        </video>
    `


    return sectionPoster
}