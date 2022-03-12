class Materia {
    constructor(materia, profesor, maxAlumnos) {
        this.materia = materia;
        this.profesor = profesor;
        this.maxAlumnos = maxAlumnos;
        this.listaAlumnos = [];
    }

    agregarAlumno(alumnoNuevo) {
        if (this.getMaxAlumnos > this.listaAlumnos.length) {
            this.listaAlumnos.push(alumnoNuevo);
            return `El alumno ${alumnoNuevo} fue agregado con exito a ${this.materia}`;
        } else {
            return `El curso ${this.materia} se encuentra lleno`;
        }
    }

    removerAlumno(alumno) {
        let index = this.listaAlumnos.indexOf(alumno)
        if (index == -1) {
            return `El alumno a eliminar no esta matriculado en esta materia`;
        }
        this.listaAlumnos = this.listaAlumnos.filter(x => x != alumno);
        return `El alumno ${alumno} fue elmininado con exito`;
    }

    infoCurso() {
        let listado;
        listado = `El profesor de ${this.materia} es: ${this.profesor}<br>`;
        this.listaAlumnos.forEach(alumno => {
            let i = 0;
            listado += `${i+1}. ${alumno.getNombre}<br>`;
        });
        return listado;
    }

    get getProfesor() {
        return this.profesor;
    }

    get getMateria() {
        return this.materia;
    }

    get listadoAlumnos() {
        return this.listaAlumnos;
    }

    get getMaxAlumnos() {
        return this.maxAlumnos;
    }

    set setMaxAlumnos(nuevaCantidad) {
        this.maxAlumnos = nuevaCantidad;
    }

    set setProfesor(nuevoProfesor) {
        this.profesor = nuevoProfesor;
    }
}

class Alumno {
    constructor(nombre, carrera) {
        this.nombre = nombre;
        this.carrera = carrera;
    }

    get getNombre() {
        return this.nombre;
    }

    get getCarrera() {
        return this.carrera;
    }
}

class Carrera {
    constructor(decano) {
        this.decano = decano;
        this.materias = [];
    }

    agregarMateria(materia) {
        this.materias.push(materia);
    }

    removerMateria(materia) {
        let index = this.materias.indexOf(materia)
        if (index == -1) {
            return `La materia a eliminar no Existe`;
        }
        this.materias = this.materias.splice(index, index);
    }

    buscarInfoMateria(materia) {
        for (let mat of this.materias) {
            if (mat.getMateria == materia) {
                return mat.infoCurso();
            }
        }
    }
}

export const metodo = x => {
    console.log(x);
}

let ingSistemas = new Carrera("jairo");
let jose = new Alumno("jose", ingSistemas);
let juan = new Alumno("juan", ingSistemas);
let pedro = new Alumno("pedro", ingSistemas);
let luis = new Alumno("luis", ingSistemas);
let maria = new Alumno("maria", ingSistemas);

let analisis = new Materia("ADCA", "Marco", 2);
let SO = new Materia("sistemas Operativos", "Gallardo", 4);

ingSistemas.agregarMateria(analisis);
ingSistemas.agregarMateria(SO);


console.log(analisis.agregarAlumno(jose));
console.log(analisis.agregarAlumno(juan));
console.log(analisis.agregarAlumno(pedro));
console.log(analisis.agregarAlumno(luis));
console.log(analisis.agregarAlumno(maria));

console.log(analisis.removerAlumno(jose));

console.log(ingSistemas.buscarInfoMateria("ADCA"));


//Esto es funcional
const whatsApp = () => {
    const a = document.querySelector(".a");
    const bodyText = document.querySelector(".form__input-text");

    let url = "https://api.whatsapp.com/send?";
    let phoneNumber = "phone=573015230826";
    let texto = "" + bodyText.value;
    texto = texto.trim().replace(" ", "%");
    let messageText = "&text=" + texto;


    url += phoneNumber + messageText;

    a.setAttribute("href", "" + url);


}