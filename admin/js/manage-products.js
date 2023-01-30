const productsTable = document.getElementById('tbody');

const renderProductsTable = async () => {

    let res = await fetch(ROOT + '/api/store', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
    let products = await res.json();
    console.log(products);
    
    if (res.status !== 200) {
        throw new Error('Cannot fetch the data');
    } else {
        if (products.length === 0) {
            productsTable.innerHTML = `
            <tr>
                <td>There are no products</td>
            </tr>
            `;
        } else {
            let template = '';
            products.forEach(products => {
                template += `
                <tr>
                <th scope="row"><input type="checkbox" /></th>
                <td class="tm-product-name" id="title">${products.title}</td>
                <td id="price">${products.price}</td>
                <td id="stock">${products.stock}</td>
                <td id="date">${products.date}</td>
                <td id="setting-btn">
                  <a href="http://localhost:5000/api/store/update-product.html?id=${products._id}" class="tm-product-delete-link">
                    <i class="far fa-trash-alt tm-product-delete-icon"></i>
                  </a>
                </td>
                <td id="del-btn">
                  <a href="${deleteProduct(products._id)}}" class="tm-product-delete-link">
                    <i class="far fa-trash-alt tm-product-delete-icon"></i>
                  </a>
                </td>
              </tr>
                `;
            });
        productsTable.innerHTML = template;
        }
        
    }
    
}

const deleteProduct = async (id) => {
    
    let res2 = await fetch(ROOT + '/api/store/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
    let data = await res2.json();
    console.log(data);

    if (res2.status !== 200) {
        throw new Error('Cannot delete the data');
    } else {
        renderProductsTable();
    }
}
    

window.addEventListener('DOMContentLoaded', () =>  renderProductsTable());
