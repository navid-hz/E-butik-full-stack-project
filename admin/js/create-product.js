const createProductForm = () => {

// button create product
let btnCreate = document.getElementById('btn-create');

// form values
let title = document.getElementById('title').value;
let description = document.getElementById('description').value;
let price = document.getElementById('price').value;
let stock = document.getElementById('stock').value;
let category = document.getElementById('category').value;

// create json object
let createJson = {
    title: title,
    description: description,
    price: price,
    stock: stock,
    category: category,
    date : new Date()
}
return createJson;
}

btnCreate.addEventListener('click', async function () {
    let createJson = createProductForm();
    console.log(createJson);

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createJson)
    })
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .catch(error => console.log(error))

});
