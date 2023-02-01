import { Messages } from './messages.js'
import { cookie, openedCookie, buttonResetCookie } from './main.js'

export const OpenCookie = {
  randomNumber: Math.round(Math.random() * 9),
  titleBox: document.querySelector('.card h1'),
  subtitleBox: document.querySelector('.card p'),
  getLuckyMessage() {
    OpenCookie.randomNumber = Number(Math.round(Math.random() * 9))
    OpenCookie.subtitleBox.innerText = Messages.luckyMessage[OpenCookie.randomNumber]
    OpenCookie.titleBox.innerText = Messages.openCookieTitle
  },
  open() {
    cookie.classList.add('hide')
    cookie.classList.add('shake')
    openedCookie.classList.remove('hide')
    buttonResetCookie.classList.remove('hide')
    OpenCookie.subtitleBox.classList.add('lucky-message')
  },
  reset() {
    cookie.classList.remove('hide')
    cookie.classList.remove('shake')
    openedCookie.classList.add('hide')
    buttonResetCookie.classList.add('hide')
    OpenCookie.subtitleBox.classList.remove('lucky-message')
  },



}

// document.addEventListener('keypress', e => {
//   if (e.key === 'Enter') {
//     cookie.OpenCookie.getLuckyMessage()
//   }
// })