// JavaScript to handle donation form submission
document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const donationAmount = document.getElementById('donation-amount').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (donationAmount && name && email) {
        // You can integrate your payment gateway or display a thank-you message here
        alert(`Thank you, ${name}! Your donation of ₹${donationAmount} is greatly appreciated.`);
        
        // Clear form fields
        document.getElementById('donation-form').reset();
    } else {
        alert('Please fill in all required fields.');
    }
});
