const productsTable = document.getElementById('tbody')

const renderProductsTable = async () => {
  await checkAccessToken()

  let res = await fetch(ROOT + '/api/store', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
  let products = await res.json()
  console.log(products)

  if (res.status !== 200) {
    throw new Error('Cannot fetch the data')
  } else {
    if (products.length === 0) {
      productsTable.innerHTML = `
            <tr>
                <td>There are no products</td>
            </tr>
            `
    } else {
      let template = ''
      products.forEach((products) => {
        template += `
                <tr>
                <td class="tm-product-name" id="title">${products.title}</td>
                <td id="price">${products.price}</td>
                <td id="stock">${products.stock}</td>
                <td id="date">${products.date}</td>
                <td id="setting-btn">
                  <a href="update-product.html?id=${products._id}" class="tm-product-delete-link">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </a>
                </td>
                <td class='del-btn'>
                  <a href="" class="tm-product-delete-link" data-id="${products._id}">
                    <i class="far fa-trash-alt tm-product-delete-icon" ></i>
                  </a>
                </td>
              </tr>
                `
      })
      productsTable.innerHTML = template
    }
    
    deleteProduct();
}
}

const deleteProduct = async (id) => {
    await checkAccessToken();
    const delBtn = document.getElementsByClassName('del-btn');

    for (let i of delBtn) {
        i.addEventListener('click', async (e) => {
            e.preventDefault();
            let id = e.target.parentNode.dataset.id;
            console.log(e.target);
            console.log(id);
            try {
                const res3 = await fetch(ROOT + '/api/store/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')

                    }
                });
                console.log(res3);
                location.reload();
            } catch (error) {
                console.log(error);
            }
        });
    }
}


    


    

window.addEventListener('DOMContentLoaded', () =>  renderProductsTable());
