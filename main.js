const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');


const claculate = (e) => {
    e.preventDefault();
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://prime.exchangerate-api.com/v5/526bf535b2f242f3fc092b9d/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
};

// Event Listeners
currencyEl_one.addEventListener('change', claculate);
amountEl_one.addEventListener('input', claculate);
currencyEl_two.addEventListener('change', claculate);
amountEl_two.addEventListener('input', claculate);

// claculate();

