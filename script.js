function ToggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){

        img.setAttribute('src','./assets/assets/avatar-light.png')
    }else {
        img.setAttribute('src','./assets/assets/avatar.png')
    }

    const alt = document.querySelector('#profile alt')
    if(html.classList.contains(alt)){
        alt.setAttribute('alt','foto de um homem de oculos')
    }else {
        alt.setAttribute('alt','foto de um homem sorrindo')
    }
}
