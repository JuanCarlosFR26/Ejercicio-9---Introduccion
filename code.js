class Persona {
    constructor(edad, nombre, telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Cliente extends Persona {
    constructor(edad, nombre, telefono, credito){
        super(edad, nombre, telefono);
        this.credito = credito;
    }
}

class Trabajador extends Persona {
    constructor(edad, nombre, telefono, salario) {
        super(edad, nombre, telefono);
        this.salario = salario;
    }
}

const cliente = new Cliente(27, 'Juan', 603558902, 25000);

console.log(cliente);