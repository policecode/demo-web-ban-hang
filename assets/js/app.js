const getSmartPhoneAPI = 'https://dbjsonfake.herokuapp.com/api/smartphone';
function start() {
    getSmartPhone(renderSmartPhone);
    handleCreateForm ();
    // convertCurrency('123asd23234')
}
start();

function getSmartPhone(callback) {
    fetch(getSmartPhoneAPI)
        .then((response) => {
            return response.json();
        })
        .then(callback)
        .catch((error) => {

        });
}

function renderSmartPhone(smartPhones) {
    var jsRow = document.querySelector('.js_row');
    var htmls = smartPhones.map(smartPhone => {
        return `
            <div class="col l-3 m-4 c-6">
                <div class="card_border">
                    <div class="card">
                        <span class="card_badge">trả góp 0%</span>
                        <div class="card_img">
                            <img src="${smartPhone.img}" alt="">
                        </div>
                        <div class="card_information">
                            <h4 class="card_product">${smartPhone.phoneName}</h4>
                            <div class="card_price">${smartPhone.price}<span class="card_unit">đ</span> </div>
                            <div class="card_star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                                <span class="card_star-count">234</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join('');
    jsRow.innerHTML = htmls;
}

// CREATE
function createPhone(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(getSmartPhoneAPI, options)
        .then( response => {
            response.json();
        })
        .then(callback);
}

function handleCreateForm () {
    var formSubmitBtn = document.querySelector('.form_submit');
    formSubmitBtn.onclick = () => {
        var jsRow = document.querySelector('.js_row');
        const modalBtn = document.querySelector('.modal');

        var phoneName = document.querySelector('#input-1');
        var price = document.querySelector('#input-2');
        var img = document.querySelector('#input-3');

        var formData = {
            phoneName: phoneName.value,
            price: price.value,
            img: img.value
        }
        createPhone(formData, () => {
            jsRow.insertAdjacentHTML = `
                <div class="col l-3 m-4 c-6">
                    <div class="card_border">
                        <div class="card">
                            <span class="card_badge">trả góp 0%</span>
                            <div class="card_img">
                                <img src="${formData.img}" alt="">
                            </div>
                            <div class="card_information">
                                <h4 class="card_product">${formData.phoneName}</h4>
                                <div class="card_price">${formData.price}<span class="card_unit">đ</span> </div>
                                <div class="card_star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half"></i>
                                    <span class="card_star-count">234</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            phoneName.value = '';
            price.value = '';
            img.value = '';
            modalBtn.classList.add('modal-hide');
        })
    }
}

function convertCurrency(money) {
    var moneys = money.split('');
    var result = moneys.filter(money => {
        return parseInt(money)
    })
    console.log( result)

}