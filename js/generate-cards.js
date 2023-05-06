class Products {

    constructor(){
        this.classNameActive = 'desctobuy_active';
        this.labelAdd = 'Купить';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetSessionStorage (element, id){
        const { pushProduct, products } = sessionStorageUtil.putProducts(id);
        if (pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerCounter.render(products.length);
    }

    render() {
        const productsStore = sessionStorageUtil.getProducts();
        let htmlCatalog = '';

        GOODS.forEach(({id, imgSrc, price, rate, sale, title}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            }else{
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <div class="product" data-id="${id}">
            <div class="product-img">
                <img src="${imgSrc}" alt="" class="product-image">
            </div>
            <div class="product-desc">
                <div class="titledescone">
                    <div class="titledesc">
                        <a href="" class="product-title">${title}</a>
                    </div>
                    <div class="product-price">
                        <div class="product-price-value">${price} ₽</div><span>${sale}</span>
                    </div>
                </div>
                <div class="titledesctwo">
                    <div class="product-rate">
                        <span class="active"> <img src="assets/img/rate.svg" alt=""> </span>
                        ${rate}
                    </div>
                    <div class="desctobuy${activeClass}" data-cart onclick="productsPage.handleSetSessionStorage(this, '${id}');">
                        ${activeText}
                    </div>
                </div>
            </div>
        </div>
            `;
        });
        const html = `
        <div class="products-wrapper">${htmlCatalog}</div>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

    renderHeadphones() {
        const productsStore = sessionStorageUtil.getProducts();
        let htmlCatalog = '';
        HEADPHONES.forEach(({id, imgSrc, price, rate, sale, title}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            }else{
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <div class="product" data-id="${id}">
            <div class="product-img">
                <img src="${imgSrc}" alt="" class="product-image">
            </div>
            <div class="product-desc">
                <div class="titledescone">
                    <div class="titledesc">
                        <a href="" class="product-title">${title}</a>
                    </div>
                    <div class="product-price">
                        <div class="product-price-value">${price} ₽</div><span>${sale}</span>
                    </div>
                </div>
                <div class="titledesctwo">
                    <div class="product-rate">
                        <span class="active"> <img src="assets/img/rate.svg" alt=""> </span>
                        ${rate}
                    </div>
                    <div class="desctobuy${activeClass}" data-cart onclick="productsPage.handleSetSessionStorage(this, '${id}');">
                        ${activeText}
                    </div>
                </div>
            </div>
        </div>
            `;
        });

        const htmlHeadphones = `
        <div class="products-wrapper">${htmlCatalog}</div>
        `;

        ROOT_PRODUCTS_TWO.innerHTML = htmlHeadphones;
    }
}
const productsPage = new Products();
productsPage.render();
productsPage.renderHeadphones();

