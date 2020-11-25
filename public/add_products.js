$(function() {

    console.log(" loading")

    let productName = $('#productName');
    let productPrice = $('#productPrice');
    let productManufacturer = $('#productManufacturer');

    // console.log(productName)
    // console.log(productPrice)
    // console.log(productManufacturer)

    $('#btnProductAdd').click(function () {

        addProduct(
            // console.log(productName),
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedProduct) {
                window.alert("Added" + addedProduct.name + " to Database")
            }

        )
    }) 

})