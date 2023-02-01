const productsTable = document.getElementById('tbody')

// render products table

const renderProductsTable = async () => {
  await checkAccessToken()

  // get products

  let res = await fetch(ROOT + '/api/store', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  })
  let products = await res.json()
  
  // Error handling

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

      // create table

      let template = ''
      products.forEach((products) => {
        template += `
                <tr>
                <td class="tm-product-name" id="title">${products.title}</td>
                <td id="price">${products.price}</td>
                <td id="stock">${products.stock}</td>
                <td id="date">${products.date.slice(0, 10)}</td>
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

      // insert table

      productsTable.innerHTML = template
    }
    
    deleteProduct();
}
}

// delete product function

const deleteProduct = async (id) => {
    await checkAccessToken();
    const delBtn = document.getElementsByClassName('del-btn');

    for (let i of delBtn) {
        i.addEventListener('click', async (e) => {
            e.preventDefault();
            let id = e.target.parentNode.dataset.id;
            
            try {
                const res3 = await fetch(ROOT + '/api/store/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')

                    }
                });
              
                location.reload();
            } catch (error) {
                console.log(error);
            }
        });
    }
}


    


    
// call action function

window.addEventListener('DOMContentLoaded', () =>  renderProductsTable());
