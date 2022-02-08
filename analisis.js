//Helpers - utils
function esPar(numerito) {
    return (numerito % 2 === 0);
}



const salariosPty = panama.map(
    function (personita) {
        return personita.salary;
    }
);


const salariosPtySorted = salariosPty.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);



function calcularPromedio(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;
    /*  const promP = document.getElementById("promP");
      promP.innerText = "La mediana es de $" + promedioLista2;*/
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularPromedio([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


const medianaGeneralPTY = medianaSalarios(salariosPtySorted);

//Mediana del top 10%
//Formula porcentaje (P * (100-15))/100
const spliceStart = (salariosPtySorted.length * 90) / 100;
const spliceCount = (salariosPtySorted.length - spliceStart);
const salariosPtyTop10 = salariosPtySorted.splice(spliceStart, spliceCount);

const medianaPtyTop10 = medianaSalarios(salariosPtyTop10);


console.log({
    medianaGeneralPTY,
    medianaPtyTop10,


});