const url = 'https://www.bitstamp.net/api/v2/ticker/btcusd/'

const body = document.querySelector('body')
const fetchButton = document.querySelector('.fetchButton')

const getData = () => {
  fetch(url)
    .then(data => { return data.json() })
    .then((res) => {
      if (res) {
        console.log(JSON.stringify(res))
      } else {
        console.log('no res')
      }
      const infoP = document.createElement('p')
      infoP.textContent = res.high
      body.appendChild(infoP)
    })
}

fetchButton.addEventListener('click', getData)
