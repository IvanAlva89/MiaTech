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

class Elettrica extends Automobile {
    _autonomia = 0;

    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio,)
        this._autonomia = autonomia;
    }

    descrizione() {
        return `L'auto ${this._marca}, modello ${this._modello} entrò in vendita nell'anno ${this._anno} con un'autonomia di ${this._autonomia}km`;
    }

    ricarica(km) {
        return this._autonomia += km;
    }
}

Automobile.prototype.saluta = function() {
    return `Ciao, sono un'auto ${this._marca}, modello ${this._modello}`
}

const fiat = new Automobile("Fiat", "Panda", 2030, 0);
console.log(fiat.descrizione());
console.log(fiat.aggiungiChilometri(50));
console.log(fiat.saluta());

const toyota = new Elettrica("Toyota", "Electric", 2040, 10, 500);
console.log(toyota.descrizione());
console.log(toyota.ricarica(100));
console.log(toyota.saluta());


