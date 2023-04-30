let cart = [];
let subtotal = 0;
let total = 0;


function loadCart() {
    // from localStorage
    let savedCart = JSON.parse(localStorage.getItem("cartStorage"));
    if (savedCart != null) {
        cart = savedCart;
    }
}

function addToCart(quantity, item, price) {
    // from button
    cart.push({
        "quantity": quantity,
        "item": item,
        "price": parseFloat(quantity) * parseFloat(price)
    })
    console.log(cart);
    updateCart();
}

function updateCart() {
    //update subtotal, total
    subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal = (parseFloat(subtotal) + parseFloat(cart[i].price)).toFixed(2);
    }
    total = (parseFloat(subtotal) * 1.0925).toFixed(2);
    console.log("subtotal: " + subtotal + ", total: " + total);

    //update #view-cart-button
    let cartQty = 0;
    for (let i = 0; i < cart.length; i++) {
        cartQty = parseFloat(cartQty) + parseFloat(cart[i].quantity);
    }
    if (cartQty > 0) {
        $("#view-cart-button").html("View cart (" + cartQty + ")");
    } else {
        $("#view-cart-button").html("View cart");
    }
    console.log(cartQty);

    //update localStorage
    localStorage.setItem("cartStorage", JSON.stringify(cart));
    
}

function viewCart() {
    $("#cart-info").html("");
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            let entryHTML = '<div class="cart-entry"><p>' + cart[i].item + ' (' + cart[i].quantity + ')</p> <input type="button" class="remove-button" value="Remove" id="' + i + '"></div>';
            $("#cart-info").append(entryHTML);
        }
        var subtotalHTML = "<p> Subtotal: <strong>" + subtotal + "</strong></p>";
        var totalHTML =  "<p> Total: <strong>" + total + "</strong></p>";
        $("#cart-info").append('<div id="cost">' + subtotalHTML + totalHTML + '</div>');
        //console.log("cart has stuff");
    } else {
        $("#cart-info").html("Currently empty :(");

    }
    $("#cart-container").css("opacity", 1);
    $("#cart-container").css("z-index", 999);
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

    loadCart();
    updateCart();

    $("#add-to-cart-plant-button").on("click", function() {
        var quantity = $("#plant-quantity").val();
        addToCart(quantity, "Self-Watering Plant", 24.99);
        //console.log("add to cart");
    });
    $("#add-to-cart-planter-button").on("click", function() {
        var quantity = $("#planter-quantity").val();
        addToCart(quantity, "Self-Watering Pot (Planter Only)", 14.99);
        //console.log("add to cart");
    });

    $("#view-cart-button").on("click", function() {
        updateCart();
        viewCart();
        //console.log("view cart");
    });

    $("#cancel-cart-button").on("click", function() {
        closeCart();
    })
    /*$(".remove-button").on("click", function() {
        console.log("remove")
        console.log(this.prev());
    })*/
    
    $("#cart-container").on("click", ".remove-button", function() {
        console.log("remove");
        console.log($(this).attr('id'));
        var i = $(this).attr('id');
        cart.splice(i, 1)
        updateCart();
        viewCart();
    })
});