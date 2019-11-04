let playBtn = document.getElementById('play-btn')
let circle = document.getElementById('circle')

playBtn.addEventListener('click', () => {
  circle.setAttribute('class', 'move')
})
