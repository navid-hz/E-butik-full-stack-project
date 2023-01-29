const productsTable = document.getElementById('tbody');

const renderProductsTable = async () => {
    let url = 'http://localhost:5000/api/store';
    let response = await fetch(url);
    let products = await response.json();
    
    if (response.status !== 200) {
        throw new Error('Cannot fetch the data');
    } else {
        if (products.length === 0) {
            productsCardsContainer.innerHTML = '<h1>There are no products</h1>';
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
                  <a href="http://localhost:5000/api/store/update-product.html?id=${products.id}" class="tm-product-delete-link">
                    <i class="far fa-trash-alt tm-product-delete-icon"></i>
                  </a>
                </td>
                <td id="del-btn">
                  <a href="${deleteProduct(products.id)}}" class="tm-product-delete-link">
                    <i class="far fa-trash-alt tm-product-delete-icon"></i>
                  </a>
                </td>
              </tr>
                `;
            });
        }
    }
    productsCardsContainer.innerHTML = template;
}

const deleteProduct = async (id) => {
    let url = `http://localhost:5000/api/store/${id}`;
    let response = await fetch(url, {
        method: 'DELETE'
    } );
    let data = await response.json();
    console.log(data);

    if (response.status !== 200) {
        throw new Error('Cannot delete the data');
    } else {
        renderProductsTable();
    }
}
    

window.addEventListener('DOMContentLoaded', () => renderProducts());
