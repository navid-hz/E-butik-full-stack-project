const id = new URLSearchParams(window.location.search).get('id');
const getProduct = async (id) => {
    const res = await fetch('http://localhost:5000/api/store' + id);
    if (!res.ok) {
        throw new Error('Could not fetch');
    } else {
        const data = await res.json();
        return data;
    }
}
let main = document.getElementById('main');


const renderProduct = async () => {
    const res = await fetch('http://localhost:5000/api/store' + id);
    if (!res.ok) {
        throw new Error('Could not fetch');
    } else {
        const data = await res.json();
        let html = `
        <div class="container mt-5">
            <!--Grid row-->
            <div class="row">
                <!--Grid column-->
                <div class="col-md-6 mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" class="img-fluid" alt="" />
                </div>
                <!--Grid column-->
    
                <!--Grid column-->
                <div class="col-md-6 mb-4">
                    <!--Content-->
                    <div class="p-4" id="content">
                        <div class="mb-3">
                            <a href="">
                                <span class="badge bg-dark me-1">Category 2</span>
                            </a>
                        </div>
    
                        <p class="lead">
                            <span class="me-1">
                                ${data.price} Kr
                            </span>
                        </p>
    
                        <strong><p style="font-size: 20px;">${data.title}</p></strong>
    
                        <p><strong>Description: </strong>${data.description}</p>
    
                        <form class="d-flex justify-content-left">
                            <!-- Default input -->
                            <div class="form-outline me-1" style="width: 100px;">
                                <label for="stock">
                                    Stock: 
                                </label>
                                <input type="number" value="${data.stock}" class="form-control" />
                            </div>
                            <button class="btn btn-primary ms-1" type="submit">
                                Add to cart
                                <i class="fas fa-shopping-cart ms-1"></i>
                            </button>
                        </form>
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
    }    
    main.innerHTML = html;
}