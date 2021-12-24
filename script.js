var elem = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elem);

$.getJSON("test.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

var setup= {id:'graph1', latex:'y=x^2'}
calculator.setExpression(setup);