function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
  //se estiver light mode
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    //se estiver light mode
    img.setAttribute("alt", "Imagem de Renan e Luana, estilo desenho, ao dia")
  } else {
    // se tiver sem light mode, manter decrição normal
    img.setAttribute("alt", "Imagem de Renan e Luana, estilo desenho, à noite")
  }
}
