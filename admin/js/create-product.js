async function createProduct() {
  // console.log(JSON.stringify({username:"admin", password:"123"}));
  // checkAccessToken()

  try {
    document
      .getElementById('create-product')
      .addEventListener('submit', async function (e) {
        e.preventDefault()

        let title = document.getElementById('title').value
        let price = document.getElementById('price').value
        let stock = document.getElementById('stock').value
        let image = document.getElementById('image').value
        let category = document.getElementById('category').value
        let description = document.getElementById('description').value

        let formDataObject = {
          title,
          price,
          stock,
          image,
          category,
          description
        }
        console.log(JSON.stringify(formDataObject))

        const response2 = await fetch('http://127.0.0.1:5000/api/store', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // Authorization: 'Bearer ' + localStorage.getItem('accessToken')
          },
          body: JSON.stringify(formDataObject) // body data type must match "Content-Type" header
        })

        // location.replace('../../products.html') // Redirect to index.html
      })
  } catch (error) {
    console.log(error)
  }
}

createProduct()
