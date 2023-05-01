class HeaderCounter {
    render(count) {
        const html = `
        <div><a href="./cart.html"><img class="shpcrt"
        src="assets/img/shopping-cart.svg" alt=""></a>
<span class="counter-cart">
    ${count}
</span></div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerCounter = new HeaderCounter();

const productsStore = sessionStorageUtil.getProducts();
headerCounter.render(productsStore.length);