class Automobile {
    _marca;
    _modello;
    _anno;
    _chilometraggio = 0;

    constructor(marca, modello, anno, chilometraggio) {
        this._marca = marca;
        this._modello = modello;
        this._anno = anno;
        this._chilometraggio = chilometraggio;
    }

    descrizione() {
        return `L'auto ${this._marca}, modello ${this._modello} entrò in vendita nell'anno ${this._anno}`;
    }

    aggiungiChilometri(km) {
        return this._chilometraggio += km;
    }

    mostraChilometraggio() {
        return this._chilometraggio;
    }
}
