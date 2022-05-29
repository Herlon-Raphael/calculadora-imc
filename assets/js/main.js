const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e){
    e.preventDefault()

    const pesoInput = e.target.querySelector('#peso')
    const alturaInput = e.target.querySelector('#altura')

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso) {
        setResultado('Peso inválido.', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválido.', false)
        return;
    }

    const imc = calcIMC(peso, altura);
    const rangeImc = getRangeImc(imc);

    function calcIMC(peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2);
    }

    function getRangeImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        if (imc > 39.9) {
            return nivel[5]
        }
        if (imc >= 34.9) {
            return nivel[4]
        }
        if (imc >= 29.9) {
            return nivel[3]
        }
        if (imc >= 24.9) {
            return nivel[2]
        }
        if (imc >= 18.5) {
            return nivel[1]
        }
        if (imc < 18.5) {
            return nivel[0]
        }

    }
    const msg = `O seu IMC é ${imc} (${rangeImc})`
    setResultado(msg, true)
});
function createP(){
   const p = document.createElement('p');
   return p;
}
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = createP();
    if (isValid) p.classList.add('paragrafo-resultado')
    p.innerHTML = msg;
    resultado.appendChild(p);
    
}
