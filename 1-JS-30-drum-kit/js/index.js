const divs = document.querySelectorAll('div[data-key]');
const arrKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']

window.addEventListener('keydown', e => {
  arrKeys.forEach((el) => {
    if (e.key === el) {
      const div = document.querySelector(`div[data-key="${e.key}"]`)

      div.classList.add('playing');
      setTimeout(() => {
        div.classList.remove('playing');
      }, 70)
      document.querySelector(`audio[data-key="${e.key}"]`).play()
    }
  })
})