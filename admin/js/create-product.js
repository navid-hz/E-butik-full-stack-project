const ROOT_URL = 'http://localhost:5000'

async function createProduct() {
  // console.log(JSON.stringify({username:"admin", password:"123"}));
  // checkAccessToken()

  try {
    document
      .getElementById('create-product')
      .addEventListener('submit', async function (e) {
        e.preventDefault()
        console.log(e.target)

        // let contentTextAreaValue = document.getElementById('content-textarea').value;
        let title = document.getElementById('title').value
        let price = document.getElementById('price').value
        let stock = document.getElementById('stock').value
        let image = document.getElementById('image').value
        let category = document.getElementById('category').value
        let description = document.getElementById('description').value
        console.log(title, price, stock, image, category, description)

        let formDataObject = serializeForm(e.target)
        console.log(formDataObject)

        const response2 = await fetch('http://127.0.0.1:5000/api/store', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // Authorization: 'Bearer ' + localStorage.getItem('accessToken')
            // 'Content-Type': 'application/x-www-form-urlencoded'
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

let serializeForm = function (form) {
  var obj = {}
  var formData = new FormData(form)
  // console.log(formData.getAll());

  for (var key of formData.keys()) {
    let inputData = formData.getAll(key)

    if (inputData.length > 1) {
      obj[key] = inputData
    } else {
      obj[key] = inputData[0]
    }
  }

  // console.log(obj);
  return JSON.stringify(obj)
}
