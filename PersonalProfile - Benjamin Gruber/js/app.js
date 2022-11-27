function updateSliderValue(val) {
    document.getElementById("am").innerHTML = val;
}

function updatePriceValue() {
    let pNumber = parseInt(document.getElementById("product_number").value);
    let pAmount = parseInt((document.getElementById("amount").value));
    let price =  ((pNumber + 7) * pAmount) / 0.25 + 1.1*pAmount;

    if (price > 750) {
        document.getElementById("pay_credit").setAttribute("checked", "true");
        document.getElementById("pay_bar").removeAttribute("checked");
        document.getElementById("pay_bar").setAttribute("disabled", "true");
    } else {
        document.getElementById("pay_bar").removeAttribute("disabled");
        document.getElementById("pay_bar").setAttribute("checked", "false");
    }

    document.getElementById("price").innerHTML = price.toString()+" $";
}

function toggleOrderTo(value) {
    if (value === 0) {
        document.getElementById("body").style.overflow="visible";
        document.getElementById("order").style.zIndex="-999";
        document.getElementById("order-bg").style.zIndex="-999";
    } else {
        document.getElementById("body").style.overflow="hidden";
        document.getElementById("order").style.zIndex="50";
        document.getElementById("order-bg").style.zIndex="40";
    }
}

function checkForInvalidPassword() {
    if (document.getElementById("password").value.length < 6) {
        document.getElementById("invalid").innerHTML="Ung&uuml;ltige Eingabe";
    } else {
        hidePasswordInvalidity();
    }
}

function hidePasswordInvalidity() {
    document.getElementById("invalid").innerHTML="";
}

function togglePasswordText() {
    if (document.getElementById("password").type === "password") {
        document.getElementById("password").type = "text";
        document.getElementById("password").
        setAttribute("placeholder", "123456789")
        document.getElementById("passToggle").value = "Hide";
    } else {
        document.getElementById("password").type = "password";
        document.getElementById("password").
        setAttribute("placeholder", "*********")
        document.getElementById("passToggle").value = "Show";
    }
}