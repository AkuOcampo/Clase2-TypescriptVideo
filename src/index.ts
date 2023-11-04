// let mensaje: string = "Hola mundo" //ponerle el tipo de dato

// mensaje = "chanchito feliz"
// console.log(mensaje)

// mensaje = "chao mundo"

//----------------------- Tipo de datos ----------------------------

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true


//------------------------- TIPO ANY ------------------------------
function chanchitoFeliz(config:any){
    return config;
}

//------------------- TIPO ARRAY ---------------------------------

let animales: string[] = ['chanchito','dino','perro']
let nums: number[] = [1,2,3]  //2
let checks: boolean[] = []
let nums2: Array<number> = [] // igual que el dos

// animales.map(x => x.) PARA DEMOSTRAR QUE EL AUTOCOMPLETADO MUESTRA SOLO OPCIONES SEGUN EL TIPO
// nums.map(x=>x.)

//----------------- TIPO TUPLAS ------------------------------------

let tupla: [number, string[]] = [1, ['chanchito', 'feliz']]

//------------------ TIPO ENUMS -----------------------------------------

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

enum Talla {Chica='s', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}

const variable1 = Talla.Grande;
console.log(variable1)

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success