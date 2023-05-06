window.addEventListener('click', function (event) {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
        calcCartPrice();
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
            calcCartPrice();
        }
    }
});

function calcCartPrice(){
    const cartItems = document.querySelectorAll('.cart-item');
    const amountPrice = document.querySelector('.amount-sum')
    let totalPrice = 0;
    cartItems.forEach(function(item){
       const counterEl = item.querySelector('[data-counter]');
       const priceEl = item.querySelector('.cartprice');
       const amountEl = item.querySelector('#totalCost');
       const currentPrice = parseInt(counterEl.innerText) * parseInt(priceEl.innerText);
       totalPrice += currentPrice;
       amountEl.innerText = currentPrice.toLocaleString() + " Р";
    })
    amountPrice.innerText ='₽ ' + totalPrice;
};


