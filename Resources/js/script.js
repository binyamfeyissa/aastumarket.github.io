//get data from products.json
let products = null;
fetch('../../Resources/js/Products.json')
.then(response => response.json())
.then(data => {
    products =data;
    console.log(products);
    addDataToHTML();
})
//add the data product to html
let listProducts = document.querySelector('.listProducts');
function addDataToHTML(){
    products.forEach(product => {
        //create new element item
        let newProduct = document.createElement('a');
        newProduct.href = '../../App/views/detail.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `<img src="${product.image}">
                <h2>${product.name}</h2>
                <div class="price">${product.price} Birr</div> `;
        
        // add this element in listProduct class
        listProducts.appendChild(newProduct);
    })
}

//slider

//add product to slider
