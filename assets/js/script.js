class Consultorio {
    constructor(nombre) {
        this.nombre = nombre;
        this.pacientes = [];
    }

    // Método para agregar paciente al consultorio
    agregarPaciente(paciente) {
        this.pacientes.push(paciente);
    }
}

class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this._nombre = nombre;
        this._edad = edad;
        this._rut = rut;
        this._diagnostico = diagnostico;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }

    get rut() {
        return this._rut;
    }
    set rut(rut) {
        this._rut = rut;
    }

    get diagnostico() {
        return this._diagnostico;
    }
    set diagnostico(diagnostico) {
        this._diagnostico = diagnostico;
    }
}

Consultorio.prototype.buscarPacientePorNombre = function (nombre) {
    return this.pacientes.filter(paciente => paciente.nombre === nombre);
};

Consultorio.prototype.mostrarTodosLosPacientes = function () {
    console.log("Todos los pacientes registrados en el consultorio " + this.nombre + ":");
    this.pacientes.forEach(paciente => {
        console.log("- Nombre: " + paciente.nombre + ", Edad: " + paciente.edad + ", Rut: " + paciente.rut + ", Diagnóstico: " + paciente.diagnostico);
    });
};

// Instanciar objetos Consultorio y Paciente
const consultorio = new Consultorio("Consultorio Médico A");

const paciente1 = new Paciente("Miguel", 25, "11111111-9", "Resfriado");
const paciente2 = new Paciente("Javiera", 55, "22222222-1", "Covid");

// Agregar pacientes al consultorio
consultorio.agregarPaciente(paciente1);
consultorio.agregarPaciente(paciente2);

// Buscar paciente por nombre
const pacientesEncontrados = consultorio.buscarPacientePorNombre("Javiera");
console.log("Pacientes encontrados: ", pacientesEncontrados);

// Mostrar todos los pacientes registrados
consultorio.mostrarTodosLosPacientes();
