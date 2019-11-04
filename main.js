let playBtn = document.getElementById('play-btn')
let pauseBtn = document.getElementById('pause-btn')
let circle = document.getElementById('circle')
let lines = document.getElementsByClassName('line')

playBtn.addEventListener('click', () => {
  circle.setAttribute('class', 'move')
  circle.style.webkitAnimationPlayState = 'running'
  setTimeout(() => {
    circle.classList.remove('move')
  }, 6000)

  lines[0].classList.add('move')
})

pauseBtn.addEventListener('click', () => {
  circle.style.webkitAnimationPlayState = 'paused'
})

