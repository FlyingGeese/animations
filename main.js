let playBtn = document.getElementById('play-btn')
let pauseBtn = document.getElementById('pause-btn')
let circle = document.getElementById('circle')
let street = document.getElementsById('street')
let lines = street.children

playBtn.addEventListener('click', () => {
  circle.setAttribute('class', 'move')
  circle.style.webkitAnimationPlayState = 'running'
  setTimeout(() => {
    circle.classList.remove('move')
  }, 6000)

  street.classList.add('move')
})

pauseBtn.addEventListener('click', () => {
  circle.style.webkitAnimationPlayState = 'paused'
})

