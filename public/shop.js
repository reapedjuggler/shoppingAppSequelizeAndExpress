// const product = require("../routes/api/product");

// Asynchronous function call fetchProduct will be called and once its done " done " function will be called;

function fetchProduct (done) {
    $.get('/api/product', (data) => {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    console.log("heyyyy reaped", name, manuf, price)

    $.post('/api/product',{
        name:name,
        manufacturer: manuf,
        price: price,
    }, function (data) {
        done(data)
    })

    console.log("hellllllo")
}

function createProductCard (product) {
  
    return $(`
        <div class="col-4 card mx-2 p-4">     
            <h4 class="product-name">${product.name}</h4>
            <div class="product-manufacturer">${product.manuFacturer}</div>
            <div class="row">
                <div class="col m-3 p-0">
                <b>Rs. ${parseInt(product.price)}</b>
                </div>
                <button class="col-6 btn btn-primary m-3 p-1">Buy</button>    
            </div>
        </div>        
        `)
};
