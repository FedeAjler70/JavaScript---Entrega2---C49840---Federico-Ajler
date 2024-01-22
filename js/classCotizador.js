class Cotizador {
    constructor(seguro, unidadFija, añoBien) {
        this.seguro = seguro
        this.unidadFija = unidadFija
        this.añoBien = añoBien 
    }
    
    obtenerCotizacion() {
        return this.seguro.factor * this.unidadFija * this.añoBien
    }
}