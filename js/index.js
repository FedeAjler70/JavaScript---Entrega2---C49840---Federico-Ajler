const unidadFija = 230.81      //Si varía el tipo de seguro, variará el importe del seguro
let tipoSeguro = {}         //objeto vacío. Se llena con el tipo de bien seleccionado
let añoBien = 0                    //se cotizan seguros para bienes de entre 1 y 10 años 

const seguros = [{ codigo: 1, tipo: 'Casa', factor: 1.12 },
                { codigo: 2, tipo: 'Auto', factor: 1.44 },
                { codigo: 3, tipo: 'Moto', factor: 1.75 },
                { codigo: 4, tipo: 'Barco', factor: 1.90 }]

function cotizadorSeguros() {
    let codigo = prompt("Ingresa el código del seguro a cotizar:")
    tipoSeguro = seguros.find((seguro)=> seguro.codigo === parseInt(codigo))

    if (tipoSeguro === undefined) {
        alert("⛔️ No se reconoce el código ingresado.")
        return 
    }

    añoBien = prompt("Ingresa la antigüedad en años del bien a cotizar:")
    añoBien = parseInt(añoBien)       // mínimo 1 año máximo 20 años

    if (añoBien < 1 || añoBien > 20) {
        alert("⛔️ Solo cotizamos bienes no mayores a 20 años")
        return 
    }

    const cotizadorSeguro = new Cotizador(tipoSeguro, unidadFija, añoBien)
    let valorMensual = cotizadorSeguro.obtenerCotizacion()

    console.log("✅ El Valor de la cuota mensual es de: $", valorMensual.toLocaleString("es-AR"))
}