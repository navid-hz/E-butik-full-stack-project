const productsCardsContainer = document.getElementById(
  'products-cards-container'
)

const renderProducts = async () => {
  let url = 'http://127.0.0.1:5000/api/store'
  let response = await fetch(url)
  let products = await response.json()

  console.log(products)

  if (response.status !== 200) {
    throw new Error('Cannot fetch the data')
  } else {
    if (products.length === 0) {
      productsCardsContainer.innerHTML = '<h1>There are no products</h1>'
    } else {
      let template = ''
      products.forEach((products) => {
        template += `
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"     data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"           class="w-100" />
                                <a href="product.html?id=${products.id}!">
                                    <div class="hover-overlay">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">${products.title}</h5>
                                </a>
                                <a href="" class="text-reset ">
                                    <p>${products.categoty[0]}</p>
                                </a>
                                <h6 class="mb-3 price">${products.prise}</h6>
                            </div>
                        </div>
                    </div>
                `
      })
    }
  }
  productsCardsContainer.innerHTML = template
}

window.addEventListener('DOMContentLoaded', () => renderProducts())

// async function fetchAllPuns() {
//     // console.log(JSON.stringify({username:"admin", password:"123"}));
//     checkAccessToken();

//     try {
//         const response2 = await fetch(ROOT_URL + '/puns', {
//             method: 'GET', // *GET, POST, PUT, DELETE, etc.
//             headers: {
//                 'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
//             }
//         });
//         const puns = await response2.json()
//         console.log(puns)

//         let punsHTML = "";
//         for (let pun of puns) {
//             let punDate = new Date(pun.date);
//             punsHTML += `
//                 <li class="list-group-item">
//                     <p>${pun.content} <br> <span class="date">- ${punDate.toLocaleDateString()}</span> </p>

//                     <div>
//                         <a href="update-pun.html?id=${pun._id}">Update</a> |
//                         <a href="#" class="delete-links" data-id="${pun._id}">Delete</a>
//                     </div>
//                 </li>
//             `;
//         }

//         document.getElementById('pun-list').innerHTML = punsHTML;
//     } catch (error) {
//         console.log(error);
//     }

//     /**
//      *
//      * Add here an eventlistener to all delete-links,
//      * that makes a request, to delete the chosen pun from DB,
//      * And also deletes the pun from the DOM
//      *
//      * 1. Begin with selecting all delete-links with an appropiate element selector
//      * 2. Loop through all delete-links and add an eventlistener for each delete-link,
//      * 3. The eventlisteners should be triggered on the 'click'-event
//      * 4. Make sure to use preventDefault(), to prevent the link from reloading the page
//      * 5. When triggered, the eventlistener should make a "DELETE" request to the URL: https://pun-api.up.railway.app/puns/<punID>, and the <punId> should be retrieved from delete-link data-attribute => 'e.target.dataset.id'
//      * 6. Make sure to remove() the whole pun from DOM.
//      */

//     deletePunEvent();
// }
// fetchAllPuns();
