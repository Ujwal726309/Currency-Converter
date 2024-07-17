



function convert() {
    // yetya apan input gatoya html file maduan
    var inrAmount = document.getElementById("inr").value;

    //conversion kartoya yetya apan
    var conversionRate = 83.54;

    // Calculate USD amount
    var usdAmount = inrAmount * conversionRate; //indian ruppes convert katya usd madya 75 that is

    // Display the result
    document.getElementById("result").innerText = inrAmount + " USD = " + usdAmount + " IND";
}




