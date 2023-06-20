function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png")
  }

  if (html.classList.contains("light")) {
    // se tiver no light mode vai ser a foto de um casa no sol
    img.setAttribute("alt", "Foto de um casal no sol")
  } else {
    // se tiver sem light mode vai ser a foto de um casa na noite
    img.setAttribute("alt", "foto de um casal na noite")
  }
}
