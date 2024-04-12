function showPopup(productName, price) {
    alert("You clicked on " + productName + ". Price: " + price);
}
// Get the Buy button element
var buyButton = document.getElementById("buyButton");

// Add click event listener to the Buy button
buyButton.addEventListener("click", function() {
    // Display an alert when the Buy button is clicked
    alert("Are you sure you want to buy?");
});
