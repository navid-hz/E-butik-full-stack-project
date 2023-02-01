// Get the product id from the url
const id = new URLSearchParams(window.location.search).get('id')


let updateBtn = document.getElementById('btn-update')

// Get the product from the database
const getProduct = async (id) => {
  await checkAccessToken()
  // Get product
  const res = await fetch(ROOT + '/api/store/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
  // Error handling
  if (!res.ok) {
    throw new Error('Could not fetch')
  } else {
    // fill the form with the product data
    const data = await res.json()
    document.getElementById('title').value = data.title
    document.getElementById('description').value = data.description
    document.getElementById('price').value = data.price
    document.getElementById('stock').value = data.stock
    document.getElementById('category').value = data.category
    
    
  }
}

// Update the product
const updateProduct = async () => {
  await checkAccessToken()

  let updateJson = updateProductForm()
  
    // put request
    fetch(ROOT + '/api/store/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        },
        body: JSON.stringify(updateJson)
    })
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .catch(error => console.log(error))
        .finally(location.replace('../products.html'))
}
// create json object withe new product data
const updateProductForm = () => {
  let title = document.getElementById('title').value
  let description = document.getElementById('description').value
  let price = document.getElementById('price').value
  let stock = document.getElementById('stock').value
  let category = document.getElementById('category').value
  let updateJson = {
    title: title,
    description: description,
    price: price,
    stock: stock,
    category: category
  }
  return updateJson
}

updateBtn.addEventListener('click', () => {
  updateProduct()
})
