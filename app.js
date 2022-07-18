let ofertas = [
    {
        nombre: "Plan001",
        capital: 150000,
        plazo: 30,
	    tasa: 0.15
    },
    {
        nombre: "Plan002",
        capital: 300000,
        plazo: 180,
	    tasa: 0.1
    },
    {
        nombre: "Plan003",
        capital: 485000,
	    plazo: 60,
        tasa: 0.23
    }
];

function AgregarInteres(ofertas){
    let ofertasConInteres = [];

    for(let i = 0; i < ofertas.length; i++){
        let actual = ofertas[i];
        let interes = 100;
        ofertasConInteres.push(
            {
                nombre: actual.nombre,
                capital: actual.capital,
                plazo: actual.plazo,
                tasa: actual.tasa,
                interes: interes
            }
        );
    }
    console.log(ofertasConInteres);
}

console.log(AgregarInteres(ofertas));

