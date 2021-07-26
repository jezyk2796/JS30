// my solution without watching video

// const img = document.querySelector('img');
// const spaceInput = document.querySelector('#spacing');
// const blurInput = document.querySelector('#blur');
// const colorInput = document.querySelector('#base');
// const colouredLetters = document.querySelector('.hl');

// // on load
// img.style.filter = `blur(${blurInput.value}px)`;
// colouredLetters.style.color = colorInput.value;

// spaceInput.addEventListener('input', () => {
//   img.style.padding = `${spaceInput.value}px`;
// })

// blurInput.addEventListener('input', () => {
//   img.style.filter = `blur(${blurInput.value}px)`;
// })

// colorInput.addEventListener('input', () => {
//   colouredLetters.style.color = colorInput.value;
//   img.style.background = colorInput.value;
// })


// another solution (with css variables)
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));