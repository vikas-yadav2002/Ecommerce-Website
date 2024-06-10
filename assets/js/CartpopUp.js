// document.querySelectorAll('.shop-product-button .cart').forEach(button => {
//     button.addEventListener('click', function() {
//         const cartPopup = document.getElementById('cart-popup');
//         cartPopup.style.display = 'block';
//         setTimeout(() => {
//             cartPopup.style.bottom = '0';
//         }, 10);
//     });
// });

// document.querySelector('.cart-popup .close').addEventListener('click', function() {
//     const cartPopup = document.getElementById('cart-popup');
//     cartPopup.style.bottom = '-100%';
//     setTimeout(() => {
//         cartPopup.style.display = 'none';
//     }, 300);
// });

// document.querySelector('.quantity-control .increase').addEventListener('click', function() {
//     const quantityInput = document.querySelector('.quantity-control .quantity');
//     quantityInput.value = parseInt(quantityInput.value) + 1;
// });

// document.querySelector('.quantity-control .decrease').addEventListener('click', function() {
//     const quantityInput = document.querySelector('.quantity-control .quantity');
//     if (quantityInput.value > 1) {
//         quantityInput.value = parseInt(quantityInput.value) - 1;
//     }
// });

// document.querySelector('.add-item').addEventListener('click', function() {
//     // Add item to cart logic here
//     alert('Item added to cart!');
//     const cartPopup = document.getElementById('cart-popup');
//     cartPopup.style.bottom = '-100%';
//     setTimeout(() => {
//         cartPopup.style.display = 'none';
//     }, 300);
// });

// new code 

document.addEventListener('DOMContentLoaded', () => {
    const cartPopup = document.getElementById('cart-popup');
    const closeCartPopup = () => {
        cartPopup.style.bottom = '-100%';
        setTimeout(() => {
            cartPopup.style.display = 'none';
        }, 300);
    };

    // Show cart popup on button click
    document.querySelectorAll('.shop-product-button .cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            cartPopup.style.display = 'block';
            setTimeout(() => {
                cartPopup.style.bottom = '0';
            }, 10);
        });
    });

    // Close cart popup on close button click
    document.querySelector('.cart-popup .close').addEventListener('click', closeCartPopup);

    // Close cart popup on clicking outside
    document.addEventListener('click', (event) => {
        if (!cartPopup.contains(event.target) && !event.target.closest('.shop-product-button .cart')) {
            closeCartPopup();
        }
    });

    // Prevent propagation when clicking inside cart popup
    cartPopup.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Increase quantity
    document.querySelector('.quantity-control .increase').addEventListener('click', function() {
        const quantityInput = document.querySelector('.quantity-control .quantity');
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    // Decrease quantity
    document.querySelector('.quantity-control .decrease').addEventListener('click', function() {
        const quantityInput = document.querySelector('.quantity-control .quantity');
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    // Add item to cart
    document.querySelector('.add-item').addEventListener('click', function() {
        // Add item to cart logic here
        alert('Item added to cart!');
        closeCartPopup();
    });
});
