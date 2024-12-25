
let item = {
    id: "A101", imgurl: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw61458d43/images/Titan/Catalog/90188AP01_1.jpg?sw=600&sh=600",
    pname: "Fossil Watch", price: 7000.50, qty: 1
};

let htmlCode = ` <tr>
                    <td>${item.id}</td>
                    <td> <img src="${item.imgurl}"></td>
                    <td>${item.pname}</td>
                    <td>&#8377; ${item.price}</td>
                    <td><i class="bi bi-dash-circle-fill" id="minus-btn"></i>
                        <span id="displayqty">${item.qty}</span>
                        <i class="bi bi-plus-circle-fill" id="plus-btn"></i>
                    </td>
                    <td id="total-price">${item.qty * item.price}</td>
                </tr>`;
document.getElementById('table-body').innerHTML = htmlCode;

let btnminu = document.getElementById('minus-btn');
let btnplus = document.getElementById('plus-btn');
let displayqty = document.getElementById('displayqty');
let totalprice = document.getElementById('total-price');

let qty = item.qty;
let pricePerUnit = item.price;
displayqty.textContent = qty;
totalprice.textContent = `\u20B9 ${(pricePerUnit * qty).toFixed(2)}`;

function decqty() {
    if (qty > 1) {
        qty--;
        displayqty.textContent = qty;
        totalprice.textContent = `\u20B9 ${(pricePerUnit * qty).toFixed(2)}`;
    }
    else displayqty.textContent = 1;
}

function incqty() {
    qty++;
    displayqty.textContent = qty;
    totalprice.textContent = `\u20B9 ${(pricePerUnit * qty).toFixed(2)}`;
}

btnminu.addEventListener('click', decqty);
btnplus.addEventListener('click', incqty);