class Banda {
    constructor(nombre, web, anio, genero){
        this.nombre = nombre ? nombre : 'No encontre el nombre';
        this.web = web ? web : 'No encontre la web';
        this.anio = anio ? anio : 'anio no encontrado';
        this.genero =genero ? genero : 'no encontre el genero';
    }
}
module.exports = { Banda };

//Operadores Ternarios

 //const edad = 24; 

//console.log(edad >= 18 );

//const resultado = edad >= 18  ? 'Eres mayor de edad' : 'Eres menor de edad';
//  console.log(resultado);

//if(edad >= 18){
//    console.log('Eres mayor de edad');
//}
//else{
//    console.log('Eres menor de edad');
//}