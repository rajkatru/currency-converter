const conversionRates = {
    "INR-USD": 0.011, "INR-EUR": 0.011, "INR-KWD": 0.0035, "INR-AUD": 0.018,
    "USD-INR": 87.547, "USD-EUR": 0.96, "USD-KWD": 0.31, "USD-AUD": 1.59,
    "EUR-INR": 90.76, "EUR-USD": 1.04, "EUR-KWD": 0.32, "EUR-AUD": 1.65,
    "KWD-INR": 283.55, "KWD-USD": 3.24, "KWD-EUR": 3.12, "KWD-AUD": 5.16,
    "AUD-INR": 54.93, "AUD-USD": 0.63, "AUD-EUR": 0.61, "AUD-KWD": 1.65
};

document.getElementById("btn").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid amount.";
        return;
    }

    const key = `${fromCurrency}-${toCurrency}`;
    if (conversionRates.hasOwnProperty(key)) {
        const convertedAmount = amount * conversionRates[key];
        document.getElementById("result").textContent = 
            `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById("result").textContent = "Conversion rate not available.";
    }
});
