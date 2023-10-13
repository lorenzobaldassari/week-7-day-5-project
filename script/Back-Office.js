const form = document.getElementById(`form`);

const apiAddress = `https://striveschool-api.herokuapp.com/api/product/`;
const apiKey = `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWUxZTEzOWM0MzAwMTg4MTQ1NjEiLCJpYXQiOjE2OTcxODEyMTQsImV4cCI6MTY5ODM5MDgxNH0.wbkCpZIlzCh6r9Ncz_8mFwOOywnSEBiR4it3uPbRXUA`;
const formReference = document.getElementById(`form3`);
const button = document.getElementById(`submitButton`);
const brand1 = document.getElementById(`brand`);
const name1 = document.getElementById(`name`);
const description1 = document.getElementById(`description`);
const imgURL1 = document.getElementById(`imgURL`);
const price1 = document.getElementById(`price`);
const addresBarContent = new URLSearchParams(location.search);
const eventId = addresBarContent.get(`_id`);
if (eventId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    method:`PUT`,
    headers: {
      Authorization: apiKey,
    },
  })
    .then((eventDetails) => {
     console.log(eventDetails)
      name1.value = eventDetails.name;
      description1.value = eventDetails.description;
      price1.value = eventDetails.price;
      imgURL1.value= eventDetails.imageUrl;
      brand1.value= eventDetails.imageUrl;
    })

    .catch((err) => {
      console.log(err, `errore`);
    });
}


button.addEventListener(`click`, function (e) {
  e.preventDefault();
  const obj = {
    name: name1.value,
    description: description1.value,
    brand: brand1.value,
    imageUrl: imgURL1.value,
    price: price1.value,
  };
  console.log(obj);

  // inizio fetch
  fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
    method: `POST`,
    body: JSON.stringify(obj),
    headers: { "Content-type": "application/json", Authorization: apiKey },
  })
    .then((events) => {
      console.log(`oggetto inviato`, events);
      if (events.ok) {
        alert(`evento salvato correttamente`);
        name1.value = ``;
        brand1.value = ``;
        imgURL1.value = ``;
        price.value = ``;
        description1.value = ``;
      } else {
        alert(`errore nel salvataggio dell'evento`);
        throw new errore(`errore nel post`);
      }
    })
    .catch((err) => {
      console.log(`si e verificato un errore`, err);
    });
});

const resetButton = document.getElementById(`reset`);
resetButton.addEventListener(`click`, () => {
  description1.value = ``;
  name1.value = ``;
  brand1.value = ``;
  imgURL1.value = ``;
  price.value = ``;
});
