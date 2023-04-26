let cartQty = 0;
let subtotal = 0;
let price = 24.99;

$(document).ready(function() {
    $("#add-to-cart-button").on("click", function() {
        var quantity = $("#quantity").val();
        addToCart(quantity);
        console.log("add to cart");
    });

    $("#view-cart-button").on("click", function() {
        viewCart();
        console.log("view cart");
    });

    $("#cancel-cart-button").on("click", function() {
        closeCart();
    })
});

function addToCart(qty) {
    cartQty += parseFloat(qty);
    $("#view-cart-button").val("View cart (" + cartQty + ")");
    subtotal = parseFloat(cartQty) * parseFloat(price);
}
function viewCart() {
    $("#cart-container").css("opacity", 1);
    console.log("cart qty: " + cartQty + " subtotal: " + subtotal)
}

function closeCart() {
    $("#cart-container").css("opacity", 0);
}