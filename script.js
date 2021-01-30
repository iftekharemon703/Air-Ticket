//Handle Air Ticket 
function handleAirTicket(airTicket, isIncrease) {
    const ticketInput = document.getElementById(airTicket + '-class-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = 0;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    calculateTotal();
}

//Calculation Part
function calculateTotal() {
    const firstClassInput = document.getElementById('first-class-count');
    const firstClassCount = parseInt(firstClassInput.value);

    const ecomyInput = document.getElementById('economy-class-count');
    const economyCount = parseInt(ecomyInput.value);

    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = totalPrice / 10;
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// javascript extra area
const extraSection = document.getElementById("book").addEventListener("click", function() {
    alert("Thanks For Booking!")
})