var elem = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elem);

var setup = {};
console.log("IS THIS OPERATIONAL");

function addExpression(value, index, array) {
        calculator.setExpression(value);
    };

$.getJSON("test.json", function(json){
    setup = json;
    console.log(setup);
    setup.graph.forEach(addExpression);
});
