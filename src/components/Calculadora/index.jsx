import { useState } from "react";

const Calculadora = () => {
    const [Peso, setPeso] = useState(0);
    const [Altura, setAltura] = useState(0);

    function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if ((imc > 0) && (imc != Infinity)){
        return imc.toFixed(2);
    }
    }

    let resultadoIMC = calcularIMC(Peso, Altura);

    return (
        <form>
            <input type="number" placeholder="Peso" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="Altura - Ex: 1.70" onChange={evento => setAltura(parseFloat(evento.target.value))}/>

            {resultadoIMC && (
            <h2>Seu IMC é: {resultadoIMC}</h2>
            )}
        
        </form>
    )
}

export default Calculadora;