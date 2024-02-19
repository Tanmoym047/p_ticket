let array = [];
function selectSeat(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green', 'text-white', 'selected');
}
function deselectSeat(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green', 'text-white', 'selected');
}
function availableIncrease() {
    const element = document.getElementById('available');
    element.innerText = (parseInt(element.innerText) + 1);
}

function availableDecrease() {
    const element = document.getElementById('available');
    element.innerText = (parseInt(element.innerText) - 1);
}
function seatBookZero() {
    const element = document.getElementById('seat-book');
    element.innerText = 0;
}
function seatBookIncrease() {
    const element = document.getElementById('seat-book');
    element.innerText = (parseInt(element.innerText) + 1);
}
function seatBookDecrease() {
    const element = document.getElementById('seat-book');
    element.innerText = (parseInt(element.innerText) - 1);
}
function createTableZero() {
    
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ``;
    array = [];
}
function createTable(elementId) {
    const row = document.createElement('tr');
    const data1 = document.createElement('td');
    const data2 = document.createElement('td');
    const data3 = document.createElement('td');
    data1.innerText = elementId;
    data2.innerText = "Economy";
    data3.innerText = "550";
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    console.log(row);
    row.classList.add(elementId);
    const tableBody = document.getElementById('table-body')
    tableBody.appendChild(row);

    array.push(elementId);
}
function deleteTable(elementId) {
    const tableBody = document.querySelectorAll('tbody');
    const tableArray = tableBody[0].children;
    console.log(tableArray);
    const index = array.indexOf(elementId);
    array.splice(index, 1);
    tableArray[index].remove();
}

function setTotalPrice(x) {
    const element = document.getElementById('total-price');
    element.innerText = x * 550;
}
function setGrandPrice(x) {
    const element = document.getElementById('grand-total');
    console.log(element.innerText);
    element.innerText = x * 550;
}
function setGrandPriceWithCoupon(x, code) {
    const element = document.getElementById('grand-total');
    let y;
    let discount;
    // coupon codes are NEW15 and Couple 20
    if (code === 'NEW15') {
        discount = ((x * 550 * 15) / 100)
        y = (x * 550) - discount;
        element.innerText = y;
    }
    else if (code === 'Couple 20') {
        discount = ((x * 550 * 20) / 100);
        y = (x * 550) - discount;
        element.innerText = y;
    }
    document.getElementById('discount').innerText = discount;
    document.getElementById('discounted').classList.remove('hidden');
    
}
