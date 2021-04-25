# Práctica 8: Aplicación de procesamiento de notas de texto. Informe.
## Desarrollo de Sistemas Informáticos 
## Raúl Martín Rigor - alu0101203003@ull.edu.es

### Introducción

En este informe se resumen las actividades realizadas en la **práctica 8** para poner en práctica nuestros conocimientos de TypeScript sobre Node.js para trabajar de manera asíncrona en la creación de ficheros a través de la implementación de distintas funciones en un ejercicios. En esta práctica tambien haremos uso de los principios SOLID en la medida de lo posible.

### Objetivos

Al finalizar la práctica, habremos completado los siguientes objetivos:

* Crear y manipular con soltura ficheros con la API asíncrona de Node.js
* Usar correctamente el paquete yargs para comandos
* Usar correctamente el paquete yargs para cambio de color en texto
* Diseñar una aplicación funcional capaz de usar y compaginar las herramientas anteriores

### 1. Creación y configuración del driectorio del proyecto.

#### 1.1. Estructura inicial

Para la creación de la estructura inicial, seguiremos los mismos pasos que en practicas anteriores ([práctica 4](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101203003/blob/gh-pages/index.md)).

La estructura debería quedar similar a las siguientes fotos:

<img src="img/Captura1a.PNG" alt="" height="250"/> <img src="img/Captura1b.PNG" alt="" /> <img src="img/Captura1c.PNG" alt="" />

#### 1.2. Organización de los ejercicios

Será necesario implementar las clases del ejercicio en ficheros diferentes. Los ficheros que dependan de otros (o de otros paquetes) requeriran de un `import` del recurso que necesiten:

<img src="img/Captura1d.PNG" alt="" widht="250"/> <img src="img/Captura1e.PNG" alt="" />
