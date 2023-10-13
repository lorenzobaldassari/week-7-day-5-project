const apiAddress = `https://striveschool-api.herokuapp.com/api/product/`;
const apiKey = `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWUxZTEzOWM0MzAwMTg4MTQ1NjEiLCJpYXQiOjE2OTcxODEyMTQsImV4cCI6MTY5ODM5MDgxNH0.wbkCpZIlzCh6r9Ncz_8mFwOOywnSEBiR4it3uPbRXUA`;
const rowPosition = document.getElementById(`rowPosition`);

const getElement = function (api, apikey) {
  // inizio fetch
  fetch(api, {
    headers: {
      Authorization: apikey,
    },
  })
    //   fine fetch
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert(`problema`);
        throw new Error(`errore nella DELETE`);
      }
    })
    .then((events) => {
      // generateElement(events);

      for (i = 0; i < events.length; i++) {
        console.log(events[i]._id);
        const col = document.createElement(`div`);
        col.classList.add(`col-sm-6`, `col-md-4`, `col-lg-3`, `col-xxl-2`);
        col.innerHTML = `<div onmouseenter="over(event)" onmouseleave="leave(event)" class="hover  card  box m-0 p-0" onclick="settings()">
        <div class="">
        <img id="cardimage" src="${events[i].imageUrl}" class="card-img-top imgBox  " alt="...">
        </div>
        <h6 id="brand class"bg-warning" class="text-center mt-2 mb-1"> ${events[i].brand}</h6>
        <div class="card-body position-relative card-title d-flex flex-column justify-content-between align-items-start ">
      <h3  id="title" class="mb-4">${events[i].name}</h3>
      <p id="description" class="card-text">${events[i].description}</p>
      <a href="./details.html?_id=${events[i]._id}" class="btn btn-primary">Details</a>
        <div class="position-absolute bottom-0 end-0 mb-2 me-2">
       
        <p id="price" class="card-text">${events[i].price}$</p>
        </div>
        </div>
        </div>`;

        rowPosition.appendChild(col);
      }
    })
    .catch((err) => {
      console.log(`si e verificato un errore`, err);
    });
};
// fine function

// const generateElement = function (arrayOfelement) {
//   const col = document.createElement(`div`);
//   col.classList.add(`col-12`, `col-md-6`, `col-lg-3`);
//   col.innerHTML = `<div class="card">
//     <h6 id="brand class"bg-warning"> ${arrayOfelement.brand}</h6>
//   <img id="cardimage" src="${arrayOfelement.imageUrl}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 id="title" class="card-title">${arrayOfelement.name}</h5>
//     <p id="description" class="card-text">${arrayOfelement.description}</p>
//     <p id="description" class="card-text">${arrayOfelement.price}</p>
//   </div>
//   </div>`;
//   rowPosition.appendChild(col);
// };
getElement(apiAddress, apiKey);

const over = function (event) {
  console.log(event.target.children[2].children[3].children[0])
  event.target.children[2].children[3].children[0].style.color=`red`
  event.target.children[2].children[3].children[0].style.fontSize=`2em`
  // price2.style.color=`red`
};
const leave = function (event) {
  console.log(event.target.children[2].children[3].children[0])
  event.target.children[2].children[3].children[0].style.color=`black`
  event.target.children[2].children[3].children[0].style.fontSize=`1em`
  // price2.style.color=`red`
};

