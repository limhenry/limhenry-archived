        function convert() {
            $.getJSON('https://api.fixer.io/latest',
                function(data) {
                    fx.rates = data.rates;
                    demo();
                }
            );
            var demo = function() {
                var amount = document.getElementById("amount").value;
                var ori = document.getElementById("ori").value;
                var final = document.getElementById("final").value;
                var rate = fx(1).from(ori).to(final);
                var round = Math.round(rate * 100) / 100;
                output = amount * round;
                document.getElementById("outputInit").innerHTML = amount + " " + ori + " equals";
                document.getElementById("outputFinal").innerHTML = output + " " + final;
            }
        }

var currencyCode = new Array("AUD","BGN","BRL","CAD","CNY","HRK","CZK","DKK","EUR","HKD","HUF","INR","IDR","ILS","JPY","MYR","MXN","NZD","NOK","PHP","PLN","RON","RUB","SGD","SEK","CHF","ZAR","KRW","THB","TRY","GBP","USD"
);
var currencyName = new Array("Australia Dollar", 
"Bulgaria Lev", "Brazil Real", "Canada Dollar", "China Yuan Renminbi", "Croatia Kuna", "Czech Republic Koruna", "Denmark Krone", "Euro", "Hong Kong Dollar", "Hungary Forint", "India Rupee", "Indonesia Rupiah", "Israel Shekel", "Japan Yen", "Malaysia Ringgit","Mexico Peso", "New Zealand Dollar", "Norway Krone", "Philippines Peso", "Poland Zloty", "Romania New Leu", "Russia Ruble", "Singapore Dollar", "Sweden Krona", "Switzerland Franc", "South Africa Rand", "South Korea Won", "Thailand Baht", "Turkey Lira", "United Kingdom Pound", "United States Dollar"
);


// Get dropdown element from DOM
var dropdown = document.getElementById("ori");
var dropdown2 = document.getElementById("final");

// Loop through the array
for (var i = 0; i < currencyCode.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(currencyName[i], currencyCode[i]);
    dropdown2[dropdown2.length] = new Option(currencyName[i], currencyCode[i]);
}