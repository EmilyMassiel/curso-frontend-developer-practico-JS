email = document.querySelector('.navbar-email');
deskmenu = document.querySelector('.desktop-menu');
icon = document.querySelector('.menu');
mobilemenu = document.querySelector('.mobile-menu');
carritoicon = document.querySelector('.navbar-shopping-cart');
aside = document.querySelector('.product-detail');
cardsContainer = document.querySelector('.cards-container');
productDetails = document.querySelector('.real-product-detail');
closeButton = document.querySelector('.product-detail-close img')


email.addEventListener('click', displayDesktopMenu);
icon.addEventListener('click', displayMobileMenu);
carritoicon.addEventListener('click', displayAside);
cardsContainer.addEventListener('click', displayProductDetail);
closeButton.addEventListener('click', closeProductDetail);

function displayDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    const isProductDetailClosed = productDetails.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetails.classList.add('inactive');
    }
    deskmenu.classList.toggle('inactive');
}
function displayMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    const isProductDetailClosed = productDetails.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetails.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}
function displayAside(){
    const isMobMenuClosed = mobilemenu.classList.contains('inactive');
    if (!isMobMenuClosed) {
        mobilemenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetails.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetails.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
function displayProductDetail(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    productDetails.classList.toggle('inactive');
}
function closeProductDetail(){
    productDetails.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '1,200',
    photo: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Led',
    price: '250',
    photo: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: '5,590',
    photo: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for (product of arr){
        console.log(product.productName);
        const productCart = document.createElement('div');
        productCart.classList.add('product-cart');
    
        const cartimg = document.createElement('img');
        cartimg.classList.add('cartimg');
        cartimg.setAttribute('src', product.photo);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divCart = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productname = document.createElement('p');
        productname.innerText = product.name;
    
        divCart.append(productPrice, productname)
        
        const figureCart = document.createElement('figure');
        const carIcon = document.createElement('img');
        carIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        figureCart.append(carIcon);
    
        productInfo.append(divCart, figureCart);
        productCart.append(cartimg, productInfo);
        cardsContainer.append(productCart);
    }
}

renderProducts(productList);