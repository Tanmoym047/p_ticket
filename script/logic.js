let count = 0;
function select(elementId) {
    const element = document.getElementById(elementId);
    console.log(element);
    if (element.classList.contains('bg-green') && !element.classList.contains('purchased')) {
        deselectSeat(elementId);
        availableIncrease();
        seatBookDecrease();
        deleteTable(elementId);
        count--;
        const anymore = document.getElementById('anymore')
        anymore.classList.add("hidden");
        setTotalPrice(count);
        setGrandPrice(count);
    }
    else if(!element.classList.contains('purchased')) {
        if (count === 4) {

            const anymore = document.getElementById('anymore')
            anymore.classList.remove("hidden");
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
                if (code === 'NEW15') {
                    setGrandPriceWithCoupon(count, code);
                }
                else if (code === 'Couple20') {
                    setGrandPriceWithCoupon(count, code);
                }
            })
            document.getElementById('next').addEventListener('click', function () {
                const purchased = document.getElementsByClassName('selected');
                for(const purchase of purchased){
                    purchase.classList.add('purchased');
                }
                
            })
            document.getElementById('continue').addEventListener('click', function () {
                // element.classList.add("purchased");
                seatBookZero();
                createTableZero();
                count = 0;
            })
        }
    }

}
