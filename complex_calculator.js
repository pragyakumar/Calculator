function add() {
    const real1 = parseFloat(document.getElementById('real1').value);
    const imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    const real2 = parseFloat(document.getElementById('real2').value);
    const imaginary2 = parseFloat(document.getElementById('imaginary2').value);

    const realResult = real1 + real2;
    const imaginaryResult = imaginary1 + imaginary2;

    document.getElementById('result').innerText = `Result: ${realResult} + ${imaginaryResult}i`;
}

function subtract() {
    const real1 = parseFloat(document.getElementById('real1').value);
    const imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    const real2 = parseFloat(document.getElementById('real2').value);
    const imaginary2 = parseFloat(document.getElementById('imaginary2').value);

    const realResult = real1 - real2;
    const imaginaryResult = imaginary1 - imaginary2;

    document.getElementById('result').innerText = `Result: ${realResult} + ${imaginaryResult}i`;
}

function multiply() {
    const real1 = parseFloat(document.getElementById('real1').value);
    const imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    const real2 = parseFloat(document.getElementById('real2').value);
    const imaginary2 = parseFloat(document.getElementById('imaginary2').value);

    const realResult = real1 * real2 - imaginary1 * imaginary2;
    const imaginaryResult = real1 * imaginary2 + imaginary1 * real2;

    document.getElementById('result').innerText = `Result: ${realResult} + ${imaginaryResult}i`;
}

function divide() {
    const real1 = parseFloat(document.getElementById('real1').value);
    const imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    const real2 = parseFloat(document.getElementById('real2').value);
    const imaginary2 = parseFloat(document.getElementById('imaginary2').value);

    const denominator = real2 * real2 + imaginary2 * imaginary2;
    const realResult = (real1 * real2 + imaginary1 * imaginary2) / denominator;
    const imaginaryResult = (imaginary1 * real2 - real1 * imaginary2) / denominator;

    document.getElementById('result').innerText = `Result: ${realResult} + ${imaginaryResult}i`;
}

function toRectangular() {
    const magnitude = Math.sqrt(parseFloat(document.getElementById('real1').value) ** 2 + parseFloat(document.getElementById('imaginary1').value) ** 2);
    const angle = Math.atan2(parseFloat(document.getElementById('imaginary1').value), parseFloat(document.getElementById('real1').value));

    document.getElementById('result').innerText = `Rectangular Form: ${magnitude} * e^(i${angle})`;
}

function toPolar() {
    const real1 = parseFloat(document.getElementById('real1').value);
    const imaginary1 = parseFloat(document.getElementById('imaginary1').value);

    const magnitude = Math.sqrt(real1 ** 2 + imaginary1 ** 2);
    const angle = Math.atan2(imaginary1, real1);

    document.getElementById('result').innerText = `Polar Form: ${magnitude} * (cos(${angle}) + i sin(${angle}))`;
}

function conjugate() {
    const real1 = parseFloat(document.getElementById('real1').value);
    const imaginary1 = parseFloat(document.getElementById('imaginary1').value);

    document.getElementById('result').innerText = `Conjugate: ${real1} - ${imaginary1}i`;
}