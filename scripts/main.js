import { Messages } from "./messages.js"
import { OpenCookie } from "./controllers.js"

const cookie = document.querySelector('#cookie')
const openedCookie = document.querySelector('#opened-cookie')
const buttonResetCookie = document.querySelector('.reset-cookie')

function clickAwait() {
  setTimeout(function() {
      OpenCookie.getLuckyMessage()
      OpenCookie.open() 
  }, 3000)
}

cookie.addEventListener('click', () => {
  cookie.classList.add('shake')
  clickAwait()
})

buttonResetCookie.addEventListener('click', () => {
  OpenCookie.reset()
  OpenCookie.titleBox.innerText = Messages.title
  OpenCookie.subtitleBox.innerText = Messages.subtitle
})

export { cookie, openedCookie,buttonResetCookie }