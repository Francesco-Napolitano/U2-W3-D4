const webImages = () => {
  const url = `https://api.pexels.com/v1/search?query=people`

  fetch(url, {
    headers: {
      Authorization: 'C6KUGSYCsTlS7h3P6Nwd5YjI4o6sH07gj1RQ9PUEDJ9uHAImEh4zeDnN',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      }
      throw new Error("Errore nella richiesta all'API di Pexels")
    })
    .then((data) => {
      data.photos.forEach((photo) => {
        console.log(`Immagine: ${photo.src.medium}`)
      })
    })
    .catch((error) => console.error('Errore:', error))
}

const secondWebImages = () => {
  const url = `https://api.pexels.com/v1/search?query=nature`

  fetch(url, {
    headers: {
      Authorization: 'C6KUGSYCsTlS7h3P6Nwd5YjI4o6sH07gj1RQ9PUEDJ9uHAImEh4zeDnN',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      }
      throw new Error("Errore nella richiesta all'API di Pexels")
    })
    .then((data) => {
      const allSmall = document.querySelectorAll('small')
      data.photos.forEach((photo, index) => {
        if (allSmall[index]) {
          allSmall[index].textContent = `${photo.id}`
        }
      })
    })
    .catch((error) => console.error('Errore:', error))
}

const hideButtons = document.querySelectorAll('.button-hide')

hideButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card')
    card.classList.add('d-none')
  })
})

const loadButton2 = document.getElementById('load-button2')
const loadButton = document.getElementById('load-button')

loadButton.addEventListener('click', webImages)
loadButton2.addEventListener('click', secondWebImages)
