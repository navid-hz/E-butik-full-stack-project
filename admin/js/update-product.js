const id = new URLSearchParams(window.location.search).get('id')
console.log(id)

let updateBtn = document.getElementById('btn-update')

const getProduct = async (id) => {
  await checkAccessToken()

  const res = await fetch(ROOT + '/api/store/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
  if (!res.ok) {
    throw new Error('Could not fetch')
  } else {
    const data = await res.json()
    document.getElementById('title').value = data.title
    document.getElementById('description').value = data.description
    document.getElementById('price').value = data.price
    document.getElementById('stock').value = data.stock
    document.getElementById('category').value = data.category
    console.log(data)
    //return fillForm(data);
  }
}
//let main = document.getElementById('main');

console.log(getProduct(id))
//console.log(data);
// const fillForm =  async (data) => {
//     document.getElementById('title').value = data.title;
//     document.getElementById('description').value = data.description;
//     document.getElementById('price').value = data.price;
//     document.getElementById('stock').value = data.stock;
//     document.getElementById('category').value = data.category;
// //}

const updateProduct = async () => {
  await checkAccessToken()

  let updateJson = updateProductForm()
  console.log(updateJson)

  fetch(ROOT + '/api/store/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
    body: JSON.stringify(updateJson)
  })
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .catch((error) => console.log(error))
    .finally(open(ROOT + '/admin/creat-product.html')) // clear form after submit
}

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
