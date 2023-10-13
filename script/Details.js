const apiAddress = `https://striveschool-api.herokuapp.com/api/product/`;
const apiKey = `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWUxZTEzOWM0MzAwMTg4MTQ1NjEiLCJpYXQiOjE2OTcxODEyMTQsImV4cCI6MTY5ODM5MDgxNH0.wbkCpZIlzCh6r9Ncz_8mFwOOywnSEBiR4it3uPbRXUA`;

const addresBarContent = new URLSearchParams(location.search);
//url searchparams cerca i parametry e location.search e la barra di ricerca
const eventId = addresBarContent.get(`_id`);

const generateEventDetails = function (events) {
  const col = document.createElement(`div`);
  col.classList.add(`col-12`, `col-lg-6`);
  col.classList.add(`col`);
  col.classList.add(`bg-secondary`);
  col.classList.add(`px-0`);
  col.classList.add(`rounded-1`);
  col.innerHTML = `<div class="card box m-0 p-0 bg-secondary " onclick="settings()">
        <img id="cardimage" src="${events.imageUrl}" class="card-img-top w-100" alt="...">
        <h6 id="brand class"bg-warning" class="text-center mt-2 mb-4"> ${events.brand}</h6>
        <div class="card-body position-relative ">
      <h3 class="mb-4" id="title" class="card-title">${events.name}</h3>
      <p id="description" class="card-text">${events.description}</p>
      <a href="./Back-Office.html?_id=${events._id}" class="btn btn-primary">MODIFICA</a>
      <button type="button" onclick="deleteEvent()" class="my-3 btn btn-primary">ELIMINA</button>
        <div class="position-absolute bottom-0 end-0 mb-2 me-2">
      
        <p id="description" class="card-text">${events.price}$</p> 
        </div>
        </div>
        </div>`;

  rowPosition.appendChild(col);
};

console.log(eventId);
const getDetails = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new error(`errore nel caricamento dei dettagli`);
      }
    })
    .then((e) => {
      generateEventDetails(e);
    });
};
getDetails();

const deleteEvent = () => {
  // BootstrapDialog.confirm("Are you sure you want to do this?");

  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    method: `DELETE`,
    headers: {
      Authorization: apiKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        alert(`elemento eliminato`);
        location.assign(`./Home-page.html`);
      } else {
        alert(`problema`);
        throw new Error(`errore nella DELETE`);
      }
    })
    .catch((err) => {
      console.log(`errore`, err);
    });
};
