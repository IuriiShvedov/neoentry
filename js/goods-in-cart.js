class Shopping {

    render (){
        const productsStore = sessionStorageUtil.getProducts();
        let htmlCatalog = '';
        GOODS.forEach(({id, imgSrc, price, title}) => {
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                <div class="cart-item" data-id="${id}">
                                        <div class="section-cartone">
                                            <div class="cartimg"><img src="${imgSrc}" alt=""></div>
                                            <div class="cartnameprice">
                                                <div class="cartname">
                                                    <p>${title}</p>
                                                </div>
                                                <div class="cartprice">
                                                    ${price} ₽
                                                </div>
                                            </div>
                                            <div class="cartdelete"><img src="assets/img/delete.svg" alt=""></div>
                                        </div>
                                        <div class="section-carttwo">
                                            <div class="cartcounter counter-wrapper">
                                                <div class="items_control" data-action='minus'><img src="assets/img/minus.svg"
                                                        alt="minus" data-action='minus'></div>
                                                <div class="items__current" data-counter>1</div>
                                                <div class="items_control" data-action='plus'><img src="assets/img/plus.svg" alt="plus"
                                                        data-action='plus'></div>
                                            </div>
                                            <div class="cartpriceamount" id="totalCost">
                                                 ₽
                                            </div>
                                        </div>
                                    </div>
                `;
            }
        });

        ROOT_SHOPPING.innerHTML = htmlCatalog;
    }
};

const shoppingPage = new Shopping();
shoppingPage.render();
