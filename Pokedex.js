function Pokemon(nombre, nickname, tipo){
    this.nombre = nombre;
    this.nickname = nickname;
    this.tipo = tipo;
}

function TipoFuego(nombre, nickname, tipo){
    Pokemon.call(this, nombre, nickname, tipo);
    this.debilidades = ["Agua", "Roca"];
}

function TipoAgua(nombre, nickname, tipo){
    Pokemon.call(this, nombre, nickname, tipo);
    this.debilidades = ["Electrico", "Planta"];
}

function TipoElectrico(nombre, nickname, tipo){
    Pokemon.call(this, nombre, nickname, tipo);
    this.debilidades = ["Roca", "Tierra", "Dragon"];
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype.constructor = TipoAgua;

TipoElectrico.prototype = Object.create(Pokemon.prototype);
TipoElectrico.prototype.constructor = TipoElectrico;

const charizard = new TipoFuego("Charizard", "Player 1", "Fuego");

const gyarados = new TipoAgua("Gyarados", "Player 2", "Agua");

const pikachu = new TipoElectrico("Pikachu", "Player 3", "Electrico");

console.log(charizard);
console.log(gyarados);
console.log(pikachu);