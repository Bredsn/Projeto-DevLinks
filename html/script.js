function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituit a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "/img/Toge-inumaki.png")
    } else {
      //se tiver sem ligth mode, manter a imagem normal
      img.setAttribute("src", "/img/avatar.png")
    }
  }