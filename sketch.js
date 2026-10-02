/* eslint-disable no-undef, no-unused-vars */

// constante para la URL del modelo 3D
const URL_MARIO = "3D/modelo.obj";
const URL_PLATO = "3D/scene.obj";

// Variable donde se almacena el modelo 3D
let mario3D;
let plato3D;
// variable textura
let texMario;
let texPlato;

// Función de precarga
function preload() {
  // Carga el modelo de Mario
  mario3D = loadModel(URL_MARIO, true);

  // Textura de Mario
  texMario = loadImage("3D/ASM - Tutorial 8 - Texture.png");

  // Modelo del plato
  plato3D = loadModel(URL_PLATO, true);

  // Textura del plato
  texPlato = loadImage("3D/Top_Image.003_baseColor.jpeg");
}

// Función de configuración
async function setup() {
  // Cree aun canvas con soporte para 3D de 500px x 500px
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Determina que se van a utiliza los grados como unidad de medición
  angleMode(DEGREES);
}

// Función de pintado
function draw() {
  noStroke();

  // Establece el color de fondo
  background(200);

  ambientLight(150);
  directionalLight(255, 255, 255, 0, 0, -1);

  // Rota la figura en el eje Y
  rotateY(frameCount);

  // Escala el modelo 3D
  scale(1.5);

  // Rota el modelo 180 grados
  rotateX(180);

  // Mario
  push();

  translate(-100, 0, 0);

  texture(texMario);

  model(mario3D);

  pop();

  // Plato
  push();

  translate(100, 0, 0);

  texture(texPlato);

  model(plato3D);

  pop();
}

// SE LLAMA SI EL TAMAÑO DE LA VENTANA DEL NAVEGADOR WEB CAMBIA
windowResized = function () {
  // Redimenciona el tamaño del lienzo al tamaño de la ventana del navegador Web
  resizeCanvas(windowWidth, windowHeight);
};