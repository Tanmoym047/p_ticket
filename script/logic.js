let number = "";
document.getElementById('number').addEventListener('keyup', function (event) {
    console.log(event.target.value);
    number = event.target.value;
    if (number !== "" && count > 0) {
        document.getElementById('next').removeAttribute('disabled');
    }
})


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
        if (count < 4) {
            document.getElementById('apply').setAttribute('disabled', true);
        }
        const anymore = document.getElementById('anymore')
        anymore.classList.add("hidden");
        setTotalPrice(count);
        setGrandPrice(count);
    }
    else if (!element.classList.contains('purchased')) {
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


            console.log(number.value);
            if (count >= 1 && number !== "") {
                document.getElementById('next').removeAttribute('disabled');
            }
            if (count === 4) {
                document.getElementById('apply').removeAttribute('disabled');
            }
            setTotalPrice(count);
            setGrandPrice(count);


            document.getElementById('apply').addEventListener('click', function () {
                const coupon = document.getElementById('coupon');
                const apply = document.getElementById('apply');
                const code = coupon.value;
                coupon.classList.add('hidden');
                apply.classList.add('hidden');
                if (code === 'NEW15') {
                    setGrandPriceWithCoupon(count, code);
                }
                else if (code === 'Couple 20') {
                    setGrandPriceWithCoupon(count, code);
                }
            })
            document.getElementById('next').addEventListener('click', function () {
                const purchased = document.getElementsByClassName('selected');
                for (const purchase of purchased) {
                    purchase.classList.add('purchased');
                }

            })
            document.getElementById('continue').addEventListener('click', function () {
                // element.classList.add("purchased");
                seatBookZero();
                createTableZero();
                count = 0;
                const anymore = document.getElementById('anymore')
                anymore.classList.add("hidden");
                document.getElementById('number').value = "";
                document.getElementById('next').setAttribute('disabled', true);
                number = "";
                document.getElementById('discounted').classList.add('hidden');
                document.getElementById('coupon').value = "";
                document.getElementById('coupon').classList.remove('hidden');
                document.getElementById('apply').classList.remove('hidden');
                setTotalPrice(count);
                setGrandPrice(count);
            })
        }
    }

}
