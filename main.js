let playBtn = document.getElementById('play-btn')
let pauseBtn = document.getElementById('pause-btn')
let circle = document.getElementById('circle')

playBtn.addEventListener('click', () => {
  circle.setAttribute('class', 'move')
  circle.style.webkitAnimationPlayState = 'running'
  setTimeout(() => {
    circle.classList.remove('move')
  }, 6000)
})

pauseBtn.addEventListener('click', () => {
  circle.style.webkitAnimationPlayState = 'paused'
})

