// function for cost
function memoryButton(costType, pera) {
    document.getElementById(costType).innerText = pera;

}

// function for subTotal
function subTotal(bestPrice, memoryCost, storageCost, shippingCost) {
    const subTotalAmount = bestPrice + memoryCost + storageCost + shippingCost;
    return subTotalAmount;
}

// function for integer convertion
function strToInt(str) {

    const num = parseInt(str);
    return num;
}



// memory cost
document.getElementById("memoryEight").addEventListener("click", function () {
    memoryButton("memoryCost", 0);
});
document.getElementById("memorySixteen").addEventListener("click", function () {
    memoryButton("memoryCost", 180);
});

// storage cost
document.getElementById("storage256GB").addEventListener("click", function () {
    memoryButton("storageCost", 0);
});
document.getElementById("storage512GB").addEventListener("click", function () {
    memoryButton("storageCost", 100);
});
document.getElementById("storage1TB").addEventListener("click", function () {
    memoryButton("storageCost", 180);
});

// Shipping cost
document.getElementById("shippingFree").addEventListener("click", function () {
    memoryButton("shippingCost", 0);
});
document.getElementById("shipping20").addEventListener("click", function () {
    memoryButton("shippingCost", 20);
});

// subtotal pricing

const elements = document.getElementsByClassName("pricing");

for (let element of elements) {
    element.addEventListener('click', function () {
        const bestPrice = strToInt(document.getElementById("bestPrice").innerText);
        const memoryCost = strToInt(document.getElementById("memoryCost").innerText);
        const storageCost = strToInt(document.getElementById("storageCost").innerText);
        const shippingCost = strToInt(document.getElementById("shippingCost").innerText);


        const subAmount = subTotal(bestPrice, memoryCost, storageCost, shippingCost);
        document.getElementById("subTotal").innerText = subAmount;
        document.getElementById("finalTotal").innerText = subAmount;
    });
}

// promo code apply
document.getElementById("promobtn").addEventListener("click", function () {
    const promoText = document.getElementById("promoInput").value;

    if (promoText == "stevekaku") {
        const totalAmount = strToInt(document.getElementById("finalTotal").innerText);

        const discountAmount = (totalAmount / 100) * 20;
        const finalAmount = totalAmount - discountAmount;
        document.getElementById("finalTotal").innerText = finalAmount;
        document.getElementById("promoInput").value = "";
        document.getElementById("promobtn").disabled = true;
    }
});

