const productsCardsContainer = document.getElementById('products-cards-container');

const renderProducts = async () => {
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
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"     data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"           class="w-100" />
                                <a href="product.html?id=${products.id}!">
                                    <div class="hover-overlay">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-body">
                                <a href="" class="text-reset">
                                    <h5 class="card-title mb-2">${products.title}</h5>
                                </a>
                                <a href="" class="text-reset ">
                                    <p>${products.categoty[0]}</p>
                                </a>
                                <h6 class="mb-3 price">${products.prise}</h6>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    }
    productsCardsContainer.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderProducts());
