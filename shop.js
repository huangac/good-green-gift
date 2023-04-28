let cartQty = 0;
let subtotal = 0;
let total = 0;
let price = 24.99;

function calcCart(qty) {
    cartQty = parseFloat(cartQty) + parseFloat(qty);
    subtotal = (parseFloat(cartQty) * parseFloat(price)).toFixed(2);
    total = (subtotal * 1.0925).toFixed(2);
    localStorage.setItem("cartQty", cartQty);
    if (cartQty > 0) {
        $("#view-cart-button").val("View cart (" + cartQty + ")");
    } else {
        $("#view-cart-button").val("View cart");
    }
    
}
function viewCart() {
    if (cartQty != 0) {
        var entryHTML = '<div class="cart-entry"><p>Self Watering Plant (' + cartQty + ')</p> <input type="button" id="remove-button" value="Remove"></div>';
        var subtotalHTML = "<p> Subtotal: <strong>" + subtotal + "</strong></p>";
        var totalHTML =  "<p> Total: <strong>" + total + "</strong></p>";
        $("#cart-info").html(entryHTML + '<div id="cost">' + subtotalHTML + totalHTML + '</div>');
        //console.log("cart has stuff");
    } else {
        $("#cart-info").html("Currently empty :(");

    }
    $("#cart-container").css("opacity", 1);
    $("#cart-container").css("z-index", 999);
    //console.log("cart qty: " + cartQty + " subtotal: " + subtotal);
}

function closeCart() {
    $("#cart-container").css("opacity", 0);
    $("#cart-container").css("z-index", -1);
}

function toggleStylesheet() {
    var currentStylesheet = $("#shop-color-mode-stylesheet").attr("href");
    if (currentStylesheet == "shop-light.css") {
        $("#color-mode-stylesheet").attr("href", "style-dark.css");
        $("#shop-color-mode-stylesheet").attr("href", "shop-dark.css");
        $("#color-mode").html("Shop in light mode");
        localStorage.setItem("color-mode", "dark");
    } else if (currentStylesheet == "shop-dark.css") {
        $("#color-mode-stylesheet").attr("href", "style-light.css");
        $("#shop-color-mode-stylesheet").attr("href", "shop-light.css");
        $("#color-mode").html("Shop in dark mode");
        localStorage.setItem("color-mode", "light");
    }
    
    console.log($("#color-mode-stylesheet").attr("href"));

}

$(document).ready(function() {
    console.log(localStorage.getItem("color-mode"));
    if (localStorage.getItem("color-mode") == "light") {
        $("#color-mode-stylesheet").attr("href", "style-light.css");
        $("#shop-color-mode-stylesheet").attr("href", "shop-light.css");
        $("#color-mode").html("Shop in dark mode");
    } else if (localStorage.getItem("color-mode") == "dark") {
        $("#color-mode-stylesheet").attr("href", "style-dark.css");
        $("#shop-color-mode-stylesheet").attr("href", "shop-dark.css");
        $("#color-mode").html("Shop in light mode");
    }

    $("#color-mode").on("click", function() {
        toggleStylesheet();
    })

    console.log(localStorage.getItem("cartQty"));
    if (localStorage.getItem("cartQty") > 0) {
        cartQty = localStorage.getItem("cartQty");
        calcCart(0);
    }
    $("#add-to-cart-button").on("click", function() {
        var quantity = $("#quantity").val();
        calcCart(quantity);
        //console.log("add to cart");
    });

    $("#view-cart-button").on("click", function() {
        viewCart();
        //console.log("view cart");
    });

    $("#cancel-cart-button").on("click", function() {
        closeCart();
    })
    $("#cart-container").on("click", "#remove-button", function() {
        //console.log("remove");
        cartQty = 0;
        calcCart(0);
        viewCart();
        localStorage.clear();
    })
});