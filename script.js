// script.js

document.getElementById('calculate-btn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const peopleCount = parseInt(document.getElementById('people-count').value);

    if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount <= 0 || billAmount <= 0) {
        alert('Please enter valid numbers.');
        return;
    }

    const amountPerPerson = billAmount / peopleCount;

    document.getElementById('result-amount').textContent = `₹${amountPerPerson.toFixed(2)}`;
});
