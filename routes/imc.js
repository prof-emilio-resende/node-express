const { json } = require('express');
var express = require('express');
var router = express.Router();

function calculateImc(height, weight) {
    return Number((weight / (height ** 2)).toFixed(2));
}

function translateImc(imc) {
    if (imc < 18.5) return 'magreza';
    if (imc < 24.9) return 'normal';
    if (imc < 30.0) return 'sobrepeso';
    else return 'obesidade';
}

/* POST imc calculation. */
router.post('/calculate', function(req, res, next) {
    const { height, weight } = req.body;
    const imc = calculateImc(height, weight);
    const imcDescription = translateImc(imc);

    res.json({ height, weight, imc, imcDescription });
});

module.exports = router;