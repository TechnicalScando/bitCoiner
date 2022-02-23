const url = 'https://www.bitstamp.net/api/v2/ticker/btcusd/'

const body = document.querySelector('body')
const fetchButton = document.querySelector('.fetchButton')

const highBox = document.querySelector('.high')
const lowBox = document.querySelector('.low')
const askBox = document.querySelector('.ask')
const openBox = document.querySelector('.open')

const getData = () => {
  fetch(url)
    .then(data => { return data.json() })
    .then((res) => {
      highBox.textContent = res.high
      lowBox.textContent = res.low
      askBox.textContent = res.ask
      openBox.textContent = res.open
    })
}

fetchButton.addEventListener('click', getData)
