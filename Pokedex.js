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
    this.debilidades = ["Eléctrico", "Planta"];
}

function TipoElectrico(nombre, nickname, tipo){
    Pokemon.call(this, nombre, nickname, tipo);
    this.debilidades = ["Roca", "Tierra", "Dragón"];
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype.constructor = TipoAgua;

TipoElectrico.prototype = Object.create(Pokemon.prototype);
TipoElectrico.prototype.constructor = TipoElectrico;

//Tipo Fuego.
const charizard = new TipoFuego("Charizard", "Player 1", "Fuego");
charizard.ataques = ["Lanzallamas", "Llamarada", "Anillo Ignéo"];

const moltres = new TipoFuego("Moltres", "Player 2", "Fuego");
moltres.ataques = ["Nitrocarga", "Lanzallamas", "Tajo Aéreo"];

//Tipo Agua.
const gyarados = new TipoAgua("Gyarados", "Player 3", "Agua");
gyarados.ataques = ["Hidrobomba", "Mordisco", "Burbuja"];

const blastoise = new TipoAgua("Blastoise", "Player 4", "Agua");
blastoise.ataques = ["Placaje", "Hidrocañón", "Cascada"];

//Tipo Eléctrico.
const pikachu = new TipoElectrico("Pikachu", "Player 5", "Eléctrico");
pikachu.ataques = ["Voltio Cruel", "Impactrueno", "Voltiocambio"];

const jolteon = new TipoElectrico("Jolteon", "Player 6", "Eléctrico");
jolteon.ataques = ["Placaje", "Chispazo", "Voltiocambio"];

console.log(charizard);
console.log(moltres);

console.log(gyarados);
console.log(blastoise);

console.log(pikachu);
console.log(jolteon);