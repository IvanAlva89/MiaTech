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

    #calcolaEta() {
        const annoAttuale = new Date().getFullYear();
        return annoAttuale - this._anno;
    }

    mostraEta() {
        return `L'eta dell'automobile è ${this.#calcolaEta()}`;
    }

    _controllaChilometri() {
        const limiteChilometraggio = 100000;

        if( this._chilometraggio > limiteChilometraggio ) {
            return `ATTENZIONE!: Hai superato i ${limiteChilometraggio} km`;
        } else {
            return this.mostraChilometraggio();
        }
    }

    static confrontaChilometraggio(auto1, auto2) {
        if(auto1.mostraChilometraggio() > auto2.mostraChilometraggio()) {
            return `${auto1.descrizione()} ha un chilometraggio maggiore rispetto a ${auto2.descrizione()}`;
        } else if (auto1.mostraChilometraggio() < auto2.mostraChilometraggio()) {
            return `${auto2.descrizione()} ha un chilometraggio maggiore rispetto a ${auto1.descrizione()}`;
        } else {
            return `${auto1.descrizione()} ha lo stesso chilometraggio di ${auto2.descrizione()}`
        }
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

// const fiat = new Automobile("Fiat", "Panda", 2030, 100);
// console.log(fiat.descrizione());
// console.log(fiat.aggiungiChilometri(5000000));
// console.log(fiat.saluta());
// console.log(fiat.mostraEta());
// console.log(fiat._controllaChilometri());

// const citroen = new Automobile("citroen", "Boh", 2020, 100);
// console.log(citroen.descrizione());
// console.log(citroen.aggiungiChilometri(5000000));
// console.log(citroen.saluta());
// console.log(citroen.mostraEta());
// console.log(citroen._controllaChilometri());

// console.log(Automobile.confrontaChilometraggio(fiat, citroen));

// const toyota = new Elettrica("Toyota", "Electric", 2040, 10, 500);
// console.log(toyota.descrizione());
// console.log(toyota.ricarica(1000));
// console.log(toyota.saluta());
// console.log(toyota.aggiungiChilometri(100000));
// console.log(toyota._controllaChilometri());


