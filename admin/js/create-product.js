// button create product
let btnCreate = document.getElementById('btn-create')

const createProductForm = () => {
  // form values
  let title = document.getElementById('title').value
  let description = document.getElementById('description').value
  let price = document.getElementById('price').value
  let stock = document.getElementById('stock').value
  let category = document.getElementById('category').value

  console.log(category)

  // create json object
  let createJson = {
    title: title,
    description: description,
    price: price,
    stock: stock,
    category: category,
  }
  return createJson
}


btnCreate.addEventListener('click', async function () {
  let createJson = createProductForm()
  console.log(createJson)

    fetch('http://localhost:5000/api/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        },
        body: JSON.stringify(createJson)
    })

        .then(response => response.ok ? response.json() : Promise.reject(response))
        .catch(error => console.log(error))
        .finally(location.replace('../products.html')) // Redirect to index.html)
        
});
