let count = 0;
function select(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('bg-green')) {
        deselectSeat(elementId);
        availableIncrease();
        seatBookDecrease();
        deleteTable(elementId);
        count--;
        setTotalPrice(count);
        setGrandPrice(count);
    }
    else {
        if (count === 4) {

            const anymore = document.getElementById('anymore')
            anymore.removeAttribute('hidden')
        }
        else {
            selectSeat(elementId);
            availableDecrease();
            seatBookIncrease();
            createTable(elementId);
            count++;
            setTotalPrice(count);
            setGrandPrice(count);
            document.getElementById('apply').addEventListener('click', function () {
                const coupon = document.getElementById('coupon');
                const apply = document.getElementById('apply');
                const code = coupon.value;
                coupon.setAttribute('hidden', true);
                apply.setAttribute('hidden', true);
                if(code === 'NEW15'){
                    setGrandPriceWithCoupon(count, code);
                }
                

            })
        }
    }

}
