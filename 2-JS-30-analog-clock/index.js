const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const date = new Date();

  
  const secDeg = date.getSeconds() * 6 + 90;
  secDeg === 90 ? secondHand.style.transition = 'none' : secondHand.style.transition = '';
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  
  const minDeg = date.getMinutes() * 6 + 90;
  minDeg === 90 ? minuteHand.style.transition = 'none' : minuteHand.style.transition = '';
  minuteHand.style.transform = `rotate(${minDeg}deg)`;

  const hourDeg = date.getHours() * 30 + 90;
  hourDeg === 90 ? hourHand.style.transition = 'none' : hourHand.style.transition = '';
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);