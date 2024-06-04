class Automobile {
    _marca;
    _modello;
    _anno;

    constructor(marca, modello, anno) {
        this._marca = marca;
        this._modello = modello;
        this._anno = anno;
    }

    descrizione() {
        return `L'auto ${this._marca}, modello ${this._modello} entrò in vendita nell'anno ${this._anno}`;
    }
}