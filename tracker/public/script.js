const expenseForm = document.querySelector('.expense-form');
let text = document.getElementById('description');
let amount = document.getElementById('amount');

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        text: description.value,
        amount: amount.value,
    };
    fetch('/api/v1/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    console.log(JSON.stringify(formData))
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Expense added successfully');
            } else {
                alert('Error adding the expense');
            }
        })
        .catch((error) => {
            alert('Error adding balance');
        });
});
