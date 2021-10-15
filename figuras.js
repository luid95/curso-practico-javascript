//Codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;

console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm.');

const perimetroCuadrado = ladoCuadrado * 4;

console.log('El Perimetro del cuadrado es: '+ perimetroCuadrado+ 'cm.');

const areaCuadrado = ladoCuadrado ** 2;

console.log('El Area del cuadrado es: '+ areaCuadrado+ 'cm^2 .');

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    'Los lados del triangulo miden: ' 
    + ladoTriangulo1 + 'cm, '
    + ladoTriangulo2 + 'cm,'
    + baseTriangulo + 'cm.'
);

const alturaTriangulo = 5.5;
console.log("La altura del tringulo mide: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log('El Perimetro del triangulo es: '+ perimetroTriangulo+ 'cm.');

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;

console.log('El Area del triangulo es: '+ areaTriangulo+ 'cm^2 .');

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo *2;
const pi = Math.PI;

console.log(
    'Los lados del circulo son: radio ->' 
    + radioCirculo + 'cm, diametro ->'
    + diametroCirculo + 'cm.'
);

console.log('El valor de PI es: ' + pi);
//Perimetro / Circunferencia

const perimetroCirculo = pi * diametroCirculo;

console.log('El Perimetro del circulo es: '+ perimetroCirculo+ 'cm.');

//Area
const areaCirculo = pi * (radioCirculo ** 2 );

console.log('El Area del triangulo es: '+ areaCirculo+ 'cm^2 .');

console.groupEnd();