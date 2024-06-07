document.getElementById('see-more-button').addEventListener('click', function() {
    var button = this;
    var buttonText = button.querySelector('.button-text');
    var loadingText = button.querySelector('.loading-text');
    var buttonIcon = button.querySelector('.button-icon');

    // Hide button text and icon, show loading text
    buttonText.classList.add('d-none');
    buttonIcon.classList.add('d-none');
    loadingText.classList.remove('d-none');

    // Simulate loading new cards (you should replace this with an actual AJAX call)
    setTimeout(function() {
        // Create new product cards
        var newCards = `
        <div class="col-6">
        <div class="grid-product space-mb--20">
            <div class="grid-product__image">
                <a href="shop-product.html">
                    <img src="assets/img/products/product3.png" class="img-fluid" alt="">
                </a>
                <button class="icon"><img src="assets/img/icons/heart-dark.svg" class="injectable" alt=""></button>
            </div>
            <div class="grid-product__content">
                <h3 class="title"><a href="shop-product.html">Sports Shoe</a></h3>
                <span class="category">Shoe</span>
                <div class="price">
                    <span class="main-price">$50</span>
                    <span class="discounted-price">$20</span>
                </div>
            </div>
            <div class="shop-product-button">
                                            <button class="cart">ADD TO CART</button>
                                            <button class="buy">BUY NOW</button>
                                        </div>
        </div>
    </div>
            <div class="col-6">
            <div class="grid-product space-mb--20">
                <div class="grid-product__image">
                    <a href="shop-product.html">
                        <img src="assets/img/products/product3.png" class="img-fluid" alt="">
                    </a>
                    <button class="icon"><img src="assets/img/icons/heart-dark.svg" class="injectable" alt=""></button>
                </div>
                <div class="grid-product__content">
                    <h3 class="title"><a href="shop-product.html">Sports Shoe</a></h3>
                    <span class="category">Shoe</span>
                    <div class="price">
                        <span class="main-price">$50</span>
                        <span class="discounted-price">$20</span>
                    </div>
                </div>
                <div class="shop-product-button">
                                            <button class="cart">ADD TO CART</button>
                                            <button class="buy">BUY NOW</button>
                                        </div>
            </div>
        </div>
        `;

        // Append new cards to the product list
        var productWrapper = document.querySelector('.all-products-wrapper .row');
        productWrapper.insertAdjacentHTML('beforeend', newCards);

        // Hide loading text and show button text and icon
        buttonText.classList.remove('d-none');
        buttonIcon.classList.remove('d-none');
        loadingText.classList.add('d-none');
    }, 2000); // Simulating a 2-second loading time
});