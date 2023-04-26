let cartQty = 0;
let subtotal = 0;
let total = 0;
let price = 24.99;

function calcCart(qty) {
    cartQty += parseFloat(qty);
    subtotal = parseFloat(cartQty) * parseFloat(price);
    total = (subtotal * 1.0925).toFixed(2)
    $("#view-cart-button").val("View cart (" + cartQty + ")");

}
function viewCart() {
    if (cartQty != 0) {
        var entryHTML = '<div class="cart-entry"><p>Self Watering Plant (' + cartQty + ')</p> <input type="button" id="remove-button" value="Remove"></div>';
        var subtotalHTML = "<p> Subtotal: <strong>" + subtotal + "</strong></p>";
        var totalHTML =  "<p> Total: <strong>" + total + "</strong></p>";
        $("#cart-info").html(entryHTML + '<div id="cost">' + subtotalHTML + totalHTML + '</div>');
        console.log("cart has stuff");
    }
    $("#cart-container").css("opacity", 1);
    $("#cart-container").css("z-index", 999);
    console.log("cart qty: " + cartQty + " subtotal: " + subtotal);
}

function closeCart() {
    $("#cart-container").css("opacity", 0);
    $("#cart-container").css("z-index", -1);
}

$("#cart-container").on("click", "#remove-button", function() {
    cartQty = 0;
    calcCart();
    viewCart();
    console.log("remove");
})

$(document).ready(function() {
    $("#add-to-cart-button").on("click", function() {
        var quantity = $("#quantity").val();
        calcCart(quantity);
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