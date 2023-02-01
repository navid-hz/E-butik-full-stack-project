//Get the id from the url
const id = new URLSearchParams(window.location.search).get('id');


let main = document.getElementById('main');

// render product
const renderProduct = async () => {
    await   checkAccessToken();
    // Get product
    const res = await fetch(ROOT + '/api/store/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
    // Error handling
    if (!res.ok) {
        throw new Error('Could not fetch');
    } else {
        const data = await res.json();
        // create product html
        let html = `
        <div class="container mt-5">
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-md-6 mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="img-fluid" alt="" />
                </div>
                <!--Grid column-->
    
                <!--Grid column-->
                <div class="col-md-6 mb-4">
                    <!--Content-->
                    <div class="p-4" id="content">
                        <div class="mb-3">
                            <a href="">
                                <span class="badge bg-dark me-1">${data.category.join()}</span>
                            </a>
                        </div>
    
                        <p class="lead">
                            <span class="me-1">
                                ${data.price} Kr
                            </span>
                        </p>
    
                        <strong><p style="font-size: 20px;">${data.title}</p></strong>
    
                        <p><strong>Description: </strong>${data.description}</p>

                        <p>
                            <span class="me-1"><strong>Stock: </strong>
                                ${data.stock}
                            </span>
                        </p>    
                        <a href="admin/update-product.html?id=${data._id}">
                                <button class="btn btn-primary ms-1" type="button">
                                Edit
                                <i class="fas fa-pen-to-square ms-1"></i>
                                </button>
                        </a>
                    </div>
                    <!--Content-->
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
    
            <hr />
    
            <!--Grid row-->
            <div class="row d-flex justify-content-center">
                <!--Grid column-->
                <div class="col-md-6 text-center">
                    <h4 class="my-4 h4">Additional information</h4>
    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
    
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-lg-4 col-md-12 mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" class="img-fluid" alt="" />
                </div>
                <!--Grid column-->
    
                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" class="img-fluid" alt="" />
                </div>
                <!--Grid column-->
    
                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" class="img-fluid" alt="" />
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
        </div>
    `;
        //insert product html
    main.innerHTML = html;
    }
    
}
    
//call action function
renderProduct();   
    
