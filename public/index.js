
// console.log("hey Reaped");

/*                     V . IMP part ................. how to use Async function ..................................


// // Asynchronous function call fetchProduct will be called and once its done " done " function will be called;

// function fetchProduct (done) {
//     $.get('/api/product', (data) => {
//         done(data)
//     })
// }

// function createProductCard (product) {
  
//     return $(`

//         <div class="col-4 card mx-2 p-4">     
//             <h4 class="product-name">${product.name}</h4>
//             <div class="product-manufacturer">${product.manuFacturer}</div>
//             <div class="row">
//                 <div class="col m-3 p-0">
//                 <b>Rs. ${parseInt(product.price)}</b>
//                 </div>
//                 <button class="col-6 btn btn-primary m-3 p-1">Buy</button>    
//             </div>
//         </div>        
//         `)

// };


.................................................................................................................. */

// This is basically the int main () of our jQuery

$(function() {

    let productList = $(`#product-list`);

    // console.log(productList);

    fetchProduct (function(products) {

        // Once fetchProduct is completed this will be called ............. AJAX call (Async call)

        productList.empty();
        for(product of products) {
            console.log(product);
            productList.append(createProductCard(product));
        }
    })

})
