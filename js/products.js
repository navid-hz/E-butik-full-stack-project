const productsCardsContainer = document.getElementById('products-cards-container');

// render products cards
const renderProducts = async () => {
  await checkAccessToken()

  // Get products
  let response1 = await fetch(ROOT + '/api/store', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })

  // Get Data
  let products = await response1.json()
  
  // Error handling
  if (response1.status !== 200) {
    throw new Error('Cannot fetch the data')
  } else {
    // Create products cards
    let template = ''
    products.forEach((products) => {
      template += `
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"     data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="w-100" />
                                <a href="product.html?id=${products._id}">
                                    <div class="hover-overlay">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">${
                                      products.title
                                    }</h5>
                                </a>
                                <a href="" class="text-reset ">
                                    <p>${products.category.join()}</p>
                                </a>
                                <h6 class="mb-3 price">${products.price}</h6>
                            </div>
                        </div>
                    </div>
                `
    })
    // Insert products cards
    productsCardsContainer.innerHTML = template
  }
}
// call Action Function
window.addEventListener('DOMContentLoaded', () => renderProducts())


