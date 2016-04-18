var unit = new Array("Temperature", "Data", "Length", "Time", "Area", "Energy", "Fuel", "Power", "Speed", "Volume", "Weight");
var dropdown1 = document.getElementById("unit");
for (var i = 0; i < unit.length; i++) {
    dropdown1[dropdown1.length] = new Option(unit[i], unit[i]);
}

function showunit() {

    var mydata = JSON.parse(data);
    var hue = document.getElementById("unit").value;
    var dropdown2 = document.getElementById("unitinit");
    var dropdown3 = document.getElementById("unitfinal");
    var selectobject = document.getElementById("unitinit");
    var element = document.getElementById("unitinit");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    var element = document.getElementById("unitfinal");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    var option = document.createElement("option");
    var option2 = document.createElement("option");
    option.setAttribute("value", "");
    option.setAttribute("disabled", "");
    option.setAttribute("selected", "");
    option2.setAttribute("value", "");
    option2.setAttribute("disabled", "");
    option2.setAttribute("selected", "");
    option.innerHTML = "Choose your option";
    option2.innerHTML = "Choose your option";
    document.getElementById("unitinit").appendChild(option);
    document.getElementById("unitfinal").appendChild(option2);

    for (var i = 0; i < mydata.length; i++) {
        if (mydata[i].category == hue) {
            var option = document.createElement("option");
            var option2 = document.createElement("option");
            option.setAttribute("value", mydata[i].unit);
            option2.setAttribute("value", mydata[i].unit);
            option.innerHTML = mydata[i].unit;
            option2.innerHTML = mydata[i].unit;
            document.getElementById("unitinit").appendChild(option);
            document.getElementById("unitfinal").appendChild(option2);
        }
    }
    $('select').material_select('destroy');
    $('select').material_select();
}

function units() {
    try {
        var mydata = JSON.parse(data);
        var amount = document.getElementById("unitAmount").value;
        var category = document.getElementById("unit").value;
        var initUnit = document.getElementById("unitinit").value;
        var finalUnit = document.getElementById("unitfinal").value;
        if (category == "Temperature") {
            if (initUnit == "Kelvin") {
                var to_Celsius = amount - 273.15;
            } else if (initUnit == "Fahrenheit") {
                var to_Celsius = (amount - 32) * 5 / 9;
            } else if (initUnit == "Celsius") {
                var to_Celsius = amount;
            }
            if (finalUnit == "Fahrenheit") {
                var post_result = (to_Celsius * 9 / 5) + 32;
            } else if (finalUnit == "Celsius") {
                var post_result = to_Celsius;
            } else if (finalUnit == "Kelvin") {
                var post_result = to_Celsius + 273.15;
            }
            if (post_result != null) {
                document.getElementById("output").innerHTML = amount + " " + initUnit;
                document.getElementById("output2").innerHTML = " equals";
                document.getElementById("output1").innerHTML = post_result + " " + finalUnit; 
            } else {
                Materialize.toast('Oops! Please try again.', 4000);
            }
        } else {
            for (var i = 0; i < mydata.length; i++) {
                if (mydata[i].category == category) {
                    if (mydata[i].unit == initUnit) {
                        var operatorBase = mydata[i].operatorBase;
                        var formulabase = mydata[i].formula;
                    }
                    if (mydata[i].unit == finalUnit) {
                        var operatorConvert = mydata[i].operatorConvert;
                        var formulaconvert = mydata[i].formula;
                    }
                }
            }
            output = eval((amount + operatorBase + formulabase) + operatorConvert + formulaconvert);
            document.getElementById("output").innerHTML = amount + " " + initUnit;
            document.getElementById("output2").innerHTML = " equals";
            document.getElementById("output1").innerHTML = output + " " + finalUnit;   
        }
    } catch (err) {
        Materialize.toast('Oops! Please try again.', 4000);
    }

}

function convert() {
    
    $.getJSON('https://api.fixer.io/latest',
        function(data) {
            fx.rates = data.rates;
            run();
        }
    );

    var run = function() {
        var amount = document.getElementById("amount").value;
        var ori = document.getElementById("ori").value;
        var final = document.getElementById("final").value;

        if (amount === "" || ori === "" || final === ""){
            Materialize.toast('Oops! Please try again.', 4000);
        }
        else{
            var rate = fx(1).from(ori).to(final);
            output = (amount * rate).toFixed(3);
            document.getElementById("outputInit").innerHTML = amount + " " + ori;
            document.getElementById("outputInit2").innerHTML = " equals";
            document.getElementById("outputFinal").innerHTML = output + " " + final;            
        }

    }
}

var currencyCode = new Array("AUD", "BGN", "BRL", "CAD", "CNY", "HRK", "CZK", "DKK", "EUR", "HKD", "HUF", "INR", "IDR", "ILS", "JPY", "MYR", "MXN", "NZD", "NOK", "PHP", "PLN", "RON", "RUB", "SGD", "SEK", "CHF", "ZAR", "KRW", "THB", "TRY", "GBP", "USD");
var currencyName = new Array("Australia Dollar",
    "Bulgaria Lev", "Brazil Real", "Canada Dollar", "China Yuan Renminbi", "Croatia Kuna", "Czech Republic Koruna", "Denmark Krone", "Euro", "Hong Kong Dollar", "Hungary Forint", "India Rupee", "Indonesia Rupiah", "Israel Shekel", "Japan Yen", "Malaysia Ringgit", "Mexico Peso", "New Zealand Dollar", "Norway Krone", "Philippines Peso", "Poland Zloty", "Romania New Leu", "Russia Ruble", "Singapore Dollar", "Sweden Krona", "Switzerland Franc", "South Africa Rand", "South Korea Won", "Thailand Baht", "Turkey Lira", "United Kingdom Pound", "United States Dollar"
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